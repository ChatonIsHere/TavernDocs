---
title: "DiggingImpactorSettings"
description: "Settings for a digging tool's DiggingImpactor: which hits dig and how deep, how hard it is to pull out, and durability cost, all scaled by hit efficiency."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiggingImpactorSettings

A **class** in `Root.Township`, the global namespace.

Settings for a digging tool's `DiggingImpactor`: which hits dig and how deep, how hard it is to pull out, and durability cost, all scaled by hit efficiency.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiggingImpactorSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basediggingdamage" /><code>{"private float baseDiggingDamage"}</code> | Base dig damage. Defaults to 1. |
| <Link id="m-diggingchannels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] diggingChannels"}</code> | Impact channels that count as digging. |
| <Link id="m-efficiencytodepth" /><code>{"private AnimationCurve efficiencyToDepth"}</code> | Curve from dig efficiency to how deep the tool goes. |
| <Link id="m-efficiencytodurabilitydamage" /><code>{"private AnimationCurve efficiencyToDurabilityDamage"}</code> | Curve from dig efficiency to tool durability lost per dig. |
| <Link id="m-efficiencytopull" /><code>{"private AnimationCurve efficiencyToPull"}</code> | Curve from dig efficiency to how far the tool must be pulled to come out. |
| <Link id="m-efficiencytoradius" /><code>{"private AnimationCurve efficiencyToRadius"}</code> | Curve from dig efficiency to dig radius. |
| <Link id="m-efficiencytotorque" /><code>{"private AnimationCurve efficiencyToTorque"}</code> | Curve from dig efficiency to how much twist digs the tool out. |
| <Link id="m-mineffectiveness" /><code>{"private float minEffectiveness"}</code> | Lowest dig effectiveness at zero efficiency. Defaults to 0.2. |
| <Link id="m-ondigeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDigEffect"}</code> | Effect event fired at a position when digging. |
| <Link id="m-onembbedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onEmbbedEffect"}</code> | Effect event fired at a position when the tool embeds. |
| <Link id="m-targetlayers" /><code>{"private LayerMask targetLayers"}</code> | Layers the tool can dig into. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basediggingdamage-2" /><code>{"float BaseDiggingDamage { get; }"}</code> | Base digging damage value. |
| <Link id="m-diggingchannels-2" /><code><Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] DiggingChannels { get; }"}</code> | Impact channels checked when the tool hits the ground. |
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

[`DiggingImpactor.settings`](/mod/game-api/types/global-c-d/diggingimpactor#m-settings).
