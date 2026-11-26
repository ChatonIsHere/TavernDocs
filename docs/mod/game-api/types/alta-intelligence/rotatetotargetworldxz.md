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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotateToTargetWorldXZ()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Static profiling counter shared by every instance.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Static profiling counter shared by every instance.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | <span className="api-desc">The creature whose target is followed.</span> |
| <Link id="m-configurablejoint" /><code>{"private ConfigurableJoint configurableJoint"}</code> | <span className="api-desc">The joint whose target rotation is driven.</span> |
| <Link id="m-defaulttarget" /><code>{"private Transform defaultTarget"}</code> | <span className="api-desc">Point faced when the creature has no living target.</span> |
| <Link id="m-lastsyncrotation" /><code>{"private float lastSyncRotation"}</code> | <span className="api-desc">Angle at the last delta write, for change detection.</span> |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> | <span className="api-desc">Serialized but not used by this code.</span> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">The rigidbody on this GameObject. Fetched but not otherwise used.</span> |
| <Link id="m-targetrotation" /><code>{"private float targetRotation"}</code> | <span className="api-desc">The current target angle in degrees, set by the server and synced to clients.</span> |
| <Link id="m-topic" /><code>{"private Transform topic"}</code> | <span className="api-desc">Transform that is given this object's rotation every frame.</span> |

</details>

## Properties

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">12 bits per sync: the target angle.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Shared profiling counter for `PrepareForWrite`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Shared profiling counter for `Serialize`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-removelimits" /><code>{"void RemoveLimits()"}</code> | <span className="api-desc">Opens the joint's angular Y and Z limits to 90 degrees.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the `ConfigurableJoint` and `Rigidbody` on this GameObject.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Server: works out the angle to the target's ground position. Both sides: set it as the joint's target rotation and copy this rotation to `topic`.</span> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Reports whether the angle changed since the last delta write.</span> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Sends the angle between -180 and 180 at 0.1 degree steps.</span> |

</details>
