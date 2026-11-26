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
| <Link id="m-ctor" /><code>{"NetworkedJointDrivenRig()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stats for `PrepareForWrite`.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stats for `Serialize`.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglethreshold" /><code>{"private float angleThreshold"}</code> | <span className="api-desc">Degrees a bone must turn before it is sent again.</span> |
| <Link id="m-bones" /><code>{"private Transform[] bones"}</code> | <span className="api-desc">Bone transforms to sync; each needs a rigidbody.</span> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-issendingbones" /><code>{"private bool[] isSendingBones"}</code> | <span className="api-desc">Per bone flags for the next write.</span> |
| <Link id="m-oldrotations" /><code>{"private Quaternion[] oldRotations"}</code> | <span className="api-desc">Last sent rotation per bone.</span> |
| <Link id="m-rigidbodies" /><code>{"private Rigidbody[] rigidbodies"}</code> | <span className="api-desc">Rigidbody on each bone.</span> |
| <Link id="m-targetrotations" /><code>{"private Quaternion[] targetRotations"}</code> | <span className="api-desc">Last sent or received rotation per bone.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ishandlingremote" /><code>{"bool IsHandlingRemote { get; set; }"}</code> | <span className="api-desc">Whether clients drive the bones. Nothing in this build sets it.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">33 bits per bone.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Returns the shared `prepareForWriteTimer`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Returns the shared `serializeTimer`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Flags bones that turned at least `angleThreshold` since last sent.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads a flag and compressed rotation for each bone.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyforcetorotaterigidbody" /><code>{"private void ApplyForceToRotateRigidbody(Rigidbody rigidbody, Quaternion targetRotation)"}</code> | <span className="api-desc">Adds torque that turns a rigidbody toward a target rotation; skips and warns on NaN.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets up the rotation arrays and finds each bone's rigidbody.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Client: applies torque to every bone while `IsHandlingRemote` is on.</span> |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | <span className="api-desc">Applies torque to every bone toward its received rotation.</span> |
| <Link id="m-setuprotationarrays" /><code>{"private void SetupRotationArrays(ref Quaternion[] rotationArray)"}</code> | <span className="api-desc">Fills a rotation array with identity, one per bone.</span> |

</details>
