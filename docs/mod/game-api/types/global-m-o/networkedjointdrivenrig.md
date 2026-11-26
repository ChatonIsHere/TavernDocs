---
title: "NetworkedJointDrivenRig"
description: "Syncs the rotations of a rig's rigidbody bones from the server; clients steer each bone toward its target with torque rather than setting it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedJointDrivenRig

A **class** in `Root.Township`, the global namespace.

Syncs the rotations of a rig's rigidbody bones from the server; clients steer each bone toward its target with torque rather than setting it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedJointDrivenRig()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stats for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stats for `Serialize`. |

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglethreshold" /><code>{"private float angleThreshold"}</code> | Degrees a bone must turn before it is sent again. |
| <Link id="m-bones" /><code>{"private Transform[] bones"}</code> | Bone transforms to sync; each needs a rigidbody. |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | Unused in this build. |
| <Link id="m-issendingbones" /><code>{"private bool[] isSendingBones"}</code> | Per bone flags for the next write. |
| <Link id="m-oldrotations" /><code>{"private Quaternion[] oldRotations"}</code> | Last sent rotation per bone. |
| <Link id="m-rigidbodies" /><code>{"private Rigidbody[] rigidbodies"}</code> | Rigidbody on each bone. |
| <Link id="m-targetrotations" /><code>{"private Quaternion[] targetRotations"}</code> | Last sent or received rotation per bone. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ishandlingremote" /><code>{"bool IsHandlingRemote { get; set; }"}</code> | Whether clients drive the bones. Nothing in this build sets it. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | 33 bits per bone. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Returns the shared `prepareForWriteTimer`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Returns the shared `serializeTimer`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | Flags bones that turned at least `angleThreshold` since last sent. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads a flag and compressed rotation for each bone. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyforcetorotaterigidbody" /><code>{"private void ApplyForceToRotateRigidbody(Rigidbody rigidbody, Quaternion targetRotation)"}</code> | Adds torque that turns a rigidbody toward a target rotation; skips and warns on NaN. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets up the rotation arrays and finds each bone's rigidbody. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Client: applies torque to every bone while `IsHandlingRemote` is on. |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | Applies torque to every bone toward its received rotation. |
| <Link id="m-setuprotationarrays" /><code>{"private void SetupRotationArrays(ref Quaternion[] rotationArray)"}</code> | Fills a rotation array with identity, one per bone. |

</details>
