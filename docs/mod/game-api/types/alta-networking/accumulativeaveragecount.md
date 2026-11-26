---
title: "AccumulativeAverageCount"
description: "A counter that keeps a running average of how many times something happened per period."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccumulativeAverageCount

A **class** in `Root.Township`, `Alta.Networking`.

A counter that keeps a running average of how many times something happened per period. Used for networking stats such as per-type serialize counts.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccumulativeAverageCount()"}</code> | <span className="api-desc">Creates an `AccumulativeAverageCount` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | <span className="api-desc">Count since the last `RecordAndResetCount`.</span> |
| <Link id="m-counts" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" counts"}</code> | <span className="api-desc">Running average of the recorded counts, read through `Count`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count-2" /><code>{"double Count { get; }"}</code> | <span className="api-desc">Average of the recorded counts.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearrecord" /><code>{"void ClearRecord()"}</code> | <span className="api-desc">Resets the recorded average.</span> |
| <Link id="m-increment" /><code>{"void Increment()"}</code> | <span className="api-desc">Adds one to the current period's count.</span> |
| <Link id="m-recordandresetcount" /><code>{"void RecordAndResetCount()"}</code> | <span className="api-desc">Adds the current count to the average and starts a new period at zero.</span> |

## Used in

Members of other types that take, return or hold a `AccumulativeAverageCount`:

<div className="api-used-in">

