---
title: "GachaHandle"
description: "A crank or lever handle turned by grabbing it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GachaHandle

A **class** in `Root.Township`, no namespace.

A crank or lever handle turned by grabbing it. Turning past a threshold fires `onActivated`; let go and it springs back. Rotation runs locally for the holder.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GachaHandle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activationcurve" /><code>{"private AnimationCurve activationCurve"}</code> | Maps the raw hand angle to the handle angle. |
| <Link id="m-alignspickupwithhand" /><code>{"private bool alignsPickupWithHand"}</code> | Position-based option shown in the inspector. Not read in this code. |
| <Link id="m-angleactivationthreshold" /><code>{"private float angleActivationThreshold"}</code> | Angle (after the curve) that activates the handle. |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | Current handle angle in degrees. |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> | Hand holding the handle, or null. |
| <Link id="m-inputrotation" /><code>{"private Quaternion inputRotation"}</code> | Accumulated hand rotation since the grab. |
| <Link id="m-isactivated" /><code>{"private bool isActivated"}</code> | True after the threshold was passed, until reset. |
| <Link id="m-isinverted" /><code>{"private bool isInverted"}</code> | Turns the handle the other way around Z. |
| <Link id="m-ispositionbased" /><code>{"private bool isPositionBased"}</code> | Follows the hand's position around `positionCenter` instead of the hand's facing. |
| <Link id="m-isresettingautomatic" /><code>{"private bool isResettingAutomatic"}</code> | Clears activation when the handle returns to rest. Otherwise call `ResetActivation`. |
| <Link id="m-latesthandforward" /><code>{"private Vector3 latestHandForward"}</code> | Hand direction or position from the last frame, in the parent's space. |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | Largest angle the handle can turn (1 to 180). |
| <Link id="m-onactivated" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onActivated"}</code> | Event fired when the handle passes the threshold. |
| <Link id="m-onreset" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onReset"}</code> | Event fired by `ResetActivation`. |
| <Link id="m-positioncenter" /><code>{"private Transform positionCenter"}</code> | Pivot rotated in position-based mode. |
| <Link id="m-revertspeed" /><code>{"private float revertSpeed"}</code> | Degrees per second the handle springs back. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> sync"}</code> | Method sync for the angle. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform of the handle pickup, rotated in facing mode. |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> | The pickup players grab. |
| <Link id="m-updaterotation" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateRotation"}</code> | Registered update method (turning or reverting). |
| <Link id="m-worldtolocal" /><code>{"private Matrix4x4 worldToLocal"}</code> | Parent's world to local matrix captured on grab. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the angle sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts at angle 0. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current angle to a joining player. This is the only place the angle is sent. |
| <Link id="m-resetactivation" /><code>{"void ResetActivation()"}</code> | If activated, clears it, snaps the handle back and fires `onReset`. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the handle pickup's filter, grab and release events. |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks grabbing while activated. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the update method. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-revertrotation" /><code>{"private void RevertRotation()"}</code> | Each frame after release, turns the handle back to rest; at rest clears activation if `isResettingAutomatic`. |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, records the hand's start direction and starts `UpdateRotation`. |
| <Link id="m-stopcheck" /><code>{"private void StopCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, switches to `RevertRotation`. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float angle)"}</code> | Sync handler: clients apply the received angle to the handle. |
| <Link id="m-updaterotation-2" /><code>{"private void UpdateRotation()"}</code> | Each frame while held, turns the handle with the hand around Z; past the threshold, activates and locks at `maxAngle`. |

</details>
