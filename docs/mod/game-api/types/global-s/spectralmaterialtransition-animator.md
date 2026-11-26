---
title: "SpectralMaterialTransition.Animator"
description: "Swaps one source material on a group of renderers between its normal, spectral and transition versions for SpectralMaterialTransition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpectralMaterialTransition.Animator

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Swaps one source material on a group of renderers between its normal, spectral and transition versions for `SpectralMaterialTransition`. Client only; the component skips it on a headless server.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SpectralMaterialTransition`](/mod/game-api/types/global-s/spectralmaterialtransition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Animator(Material original, Material baseSpectral, Material baseTransition)"}</code> | <span className="api-desc">Creates a `SpectralMaterialTransition.Animator` from `original`, `baseSpectral` and `baseTransition`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-original" /><code>{"private readonly Material original"}</code> | <span className="api-desc">The renderers' original shared material.</span> |
| <Link id="m-spectral" /><code>{"private readonly Material spectral"}</code> | <span className="api-desc">Spectral copy with the original's main texture and normal map, or the base spectral material if there is no texture.</span> |
| <Link id="m-transition" /><code>{"private readonly Material transition"}</code> | <span className="api-desc">Copy of the transition material used while animating between the two looks.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-renderers" /><code>{"List<Renderer> Renderers { get; }"}</code> | <span className="api-desc">The renderers that share this original material.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp(int property, float progress)"}</code> | <span className="api-desc">Sets a float property (materialization, fade or cracks progress) on the transition material.</span> |
| <Link id="m-snap" /><code>{"void Snap(bool isMaterialized)"}</code> | <span className="api-desc">Puts the original or the spectral material on every renderer at once and resets the cracks progress.</span> |
| <Link id="m-startlerp" /><code>{"void StartLerp()"}</code> | <span className="api-desc">Puts the transition material on every renderer so progress values can animate it.</span> |

## Used in

Members of other types that take, return or hold a `Animator`:

<div className="api-used-in">

[`SpectralMaterialTransition.animators`](/mod/game-api/types/global-s/spectralmaterialtransition#m-animators).

</div>
