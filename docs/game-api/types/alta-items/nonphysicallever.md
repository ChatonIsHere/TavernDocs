---
title: "NonPhysicalLever"
description: "A lever with IsActive, MoveToPosition(float), ForceFull(bool), ForceEmpty(bool)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonPhysicalLever

A **class** in `Root.Township`, `Alta.Mechanisms`.

A lever with `IsActive`, `MoveToPosition(float)`, `ForceFull(bool)`, `ForceEmpty(bool)`.

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

| Member |
| --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" activated"}</code> |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> |
| <Link id="m-basetohandle" /><code>{"private Vector3 baseToHandle"}</code> |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" deactivated"}</code> |
| <Link id="m-handle" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handle"}</code> |
| <Link id="m-maxactive" /><code>{"private float maxActive"}</code> |
| <Link id="m-maximumangle" /><code>{"private float maximumAngle"}</code> |
| <Link id="m-minactive" /><code>{"private float minActive"}</code> |
| <Link id="m-minimunangle" /><code>{"private float minimunAngle"}</code> |
| <Link id="m-minrotation" /><code>{"private Quaternion minRotation"}</code> |
| <Link id="m-movetowards" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" moveTowards"}</code> |
| <Link id="m-multiplier" /><code>{"private int multiplier"}</code> |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> |
| <Link id="m-range" /><code>{"private float range"}</code> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> |
| <Link id="m-syncmovespeed" /><code>{"private float syncMoveSpeed"}</code> |
| <Link id="m-syncrelease" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRelease"}</code> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> |
| <Link id="m-target" /><code>{"private float target"}</code> |
| <Link id="m-trackmovement" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackMovement"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-targetrotation" /><code>{"private Quaternion TargetRotation { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-forceempty" /><code>{"void ForceEmpty(bool isEmpty)"}</code> |
| <Link id="m-forcefull" /><code>{"void ForceFull(bool isFull)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-movetoposition" /><code>{"void MoveToPosition(float lerp)"}</code> |

<details>
<summary>11 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-movetowards-2" /><code>{"private void MoveTowards()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-stoptracking" /><code>{"private void StopTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncrelease-2" /><code>{"private void SyncRelease("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-trackmovement-2" /><code>{"private void TrackMovement()"}</code> |

</details>
