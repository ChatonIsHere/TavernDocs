---
title: "SimpleNetworkedPivot"
description: "Syncs one rotation axis of a hinged part (a pivot driven by a pickup) from the server to clients while nobody is holding it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleNetworkedPivot

A **class** in `Root.Township`, no namespace.

Syncs one rotation axis of a hinged part (a pivot driven by a pickup) from the server to clients while nobody is holding it. Both sides: the server writes the angle, clients ease towards it.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SimpleNetworkedPivot()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Static timing stats for `PrepareForWrite` across all pivots. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Static timing stats for `Serialize` across all pivots. |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | Local rotation axis (normalized) that is synced. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | Fraction of the remaining angle closed each fixed update on clients. |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | Highest angle in degrees the sync range covers. |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | Lowest angle in degrees the sync range covers. |
| <Link id="m-precision" /><code>{"private float precision"}</code> | Angle precision used for compression and the at-target check. |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> | The pickup whose held state decides when the angle is synced. |
| <Link id="m-targetrotation" /><code>{"private float targetRotation"}</code> | Last angle written by the server or read by the client. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | The transform whose local rotation is synced. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle of the registered client easing update, if running. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Fixed-update module the easing update runs in. |

</details>

## Properties

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | Bits needed for the held flag plus the angle at the set range and precision. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Shared timing stats for `PrepareForWrite`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Shared timing stats for `Serialize`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Client: hooks the pickup's interaction start and scene destroy so the easing update stops. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishserialization" /><code>{"private void FinishSerialization("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Client: stops the easing update when someone starts interacting with the pickup. |
| <Link id="m-isatposition" /><code>{"private bool IsAtPosition(float currentRotation)"}</code> | True when the given angle is within `precision` of the target angle. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Client: removes the easing update. |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | Asks to send only when the pickup is not held and its rigidbody is awake. |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Removes the easing update when the entity is destroyed by the scene. |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes whether the pickup is held and, if not, the angle on `axis`. Clients snap on full reads and ease otherwise. |
| <Link id="m-updateremote" /><code>{"private void UpdateRemote()"}</code> | Client: eases the transform towards the target angle and stops once there and the rigidbody sleeps. |

</details>
