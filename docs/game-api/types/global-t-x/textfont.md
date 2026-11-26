---
title: "TextFont"
description: "Asset holding the letter meshes for 3D mesh text (used by TextRenderer)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextFont

A **class** in `Root.Township`, no namespace.

Asset holding the letter meshes for 3D mesh text (used by `TextRenderer`). Letters are looked up by character code.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`TextFont.Create`](/game-api/types/global-t-x/textfont-create)
- **Nested types** [`Create`](/game-api/types/global-t-x/textfont-create), [`TextFontLOD`](/game-api/types/global-t-x/textfont-textfontlod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextFont()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacters" /><code>{"const int MaxCharacters"}</code> | Size of the lookup table (256). Only character codes below this are supported. |
| <Link id="m-widthscalar" /><code>{"const float WidthScalar"}</code> | Constant 0.005, probably the scale from font units to world width. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fonts" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{", "}<Link to="/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[]> fonts"}</code> | Static cache of lookup tables, one per font asset. |
| <Link id="m-linkedfont" /><code>{"private Font linkedFont"}</code> | Backing field for `LinkedFont`. |
| <Link id="m-space" /><code>{"private "}<Link to="/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{" space"}</code> | Letter mesh used for the space character. |
| <Link id="m-textfontlods" /><code>{"private "}<Link to="/game-api/types/global-t-x/textfont-textfontlod">{"TextFont.TextFontLOD"}</Link>{"[] textFontLODs"}</code> | Letter mesh sets per level of detail. Only the first one is used. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-linkedfont-2" /><code>{"Font LinkedFont { get; }"}</code> | The Unity font this mesh font was made from. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlettermesh" /><code><Link to="/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{" GetLetterMesh(char character)"}</code> | Returns the letter mesh for a character, or null for codes 256 and above. Builds and caches the lookup table on first use. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: clears the cached lookup table so changes show up. |

</details>

## Used in

Members of other types that take, return or hold a `TextFont`:

[`MainMenuShopItem.numberFont`](/game-api/types/alta-customization/mainmenushopitem#m-numberfont), [`MainMenuShopItem.textFont`](/game-api/types/alta-customization/mainmenushopitem#m-textfont), [`TextRenderer.font`](/game-api/types/global-t-x/textrenderer#m-font), [`TextRenderer.Font`](/game-api/types/global-t-x/textrenderer#m-font-2).
