---
title: "INetworkSerialized"
description: "interface INetworkSerialized in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkSerialized

An **interface** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`LevelSelector`](/game-api/types/alta-world-generation/levelselector), [`HeatPointCollection`](/game-api/types/alta-stats-effects/heatpointcollection), [`FaceTarget`](/game-api/types/alta-intelligence/facetarget), [`RotateToTargetWorldXZ`](/game-api/types/alta-intelligence/rotatetotargetworldxz), [`NetworkAnimator`](/game-api/types/alta-networking/networkanimator), [`NetworkAxisValue`](/game-api/types/alta-networking/networkaxisvalue), [`NetworkRigidbody`](/game-api/types/alta-networking/networkrigidbody), [`NetworkTransform`](/game-api/types/alta-networking/networktransform), [`HandGestureController`](/game-api/types/global-e-h/handgesturecontroller), [`LocomotionController`](/game-api/types/global-i-l/locomotioncontroller), [`MovePickup`](/game-api/types/global-m-o/movepickup), [`NetworkedFloatStream`](/game-api/types/global-m-o/networkedfloatstream), [`NetworkedIKBody`](/game-api/types/global-m-o/networkedikbody), [`NetworkedIKBone`](/game-api/types/global-m-o/networkedikbone), [`NetworkedJointDrivenRig`](/game-api/types/global-m-o/networkedjointdrivenrig), [`PlayerLocomotionController`](/game-api/types/global-p/playerlocomotioncontroller), [`SimpleNetworkedPivot`](/game-api/types/global-s/simplenetworkedpivot), [`TestSerializable`](/game-api/types/global-t-x/testserializable), [`TestUnitySerializable`](/game-api/types/global-t-x/testunityserializable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumbits" /><code>{"int MaximumBits { get; }"}</code> |  |
| <Link id="m-prepareforwritetimer" /><code><Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-serializetimer" /><code><Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |

## Used in

Members of other types that take, return or hold a `INetworkSerialized`:

[`EntitySerializer.behaviours`](/game-api/types/alta-networking/entityserializer#m-behaviours), [`EntitySerializer.EntitySerializer`](/game-api/types/alta-networking/entityserializer#m-ctor), [`NetworkEntity.serializedBehaviours`](/game-api/types/alta-networking/networkentity#m-serializedbehaviours).
