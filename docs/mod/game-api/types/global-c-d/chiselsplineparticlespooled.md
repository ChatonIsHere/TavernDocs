---
title: "ChiselSplineParticlesPooled"
description: "Client visual: the pooled spline particle line for the chisel, with rotation offsets on both ends and line alpha based on how well they line up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselSplineParticlesPooled

A **class** in `Root.Township`, the global namespace.

Client visual: the pooled spline particle line for the chisel, with rotation offsets on both ends and line alpha based on how well they line up.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`SplineParticlesPooled`](/mod/game-api/types/global-s/splineparticlespooled)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselSplineParticlesPooled()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignmentweigth" /><code>{"private float alignmentWeigth"}</code> | Share of the multiplier taken from alignment; the rest comes from distance. |
| <Link id="m-alphabasedonalignment" /><code>{"private AnimationCurve alphaBasedOnAlignment"}</code> | Curve from alignment to line alpha. |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | Scales the alignment multiplier. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-originpositionoverride" /><code>{"Vector3 OriginPositionOverride { get; set; }"}</code> | World position the line starts from. Set by the caller. |
| <Link id="m-originrotation" /><code>{"Quaternion OriginRotation { get; set; }"}</code> | Extra rotation applied to the origin's forward. |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; set; }"}</code> | Extra rotation applied to the target's forward. |
| <Link id="m-alignmentmultiplier" /><code>{"protected override float AlignmentMultiplier { get; }"}</code> | Base alignment multiplier times `speedMultiplier`. Also sets the line's alpha from `alphaBasedOnAlignment`. |
| <Link id="m-originforward" /><code>{"protected override Vector3 OriginForward { get; }"}</code> | Origin's forward turned by `OriginRotation`. |
| <Link id="m-originposition" /><code>{"protected override Vector3 OriginPosition { get; }"}</code> | Returns `OriginPositionOverride` instead of the origin's position. |
| <Link id="m-targetforward" /><code>{"protected override Vector3 TargetForward { get; }"}</code> | Target's forward turned by `TargetRotation`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | In play mode, gives the line renderer its own material copy so alpha changes don't affect others. |
| <Link id="m-multiplier" /><code>{"protected override float Multiplier()"}</code> | Blend of alignment and distance multipliers, weighted by `alignmentWeigth`. |
