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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Movement and pathfinding](/mod/game-api/creatures/movement-and-pathfinding)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndependentWalker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basetopic" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" baseTopic"}</code> | <span className="api-desc">The agent whose rigidbody follows this walker.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform of the walker.</span> |
| <Link id="m-isattached" /><code>{"private bool isAttached"}</code> | <span className="api-desc">Whether the walker is parented to the agent and not driving it.</span> |
| <Link id="m-isfollowingbydefault" /><code>{"private bool isFollowingByDefault"}</code> | <span className="api-desc">Detaches on `Start` so the agent follows from the beginning.</span> |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> | <span className="api-desc">Metres per second the agent moves toward the walker.</span> |
| <Link id="m-navigator" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> | <span className="api-desc">The `Navigator` on the same object, teleported on detach.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Degrees per second the agent turns toward the walker.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared update module for all independent walkers.</span> |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | <span className="api-desc">The registered `UpdatePosition` method while detached.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attach" /><code>{"void Attach()"}</code> | <span className="api-desc">Reparents the walker under the agent at zero offset and stops following. Destroys itself if the agent is gone.</span> |
| <Link id="m-dettach" /><code>{"void Dettach()"}</code> | <span className="api-desc">Unparents the walker, teleports its navigator to where it is and starts moving the agent toward it.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basedestroyed" /><code>{"private void BaseDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Destroys the walker when the agent's entity is destroyed.</span> |
| <Link id="m-destroyed" /><code>{"private void Destroyed()"}</code> | <span className="api-desc">Unhooks from the agent, destroys the walker's GameObject and stops the update.</span> |
| <Link id="m-internaldettach" /><code>{"private void InternalDettach(bool isRepositioning)"}</code> | <span className="api-desc">Detaches if attached and the agent is alive, hooks the agent's death and destroy events, and starts `UpdatePosition`.</span> |
| <Link id="m-onbasekilled" /><code>{"private void OnBaseKilled("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" lastHit)"}</code> | <span className="api-desc">Destroys the walker when the agent dies.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the update method.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Caches the transform and detaches straight away when `isFollowingByDefault` is on.</span> |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Moves the agent's rigidbody toward the walker at `movementSpeed` and turns it toward the walker at `rotationSpeed`.</span> |

</details>
