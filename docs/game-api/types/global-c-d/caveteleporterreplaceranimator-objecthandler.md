---
title: "CaveTeleporterReplacerAnimator.ObjectHandler"
description: "class CaveTeleporterReplacerAnimator.ObjectHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterReplacerAnimator.ObjectHandler

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`CaveTeleporterReplacerAnimator`](/game-api/types/global-c-d/caveteleporterreplaceranimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectHandler("}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup, Material baseMaterial, AnimationCurve curve)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxheight" /><code>{"private static readonly int _MaxHeight"}</code> |  |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |  |
| <Link id="m-worldzeroheight" /><code>{"private static readonly int _WorldZeroHeight"}</code> |  |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> |  |
| <Link id="m-originalmaterials" /><code>{"private Dictionary<Renderer, Material> originalMaterials"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatingmaterial" /><code>{"Material AnimatingMaterial { get; private set; }"}</code> |  |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool returnToOriginal)"}</code> |  |
| <Link id="m-setheight" /><code>{"void SetHeight(float zeroHeight, float height)"}</code> |  |
| <Link id="m-setprogress" /><code>{"void SetProgress(float progress)"}</code> |  |
