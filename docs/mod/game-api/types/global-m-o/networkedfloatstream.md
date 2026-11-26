---
title: "NetworkedFloatStream"
description: "Component holding one float between a min and max."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedFloatStream

A **class** in `Root.Township`, the global namespace.

Component holding one float between a min and max. The server sets it and it reaches clients in the regular entity stream using a set number of bits. Saved with the entity.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized), [`ISavable<NetworkedFloatStreamSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<NetworkedFloatStreamSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`NetworkedFloatStreamSaveData`](/mod/game-api/types/global-m-o/networkedfloatstreamsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedFloatStream()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bits" /><code>{"private int bits"}</code> | <span className="api-desc">Bits used to send the value between `min` and `max`.</span> |
| <Link id="m-changed" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" changed"}</code> | <span className="api-desc">Unity event fired when the value changes.</span> |
| <Link id="m-hasreceived" /><code>{"private bool hasReceived"}</code> | <span className="api-desc">Whether a client has had its first value; the first one is applied at once.</span> |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> | <span className="api-desc">True when the value needs sending.</span> |
| <Link id="m-max" /><code>{"private float max"}</code> | <span className="api-desc">Highest value.</span> |
| <Link id="m-min" /><code>{"private float min"}</code> | <span className="api-desc">Lowest value.</span> |
| <Link id="m-prepareforwritetimer" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stats for `PrepareForWrite`.</span> |
| <Link id="m-remotelerppersecond" /><code>{"private float remoteLerpPerSecond"}</code> | <span className="api-desc">If above 0, clients ease toward new values at this rate instead of snapping.</span> |
| <Link id="m-serializetimer" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stats for `Serialize`.</span> |
| <Link id="m-targetvalue" /><code>{"private float targetValue"}</code> | <span className="api-desc">Value a client is easing toward.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Update handle while easing.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Current value; also the starting value on the server.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumbits" /><code>{"int MaximumBits { get; }"}</code> | <span className="api-desc">Bits used to send the value (2 to 32).</span> |
| <Link id="m-prepareforwritetimer-2" /><code><Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Shared profiling timer.</span> |
| <Link id="m-serializetimer-2" /><code><Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" SerializeTimer { get; }"}</code> | <span className="api-desc">Shared profiling timer.</span> |
| <Link id="m-value-2" /><code>{"float Value { get; }"}</code> | <span className="api-desc">Current value.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed-2" /><code>{"event Action<float> Changed"}</code> | <span className="api-desc">Fired when the value changes, on any side.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: reapplies the starting value so change events fire.</span> |
| <Link id="m-modifyvalue" /><code>{"void ModifyValue(float delta)"}</code> | <span className="api-desc">Server: adds to the value, clamped.</span> |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">True once after the value changes, so it is only sent when needed.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads the value. On clients it can lerp to the new value if `remoteLerpPerSecond` is set.</span> |
| <Link id="m-setvalue" /><code>{"void SetValue(float value)"}</code> | <span className="api-desc">Server only: sets the value, clamped to min and max. Does nothing on clients.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the remote lerp update.</span> |
| <Link id="m-remoteupdate" /><code>{"private void RemoteUpdate()"}</code> | <span className="api-desc">Client: eases the value toward the last received one each frame, then stops.</span> |
| <Link id="m-setvalueinternal" /><code>{"private void SetValueInternal(float value)"}</code> | <span className="api-desc">Sets the value, marks it for sending and fires both change events if it changed.</span> |

</details>
