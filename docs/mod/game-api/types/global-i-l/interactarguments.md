---
title: "InteractArguments"
description: "The network message sent when a hand starts holding an entity: the held entity, its velocity and pose, the hand's pose, and force flags."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractArguments

A **struct** in `Root.Township`, the global namespace.

The network message sent when a hand starts holding an entity: the held entity, its velocity and pose, the hand's pose, and force flags.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`INetworkInteractArgument`](/mod/game-api/types/global-i-l/inetworkinteractargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractArguments("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" holder, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" held, bool isForced = false, bool isForcingHold = false)"}</code> | <span className="api-desc">Creates an `InteractArguments` from `interactorTarget`, `held`, `heldVelocity`, `heldAngularVelocity`, `isForced` and `isForcingHold`.</span> |
| <Link id="m-ctor-2" /><code>{"InteractArguments("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" held, Vector3 velocity, Vector3 angularVelocity, bool isForced = false, bool isForcingHold = false)"}</code> | <span className="api-desc">Creates an `InteractArguments` from `interactorTarget`, `held`, `heldVelocity`, `heldAngularVelocity`, `isForced` and `isForcingHold`.</span> |

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-3" /><code>{"private InteractArguments(Transform interactorTarget, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" held, Vector3 heldVelocity, Vector3 heldAngularVelocity, bool isForced, bool isForcingHold)"}</code> | <span className="api-desc">Creates an `InteractArguments` from `interactorTarget`, `held`, `heldVelocity`, `heldAngularVelocity`, `isForced` and `isForcingHold`.</span> |

</details>

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"Vector3 angularVelocity"}</code> | <span className="api-desc">Angular velocity of the held entity.</span> |
| <Link id="m-interactorposition" /><code>{"Vector3 interactorPosition"}</code> | <span className="api-desc">World position of the hand (its wrist).</span> |
| <Link id="m-interactorrotation" /><code>{"Quaternion interactorRotation"}</code> | <span className="api-desc">World rotation of the hand.</span> |
| <Link id="m-isforced" /><code>{"bool isForced"}</code> | <span className="api-desc">Backing field for `IsForced`.</span> |
| <Link id="m-isforcinghold" /><code>{"bool isForcingHold"}</code> | <span className="api-desc">Backing field for `IsForcingHold`.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">World position of the held entity.</span> |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | <span className="api-desc">World rotation of the held entity.</span> |
| <Link id="m-target" /><code>{"uint target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> | <span className="api-desc">Velocity of the held entity, including the player's movement when built from an `Interactor`.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocitymax" /><code>{"private static readonly Vector3 AngularVelocityMax"}</code> | <span className="api-desc">Upper bound used when compressing angular velocity for the network.</span> |
| <Link id="m-angularvelocitymin" /><code>{"private static readonly Vector3 AngularVelocityMin"}</code> | <span className="api-desc">Lower bound used when compressing angular velocity for the network.</span> |
| <Link id="m-angularvelocityprecision" /><code>{"private const float AngularVelocityPrecision"}</code> | <span className="api-desc">Precision (0.001) used when compressing angular velocity.</span> |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">Chunk the positions are sent relative to: the held entity's chunk on the server, the local player's chunk on clients.</span> |
| <Link id="m-velocitymax" /><code>{"private static readonly Vector3 VelocityMax"}</code> | <span className="api-desc">Upper bound (100 per axis) used when compressing velocity.</span> |
| <Link id="m-velocitymin" /><code>{"private static readonly Vector3 VelocityMin"}</code> | <span className="api-desc">Lower bound (-100 per axis) used when compressing velocity.</span> |
| <Link id="m-velocityprecision" /><code>{"private const float VelocityPrecision"}</code> | <span className="api-desc">Precision (0.001) used when compressing velocity.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isaccessingscore" /><code>{"bool IsAccessingScore { get; }"}</code> | <span className="api-desc">Always true, so the receiver checks the grab is valid and logs an error if not.</span> |
| <Link id="m-isforced-2" /><code>{"bool IsForced { get; }"}</code> | <span className="api-desc">Whether the interaction was forced.</span> |
| <Link id="m-isforcinghold-2" /><code>{"bool IsForcingHold { get; }"}</code> | <span className="api-desc">Whether to force the hold.</span> |
| <Link id="m-target-2" /><code>{"uint Target { get; }"}</code> | <span className="api-desc">Identifier of the held entity.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the target, velocities, poses (relative to a chunk) and flags.</span> |
| <Link id="m-serializelinearangularvelocity" /><code>{"static void SerializeLinearAngularVelocity("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 velocity, ref Vector3 angularVelocity)"}</code> | <span className="api-desc">Writes or reads a velocity and angular velocity with the same limits.</span> |

## Used in

Members of other types that take, return or hold a `InteractArguments`:

<div className="api-used-in">

[`Interactable.NetworkStopInteraction`](/mod/game-api/types/global-i-l/interactable#m-networkstopinteraction), [`Interactor.syncEnd`](/mod/game-api/types/global-i-l/interactor#m-syncend), [`Interactor.SyncEnd`](/mod/game-api/types/global-i-l/interactor#m-syncend-2), [`Interactor.syncStart`](/mod/game-api/types/global-i-l/interactor#m-syncstart), [`Interactor.SyncStart`](/mod/game-api/types/global-i-l/interactor#m-syncstart-2), [`MultiHandPickup.NetworkStopInteraction`](/mod/game-api/types/global-m-o/multihandpickup#m-networkstopinteraction), [`Pickup.NetworkStopInteraction`](/mod/game-api/types/global-p/pickup#m-networkstopinteraction).

</div>
