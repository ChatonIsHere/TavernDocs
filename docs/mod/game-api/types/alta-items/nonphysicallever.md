---
title: "NonPhysicalLever"
description: "A lever moved by hand without physics: the pivot rotates to follow the grip, fires events while inside an active angle, and syncs its final position on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonPhysicalLever

A **class** in `Root.Township`, `Alta.Mechanisms`.

A lever moved by hand without physics: the pivot rotates to follow the grip, fires events while inside an active angle, and syncs its final position on release.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonPhysicalLever()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" activated"}</code> | <span className="api-desc">Event fired when the lever enters the active angle.</span> |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | <span className="api-desc">Rotation at the middle of the range.</span> |
| <Link id="m-basetohandle" /><code>{"private Vector3 baseToHandle"}</code> | <span className="api-desc">Local direction from the pivot to the handle, cached in `Awake`.</span> |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" deactivated"}</code> | <span className="api-desc">Event fired when the lever leaves the active angle.</span> |
| <Link id="m-handle" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handle"}</code> | <span className="api-desc">The pickup players grab.</span> |
| <Link id="m-maxactive" /><code>{"private float maxActive"}</code> | <span className="api-desc">Upper angle of the active band (default 50).</span> |
| <Link id="m-maximumangle" /><code>{"private float maximumAngle"}</code> | <span className="api-desc">Angle at full (default 90).</span> |
| <Link id="m-minactive" /><code>{"private float minActive"}</code> | <span className="api-desc">Lower angle of the active band (default 40).</span> |
| <Link id="m-minimunangle" /><code>{"private float minimunAngle"}</code> | <span className="api-desc">Angle at empty.</span> |
| <Link id="m-minrotation" /><code>{"private Quaternion minRotation"}</code> | <span className="api-desc">Rotation at the minimum angle.</span> |
| <Link id="m-movetowards" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" moveTowards"}</code> | <span className="api-desc">Handle for the `MoveTowards` update.</span> |
| <Link id="m-multiplier" /><code>{"private int multiplier"}</code> | <span className="api-desc">1 or -1, depending on whether the maximum angle is above the minimum.</span> |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> | <span className="api-desc">Transform rotated by the lever.</span> |
| <Link id="m-range" /><code>{"private float range"}</code> | <span className="api-desc">Half the angle range, the most the pivot can turn from the middle.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Local axis the pivot turns around.</span> |
| <Link id="m-syncmovespeed" /><code>{"private float syncMoveSpeed"}</code> | <span className="api-desc">Degrees per second when easing to a synced position (default 2).</span> |
| <Link id="m-syncrelease" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRelease"}</code> | <span className="api-desc">Method sync (SyncB) for the release position.</span> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | <span className="api-desc">Method sync (SyncA) for the position.</span> |
| <Link id="m-target" /><code>{"private float target"}</code> | <span className="api-desc">Lever position from 0 to 1.</span> |
| <Link id="m-trackmovement" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackMovement"}</code> | <span className="api-desc">Handle for the `TrackMovement` update.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">True while the lever angle is between `minActive` and `maxActive`.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetrotation" /><code>{"private Quaternion TargetRotation { get; }"}</code> | <span className="api-desc">Pivot rotation for the current target between the angle limits.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forceempty" /><code>{"void ForceEmpty(bool isEmpty)"}</code> | <span className="api-desc">Moves the lever to 0 when true, or 1 when false.</span> |
| <Link id="m-forcefull" /><code>{"void ForceFull(bool isFull)"}</code> | <span className="api-desc">Moves the lever to 1 when true, or 0 when false.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Makes the handle kinematic and creates the syncs.</span> |
| <Link id="m-movetoposition" /><code>{"void MoveToPosition(float lerp)"}</code> | <span className="api-desc">Server: sets the lever's target (0 to 1), syncs it and eases the pivot there.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the handle direction, hooks grab and release, and runs `Setup`.</span> |
| <Link id="m-movetowards-2" /><code>{"private void MoveTowards()"}</code> | <span className="api-desc">Each frame, rotates the pivot toward the target at `syncMoveSpeed` until it is there.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops both update calls.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the rotation axis.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: reruns `Setup`.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Works out the middle rotation, half range, min rotation and direction from the angle limits.</span> |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, starts following the hand and stops any easing.</span> |
| <Link id="m-stoptracking" /><code>{"private void StopTracking("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, stops following once nobody holds it; the local player sends the final position.</span> |
| <Link id="m-syncrelease-2" /><code>{"private void SyncRelease("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the release position; receivers ease to it, and the server passes it on to the other players.</span> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the position; receivers snap the pivot to it.</span> |
| <Link id="m-trackmovement-2" /><code>{"private void TrackMovement()"}</code> | <span className="api-desc">Each frame while held, rotates the pivot toward the average grip point within range and fires `activated` or `deactivated` on change.</span> |

</details>
