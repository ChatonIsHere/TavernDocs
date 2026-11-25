---
title: "NetworkAxisValue"
description: "abstract class NetworkAxisValue in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkAxisValue

An **abstract class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)
- **Derived types** [`NetworkAxisPosition`](/game-api/types/alta-networking/networkaxisposition), [`NetworkAxisRotation`](/game-api/types/alta-networking/networkaxisrotation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkAxisValue()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> |  |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> |  |
| <Link id="m-hassynced" /><code>{"private bool hasSynced"}</code> |  |
| <Link id="m-isalwayssnapping" /><code>{"private bool isAlwaysSnapping"}</code> |  |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> |  |
| <Link id="m-localaxis" /><code>{"private Vector3 localAxis"}</code> |  |
| <Link id="m-precision" /><code>{"private float precision"}</code> |  |
| <Link id="m-snapthreshold" /><code>{"private float snapThreshold"}</code> |  |
| <Link id="m-targettransform" /><code>{"protected Transform TargetTransform"}</code> |  |
| <Link id="m-value" /><code>{"private float value"}</code> |  |
| <Link id="m-valuethreshold" /><code>{"private float valueThreshold"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |
| <Link id="m-currentvalue" /><code>{"protected abstract float CurrentValue { get; }"}</code> |  |
| <Link id="m-localaxis-2" /><code>{"protected Vector3 LocalAxis { get; }"}</code> |  |
| <Link id="m-maximumvalue" /><code>{"protected abstract float MaximumValue { get; }"}</code> |  |
| <Link id="m-minimumvalue" /><code>{"protected abstract float MinimumValue { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-setpositionlerp" /><code>{"void SetPositionLerp(float lerp)"}</code> |  |
| <Link id="m-applyvalue" /><code>{"protected abstract void ApplyValue(float value)"}</code> |  |
| <Link id="m-getdifference" /><code>{"protected abstract float GetDifference(float currentValue, float value)"}</code> |  |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> |  |
| <Link id="m-lerptovalue" /><code>{"protected abstract float LerpToValue(float value, float lerpValue)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-snap" /><code>{"private void Snap()"}</code> |  |
