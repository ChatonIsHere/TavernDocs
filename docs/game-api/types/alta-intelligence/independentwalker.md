---
title: "IndependentWalker"
description: "Lets an Agent's navigator child detach and walk on its own, while the agent's rigidbody follows and turns toward it each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndependentWalker

A **class** in `Root.Township`, `Alta.Pathfinding`.

Lets an `Agent`'s navigator child detach and walk on its own, while the agent's rigidbody follows and turns toward it each frame. Sits next to a `Navigator`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndependentWalker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basetopic" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" baseTopic"}</code> | The agent whose rigidbody follows this walker. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform of the walker. |
| <Link id="m-isattached" /><code>{"private bool isAttached"}</code> | Whether the walker is parented to the agent and not driving it. |
| <Link id="m-isfollowingbydefault" /><code>{"private bool isFollowingByDefault"}</code> | Detaches on `Start` so the agent follows from the beginning. |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> | Metres per second the agent moves toward the walker. |
| <Link id="m-navigator" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> | The `Navigator` on the same object, teleported on detach. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Degrees per second the agent turns toward the walker. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared update module for all independent walkers. |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | The registered `UpdatePosition` method while detached. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attach" /><code>{"void Attach()"}</code> | Reparents the walker under the agent at zero offset and stops following. Destroys itself if the agent is gone. |
| <Link id="m-dettach" /><code>{"void Dettach()"}</code> | Unparents the walker, teleports its navigator to where it is and starts moving the agent toward it. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basedestroyed" /><code>{"private void BaseDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Destroys the walker when the agent's entity is destroyed. |
| <Link id="m-destroyed" /><code>{"private void Destroyed()"}</code> | Unhooks from the agent, destroys the walker's GameObject and stops the update. |
| <Link id="m-internaldettach" /><code>{"private void InternalDettach(bool isRepositioning)"}</code> | Detaches if attached and the agent is alive, hooks the agent's death and destroy events, and starts `UpdatePosition`. |
| <Link id="m-onbasekilled" /><code>{"private void OnBaseKilled("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" lastHit)"}</code> | Destroys the walker when the agent dies. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the update method. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Caches the transform and detaches straight away when `isFollowingByDefault` is on. |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | Moves the agent's rigidbody toward the walker at `movementSpeed` and turns it toward the walker at `rotationSpeed`. |

</details>
