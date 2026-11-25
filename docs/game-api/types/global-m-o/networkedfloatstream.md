---
title: "NetworkedFloatStream"
description: "class NetworkedFloatStream in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedFloatStream

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`ISavable<NetworkedFloatStreamSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<NetworkedFloatStreamSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`NetworkedFloatStreamSaveData`](/game-api/types/global-m-o/networkedfloatstreamsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedFloatStream()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bits" /><code>{"private int bits"}</code> |  |
| <Link id="m-changed" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" changed"}</code> |  |
| <Link id="m-hasreceived" /><code>{"private bool hasReceived"}</code> |  |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> |  |
| <Link id="m-max" /><code>{"private float max"}</code> |  |
| <Link id="m-min" /><code>{"private float min"}</code> |  |
| <Link id="m-prepareforwritetimer" /><code>{"private static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-remotelerppersecond" /><code>{"private float remoteLerpPerSecond"}</code> |  |
| <Link id="m-serializetimer" /><code>{"private static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-targetvalue" /><code>{"private float targetValue"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-value" /><code>{"private float value"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumbits" /><code>{"int MaximumBits { get; }"}</code> |  |
| <Link id="m-prepareforwritetimer-2" /><code><Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-serializetimer-2" /><code><Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" SerializeTimer { get; }"}</code> |  |
| <Link id="m-value-2" /><code>{"float Value { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed-2" /><code>{"event Action<float> Changed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-modifyvalue" /><code>{"void ModifyValue(float delta)"}</code> |  |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-setvalue" /><code>{"void SetValue(float value)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-remoteupdate" /><code>{"private void RemoteUpdate()"}</code> |  |
| <Link id="m-setvalueinternal" /><code>{"private void SetValueInternal(float value)"}</code> |  |
