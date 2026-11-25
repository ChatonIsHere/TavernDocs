---
title: AgentUpdater
description: The scheduler that ticks every creature, how it picks who gets to think, and what it costs.
sidebar_position: 3
---

# AgentUpdater

`Alta.Intelligence.AgentUpdater` in `Root.Township`. A scene `MonoBehaviour`. Ticks only on the server.

It keeps every live agent in a linked list and runs them all from one update module. You reach it through `AgentUpdater.Instance`.

## How a tick works

It registers one method on the update module **"AI Agent Updater"** (`UpdateSegment.FixedUpdate`, included in server profiling) when the server starts. Each physics tick it:

1. Copies each player's head position into `Player.Position` (null if they have no controller).
2. Raises each agent's priority. Every agent gains at least `minPriorityIncrement` (1), plus up to `maxPriorityIncrement` (100) the nearer the closest player it's spawned for is. Past `furthestDistanceSquared` (10,000, so 100 m) it only gets the minimum.
3. Sorts the list so the highest priority comes first. The time for steps 2 and 3 goes into `SortingAgentsTimeMs`.
4. Goes down the list letting agents decide. It wants `updateCount` (5) agents to actually make a decision. An agent that isn't due yet (its `UpdateInterval` hasn't passed, or its action can't be cancelled) doesn't count, so it keeps going. Each agent it looks at gets its priority reset to 0 and moves to the end of the list.
5. Calls `UpdateAgent` on **every** agent: hurt fades, and the running action gets its `Update`. This time goes into `UpdatingAgentsTimeMs`.

The numbers are the serialized defaults. The scene's copy may set others.

So near a player, creatures re-think quickly; far away they wait their turn. But every agent's action updates every tick, however far it is. An exception in an agent's priority, decision or update is logged and removes that agent from the list, so it stops thinking for good (it isn't re-registered).

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `static AgentUpdater Instance { get; }` | The scene's updater. | Set in `Awake`, so it exists on clients too, but never ticks there. |
| `static int AgentCount { get; }` | How many agents are registered. | Throws if `Instance` is null. |
| `static AverageNumber SortingAgentsTimeMs { get; }` | Time spent on priorities and sorting. | |
| `static AverageNumber UpdatingAgentsTimeMs { get; }` | Time spent on decisions and updates. | |
| `int TopPriority { get; }` | The first agent's priority. | Used for gizmos. |
| `void Register(ILinkedAgent agent)` | Adds an agent, then runs one decision and one update for it straight away. | `Agent.InitializeAsServer` calls this. Logs an error if it's already registered. |
| `void Deregister(ILinkedAgent agent)` | Removes an agent. | Called on death and destruction. |
| `static void PrintAll()` | Logs each agent and its priority, at trace level. | Marked `[Command("print")]` in a class marked `[Module("agents")]`. |

`ILinkedAgent` is the interface it works with: `Entity`, `Node`, `Priority`, `CheckChange()` and `UpdateAgent()`. `Agent` implements the last two explicitly.

## Measuring it

Canary records the time of every update module each second, including "AI Agent Updater", by reading `UpdateModuleInfo`'s private `duration` from `UnityUpdateManager.AllModuleInfos`. That's the cheapest way to see what creatures cost a server. In Rover's forest load test, the worst second (one 3.1 s frame) spent about 5 ms in "AI Agent Updater", so AI wasn't what made it slow.

Path searches don't count here: they run on the A* library's own threads (see [Movement and pathfinding](movement-and-pathfinding.md)).

## Hooking it

- Don't patch `UpdateAgents` itself unless you must: it's private and runs every physics tick.
- To change how many creatures think per tick or how far priority reaches, set the private fields `updateCount`, `furthestDistanceSquared`, `minPriorityIncrement` and `maxPriorityIncrement` on `AgentUpdater.Instance` with `Traverse` or `AccessTools.FieldRefAccess`, after the scene loads. They're read every tick.
- To slow one creature's thinking, change its `updateInterval` field (private, on `Agent`). Thinking less often makes it slower to react, not cheaper to update.

## See also

- [Agent](agent.md)
- [Actions and decisions](actions-and-decisions.md)
