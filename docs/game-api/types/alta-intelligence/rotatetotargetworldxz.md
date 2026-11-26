---
title: "RotateToTargetWorldXZ"
description: "Networked component that turns a jointed body part toward the creature's target (or a default point) by driving a ConfigurableJoint around its X axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotateToTargetWorldXZ

A **class** in `Root.Township`, `Alta.Intelligence`.

Networked component that turns a jointed body part toward the creature's target (or a default point) by driving a `ConfigurableJoint` around its X axis. The server picks the angle and syncs it; both sides apply it.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotateToTargetWorldXZ()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Static profiling counter shared by every instance. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Static profiling counter shared by every instance. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | The creature whose target is followed. |
| <Link id="m-configurablejoint" /><code>{"private ConfigurableJoint configurableJoint"}</code> | The joint whose target rotation is driven. |
| <Link id="m-defaulttarget" /><code>{"private Transform defaultTarget"}</code> | Point faced when the creature has no living target. |
| <Link id="m-lastsyncrotation" /><code>{"private float lastSyncRotation"}</code> | Angle at the last delta write, for change detection. |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> | Serialized but not used by this code. |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | The rigidbody on this GameObject. Fetched but not otherwise used. |
| <Link id="m-targetrotation" /><code>{"private float targetRotation"}</code> | The current target angle in degrees, set by the server and synced to clients. |
| <Link id="m-topic" /><code>{"private Transform topic"}</code> | Transform that is given this object's rotation every frame. |

</details>

## Properties

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | 12 bits per sync: the target angle. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Shared profiling counter for `PrepareForWrite`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Shared profiling counter for `Serialize`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-removelimits" /><code>{"void RemoveLimits()"}</code> | Opens the joint's angular Y and Z limits to 90 degrees. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gets the `ConfigurableJoint` and `Rigidbody` on this GameObject. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Server: works out the angle to the target's ground position. Both sides: set it as the joint's target rotation and copy this rotation to `topic`. |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | Reports whether the angle changed since the last delta write. |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Sends the angle between -180 and 180 at 0.1 degree steps. |

</details>
