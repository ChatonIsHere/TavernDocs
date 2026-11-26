---
title: "NetworkedIKBone"
description: "Syncs one transform's local rotation from the server to clients, who blend toward it in fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedIKBone

A **class** in `Root.Township`, the global namespace.

Syncs one transform's local rotation from the server to clients, who blend toward it in fixed update.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedIKBone()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stats for `PrepareForWrite`.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stats for `Serialize`.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglethreshold" /><code>{"private float angleThreshold"}</code> | <span className="api-desc">Degrees the bone must turn before it is sent again.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Transform being rotated.</span> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | <span className="api-desc">Blend factor per fixed update.</span> |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | <span className="api-desc">Set by `Initialize`; blending waits for it.</span> |
| <Link id="m-latestrotation" /><code>{"private Quaternion latestRotation"}</code> | <span className="api-desc">Last blended rotation.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Last sent or received rotation.</span> |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> | <span className="api-desc">Constant 30; unused in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastsynctime" /><code>{"float LastSyncTime { get; private set; }"}</code> | <span className="api-desc">Time of the last sync, or 0 if none yet.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">33 bits.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Returns the shared `prepareForWriteTimer`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Returns the shared `serializeTimer`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Marks the component initialized.</span> |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">True if the rotation has moved more than `angleThreshold` since it was last sent.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads a flag and the compressed rotation.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Client: blends toward the received rotation.</span> |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | <span className="api-desc">Blends the transform toward the received rotation once one has arrived.</span> |

</details>
