---
title: "MovePickup"
description: "An object that slides along one axis when players grab and pull its handles, like a heavy door or lift."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovePickup

A **class** in `Root.Township`, no namespace.

An object that slides along one axis when players grab and pull its handles, like a heavy door or lift. The server works out the force from hand positions with a PID controller and syncs movement and speed.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MovePickupSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MovePickupSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)
- **Derived types** [`MovePickupSaveData`](/game-api/types/global-m-o/movepickupsavedata)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovePickup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stat for all `MovePickup`s. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stat for all `MovePickup`s. |

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bottombounce" /><code>{"private float bottomBounce"}</code> | Share of speed reversed when it hits the bottom. |
| <Link id="m-forceperhand" /><code>{"private float[] forcePerHand"}</code> | Maximum force by number of hands holding (1 to 4). |
| <Link id="m-isdisabling" /><code>{"private bool isDisabling"}</code> | Not used. |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> | How far it can move along the axis. |
| <Link id="m-maxhanddistance" /><code>{"private float maxHandDistance"}</code> | Cap on how much one hand's pull counts. |
| <Link id="m-maximumnegativespeed" /><code>{"private float maximumNegativeSpeed"}</code> | Fastest speed moving back down the axis. |
| <Link id="m-maximumpositivespeed" /><code>{"private float maximumPositiveSpeed"}</code> | Fastest speed moving up the axis. |
| <Link id="m-movement" /><code>{"private float movement"}</code> | Current distance from the start position. Saved. |
| <Link id="m-movementaxis" /><code>{"private Vector3 movementAxis"}</code> | Local axis it moves along. Set to up if left at zero. |
| <Link id="m-negativeforce" /><code>{"private float negativeForce"}</code> | Constant force pushing it back toward the start, like gravity. |
| <Link id="m-pickups" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups"}</code> | Handle pickups whose grabs move it. |
| <Link id="m-pidcontroller" /><code>{"private PidController pidController"}</code> | PID controller that turns hand pull into force. |
| <Link id="m-pidsetup" /><code>{"private PidController.Setup pidSetup"}</code> | PID gains for the controller. |
| <Link id="m-relativegrabs" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> relativeGrabs"}</code> | Server: each holding hand and where it first grabbed, in local space. |
| <Link id="m-startingposition" /><code>{"private Vector3 startingPosition"}</code> | Local position at rest. |
| <Link id="m-syncmovement" /><code>{"private float syncMovement"}</code> | Last movement value sent or received. |
| <Link id="m-syncvelocity" /><code>{"private float syncVelocity"}</code> | Last speed value sent or received. |
| <Link id="m-topbounce" /><code>{"private float topBounce"}</code> | Share of speed reversed when it hits the top. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Fixed update registration. Removed once it rests at the bottom with no hands. |
| <Link id="m-velocity" /><code>{"private float velocity"}</code> | Current speed along the axis. Saved. |

</details>

## Properties

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | Always 32. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Shared timing stat for `PrepareForWrite`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Shared timing stat for `Serialize`. |

</details>

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores the start position, creates the PID controller and hooks grab start and end on each handle pickup. |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Forgets a hand that let go. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the fixed update. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the movement axis in the editor. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Pushes changed PID values to the running controller. |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | Returns true if movement or speed changed since the last sync. |
| <Link id="m-runfixedupdate" /><code>{"private void RunFixedUpdate()"}</code> | Server: adds force from how far hands pulled along the axis. Both: applies the downward force, bounces at the ends and moves the object. |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Syncs movement and speed, or a single bit when both are zero. Client: applies them and starts updating. |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Records where a hand grabbed and starts updating. |
| <Link id="m-startupdate" /><code>{"private void StartUpdate()"}</code> | Registers the fixed update if it isn't running. |

</details>
