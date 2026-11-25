---
title: "InteractArguments"
description: "struct InteractArguments in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractArguments

A **struct** in `Root.Township`, no namespace.

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
| <Link id="m-angularvelocity" /><code>{"Vector3 angularVelocity"}</code> |  |
| <Link id="m-interactorposition" /><code>{"Vector3 interactorPosition"}</code> |  |
| <Link id="m-interactorrotation" /><code>{"Quaternion interactorRotation"}</code> |  |
| <Link id="m-isforced" /><code>{"bool isForced"}</code> |  |
| <Link id="m-isforcinghold" /><code>{"bool isForcingHold"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 position"}</code> |  |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> |  |
| <Link id="m-target" /><code>{"uint target"}</code> |  |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> |  |
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
| <Link id="m-isaccessingscore" /><code>{"bool IsAccessingScore { get; }"}</code> |  |
| <Link id="m-isforced-2" /><code>{"bool IsForced { get; }"}</code> |  |
| <Link id="m-isforcinghold-2" /><code>{"bool IsForcingHold { get; }"}</code> |  |
| <Link id="m-target-2" /><code>{"uint Target { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializelinearangularvelocity" /><code>{"static void SerializeLinearAngularVelocity("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 velocity, ref Vector3 angularVelocity)"}</code> |  |

## Used in

Members of other types that take, return or hold a `InteractArguments`:

[`Interactable.NetworkStopInteraction`](/game-api/types/global-i-l/interactable#m-networkstopinteraction), [`Interactor.syncEnd`](/game-api/types/global-i-l/interactor#m-syncend), [`Interactor.SyncEnd`](/game-api/types/global-i-l/interactor#m-syncend-2), [`Interactor.syncStart`](/game-api/types/global-i-l/interactor#m-syncstart), [`Interactor.SyncStart`](/game-api/types/global-i-l/interactor#m-syncstart-2), [`MultiHandPickup.NetworkStopInteraction`](/game-api/types/global-m-o/multihandpickup#m-networkstopinteraction), [`Pickup.NetworkStopInteraction`](/game-api/types/global-p/pickup#m-networkstopinteraction).
