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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)
- **Derived types** [`NetworkAxisPosition`](/game-api/types/alta-networking/networkaxisposition), [`NetworkAxisRotation`](/game-api/types/alta-networking/networkaxisrotation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected NetworkAxisValue()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stats for preparing these values. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stats for serializing these values. |
| <Link id="m-targettransform" /><code>{"protected Transform TargetTransform"}</code> | The transform the value moves. |

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> |
| <Link id="m-hassynced" /><code>{"private bool hasSynced"}</code> |
| <Link id="m-isalwayssnapping" /><code>{"private bool isAlwaysSnapping"}</code> |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> |
| <Link id="m-localaxis" /><code>{"private Vector3 localAxis"}</code> |
| <Link id="m-precision" /><code>{"private float precision"}</code> |
| <Link id="m-snapthreshold" /><code>{"private float snapThreshold"}</code> |
| <Link id="m-value" /><code>{"private float value"}</code> |
| <Link id="m-valuethreshold" /><code>{"private float valueThreshold"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"protected abstract float CurrentValue { get; }"}</code> | Subclass: the value as it is now on this side. |
| <Link id="m-localaxis-2" /><code>{"protected Vector3 LocalAxis { get; }"}</code> | Local axis the value runs along. |
| <Link id="m-maximumvalue" /><code>{"protected abstract float MaximumValue { get; }"}</code> | Subclass: highest value, for compression. |
| <Link id="m-minimumvalue" /><code>{"protected abstract float MinimumValue { get; }"}</code> | Subclass: lowest value, for compression. |

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Client: registers a fixed update to smooth toward synced values. Snaps instead if the lerp time is 1 or more. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: removes the smoothing update. |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | True if the value moved more than the threshold since the last send. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads the value. Clients snap after receiving if the gap is over the snap threshold, otherwise smooth. |
| <Link id="m-setpositionlerp" /><code>{"void SetPositionLerp(float lerp)"}</code> | Server: sets the value as a 0 to 1 fraction of its range. |
| <Link id="m-applyvalue" /><code>{"protected abstract void ApplyValue(float value)"}</code> | Subclass: sets the transform to a value. |
| <Link id="m-getdifference" /><code>{"protected abstract float GetDifference(float currentValue, float value)"}</code> | Subclass: gap between two values. |
| <Link id="m-lerptovalue" /><code>{"protected abstract float LerpToValue(float value, float lerpValue)"}</code> | Subclass: one smoothing step toward a value. |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-snap" /><code>{"private void Snap()"}</code> |

</details>
