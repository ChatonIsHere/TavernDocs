---
title: "DiggingImpactorSettings"
description: "Settings for a digging tool's DiggingImpactor: which hits dig and how deep, how hard it is to pull out, and durability cost, all scaled by hit efficiency."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiggingImpactorSettings

A **class** in `Root.Township`, no namespace.

Settings for a digging tool's `DiggingImpactor`: which hits dig and how deep, how hard it is to pull out, and durability cost, all scaled by hit efficiency.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiggingImpactorSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basediggingdamage" /><code>{"private float baseDiggingDamage"}</code> |  |
| <Link id="m-diggingchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] diggingChannels"}</code> |  |
| <Link id="m-efficiencytodepth" /><code>{"private AnimationCurve efficiencyToDepth"}</code> |  |
| <Link id="m-efficiencytodurabilitydamage" /><code>{"private AnimationCurve efficiencyToDurabilityDamage"}</code> |  |
| <Link id="m-efficiencytopull" /><code>{"private AnimationCurve efficiencyToPull"}</code> |  |
| <Link id="m-efficiencytoradius" /><code>{"private AnimationCurve efficiencyToRadius"}</code> |  |
| <Link id="m-efficiencytotorque" /><code>{"private AnimationCurve efficiencyToTorque"}</code> |  |
| <Link id="m-mineffectiveness" /><code>{"private float minEffectiveness"}</code> |  |
| <Link id="m-ondigeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDigEffect"}</code> |  |
| <Link id="m-onembbedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onEmbbedEffect"}</code> |  |
| <Link id="m-targetlayers" /><code>{"private LayerMask targetLayers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basediggingdamage-2" /><code>{"float BaseDiggingDamage { get; }"}</code> | Base digging damage value. |
| <Link id="m-diggingchannels-2" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] DiggingChannels { get; }"}</code> | Impact channels checked when the tool hits the ground. |
| <Link id="m-mineffectiveness-2" /><code>{"float MinEffectiveness { get; }"}</code> | Hits below this effectiveness do not dig. Efficiency is measured from here up to 1. |
| <Link id="m-targetlayersvalue" /><code>{"int TargetLayersValue { get; }"}</code> | Layer mask of colliders that can be dug. Hits on rigidbodies are ignored. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-digeffect" /><code>{"void DigEffect(Vector3 position)"}</code> | Plays the dig effect at a position. |
| <Link id="m-embbedeffect" /><code>{"void EmbbedEffect(Vector3 position)"}</code> | Plays the effect for the tool sticking into the ground. |
| <Link id="m-getdepth" /><code>{"float GetDepth(float efficiency)"}</code> | How far the tool sinks into the ground for an efficiency. |
| <Link id="m-getdurabilitydamage" /><code>{"float GetDurabilityDamage(float efficiency)"}</code> | Durability the tool loses for an efficiency. |
| <Link id="m-getpull" /><code>{"float GetPull(float efficiency)"}</code> | How much pull is needed to get the tool out, for an efficiency. |
| <Link id="m-getradius" /><code>{"float GetRadius(float efficiency)"}</code> | Radius of the dig for an efficiency. |
| <Link id="m-gettorque" /><code>{"float GetTorque(float efficiency)"}</code> | How much twist is needed to get the tool out, for an efficiency. |

## Used in

Members of other types that take, return or hold a `DiggingImpactorSettings`:

[`DiggingImpactor.settings`](/game-api/types/global-c-d/diggingimpactor#m-settings).
