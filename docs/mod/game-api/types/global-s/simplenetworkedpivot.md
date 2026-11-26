---
title: "SimpleNetworkedPivot"
description: "Syncs one rotation axis of a hinged part (a pivot driven by a pickup) from the server to clients while nobody is holding it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleNetworkedPivot

A **class** in `Root.Township`, the global namespace.

Syncs one rotation axis of a hinged part (a pivot driven by a pickup) from the server to clients while nobody is holding it. Both sides: the server writes the angle, clients ease towards it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleNetworkedPivot()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Static timing stats for `PrepareForWrite` across all pivots.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Static timing stats for `Serialize` across all pivots.</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | <span className="api-desc">Local rotation axis (normalized) that is synced.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Fraction of the remaining angle closed each fixed update on clients.</span> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | <span className="api-desc">Highest angle in degrees the sync range covers.</span> |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | <span className="api-desc">Lowest angle in degrees the sync range covers.</span> |
| <Link id="m-precision" /><code>{"private float precision"}</code> | <span className="api-desc">Angle precision used for compression and the at-target check.</span> |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> | <span className="api-desc">The pickup whose held state decides when the angle is synced.</span> |
| <Link id="m-targetrotation" /><code>{"private float targetRotation"}</code> | <span className="api-desc">Last angle written by the server or read by the client.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">The transform whose local rotation is synced.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle of the registered client easing update, if running.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Fixed-update module the easing update runs in.</span> |

</details>

## Properties

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Bits needed for the held flag plus the angle at the set range and precision.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Shared timing stats for `PrepareForWrite`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Shared timing stats for `Serialize`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Client: hooks the pickup's interaction start and scene destroy so the easing update stops.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishserialization" /><code>{"private void FinishSerialization("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Client: stops the easing update when someone starts interacting with the pickup.</span> |
| <Link id="m-isatposition" /><code>{"private bool IsAtPosition(float currentRotation)"}</code> | <span className="api-desc">True when the given angle is within `precision` of the target angle.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Client: removes the easing update.</span> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Asks to send only when the pickup is not held and its rigidbody is awake.</span> |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Removes the easing update when the entity is destroyed by the scene.</span> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes whether the pickup is held and, if not, the angle on `axis`. Clients snap on full reads and ease otherwise.</span> |
| <Link id="m-updateremote" /><code>{"private void UpdateRemote()"}</code> | <span className="api-desc">Client: eases the transform towards the target angle and stops once there and the rigidbody sleeps.</span> |

</details>
