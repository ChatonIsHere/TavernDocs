---
title: "CosmeticPalette"
description: "ScriptableObject list of cosmetic colours (menu Township/Cosmetic/Palette)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPalette

A **class** in `Root.Township`, `Alta.Customization`.

ScriptableObject list of cosmetic colours (menu Township/Cosmetic/Palette).

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPalette()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{"[] colors"}</code> | <span className="api-desc">Backing field for `Colors`.</span> |
| <Link id="m-fromimage" /><code>{"private Texture2D fromImage"}</code> | <span className="api-desc">Source texture for the palette. Not read by the code in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colors-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{"[] Colors { get; }"}</code> | <span className="api-desc">The palette's colours.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty in this build.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPalette`:

<div className="api-used-in">

[`TwoColors.CosmeticColors`](/mod/game-api/types/alta-customization/twocolors#m-cosmeticcolors), [`ColorBoard.colors`](/mod/game-api/types/global-c-d/colorboard#m-colors).

</div>
