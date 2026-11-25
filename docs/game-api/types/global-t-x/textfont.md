---
title: "TextFont"
description: "class TextFont in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextFont

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`TextFont.Create`](/game-api/types/global-t-x/textfont-create)
- **Nested types** [`Create`](/game-api/types/global-t-x/textfont-create), [`TextFontLOD`](/game-api/types/global-t-x/textfont-textfontlod)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TextFont()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-maxcharacters" /><code>{"const int MaxCharacters"}</code> |
| <Link id="m-widthscalar" /><code>{"const float WidthScalar"}</code> |

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fonts" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{", "}<Link to="/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[]> fonts"}</code> |
| <Link id="m-linkedfont" /><code>{"private Font linkedFont"}</code> |
| <Link id="m-space" /><code>{"private "}<Link to="/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{" space"}</code> |
| <Link id="m-textfontlods" /><code>{"private "}<Link to="/game-api/types/global-t-x/textfont-textfontlod">{"TextFont.TextFontLOD"}</Link>{"[] textFontLODs"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-linkedfont-2" /><code>{"Font LinkedFont { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getlettermesh" /><code><Link to="/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{" GetLetterMesh(char character)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TextFont`:

[`MainMenuShopItem.numberFont`](/game-api/types/alta-customization/mainmenushopitem#m-numberfont), [`MainMenuShopItem.textFont`](/game-api/types/alta-customization/mainmenushopitem#m-textfont), [`TextRenderer.font`](/game-api/types/global-t-x/textrenderer#m-font), [`TextRenderer.Font`](/game-api/types/global-t-x/textrenderer#m-font-2).
