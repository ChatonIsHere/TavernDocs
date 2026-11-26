---
title: Movement and pathfinding
description: How creatures find paths on the server's navmesh and move along them, and how to change their speed.
sidebar_position: 6
---

# Movement and pathfinding

`Alta.Pathfinding` in `Root.Township`. Server only.

A walking creature has three parts:

- **`Director`**: what the AI talks to. "Wander", "walk there", "follow that".
- **`Navigator`**: asks the A* Pathfinding Project for a path and tracks progress along it.
- **`Walker`**: moves the creature's `Rigidbody` along the path every physics tick, with acceleration, turning, gravity and wall avoidance.

`agent.Director`, `agent.Walker` and `agent.HasWalker` reach them; the navigator is `agent.Director.Navigator`. The walker and navigator share a GameObject (`Walker.Awake` gets the `Navigator` with `GetComponent`). Creatures that don't walk, like the wyrm, have no walker.

## Why it's server only

- `Agent<TThis>.Awake` turns the walker's GameObject off, and only `InitializeAi` (server) turns it back on.
- `Walker.Start` snaps the creature onto the nearest navmesh node, only on the server.
- Rover found that clients have no `AstarPath` object at all. The server builds the navmesh: one `RecastGraph` for the surface, and graphs that caves (`CaveLayerStreamer`, `StaticCaveChunk`) and the forest (`ForestGenerator`) scan or update at runtime.

Clients see creatures move through their network transform.

## Director

A `MonoBehaviour`. Finds its `Navigator` in its parents on `Awake`.

| Member | What it does |
| --- | --- |
| `Navigator Navigator { get; }` | Its navigator. |
| `Vector3? TargetFacing { get; set; }` | A direction to face while standing. Passes through to the navigator. |
| `void Wander(int searchLength)` | Walk to a random reachable point near here. |
| `void Wander(Vector3 near, int searchLength)` | Walk to a random reachable point near `near`. |
| `void Wander(Vector3 near, int searchLength, Vector3 idealDirection, int bestOf = 1)` | Pick `bestOf` random points near `near` and walk to the one furthest along `idealDirection`. |
| `void WalkTo(Vector3 position)`, `WalkTo(Vector3 position, float targetReachedDistance)`, and `Transform` versions | Walk to a point. |
| `void Follow(ITarget target)`, `Follow(ITarget target, float targetReachedDistance)` | Re-path to the target's ground position every `reevaluationInterval` (0.5 s by default) while it's alive. |
| `void TeleportTo(Vector3 position)`, `TeleportTo(Vector3 position, bool isSnappingY)`, `TeleportTo(Transform target)` | Move the body there and reset the path. |
| `void Stop()` | Stop following and cancel the path. |

`Follow` is done by `Follower`, a plain class running a coroutine on the navigator. It never asks for a new path while one is still being searched for.

## Navigator

A `MonoBehaviour` that needs a `Seeker` on the same GameObject.

| Member | What it does | Notes |
| --- | --- | --- |
| `void NavigateTo(Vector3 position, float targetReachedDistance = 0.1f)` | Cancels any request and asks for a path. If already there, finishes at once. | Asynchronous. |
| `void Wander(int searchLength, float targetReachedDistance = 0.2f)` and overloads | Asks the library for every node within `searchLength` (a `ConstantPath`), picks a point, then asks for a path there. | Two searches. `ActiveWander` passes its settings' `HeuristicMaximum` (20,000 by default, in the library's cost units) as `searchLength`. |
| `Vector3 TeleportTo(Vector3 position, bool isSnappingY)` | Clears the path and returns where the body should go. | `Director.TeleportTo` moves the body. |
| `void Stop()` | Cancels the request and finishes. | |
| `void ContinuePath()`, `void UpdatePosition()` | Step along the path. | The walker calls these. |
| `bool Clamp(ref Vector3 position)` | Moves a point onto the current navmesh node. | |
| `void GetWalls(List<Vector3> wallBuffer, float range)` | Navmesh edges nearby, for wall avoidance. | |
| `bool IsFinished`, `bool IsRequestingPath`, `bool IsFinalStretch` | Progress. | |
| `Vector3 Position`, `Vector3 NextPoint`, `Vector3? FollowingPoint`, `List<Vector3> Corners` | Where it is on the path and where it's heading. | |
| `float RemainingDistance`, `float RemainingDistanceSquared` | To the goal. The squared one is 0 when finished. | |
| `Func<Vector3> GetTarget { get; set; }` | Where to re-path to when the path needs a re-plan. Defaults to the last goal. | |
| `event Action PathFindSucceeded`, `PathFindFailed`, `TargetReached` | Path found, path failed (or a wander found no nodes), arrived. | |

Paths come back through `Seeker.pathCallback`. The search runs on the library's worker threads, and the result is handed back on the main thread in `AstarPath.Update`, so `PathFound` and the events above run on the main thread, a frame or more after the request.

`ATT-Optimizations`' CaveNavigationRecovery patches the private `Wander(Vector3, int, float, OnPathDelegate)` and `OnPathFindFailed(Path)` overloads to recover creatures stuck in caves, which shows both are workable targets.

