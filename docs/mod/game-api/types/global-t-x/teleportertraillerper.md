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
| <Link id="m-ctor" /><code>{"TeleporterTrailLerper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerper" /><code>{"private "}<Link to="/mod/game-api/types/global-s/scaledlerpfollow">{"ScaledLerpFollow"}</Link>{" lerper"}</code> | The scaled lerp follower that moves the trail. |
| <Link id="m-pooledobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject"}</code> | Backing field for `PooledObject`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pooledobject-2" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" { get; }"}</code> | The pool entry this trail belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resettimer" /><code>{"void ResetTimer()"}</code> | Restarts the pooled object's lifetime timer. |
| <Link id="m-seteffectplaystatus" /><code>{"void SetEffectPlayStatus("}<Link to="/mod/game-api/types/global-e-h/effectplaystatus">{"EffectPlayStatus"}</Link>{" status)"}</code> | Sets the play status of the follow lerper's effect. |
| <Link id="m-setposition" /><code>{"void SetPosition(Vector3 position)"}</code> | Moves the trail to a position and restarts the lerper there without a lerp. |
| <Link id="m-settarget" /><code>{"void SetTarget("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" target)"}</code> | Sets the player the trail follows. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `ResetLerper` to the pooled object's release. |
| <Link id="m-resetlerper" /><code>{"private void ResetLerper("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled)"}</code> | On release to the pool: stops the effect, restarts the lerper and clears its target. |

</details>

## Used in

Members of other types that take, return or hold a `TeleporterTrailLerper`:

[`FlyCamLocomotionController.activeTrail`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-activetrail), [`PlayerSpecialEffectsController.activeStreamingTrail`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-activestreamingtrail), [`PlayerSpecialEffectsController.activeTeleportTrail`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-activeteleporttrail).
