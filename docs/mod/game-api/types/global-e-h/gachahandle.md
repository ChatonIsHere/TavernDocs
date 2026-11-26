---
title: "GachaHandle"
description: "A crank or lever handle turned by grabbing it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GachaHandle

A **class** in `Root.Township`, the global namespace.

A crank or lever handle turned by grabbing it. Turning past a threshold fires `onActivated`; let go and it springs back. Rotation runs locally for the holder.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GachaHandle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activationcurve" /><code>{"private AnimationCurve activationCurve"}</code> | <span className="api-desc">Maps the raw hand angle to the handle angle.</span> |
| <Link id="m-alignspickupwithhand" /><code>{"private bool alignsPickupWithHand"}</code> | <span className="api-desc">Position-based option shown in the inspector. Not read in this code.</span> |
| <Link id="m-angleactivationthreshold" /><code>{"private float angleActivationThreshold"}</code> | <span className="api-desc">Angle (after the curve) that activates the handle.</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Current handle angle in degrees.</span> |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> | <span className="api-desc">Hand holding the handle, or null.</span> |
| <Link id="m-inputrotation" /><code>{"private Quaternion inputRotation"}</code> | <span className="api-desc">Accumulated hand rotation since the grab.</span> |
| <Link id="m-isactivated" /><code>{"private bool isActivated"}</code> | <span className="api-desc">True after the threshold was passed, until reset.</span> |
| <Link id="m-isinverted" /><code>{"private bool isInverted"}</code> | <span className="api-desc">Turns the handle the other way around Z.</span> |
| <Link id="m-ispositionbased" /><code>{"private bool isPositionBased"}</code> | <span className="api-desc">Follows the hand's position around `positionCenter` instead of the hand's facing.</span> |
| <Link id="m-isresettingautomatic" /><code>{"private bool isResettingAutomatic"}</code> | <span className="api-desc">Clears activation when the handle returns to rest. Otherwise call `ResetActivation`.</span> |
| <Link id="m-latesthandforward" /><code>{"private Vector3 latestHandForward"}</code> | <span className="api-desc">Hand direction or position from the last frame, in the parent's space.</span> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | <span className="api-desc">Largest angle the handle can turn (1 to 180).</span> |
| <Link id="m-onactivated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onActivated"}</code> | <span className="api-desc">Event fired when the handle passes the threshold.</span> |
| <Link id="m-onreset" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onReset"}</code> | <span className="api-desc">Event fired by `ResetActivation`.</span> |
| <Link id="m-positioncenter" /><code>{"private Transform positionCenter"}</code> | <span className="api-desc">Pivot rotated in position-based mode.</span> |
| <Link id="m-revertspeed" /><code>{"private float revertSpeed"}</code> | <span className="api-desc">Degrees per second the handle springs back.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> sync"}</code> | <span className="api-desc">Method sync for the angle.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform of the handle pickup, rotated in facing mode.</span> |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> | <span className="api-desc">The pickup players grab.</span> |
| <Link id="m-updaterotation" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateRotation"}</code> | <span className="api-desc">Registered update method (turning or reverting).</span> |
| <Link id="m-worldtolocal" /><code>{"private Matrix4x4 worldToLocal"}</code> | <span className="api-desc">Parent's world to local matrix captured on grab.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the angle sync message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: starts at angle 0.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current angle to a joining player. This is the only place the angle is sent.</span> |
| <Link id="m-resetactivation" /><code>{"void ResetActivation()"}</code> | <span className="api-desc">If activated, clears it, snaps the handle back and fires `onReset`.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the handle pickup's filter, grab and release events.</span> |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks grabbing while activated.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the update method.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-revertrotation" /><code>{"private void RevertRotation()"}</code> | <span className="api-desc">Each frame after release, turns the handle back to rest; at rest clears activation if `isResettingAutomatic`.</span> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, records the hand's start direction and starts `UpdateRotation`.</span> |
| <Link id="m-stopcheck" /><code>{"private void StopCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, switches to `RevertRotation`.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float angle)"}</code> | <span className="api-desc">Sync handler: clients apply the received angle to the handle.</span> |
| <Link id="m-updaterotation-2" /><code>{"private void UpdateRotation()"}</code> | <span className="api-desc">Each frame while held, turns the handle with the hand around Z; past the threshold, activates and locks at `maxAngle`.</span> |

</details>
