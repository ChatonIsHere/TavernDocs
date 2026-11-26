---
title: "TextFont.TextFontLOD"
description: "One LOD level of a TextFont: the letter meshes for lower case, upper case, numbers and other characters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextFont.TextFontLOD

A **class** in `Root.Township`, the global namespace.

One LOD level of a `TextFont`: the letter meshes for lower case, upper case, numbers and other characters.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TextFont`](/mod/game-api/types/global-t-x/textfont)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextFontLOD()"}</code> | <span className="api-desc">Creates a `TextFont.TextFontLOD` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalower" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] alphaLower"}</code> | <span className="api-desc">Letter meshes for lower case letters.</span> |
| <Link id="m-alphaupper" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] alphaUpper"}</code> | <span className="api-desc">Letter meshes for upper case letters.</span> |
| <Link id="m-numeric" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] numeric"}</code> | <span className="api-desc">Letter meshes for digits.</span> |
| <Link id="m-other" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] other"}</code> | <span className="api-desc">Letter meshes for punctuation and other characters.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filldictionary" /><code>{"void FillDictionary("}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] dictionary)"}</code> | <span className="api-desc">Writes every letter mesh into the array at the index of its character code.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] alphaLower, "}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] alphaUpper, "}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] numeric, "}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{"[] other)"}</code> | <span className="api-desc">Replaces all four letter mesh arrays.</span> |

## Used in

Members of other types that take, return or hold a `TextFontLOD`:

<div className="api-used-in">

[`TextFont.textFontLODs`](/mod/game-api/types/global-t-x/textfont#m-textfontlods).

</div>