## Walker

A `MonoBehaviour` with a `FixedUpdate`. Moves `topic` (the creature's `Rigidbody`).

| Member | What it does |
| --- | --- |
| `float MaximumSpeed { get; set; }` | Top speed. Navigation actions set it from their settings when they start, so the walker's own serialized value only matters until the first one runs. Shipped chase speeds (asset values): spriggull 3.5, turabada 5, gotera 10, Greater Gotera 15, babu 30. |
| `float Acceleration`, `float RotationSpeed`, `float TargetSlowdown`, `float GravityMultiplier` | Movement tuning. Navigation actions set `Acceleration` too. |
| `float Power { get; set; }` | How much control it has, 0 to 1. Below 1 it recovers by `PowerPerSecond` each second and drag is reduced; at 0 or below it doesn't move or ground itself. A jump sets it to -1; a spriggull hit hard sets it to `1 - strength`. |
| `float PowerPerSecond { get; set; }` | Recovery rate. |
| `bool IsPaused { get; set; }` | Stand still without losing the path. Cleared when the path finishes. |
| `bool IsOvershooting { get; set; }` | Keep moving past the goal until it slows down. |
| `bool IsGrounded`, `float DistanceToGround` | From a ground raycast. |
| `bool IsBlocked { get; }` | True for 0.2 s after RVO avoidance stopped it dead. `ActiveBlockCanceleableWander` gives up on this. |
| `bool IsSlowedWhenNotMoving`, `bool HasForwardDefined` | Tuning flags. |
| `LayerMask GroundLayers { get; }` | What counts as ground. |
| `void NormalizedMove(float duration)`, `void StopNormalizedMove()` | Walk the next path so it takes `duration` seconds. |
| `void ClearBlocked()` | Clears `IsBlocked`. |
| `event Action<WalkerState> Updated` | Every tick: velocity, forward and turn speed, pivoting, final stretch, grounded. `WalkerAnimator` drives the animator from it. |
| `event Action Stopped` | When it stops walking. |

To spread the cost, each walker only raycasts for the ground on one physics tick in five, and moves toward the last ground height in between. With an `RVOController` on the same GameObject, it uses the library's local avoidance to steer around other creatures.

## Navigation actions

`ActiveNavigation<TThis, TAgent, TSettings>` is the base of every action that walks (`ActiveWander`, `ActiveFollow`, `ActiveNest`, `ActiveInteractApproach`, `ActiveDistanceFromTarget`). Its `OnStart` copies `Speed` and `Acceleration` from its `AgentNavigationSettings` onto the walker, finishes the action when the target is reached, and cancels it when the path fails. With `IsTargetRemovedOnFail`, a failed path also makes the creature ignore that target for `RemovalSeconds` (5 by default). When the action ends it stops the director and clears `IsBlocked`.

## Hooking it

Patch the concrete navigation action's `OnStart` (protected, so by name) and change the walker after the base has set it. This caps how fast any creature chases:

```csharp
using Alta.Intelligence;
using HarmonyLib;

[HarmonyPatch(typeof(ActiveFollow), "OnStart")]
static class SlowerChase
{
    public static float MaxChaseSpeed = 3f;

    static void Postfix(ActiveFollow __instance)
    {
        var walker = __instance.Topic.Walker;
        if (walker != null && walker.MaximumSpeed > MaxChaseSpeed)
            walker.MaximumSpeed = MaxChaseSpeed;
    }
}
```

Gotchas:

- Calling `Director.WalkTo` or `Follow` from your own code works until the creature's next decision starts an action that moves it. To move a creature for a while, stop its AI first. But `agent.IsEnabled = false` also turns the walker's GameObject off, so nothing moves at all. Starting one of its own navigation actions with `agent.DoAction(component, target)` is the cleaner way.
- Don't patch `ActiveNavigation<...>` itself: it's generic. Patch the subclass.
- `Walker.FixedUpdate` runs for every walking creature every physics tick. Avoid patching it.
- Paths are async. Don't expect `Navigator.IsFinished` or `Corners` to change in the same frame you call `NavigateTo`.

## Other types

| Type | What it is |
| --- | --- |
| `IndependentWalker` | Lets a navigator part of a creature detach from its body and walk on its own (update module "Independent Walker"), then reattach. Cleans itself up when the creature dies or is destroyed. |
| `WalkerAnimator` | Sets animator values from `Walker.Updated`. |
| `WalkerState` | The struct `Walker.Updated` passes. |
| `NormalizedPath` | A path's corners and length, for `NormalizedMove`. |
| `PathWalker` (top level) | A simple mover driven by a `Seeker`. Nothing in the code uses it. |
| `AStar<TNode, TConnection>` (top level) | The game's own small A* over node graphs. Only forest generation uses it (`ForestGenerator`, `ForestAttributeEvaluator`, `ForestConnectivityIncreaser`, `PathEndsPart`, `SignPointPart`); creatures don't. |
| `Seeker`, `AILerp`, `AstarPath`, `RichPath`, `RVOController` | The A* Pathfinding Project. Out of scope. |

## See also

- [Actions and decisions](actions-and-decisions.md)
- [Agent](agent.md)
