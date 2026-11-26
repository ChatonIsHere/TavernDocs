---
title: "AgentUpdater"
description: "Server: the scene singleton that ticks every creature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentUpdater

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: the scene singleton that ticks every creature. Each fixed update it raises each creature's priority by how close the nearest player is, re-sorts, and lets the top few decide again.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Module`
- **Documented in** [AgentUpdater](/mod/game-api/creatures/agent-updater), [Update modules](/mod/game-api/console-and-utilities/update-modules)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentUpdater()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agents" /><code>{"private LinkedList<"}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{"> agents"}</code> | All registered creatures, ordered by priority, highest first. |
| <Link id="m-furthestdistancesquared" /><code>{"private float furthestDistanceSquared"}</code> | Squared distance past which players add no extra priority. Default 10000 (100 m). |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger, used for per-creature errors and `PrintAll`. |
| <Link id="m-maxextra" /><code>{"private int maxExtra"}</code> | `maxPriorityIncrement` minus `minPriorityIncrement`, recomputed each tick. |
| <Link id="m-maxpriorityincrement" /><code>{"private int maxPriorityIncrement"}</code> | Most priority a creature can gain in one tick, with a player right next to it. Default 100. |
| <Link id="m-minpriorityincrement" /><code>{"private int minPriorityIncrement"}</code> | Priority every creature gains each tick. Default 1. |
| <Link id="m-timer" /><code>{"private static Stopwatch timer"}</code> | Stopwatch used for the two timing averages. |
| <Link id="m-updateagents" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateAgents"}</code> | The "AI Agent Updater" fixed update module, included in server profiling. |
| <Link id="m-updateagentsmethod" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateAgentsMethod"}</code> | The registered `UpdateAgents` call. |
| <Link id="m-updatecount" /><code>{"private int updateCount"}</code> | How many creatures get to decide again each tick. Default 5. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-agentcount" /><code>{"static int AgentCount { get; }"}</code> | Number of creatures registered. |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/agentupdater">{"AgentUpdater"}</Link>{" Instance { get; private set; }"}</code> | The scene's updater, set in `Awake`. |
| <Link id="m-sortingagentstimems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SortingAgentsTimeMs { get; }"}</code> | Running average of the time spent updating priorities and sorting each tick. |
| <Link id="m-toppriority" /><code>{"int TopPriority { get; }"}</code> | Priority of the first creature in the list, or 1 if there are none. |
| <Link id="m-updatingagentstimems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" UpdatingAgentsTimeMs { get; }"}</code> | Running average of the time spent deciding and updating creatures each tick. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> | Removes a creature from the list. Warns if it wasn't registered. |
| <Link id="m-printall" /><code>{"static void PrintAll()"}</code> | The `agents print` console command: logs each creature and its priority at trace level, then the total. |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> | Adds a creature at the end of the list with priority 0 and runs its first decision and update. Errors if already registered. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`, initializes all senses and starts updating once the server has started. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the server start event and stops updating. |
| <Link id="m-onserverstarted" /><code>{"private void OnServerStarted()"}</code> | Registers `UpdateAgents` on the fixed update module. |
| <Link id="m-sort" /><code>{"private void Sort("}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> | Moves a creature forward in the list past every creature with a lower priority. |
| <Link id="m-updateagents-2" /><code>{"private void UpdateAgents()"}</code> | The fixed update: caches player head positions, drops destroyed creatures, raises priorities, sorts, then runs `UpdateAndMoveToEnd`. |
| <Link id="m-updateandmovetoend" /><code>{"private void UpdateAndMoveToEnd()"}</code> | Lets the first `updateCount` creatures decide again (more if some didn't change), resets them to priority 0 and moves them to the end. Updates every creature. |
| <Link id="m-updatepriority" /><code>{"private void UpdatePriority("}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{" agent)"}</code> | Adds `minPriorityIncrement` plus up to `maxExtra` more the closer the nearest player is, within `furthestDistanceSquared`. |

</details>
