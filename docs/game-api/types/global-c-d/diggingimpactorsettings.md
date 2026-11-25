---
title: "DiggingImpactorSettings"
description: "class DiggingImpactorSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiggingImpactorSettings

A **class** in `Root.Township`, no namespace.

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
| <Link id="m-basediggingdamage-2" /><code>{"float BaseDiggingDamage { get; }"}</code> |  |
| <Link id="m-diggingchannels-2" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] DiggingChannels { get; }"}</code> |  |
| <Link id="m-mineffectiveness-2" /><code>{"float MinEffectiveness { get; }"}</code> |  |
| <Link id="m-targetlayersvalue" /><code>{"int TargetLayersValue { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-digeffect" /><code>{"void DigEffect(Vector3 position)"}</code> |  |
| <Link id="m-embbedeffect" /><code>{"void EmbbedEffect(Vector3 position)"}</code> |  |
| <Link id="m-getdepth" /><code>{"float GetDepth(float efficiency)"}</code> |  |
| <Link id="m-getdurabilitydamage" /><code>{"float GetDurabilityDamage(float efficiency)"}</code> |  |
| <Link id="m-getpull" /><code>{"float GetPull(float efficiency)"}</code> |  |
| <Link id="m-getradius" /><code>{"float GetRadius(float efficiency)"}</code> |  |
| <Link id="m-gettorque" /><code>{"float GetTorque(float efficiency)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DiggingImpactorSettings`:

[`DiggingImpactor.settings`](/game-api/types/global-c-d/diggingimpactor#m-settings).
