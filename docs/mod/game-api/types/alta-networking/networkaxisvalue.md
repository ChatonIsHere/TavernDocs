---
title: "NetworkAxisValue"
description: "Base for a networked value along one axis (a slider, lever or hinge position)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkAxisValue

An **abstract class** in `Root.Township`, `Alta.Networking`.

Base for a networked value along one axis (a slider, lever or hinge position). The server sends it compressed in a range; clients lerp to it, or snap when it's far off.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)
- **Derived types** [`NetworkAxisPosition`](/mod/game-api/types/alta-networking/networkaxisposition), [`NetworkAxisRotation`](/mod/game-api/types/alta-networking/networkaxisrotation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkAxisValue()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stats for preparing these values.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stats for serializing these values.</span> |
| <Link id="m-targettransform" /><code>{"protected Transform TargetTransform"}</code> | <span className="api-desc">The transform the value moves.</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> | <span className="api-desc">The registered fixed update lerp, or null when not lerping.</span> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | <span className="api-desc">Lerp factor per fixed update on clients; 1 or more means always snap.</span> |
| <Link id="m-hassynced" /><code>{"private bool hasSynced"}</code> | <span className="api-desc">True once a value has been sent or received.</span> |
| <Link id="m-isalwayssnapping" /><code>{"private bool isAlwaysSnapping"}</code> | <span className="api-desc">True on the server or when lerping is off, so values are applied at once.</span> |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> | <span className="api-desc">True while a snap is waiting for the end of receiving.</span> |
| <Link id="m-localaxis" /><code>{"private Vector3 localAxis"}</code> | <span className="api-desc">The normalized axis the value is measured along.</span> |
| <Link id="m-precision" /><code>{"private float precision"}</code> | <span className="api-desc">Step size used to pack the value.</span> |
| <Link id="m-snapthreshold" /><code>{"private float snapThreshold"}</code> | <span className="api-desc">Difference above which clients snap instead of lerping (-1 turns snapping off).</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">The last synced value.</span> |
| <Link id="m-valuethreshold" /><code>{"private float valueThreshold"}</code> | <span className="api-desc">Smallest change that counts as worth sending or lerping.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"protected abstract float CurrentValue { get; }"}</code> | <span className="api-desc">Subclass: the value as it is now on this side.</span> |
| <Link id="m-localaxis-2" /><code>{"protected Vector3 LocalAxis { get; }"}</code> | <span className="api-desc">Local axis the value runs along.</span> |
| <Link id="m-maximumvalue" /><code>{"protected abstract float MaximumValue { get; }"}</code> | <span className="api-desc">Subclass: highest value, for compression.</span> |
| <Link id="m-minimumvalue" /><code>{"protected abstract float MinimumValue { get; }"}</code> | <span className="api-desc">Subclass: lowest value, for compression.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Bits needed for the value at the set precision over the range.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Returns the shared `prepareForWriteTimer`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Returns the shared `serializeTimer`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Client: registers a fixed update to smooth toward synced values. Snaps instead if the lerp time is 1 or more.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: removes the smoothing update.</span> |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">True if the value moved more than the threshold since the last send.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads the value. Clients snap after receiving if the gap is over the snap threshold, otherwise smooth.</span> |
| <Link id="m-setpositionlerp" /><code>{"void SetPositionLerp(float lerp)"}</code> | <span className="api-desc">Server: sets the value as a 0 to 1 fraction of its range.</span> |
| <Link id="m-applyvalue" /><code>{"protected abstract void ApplyValue(float value)"}</code> | <span className="api-desc">Subclass: sets the transform to a value.</span> |
| <Link id="m-getdifference" /><code>{"protected abstract float GetDifference(float currentValue, float value)"}</code> | <span className="api-desc">Subclass: gap between two values.</span> |
| <Link id="m-lerptovalue" /><code>{"protected abstract float LerpToValue(float value, float lerpValue)"}</code> | <span className="api-desc">Subclass: one smoothing step toward a value.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | <span className="api-desc">Client fixed update: lerps toward the synced value, then sets it exactly and stops once close enough.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the fixed update lerp.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Restarts the fixed update lerp if the entity is set up and not always snapping.</span> |
| <Link id="m-snap" /><code>{"private void Snap()"}</code> | <span className="api-desc">Applies the synced value straight away; runs at the end of receiving.</span> |

</details>
