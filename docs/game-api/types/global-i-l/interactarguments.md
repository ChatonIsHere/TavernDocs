---
title: "InteractArguments"
description: "The network message sent when a hand starts holding an entity: the held entity, its velocity and pose, the hand's pose, and force flags."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractArguments

A **struct** in `Root.Township`, no namespace.

The network message sent when a hand starts holding an entity: the held entity, its velocity and pose, the hand's pose, and force flags.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`INetworkInteractArgument`](/game-api/types/global-i-l/inetworkinteractargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractArguments("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" holder, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" held, bool isForced = false, bool isForcingHold = false)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"InteractArguments("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" interactor, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" held, Vector3 velocity, Vector3 angularVelocity, bool isForced = false, bool isForcingHold = false)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"private InteractArguments(Transform interactorTarget, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" held, Vector3 heldVelocity, Vector3 heldAngularVelocity, bool isForced, bool isForcingHold)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"Vector3 angularVelocity"}</code> | Angular velocity of the held entity. |
| <Link id="m-interactorposition" /><code>{"Vector3 interactorPosition"}</code> | World position of the hand (its wrist). |
| <Link id="m-interactorrotation" /><code>{"Quaternion interactorRotation"}</code> | World rotation of the hand. |
| <Link id="m-isforced" /><code>{"bool isForced"}</code> | Backing field for `IsForced`. |
| <Link id="m-isforcinghold" /><code>{"bool isForcingHold"}</code> | Backing field for `IsForcingHold`. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position of the held entity. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | World rotation of the held entity. |
| <Link id="m-target" /><code>{"uint target"}</code> | Backing field for `Target`. |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> | Velocity of the held entity, including the player's movement when built from an `Interactor`. |
| <Link id="m-angularvelocitymax" /><code>{"private static readonly Vector3 AngularVelocityMax"}</code> |  |
| <Link id="m-angularvelocitymin" /><code>{"private static readonly Vector3 AngularVelocityMin"}</code> |  |
| <Link id="m-angularvelocityprecision" /><code>{"private const float AngularVelocityPrecision"}</code> |  |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-velocitymax" /><code>{"private static readonly Vector3 VelocityMax"}</code> |  |
| <Link id="m-velocitymin" /><code>{"private static readonly Vector3 VelocityMin"}</code> |  |
| <Link id="m-velocityprecision" /><code>{"private const float VelocityPrecision"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isaccessingscore" /><code>{"bool IsAccessingScore { get; }"}</code> | Always true, so the receiver checks the grab is valid and logs an error if not. |
| <Link id="m-isforced-2" /><code>{"bool IsForced { get; }"}</code> | Whether the interaction was forced. |
| <Link id="m-isforcinghold-2" /><code>{"bool IsForcingHold { get; }"}</code> | Whether to force the hold. |
| <Link id="m-target-2" /><code>{"uint Target { get; }"}</code> | Identifier of the held entity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the target, velocities, poses (relative to a chunk) and flags. |
| <Link id="m-serializelinearangularvelocity" /><code>{"static void SerializeLinearAngularVelocity("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 velocity, ref Vector3 angularVelocity)"}</code> | Writes or reads a velocity and angular velocity with the same limits. |

## Used in

Members of other types that take, return or hold a `InteractArguments`:

[`Interactable.NetworkStopInteraction`](/game-api/types/global-i-l/interactable#m-networkstopinteraction), [`Interactor.syncEnd`](/game-api/types/global-i-l/interactor#m-syncend), [`Interactor.SyncEnd`](/game-api/types/global-i-l/interactor#m-syncend-2), [`Interactor.syncStart`](/game-api/types/global-i-l/interactor#m-syncstart), [`Interactor.SyncStart`](/game-api/types/global-i-l/interactor#m-syncstart-2), [`MultiHandPickup.NetworkStopInteraction`](/game-api/types/global-m-o/multihandpickup#m-networkstopinteraction), [`Pickup.NetworkStopInteraction`](/game-api/types/global-p/pickup#m-networkstopinteraction).
