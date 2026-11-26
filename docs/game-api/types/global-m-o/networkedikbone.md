---
title: "NetworkedIKBone"
description: "Syncs one transform's local rotation from the server to clients, who blend toward it in fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedIKBone

A **class** in `Root.Township`, no namespace.

Syncs one transform's local rotation from the server to clients, who blend toward it in fixed update.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkedIKBone()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stats for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stats for `Serialize`. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglethreshold" /><code>{"private float angleThreshold"}</code> | Degrees the bone must turn before it is sent again. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Transform being rotated. |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | Blend factor per fixed update. |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | Set by `Initialize`; blending waits for it. |
| <Link id="m-latestrotation" /><code>{"private Quaternion latestRotation"}</code> | Last blended rotation. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Last sent or received rotation. |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | Unused in this build. |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> | Constant 30; unused in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastsynctime" /><code>{"float LastSyncTime { get; private set; }"}</code> | Time of the last sync, or 0 if none yet. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | 33 bits. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Returns the shared `prepareForWriteTimer`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Returns the shared `serializeTimer`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Marks the component initialized. |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | True if the rotation has moved more than `angleThreshold` since it was last sent. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads a flag and the compressed rotation. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Client: blends toward the received rotation. |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | Blends the transform toward the received rotation once one has arrived. |

</details>
