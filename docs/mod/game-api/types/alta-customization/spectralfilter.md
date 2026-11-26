---
title: "SpectralFilter"
description: "Hand camera filter asset that renders players with a spectral material, keeping each original material's main texture as a cutout."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpectralFilter

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Hand camera filter asset that renders players with a spectral material, keeping each original material's main texture as a cutout.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`PlayerSwapMaterialFilter`](/mod/game-api/types/alta-customization/playerswapmaterialfilter)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpectralFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cutout" /><code>{"private static int _Cutout { get; }"}</code> | <span className="api-desc">Shader property ID for `_Cutout`.</span> |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> | <span className="api-desc">Shader property ID for `_MainTex`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setuptuple" /><code>{"protected override void SetupTuple("}<Link to="/mod/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple">{"PlayerSwapMaterialFilter.MaterialTuple"}</Link>{" tuple, Material baseMaterial)"}</code> | <span className="api-desc">Makes a copy of the spectral material with the original's `_MainTex` as `_Cutout`, or uses the base material when there is no texture.</span> |
