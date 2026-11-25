---
title: "NetworkedIKBone"
description: "class NetworkedIKBone in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedIKBone

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedIKBone()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-anglethreshold" /><code>{"private float angleThreshold"}</code> |  |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> |  |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |  |
| <Link id="m-latestrotation" /><code>{"private Quaternion latestRotation"}</code> |  |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |  |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> |  |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastsynctime" /><code>{"float LastSyncTime { get; private set; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> |  |
