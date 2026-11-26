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
| <Link id="m-ctor" /><code>{"DiggingImpactorSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basediggingdamage" /><code>{"private float baseDiggingDamage"}</code> | <span className="api-desc">Base dig damage. Defaults to 1.</span> |
| <Link id="m-diggingchannels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] diggingChannels"}</code> | <span className="api-desc">Impact channels that count as digging.</span> |
| <Link id="m-efficiencytodepth" /><code>{"private AnimationCurve efficiencyToDepth"}</code> | <span className="api-desc">Curve from dig efficiency to how deep the tool goes.</span> |
| <Link id="m-efficiencytodurabilitydamage" /><code>{"private AnimationCurve efficiencyToDurabilityDamage"}</code> | <span className="api-desc">Curve from dig efficiency to tool durability lost per dig.</span> |
| <Link id="m-efficiencytopull" /><code>{"private AnimationCurve efficiencyToPull"}</code> | <span className="api-desc">Curve from dig efficiency to how far the tool must be pulled to come out.</span> |
| <Link id="m-efficiencytoradius" /><code>{"private AnimationCurve efficiencyToRadius"}</code> | <span className="api-desc">Curve from dig efficiency to dig radius.</span> |
| <Link id="m-efficiencytotorque" /><code>{"private AnimationCurve efficiencyToTorque"}</code> | <span className="api-desc">Curve from dig efficiency to how much twist digs the tool out.</span> |
| <Link id="m-mineffectiveness" /><code>{"private float minEffectiveness"}</code> | <span className="api-desc">Lowest dig effectiveness at zero efficiency. Defaults to 0.2.</span> |
| <Link id="m-ondigeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDigEffect"}</code> | <span className="api-desc">Effect event fired at a position when digging.</span> |
| <Link id="m-onembbedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onEmbbedEffect"}</code> | <span className="api-desc">Effect event fired at a position when the tool embeds.</span> |
| <Link id="m-targetlayers" /><code>{"private LayerMask targetLayers"}</code> | <span className="api-desc">Layers the tool can dig into.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basediggingdamage-2" /><code>{"float BaseDiggingDamage { get; }"}</code> | <span className="api-desc">Base digging damage value.</span> |
| <Link id="m-diggingchannels-2" /><code><Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] DiggingChannels { get; }"}</code> | <span className="api-desc">Impact channels checked when the tool hits the ground.</span> |
| <Link id="m-mineffectiveness-2" /><code>{"float MinEffectiveness { get; }"}</code> | <span className="api-desc">Hits below this effectiveness do not dig. Efficiency is measured from here up to 1.</span> |
| <Link id="m-targetlayersvalue" /><code>{"int TargetLayersValue { get; }"}</code> | <span className="api-desc">Layer mask of colliders that can be dug. Hits on rigidbodies are ignored.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-digeffect" /><code>{"void DigEffect(Vector3 position)"}</code> | <span className="api-desc">Plays the dig effect at a position.</span> |
| <Link id="m-embbedeffect" /><code>{"void EmbbedEffect(Vector3 position)"}</code> | <span className="api-desc">Plays the effect for the tool sticking into the ground.</span> |
| <Link id="m-getdepth" /><code>{"float GetDepth(float efficiency)"}</code> | <span className="api-desc">How far the tool sinks into the ground for an efficiency.</span> |
| <Link id="m-getdurabilitydamage" /><code>{"float GetDurabilityDamage(float efficiency)"}</code> | <span className="api-desc">Durability the tool loses for an efficiency.</span> |
| <Link id="m-getpull" /><code>{"float GetPull(float efficiency)"}</code> | <span className="api-desc">How much pull is needed to get the tool out, for an efficiency.</span> |
| <Link id="m-getradius" /><code>{"float GetRadius(float efficiency)"}</code> | <span className="api-desc">Radius of the dig for an efficiency.</span> |
| <Link id="m-gettorque" /><code>{"float GetTorque(float efficiency)"}</code> | <span className="api-desc">How much twist is needed to get the tool out, for an efficiency.</span> |

## Used in

Members of other types that take, return or hold a `DiggingImpactorSettings`:

<div className="api-used-in">

[`DiggingImpactor.settings`](/mod/game-api/types/global-c-d/diggingimpactor#m-settings).

</div>
