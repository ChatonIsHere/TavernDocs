---
title: "FaceTarget"
description: "Component that turns a creature's head bone toward its current target, within a maximum angle, and syncs the head rotation to clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FaceTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

Component that turns a creature's head bone toward its current target, within a maximum angle, and syncs the head rotation to clients. The server drives it; nothing in code calls it, so prefab events probably do.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FaceTarget()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Static profiling counter shared by every `FaceTarget`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Static profiling counter shared by every `FaceTarget`. |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | The creature whose target is faced. |
| <Link id="m-currentrotation" /><code>{"private Quaternion currentRotation"}</code> | The head's local rotation as last set by this component. |
| <Link id="m-head" /><code>{"private Transform head"}</code> | The bone that is rotated. |
| <Link id="m-isyfacingback" /><code>{"private bool isYFacingBack"}</code> | Flips the look direction, for head bones whose forward axis points backwards. |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | Most the head may turn from its rest rotation, in degrees (default 45). |
| <Link id="m-originalrotation" /><code>{"private Quaternion originalRotation"}</code> | The head's rest local rotation, captured in the editor. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Turn speed in degrees per second (default 10). |
| <Link id="m-serverrotation" /><code>{"private Quaternion serverRotation"}</code> | Rotation being sent, or on clients the last rotation received. |
| <Link id="m-updateface" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateFace"}</code> | The registered LateUpdate method currently running (facing, easing back, or remote), or null. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared LateUpdate module named "Agent Face Target" that runs every head update. |

</details>

## Properties

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | 32 bits per sync: the compressed head rotation. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Shared profiling counter for `PrepareForWrite`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Shared profiling counter for `Serialize`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setactiveserver" /><code>{"void SetActiveServer(bool isFacing)"}</code> | Server: starts facing the target if true, otherwise eases the head back to rest. |
| <Link id="m-startfacing" /><code>{"void StartFacing()"}</code> | Starts turning the head toward the target each LateUpdate, if the agent has a target and isn't already facing. |
| <Link id="m-stopfacing" /><code>{"void StopFacing(bool isAnimatingBack)"}</code> | Stops the facing update, optionally starting an ease back to the rest rotation. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-faceposition" /><code>{"private void FacePosition(Vector3 position)"}</code> | Rotates the head toward a world position, clamped to `maxAngle` from its rest rotation and limited to `rotationSpeed` degrees per second. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the facing update without easing back. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: stores the head's current local rotation as `originalRotation`. |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | Copies the current head rotation for sending. Delta writes only go out while a head update is running. |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Sends the head rotation. On clients a full write snaps the head, a delta write starts easing toward it. |
| <Link id="m-updateface-2" /><code>{"private void UpdateFace()"}</code> | Per-frame update while facing: follows the target, or eases back once the agent has none. |
| <Link id="m-updatefaceback" /><code>{"private void UpdateFaceBack()"}</code> | Per-frame update that turns the head back to rest and stops when within 1 degree. |
| <Link id="m-updateremoteface" /><code>{"private void UpdateRemoteFace()"}</code> | Client: per-frame update that eases the head to the rotation the server sent, then stops. |

</details>
