---
title: "CaveTeleporterReplacerAnimator.ObjectHandler"
description: "Private helper that puts one object's renderers on a copy of the animating material and drives its shader values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterReplacerAnimator.ObjectHandler

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper that puts one object's renderers on a copy of the animating material and drives its shader values.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`CaveTeleporterReplacerAnimator`](/mod/game-api/types/global-c-d/caveteleporterreplaceranimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectHandler("}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup, Material baseMaterial, AnimationCurve curve)"}</code> | <span className="api-desc">Creates a `CaveTeleporterReplacerAnimator.ObjectHandler` from `rendererGroup`, `baseMaterial` and `curve`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxheight" /><code>{"private static readonly int _MaxHeight"}</code> | <span className="api-desc">Shader property id for `_MaxHeight`.</span> |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property id for `_Progress`.</span> |
| <Link id="m-worldzeroheight" /><code>{"private static readonly int _WorldZeroHeight"}</code> | <span className="api-desc">Shader property id for `_WorldZeroHeight`.</span> |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">Curve that maps animation progress to the shader progress.</span> |
| <Link id="m-originalmaterials" /><code>{"private Dictionary<Renderer, Material> originalMaterials"}</code> | <span className="api-desc">Each renderer's shared material from before the animation.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatingmaterial" /><code>{"Material AnimatingMaterial { get; private set; }"}</code> | <span className="api-desc">Copy of the base material that all the object's renderers use during the animation.</span> |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; private set; }"}</code> | <span className="api-desc">Combined renderer bounds, used to work out the height range of the effect.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool returnToOriginal)"}</code> | <span className="api-desc">Either restores the original materials or disables the renderers, then cleans up the material a second later.</span> |
| <Link id="m-setheight" /><code>{"void SetHeight(float zeroHeight, float height)"}</code> | <span className="api-desc">Sets the shader's zero height and inverse height range.</span> |
| <Link id="m-setprogress" /><code>{"void SetProgress(float progress)"}</code> | <span className="api-desc">Evaluates the curve at the given progress and sets the shader's `_Progress`.</span> |
