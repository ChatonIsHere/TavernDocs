---
title: "INetworkSerialized"
description: "Implement on a component of a NetworkEntity to have its state sent by the entity's serializer on each sync."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkSerialized

An **interface** in `Root.Township`, `Alta.Networking`.

Implement on a component of a `NetworkEntity` to have its state sent by the entity's serializer on each sync. The owning side writes, others read.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`LevelSelector`](/mod/game-api/types/alta-world-generation/levelselector), [`HeatPointCollection`](/mod/game-api/types/alta-stats-effects/heatpointcollection), [`FaceTarget`](/mod/game-api/types/alta-intelligence/facetarget), [`RotateToTargetWorldXZ`](/mod/game-api/types/alta-intelligence/rotatetotargetworldxz), [`NetworkAnimator`](/mod/game-api/types/alta-networking/networkanimator), [`NetworkAxisValue`](/mod/game-api/types/alta-networking/networkaxisvalue), [`NetworkRigidbody`](/mod/game-api/types/alta-networking/networkrigidbody), [`NetworkTransform`](/mod/game-api/types/alta-networking/networktransform), [`HandGestureController`](/mod/game-api/types/global-e-h/handgesturecontroller), [`LocomotionController`](/mod/game-api/types/global-i-l/locomotioncontroller), [`MovePickup`](/mod/game-api/types/global-m-o/movepickup), [`NetworkedFloatStream`](/mod/game-api/types/global-m-o/networkedfloatstream), [`NetworkedIKBody`](/mod/game-api/types/global-m-o/networkedikbody), [`NetworkedIKBone`](/mod/game-api/types/global-m-o/networkedikbone), [`NetworkedJointDrivenRig`](/mod/game-api/types/global-m-o/networkedjointdrivenrig), [`PlayerLocomotionController`](/mod/game-api/types/global-p/playerlocomotioncontroller), [`SimpleNetworkedPivot`](/mod/game-api/types/global-s/simplenetworkedpivot), [`TestSerializable`](/mod/game-api/types/global-t-x/testserializable), [`TestUnitySerializable`](/mod/game-api/types/global-t-x/testunityserializable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumbits" /><code>{"int MaximumBits { get; }"}</code> | <span className="api-desc">Most bits `Serialize` can write. Too small and the serializer logs an error for the entity.</span> |
| <Link id="m-prepareforwritetimer" /><code><Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Counts `PrepareForWrite` calls, for profiling.</span> |
| <Link id="m-serializetimer" /><code><Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" SerializeTimer { get; }"}</code> | <span className="api-desc">Counts `Serialize` calls, for profiling.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Called on the authoritative side before writing. Return true if anything changed and the state needs sending.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Reads or writes the component's state. `isWriteFull` means a full state rather than a change.</span> |

## Used in

Members of other types that take, return or hold a `INetworkSerialized`:

<div className="api-used-in">

[`EntitySerializer.behaviours`](/mod/game-api/types/alta-networking/entityserializer#m-behaviours), [`EntitySerializer.EntitySerializer`](/mod/game-api/types/alta-networking/entityserializer#m-ctor), [`NetworkEntity.serializedBehaviours`](/mod/game-api/types/alta-networking/networkentity#m-serializedbehaviours).

</div>
