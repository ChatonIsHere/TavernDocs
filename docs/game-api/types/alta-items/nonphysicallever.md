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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NonPhysicalLever()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" activated"}</code> | Event fired when the lever enters the active angle. |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | Rotation at the middle of the range. |
| <Link id="m-basetohandle" /><code>{"private Vector3 baseToHandle"}</code> | Local direction from the pivot to the handle, cached in `Awake`. |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" deactivated"}</code> | Event fired when the lever leaves the active angle. |
| <Link id="m-handle" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handle"}</code> | The pickup players grab. |
| <Link id="m-maxactive" /><code>{"private float maxActive"}</code> | Upper angle of the active band (default 50). |
| <Link id="m-maximumangle" /><code>{"private float maximumAngle"}</code> | Angle at full (default 90). |
| <Link id="m-minactive" /><code>{"private float minActive"}</code> | Lower angle of the active band (default 40). |
| <Link id="m-minimunangle" /><code>{"private float minimunAngle"}</code> | Angle at empty. |
| <Link id="m-minrotation" /><code>{"private Quaternion minRotation"}</code> | Rotation at the minimum angle. |
| <Link id="m-movetowards" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" moveTowards"}</code> | Handle for the `MoveTowards` update. |
| <Link id="m-multiplier" /><code>{"private int multiplier"}</code> | 1 or -1, depending on whether the maximum angle is above the minimum. |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> | Transform rotated by the lever. |
| <Link id="m-range" /><code>{"private float range"}</code> | Half the angle range, the most the pivot can turn from the middle. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Local axis the pivot turns around. |
| <Link id="m-syncmovespeed" /><code>{"private float syncMoveSpeed"}</code> | Degrees per second when easing to a synced position (default 2). |
| <Link id="m-syncrelease" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRelease"}</code> | Method sync (SyncB) for the release position. |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | Method sync (SyncA) for the position. |
| <Link id="m-target" /><code>{"private float target"}</code> | Lever position from 0 to 1. |
| <Link id="m-trackmovement" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackMovement"}</code> | Handle for the `TrackMovement` update. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | True while the lever angle is between `minActive` and `maxActive`. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetrotation" /><code>{"private Quaternion TargetRotation { get; }"}</code> | Pivot rotation for the current target between the angle limits. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forceempty" /><code>{"void ForceEmpty(bool isEmpty)"}</code> | Moves the lever to 0 when true, or 1 when false. |
| <Link id="m-forcefull" /><code>{"void ForceFull(bool isFull)"}</code> | Moves the lever to 1 when true, or 0 when false. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Makes the handle kinematic and creates the syncs. |
| <Link id="m-movetoposition" /><code>{"void MoveToPosition(float lerp)"}</code> | Server: sets the lever's target (0 to 1), syncs it and eases the pivot there. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the handle direction, hooks grab and release, and runs `Setup`. |
| <Link id="m-movetowards-2" /><code>{"private void MoveTowards()"}</code> | Each frame, rotates the pivot toward the target at `syncMoveSpeed` until it is there. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops both update calls. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the rotation axis. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: reruns `Setup`. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Works out the middle rotation, half range, min rotation and direction from the angle limits. |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, starts following the hand and stops any easing. |
| <Link id="m-stoptracking" /><code>{"private void StopTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, stops following once nobody holds it; the local player sends the final position. |
| <Link id="m-syncrelease-2" /><code>{"private void SyncRelease("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the release position; receivers ease to it, and the server passes it on to the other players. |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the position; receivers snap the pivot to it. |
| <Link id="m-trackmovement-2" /><code>{"private void TrackMovement()"}</code> | Each frame while held, rotates the pivot toward the average grip point within range and fires `activated` or `deactivated` on change. |

</details>
