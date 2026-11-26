---
title: "GlyphInstance"
description: "One glyph image on a rendered page (book or sign page)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlyphInstance

A **class** in `Root.Township`, `Alta.Pages`.

One glyph image on a rendered page (book or sign page). `PageRenderer` loads glyph positions into these child objects; works in edit mode too.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlyphInstance()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-details" /><code>{"private "}<Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" details"}</code> | Backing field for `Details`. |
| <Link id="m-image" /><code>{"private Image image"}</code> | The UI image the glyph sprite is put on, cached on first load. |
| <Link id="m-iscalibrating" /><code>{"private bool isCalibrating"}</code> | Serialized flag not read by this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-details-2" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" Details { get; }"}</code> | The glyph and where it sits on the page. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatefromtransform" /><code>{"void CalculateFromTransform()"}</code> | Fills `Details` from the object's current transform, creating it if needed. |
| <Link id="m-load" /><code>{"bool Load("}<Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" details)"}</code> | Shows a glyph: sets the sprite and name and applies its position. With no glyph, hides the object. Returns false if it was already hidden. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | In the editor (not playing), validates and reloads `Details`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Empty. |

</details>

## Used in

Members of other types that take, return or hold a `GlyphInstance`:

[`PageRenderer.firstGlyph`](/game-api/types/alta-items/pagerenderer#m-firstglyph), [`PageRenderer.glyphs`](/game-api/types/alta-items/pagerenderer#m-glyphs).
