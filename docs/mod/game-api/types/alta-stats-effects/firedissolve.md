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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Fire`](/mod/game-api/types/alta-stats-effects/fire), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireDissolve()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for `_Progress`.</span> |
| <Link id="m-burningmaterial" /><code>{"private Material burningMaterial"}</code> | <span className="api-desc">Material copied onto the renderers when lit.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The per-instance copy of `burningMaterial`.</span> |
| <Link id="m-progresscurve" /><code>{"private AnimationCurve progressCurve"}</code> | <span className="api-desc">Maps fire progress to the shader's dissolve value.</span> |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> | <span className="api-desc">Backing field for `Renderers`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-renderers-2" /><code>{"MeshRenderer[] Renderers { get; }"}</code> | <span className="api-desc">The mesh renderers that dissolve.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-light" /><code>{"protected override void Light()"}</code> | <span className="api-desc">When not headless and not fully burnt, gives the renderers their own copy of `burningMaterial`, then lights as normal.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Calls the base `OnValidate` only.</span> |
| <Link id="m-setprogress" /><code>{"protected override void SetProgress(float progress)"}</code> | <span className="api-desc">Sets fire progress and, when not headless, the material's `_Progress` from `progressCurve`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: removes null entries from `renderers`.</span> |

</details>
