---
title: "FireDissolve"
description: "A Fire that also burns its mesh away: lighting swaps its renderers to a copy of a burning material whose _Progress follows the fire's progress."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireDissolve

A **class** in `Root.Township`, `Alta.Heat`.

A `Fire` that also burns its mesh away: lighting swaps its renderers to a copy of a burning material whose `_Progress` follows the fire's progress. Visuals are skipped on headless servers.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Fire`](/game-api/types/alta-stats-effects/fire), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FireDissolve()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-burningmaterial" /><code>{"private Material burningMaterial"}</code> | Material copied onto the renderers when lit. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The per-instance copy of `burningMaterial`. |
| <Link id="m-progresscurve" /><code>{"private AnimationCurve progressCurve"}</code> | Maps fire progress to the shader's dissolve value. |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> | Backing field for `Renderers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-renderers-2" /><code>{"MeshRenderer[] Renderers { get; }"}</code> | The mesh renderers that dissolve. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-light" /><code>{"protected override void Light()"}</code> | When not headless and not fully burnt, gives the renderers their own copy of `burningMaterial`, then lights as normal. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Calls the base `OnValidate` only. |
| <Link id="m-setprogress" /><code>{"protected override void SetProgress(float progress)"}</code> | Sets fire progress and, when not headless, the material's `_Progress` from `progressCurve`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: removes null entries from `renderers`. |

</details>
