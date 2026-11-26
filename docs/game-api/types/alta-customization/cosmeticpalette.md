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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticPalette()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{"[] colors"}</code> | Backing field for `Colors`. |
| <Link id="m-fromimage" /><code>{"private Texture2D fromImage"}</code> | Source texture for the palette. Not read by the code in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colors-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{"[] Colors { get; }"}</code> | The palette's colours. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty in this build. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPalette`:

[`TwoColors.CosmeticColors`](/game-api/types/alta-customization/twocolors#m-cosmeticcolors), [`ColorBoard.colors`](/game-api/types/global-c-d/colorboard#m-colors).
