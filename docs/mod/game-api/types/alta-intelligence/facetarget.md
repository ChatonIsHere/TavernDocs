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
| <Link id="m-ctor" /><code>{"FaceTarget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Static profiling counter shared by every `FaceTarget`.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Static profiling counter shared by every `FaceTarget`.</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | <span className="api-desc">The creature whose target is faced.</span> |
| <Link id="m-currentrotation" /><code>{"private Quaternion currentRotation"}</code> | <span className="api-desc">The head's local rotation as last set by this component.</span> |
| <Link id="m-head" /><code>{"private Transform head"}</code> | <span className="api-desc">The bone that is rotated.</span> |
| <Link id="m-isyfacingback" /><code>{"private bool isYFacingBack"}</code> | <span className="api-desc">Flips the look direction, for head bones whose forward axis points backwards.</span> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | <span className="api-desc">Most the head may turn from its rest rotation, in degrees (default 45).</span> |
| <Link id="m-originalrotation" /><code>{"private Quaternion originalRotation"}</code> | <span className="api-desc">The head's rest local rotation, captured in the editor.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Turn speed in degrees per second (default 10).</span> |
| <Link id="m-serverrotation" /><code>{"private Quaternion serverRotation"}</code> | <span className="api-desc">Rotation being sent, or on clients the last rotation received.</span> |
| <Link id="m-updateface" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateFace"}</code> | <span className="api-desc">The registered LateUpdate method currently running (facing, easing back, or remote), or null.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared LateUpdate module named "Agent Face Target" that runs every head update.</span> |

</details>

## Properties

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">32 bits per sync: the compressed head rotation.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Shared profiling counter for `PrepareForWrite`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Shared profiling counter for `Serialize`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setactiveserver" /><code>{"void SetActiveServer(bool isFacing)"}</code> | <span className="api-desc">Server: starts facing the target if true, otherwise eases the head back to rest.</span> |
| <Link id="m-startfacing" /><code>{"void StartFacing()"}</code> | <span className="api-desc">Starts turning the head toward the target each LateUpdate, if the agent has a target and isn't already facing.</span> |
| <Link id="m-stopfacing" /><code>{"void StopFacing(bool isAnimatingBack)"}</code> | <span className="api-desc">Stops the facing update, optionally starting an ease back to the rest rotation.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-faceposition" /><code>{"private void FacePosition(Vector3 position)"}</code> | <span className="api-desc">Rotates the head toward a world position, clamped to `maxAngle` from its rest rotation and limited to `rotationSpeed` degrees per second.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the facing update without easing back.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: stores the head's current local rotation as `originalRotation`.</span> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Copies the current head rotation for sending. Delta writes only go out while a head update is running.</span> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Sends the head rotation. On clients a full write snaps the head, a delta write starts easing toward it.</span> |
| <Link id="m-updateface-2" /><code>{"private void UpdateFace()"}</code> | <span className="api-desc">Per-frame update while facing: follows the target, or eases back once the agent has none.</span> |
| <Link id="m-updatefaceback" /><code>{"private void UpdateFaceBack()"}</code> | <span className="api-desc">Per-frame update that turns the head back to rest and stops when within 1 degree.</span> |
| <Link id="m-updateremoteface" /><code>{"private void UpdateRemoteFace()"}</code> | <span className="api-desc">Client: per-frame update that eases the head to the rotation the server sent, then stops.</span> |

</details>