[`LevelSelector.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-world-generation/levelselector#m-alta-networking-inetworkserialized-prepareforwritetimer), [`LevelSelector.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-world-generation/levelselector#m-alta-networking-inetworkserialized-serializetimer), [`LevelSelector.prepareForWriteTimer`](/mod/game-api/types/alta-world-generation/levelselector#m-prepareforwritetimer), [`LevelSelector.serializeTimer`](/mod/game-api/types/alta-world-generation/levelselector#m-serializetimer), [`HeatPointCollection.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-stats-effects/heatpointcollection#m-alta-networking-inetworkserialized-prepareforwritetimer), [`HeatPointCollection.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-stats-effects/heatpointcollection#m-alta-networking-inetworkserialized-serializetimer), [`HeatPointCollection.prepareForWriteTimer`](/mod/game-api/types/alta-stats-effects/heatpointcollection#m-prepareforwritetimer), [`HeatPointCollection.serializeTimer`](/mod/game-api/types/alta-stats-effects/heatpointcollection#m-serializetimer), [`FaceTarget.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-intelligence/facetarget#m-alta-networking-inetworkserialized-prepareforwritetimer), [`FaceTarget.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-intelligence/facetarget#m-alta-networking-inetworkserialized-serializetimer), [`FaceTarget.prepareForWriteTimer`](/mod/game-api/types/alta-intelligence/facetarget#m-prepareforwritetimer), [`FaceTarget.serializeTimer`](/mod/game-api/types/alta-intelligence/facetarget#m-serializetimer), [`RotateToTargetWorldXZ.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-intelligence/rotatetotargetworldxz#m-alta-networking-inetworkserialized-prepareforwritetimer), [`RotateToTargetWorldXZ.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-intelligence/rotatetotargetworldxz#m-alta-networking-inetworkserialized-serializetimer), [`RotateToTargetWorldXZ.prepareForWriteTimer`](/mod/game-api/types/alta-intelligence/rotatetotargetworldxz#m-prepareforwritetimer), [`RotateToTargetWorldXZ.serializeTimer`](/mod/game-api/types/alta-intelligence/rotatetotargetworldxz#m-serializetimer), [`NetworkAnimator.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-networking/networkanimator#m-alta-networking-inetworkserialized-prepareforwritetimer), [`NetworkAnimator.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-networking/networkanimator#m-alta-networking-inetworkserialized-serializetimer), [`NetworkAnimator.prepareForWriteTimer`](/mod/game-api/types/alta-networking/networkanimator#m-prepareforwritetimer), [`NetworkAnimator.serializeTimer`](/mod/game-api/types/alta-networking/networkanimator#m-serializetimer), [`INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-networking/inetworkserialized#m-prepareforwritetimer), [`INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-networking/inetworkserialized#m-serializetimer), [`NetworkAxisValue.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-networking/networkaxisvalue#m-alta-networking-inetworkserialized-prepareforwritetimer), [`NetworkAxisValue.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-networking/networkaxisvalue#m-alta-networking-inetworkserialized-serializetimer), [`NetworkAxisValue.prepareForWriteTimer`](/mod/game-api/types/alta-networking/networkaxisvalue#m-prepareforwritetimer), [`NetworkAxisValue.serializeTimer`](/mod/game-api/types/alta-networking/networkaxisvalue#m-serializetimer), [`NetworkRigidbody.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-networking/networkrigidbody#m-alta-networking-inetworkserialized-prepareforwritetimer), [`NetworkRigidbody.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-networking/networkrigidbody#m-alta-networking-inetworkserialized-serializetimer), [`NetworkRigidbody.prepareForWriteTimer`](/mod/game-api/types/alta-networking/networkrigidbody#m-prepareforwritetimer), [`NetworkRigidbody.serializeTimer`](/mod/game-api/types/alta-networking/networkrigidbody#m-serializetimer), [`NetworkSerializedProfiler.prepareForWriteTimers`](/mod/game-api/types/alta-networking/networkserializedprofiler#m-prepareforwritetimers), [`NetworkSerializedProfiler.serializeTimers`](/mod/game-api/types/alta-networking/networkserializedprofiler#m-serializetimers), [`NetworkTransform.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/alta-networking/networktransform#m-alta-networking-inetworkserialized-prepareforwritetimer), [`NetworkTransform.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/alta-networking/networktransform#m-alta-networking-inetworkserialized-serializetimer), [`NetworkTransform.prepareForWriteTimer`](/mod/game-api/types/alta-networking/networktransform#m-prepareforwritetimer), [`NetworkTransform.serializeTimer`](/mod/game-api/types/alta-networking/networktransform#m-serializetimer), [`HandGestureController.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/global-e-h/handgesturecontroller#m-alta-networking-inetworkserialized-prepareforwritetimer), [`HandGestureController.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/global-e-h/handgesturecontroller#m-alta-networking-inetworkserialized-serializetimer), [`HandGestureController.prepareForWriteTimer`](/mod/game-api/types/global-e-h/handgesturecontroller#m-prepareforwritetimer), [`HandGestureController.serializeTimer`](/mod/game-api/types/global-e-h/handgesturecontroller#m-serializetimer), [`LocomotionController.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/global-i-l/locomotioncontroller#m-alta-networking-inetworkserialized-prepareforwritetimer), [`LocomotionController.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/global-i-l/locomotioncontroller#m-alta-networking-inetworkserialized-serializetimer), [`LocomotionController.prepareForWriteTimer`](/mod/game-api/types/global-i-l/locomotioncontroller#m-prepareforwritetimer), [`LocomotionController.serializeTimer`](/mod/game-api/types/global-i-l/locomotioncontroller#m-serializetimer), [`MovePickup.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/global-m-o/movepickup#m-alta-networking-inetworkserialized-prepareforwritetimer), [`MovePickup.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/global-m-o/movepickup#m-alta-networking-inetworkserialized-serializetimer), [`MovePickup.prepareForWriteTimer`](/mod/game-api/types/global-m-o/movepickup#m-prepareforwritetimer), [`MovePickup.serializeTimer`](/mod/game-api/types/global-m-o/movepickup#m-serializetimer), [`NetworkedFloatStream.prepareForWriteTimer`](/mod/game-api/types/global-m-o/networkedfloatstream#m-prepareforwritetimer), [`NetworkedFloatStream.PrepareForWriteTimer`](/mod/game-api/types/global-m-o/networkedfloatstream#m-prepareforwritetimer-2), [`NetworkedFloatStream.serializeTimer`](/mod/game-api/types/global-m-o/networkedfloatstream#m-serializetimer), [`NetworkedFloatStream.SerializeTimer`](/mod/game-api/types/global-m-o/networkedfloatstream#m-serializetimer-2), [`NetworkedIKBody.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/global-m-o/networkedikbody#m-alta-networking-inetworkserialized-prepareforwritetimer), [`NetworkedIKBody.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/global-m-o/networkedikbody#m-alta-networking-inetworkserialized-serializetimer), [`NetworkedIKBody.prepareForWriteTimer`](/mod/game-api/types/global-m-o/networkedikbody#m-prepareforwritetimer), [`NetworkedIKBody.serializeTimer`](/mod/game-api/types/global-m-o/networkedikbody#m-serializetimer), [`NetworkedIKBone.Alta.Networking.INetworkSerialized.PrepareForWriteTimer`](/mod/game-api/types/global-m-o/networkedikbone#m-alta-networking-inetworkserialized-prepareforwritetimer), [`NetworkedIKBone.Alta.Networking.INetworkSerialized.SerializeTimer`](/mod/game-api/types/global-m-o/networkedikbone#m-alta-networking-inetworkserialized-serializetimer), [`NetworkedIKBone.prepareForWriteTimer`](/mod/game-api/types/global-m-o/networkedikbone#m-prepareforwritetimer), [`NetworkedIKBone.serializeTimer`](/mod/game-api/types/global-m-o/networkedikbone#m-serializetimer) and 22 more.

</div>
