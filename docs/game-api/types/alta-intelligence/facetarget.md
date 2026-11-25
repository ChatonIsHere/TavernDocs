---
title: "FaceTarget"
description: "class FaceTarget in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FaceTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FaceTarget()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> |
| <Link id="m-currentrotation" /><code>{"private Quaternion currentRotation"}</code> |
| <Link id="m-head" /><code>{"private Transform head"}</code> |
| <Link id="m-isyfacingback" /><code>{"private bool isYFacingBack"}</code> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> |
| <Link id="m-originalrotation" /><code>{"private Quaternion originalRotation"}</code> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |
| <Link id="m-serverrotation" /><code>{"private Quaternion serverRotation"}</code> |
| <Link id="m-updateface" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateFace"}</code> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |

</details>

## Properties

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-setactiveserver" /><code>{"void SetActiveServer(bool isFacing)"}</code> |
| <Link id="m-startfacing" /><code>{"void StartFacing()"}</code> |
| <Link id="m-stopfacing" /><code>{"void StopFacing(bool isAnimatingBack)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-faceposition" /><code>{"private void FacePosition(Vector3 position)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |
| <Link id="m-updateface-2" /><code>{"private void UpdateFace()"}</code> |
| <Link id="m-updatefaceback" /><code>{"private void UpdateFaceBack()"}</code> |
| <Link id="m-updateremoteface" /><code>{"private void UpdateRemoteFace()"}</code> |

</details>
