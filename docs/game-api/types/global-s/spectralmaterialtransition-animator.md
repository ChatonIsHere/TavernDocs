---
title: "SpectralMaterialTransition.Animator"
description: "Swaps one source material on a group of renderers between its normal, spectral and transition versions for SpectralMaterialTransition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpectralMaterialTransition.Animator

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Swaps one source material on a group of renderers between its normal, spectral and transition versions for `SpectralMaterialTransition`. Client only; the component skips it on a headless server.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SpectralMaterialTransition`](/game-api/types/global-s/spectralmaterialtransition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Animator(Material original, Material baseSpectral, Material baseTransition)"}</code> | Creates a `SpectralMaterialTransition.Animator` from `original`, `baseSpectral` and `baseTransition`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-original" /><code>{"private readonly Material original"}</code> | The renderers' original shared material. |
| <Link id="m-spectral" /><code>{"private readonly Material spectral"}</code> | Spectral copy with the original's main texture and normal map, or the base spectral material if there is no texture. |
| <Link id="m-transition" /><code>{"private readonly Material transition"}</code> | Copy of the transition material used while animating between the two looks. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-renderers" /><code>{"List<Renderer> Renderers { get; }"}</code> | The renderers that share this original material. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp(int property, float progress)"}</code> | Sets a float property (materialization, fade or cracks progress) on the transition material. |
| <Link id="m-snap" /><code>{"void Snap(bool isMaterialized)"}</code> | Puts the original or the spectral material on every renderer at once and resets the cracks progress. |
| <Link id="m-startlerp" /><code>{"void StartLerp()"}</code> | Puts the transition material on every renderer so progress values can animate it. |

## Used in

Members of other types that take, return or hold a `Animator`:

[`SpectralMaterialTransition.animators`](/game-api/types/global-s/spectralmaterialtransition#m-animators).
