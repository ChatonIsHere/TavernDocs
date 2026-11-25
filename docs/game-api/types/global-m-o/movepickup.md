---
title: "MovePickup"
description: "class MovePickup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovePickup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MovePickupSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MovePickupSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)
- **Derived types** [`MovePickupSaveData`](/game-api/types/global-m-o/movepickupsavedata)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovePickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-bottombounce" /><code>{"private float bottomBounce"}</code> |  |
| <Link id="m-forceperhand" /><code>{"private float[] forcePerHand"}</code> |  |
| <Link id="m-isdisabling" /><code>{"private bool isDisabling"}</code> |  |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> |  |
| <Link id="m-maxhanddistance" /><code>{"private float maxHandDistance"}</code> |  |
| <Link id="m-maximumnegativespeed" /><code>{"private float maximumNegativeSpeed"}</code> |  |
| <Link id="m-maximumpositivespeed" /><code>{"private float maximumPositiveSpeed"}</code> |  |
| <Link id="m-movement" /><code>{"private float movement"}</code> |  |
| <Link id="m-movementaxis" /><code>{"private Vector3 movementAxis"}</code> |  |
| <Link id="m-negativeforce" /><code>{"private float negativeForce"}</code> |  |
| <Link id="m-pickups" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups"}</code> |  |
| <Link id="m-pidcontroller" /><code>{"private PidController pidController"}</code> |  |
| <Link id="m-pidsetup" /><code>{"private PidController.Setup pidSetup"}</code> |  |
| <Link id="m-relativegrabs" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> relativeGrabs"}</code> |  |
| <Link id="m-startingposition" /><code>{"private Vector3 startingPosition"}</code> |  |
| <Link id="m-syncmovement" /><code>{"private float syncMovement"}</code> |  |
| <Link id="m-syncvelocity" /><code>{"private float syncVelocity"}</code> |  |
| <Link id="m-topbounce" /><code>{"private float topBounce"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-velocity" /><code>{"private float velocity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-runfixedupdate" /><code>{"private void RunFixedUpdate()"}</code> |  |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-startupdate" /><code>{"private void StartUpdate()"}</code> |  |
