---
title: "MovePickup"
description: "An object that slides along one axis when players grab and pull its handles, like a heavy door or lift."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovePickup

A **class** in `Root.Township`, the global namespace.

An object that slides along one axis when players grab and pull its handles, like a heavy door or lift. The server works out the force from hand positions with a PID controller and syncs movement and speed.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MovePickupSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<MovePickupSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)
- **Derived types** [`MovePickupSaveData`](/mod/game-api/types/global-m-o/movepickupsavedata)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovePickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stat for all `MovePickup`s.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stat for all `MovePickup`s.</span> |

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bottombounce" /><code>{"private float bottomBounce"}</code> | <span className="api-desc">Share of speed reversed when it hits the bottom.</span> |
| <Link id="m-forceperhand" /><code>{"private float[] forcePerHand"}</code> | <span className="api-desc">Maximum force by number of hands holding (1 to 4).</span> |
| <Link id="m-isdisabling" /><code>{"private bool isDisabling"}</code> | <span className="api-desc">Not used.</span> |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> | <span className="api-desc">How far it can move along the axis.</span> |
| <Link id="m-maxhanddistance" /><code>{"private float maxHandDistance"}</code> | <span className="api-desc">Cap on how much one hand's pull counts.</span> |
| <Link id="m-maximumnegativespeed" /><code>{"private float maximumNegativeSpeed"}</code> | <span className="api-desc">Fastest speed moving back down the axis.</span> |
| <Link id="m-maximumpositivespeed" /><code>{"private float maximumPositiveSpeed"}</code> | <span className="api-desc">Fastest speed moving up the axis.</span> |
| <Link id="m-movement" /><code>{"private float movement"}</code> | <span className="api-desc">Current distance from the start position. Saved.</span> |
| <Link id="m-movementaxis" /><code>{"private Vector3 movementAxis"}</code> | <span className="api-desc">Local axis it moves along. Set to up if left at zero.</span> |
| <Link id="m-negativeforce" /><code>{"private float negativeForce"}</code> | <span className="api-desc">Constant force pushing it back toward the start, like gravity.</span> |
| <Link id="m-pickups" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups"}</code> | <span className="api-desc">Handle pickups whose grabs move it.</span> |
| <Link id="m-pidcontroller" /><code>{"private PidController pidController"}</code> | <span className="api-desc">PID controller that turns hand pull into force.</span> |
| <Link id="m-pidsetup" /><code>{"private PidController.Setup pidSetup"}</code> | <span className="api-desc">PID gains for the controller.</span> |
| <Link id="m-relativegrabs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> relativeGrabs"}</code> | <span className="api-desc">Server: each holding hand and where it first grabbed, in local space.</span> |
| <Link id="m-startingposition" /><code>{"private Vector3 startingPosition"}</code> | <span className="api-desc">Local position at rest.</span> |
| <Link id="m-syncmovement" /><code>{"private float syncMovement"}</code> | <span className="api-desc">Last movement value sent or received.</span> |
| <Link id="m-syncvelocity" /><code>{"private float syncVelocity"}</code> | <span className="api-desc">Last speed value sent or received.</span> |
| <Link id="m-topbounce" /><code>{"private float topBounce"}</code> | <span className="api-desc">Share of speed reversed when it hits the top.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Fixed update registration. Removed once it rests at the bottom with no hands.</span> |
| <Link id="m-velocity" /><code>{"private float velocity"}</code> | <span className="api-desc">Current speed along the axis. Saved.</span> |

</details>

## Properties

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Always 32.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Shared timing stat for `PrepareForWrite`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Shared timing stat for `Serialize`.</span> |

</details>

## Methods

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores the start position, creates the PID controller and hooks grab start and end on each handle pickup.</span> |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Forgets a hand that let go.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the fixed update.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the movement axis in the editor.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Pushes changed PID values to the running controller.</span> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Returns true if movement or speed changed since the last sync.</span> |
| <Link id="m-runfixedupdate" /><code>{"private void RunFixedUpdate()"}</code> | <span className="api-desc">Server: adds force from how far hands pulled along the axis. Both: applies the downward force, bounces at the ends and moves the object.</span> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Syncs movement and speed, or a single bit when both are zero. Client: applies them and starts updating.</span> |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Records where a hand grabbed and starts updating.</span> |
| <Link id="m-startupdate" /><code>{"private void StartUpdate()"}</code> | <span className="api-desc">Registers the fixed update if it isn't running.</span> |

</details>
