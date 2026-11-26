---
title: "TeleporterTrailLerper"
description: "Client effect: a pooled trail that follows a player when they teleport or stream-move."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleporterTrailLerper

A **class** in `Root.Township`, the global namespace.

Client effect: a pooled trail that follows a player when they teleport or stream-move. Taken from a pool by `PlayerSpecialEffectsController`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleporterTrailLerper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerper" /><code>{"private "}<Link to="/mod/game-api/types/global-s/scaledlerpfollow">{"ScaledLerpFollow"}</Link>{" lerper"}</code> | <span className="api-desc">The scaled lerp follower that moves the trail.</span> |
| <Link id="m-pooledobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject"}</code> | <span className="api-desc">Backing field for `PooledObject`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pooledobject-2" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" { get; }"}</code> | <span className="api-desc">The pool entry this trail belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resettimer" /><code>{"void ResetTimer()"}</code> | <span className="api-desc">Restarts the pooled object's lifetime timer.</span> |
| <Link id="m-seteffectplaystatus" /><code>{"void SetEffectPlayStatus("}<Link to="/mod/game-api/types/global-e-h/effectplaystatus">{"EffectPlayStatus"}</Link>{" status)"}</code> | <span className="api-desc">Sets the play status of the follow lerper's effect.</span> |
| <Link id="m-setposition" /><code>{"void SetPosition(Vector3 position)"}</code> | <span className="api-desc">Moves the trail to a position and restarts the lerper there without a lerp.</span> |
| <Link id="m-settarget" /><code>{"void SetTarget("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" target)"}</code> | <span className="api-desc">Sets the player the trail follows.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `ResetLerper` to the pooled object's release.</span> |
| <Link id="m-resetlerper" /><code>{"private void ResetLerper("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled)"}</code> | <span className="api-desc">On release to the pool: stops the effect, restarts the lerper and clears its target.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TeleporterTrailLerper`:

<div className="api-used-in">

[`FlyCamLocomotionController.activeTrail`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-activetrail), [`PlayerSpecialEffectsController.activeStreamingTrail`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-activestreamingtrail), [`PlayerSpecialEffectsController.activeTeleportTrail`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-activeteleporttrail).

</div>
