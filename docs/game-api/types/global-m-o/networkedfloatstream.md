---
title: "NetworkedFloatStream"
description: "Component holding one float between a min and max."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedFloatStream

A **class** in `Root.Township`, no namespace.

Component holding one float between a min and max. The server sets it and it reaches clients in the regular entity stream using a set number of bits. Saved with the entity.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`ISavable<NetworkedFloatStreamSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<NetworkedFloatStreamSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`NetworkedFloatStreamSaveData`](/game-api/types/global-m-o/networkedfloatstreamsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkedFloatStream()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bits" /><code>{"private int bits"}</code> |
| <Link id="m-changed" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" changed"}</code> |
| <Link id="m-hasreceived" /><code>{"private bool hasReceived"}</code> |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> |
| <Link id="m-max" /><code>{"private float max"}</code> |
| <Link id="m-min" /><code>{"private float min"}</code> |
| <Link id="m-prepareforwritetimer" /><code>{"private static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |
| <Link id="m-remotelerppersecond" /><code>{"private float remoteLerpPerSecond"}</code> |
| <Link id="m-serializetimer" /><code>{"private static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |
| <Link id="m-targetvalue" /><code>{"private float targetValue"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |
| <Link id="m-value" /><code>{"private float value"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumbits" /><code>{"int MaximumBits { get; }"}</code> | Bits used to send the value (2 to 32). |
| <Link id="m-prepareforwritetimer-2" /><code><Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" PrepareForWriteTimer { get; }"}</code> | Shared profiling timer. |
| <Link id="m-serializetimer-2" /><code><Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" SerializeTimer { get; }"}</code> | Shared profiling timer. |
| <Link id="m-value-2" /><code>{"float Value { get; }"}</code> | Current value. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed-2" /><code>{"event Action<float> Changed"}</code> | Fired when the value changes, on any side. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: reapplies the starting value so change events fire. |
| <Link id="m-modifyvalue" /><code>{"void ModifyValue(float delta)"}</code> | Server: adds to the value, clamped. |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | True once after the value changes, so it is only sent when needed. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads the value. On clients it can lerp to the new value if `remoteLerpPerSecond` is set. |
| <Link id="m-setvalue" /><code>{"void SetValue(float value)"}</code> | Server only: sets the value, clamped to min and max. Does nothing on clients. |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-remoteupdate" /><code>{"private void RemoteUpdate()"}</code> |
| <Link id="m-setvalueinternal" /><code>{"private void SetValueInternal(float value)"}</code> |

</details>
