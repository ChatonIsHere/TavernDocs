---
title: "LetterMesh"
description: "One character and its 3D mesh, used by TextFont for letters and digits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LetterMesh

A **class** in `Root.Township`, no namespace.

One character and its 3D mesh, used by `TextFont` for letters and digits.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LetterMesh()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-letter" /><code>{"private char letter"}</code> |  |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-letter-2" /><code>{"char Letter { get; }"}</code> | The character. |
| <Link id="m-mesh-2" /><code>{"Mesh Mesh { get; }"}</code> | The mesh drawn for it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(char letter, Mesh mesh)"}</code> | Sets the character and mesh. |

## Used in

Members of other types that take, return or hold a `LetterMesh`:

[`TextFont.fonts`](/game-api/types/global-t-x/textfont#m-fonts), [`TextFont.GetLetterMesh`](/game-api/types/global-t-x/textfont#m-getlettermesh), [`TextFont.space`](/game-api/types/global-t-x/textfont#m-space), [`TextFont.TextFontLOD.alphaLower`](/game-api/types/global-t-x/textfont-textfontlod#m-alphalower), [`TextFont.TextFontLOD.alphaUpper`](/game-api/types/global-t-x/textfont-textfontlod#m-alphaupper), [`TextFont.TextFontLOD.FillDictionary`](/game-api/types/global-t-x/textfont-textfontlod#m-filldictionary), [`TextFont.TextFontLOD.numeric`](/game-api/types/global-t-x/textfont-textfontlod#m-numeric), [`TextFont.TextFontLOD.other`](/game-api/types/global-t-x/textfont-textfontlod#m-other), [`TextFont.TextFontLOD.Setup`](/game-api/types/global-t-x/textfont-textfontlod#m-setup), [`TextRenderer.CreateLetterMesh`](/game-api/types/global-t-x/textrenderer#m-createlettermesh-2).
