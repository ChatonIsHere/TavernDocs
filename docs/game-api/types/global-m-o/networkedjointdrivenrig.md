---
title: "NetworkedJointDrivenRig"
description: "class NetworkedJointDrivenRig in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedJointDrivenRig

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedJointDrivenRig()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-anglethreshold" /><code>{"private float angleThreshold"}</code> |  |
| <Link id="m-bones" /><code>{"private Transform[] bones"}</code> |  |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> |  |
| <Link id="m-issendingbones" /><code>{"private bool[] isSendingBones"}</code> |  |
| <Link id="m-oldrotations" /><code>{"private Quaternion[] oldRotations"}</code> |  |
| <Link id="m-rigidbodies" /><code>{"private Rigidbody[] rigidbodies"}</code> |  |
| <Link id="m-targetrotations" /><code>{"private Quaternion[] targetRotations"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ishandlingremote" /><code>{"bool IsHandlingRemote { get; set; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-applyforcetorotaterigidbody" /><code>{"private void ApplyForceToRotateRigidbody(Rigidbody rigidbody, Quaternion targetRotation)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> |  |
| <Link id="m-setuprotationarrays" /><code>{"private void SetupRotationArrays(ref Quaternion[] rotationArray)"}</code> |  |
