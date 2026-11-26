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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlyphInstance()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-details" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" details"}</code> | <span className="api-desc">Backing field for `Details`.</span> |
| <Link id="m-image" /><code>{"private Image image"}</code> | <span className="api-desc">The UI image the glyph sprite is put on, cached on first load.</span> |
| <Link id="m-iscalibrating" /><code>{"private bool isCalibrating"}</code> | <span className="api-desc">Serialized flag not read by this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-details-2" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" Details { get; }"}</code> | <span className="api-desc">The glyph and where it sits on the page.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatefromtransform" /><code>{"void CalculateFromTransform()"}</code> | <span className="api-desc">Fills `Details` from the object's current transform, creating it if needed.</span> |
| <Link id="m-load" /><code>{"bool Load("}<Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" details)"}</code> | <span className="api-desc">Shows a glyph: sets the sprite and name and applies its position. With no glyph, hides the object. Returns false if it was already hidden.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">In the editor (not playing), validates and reloads `Details`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Empty.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GlyphInstance`:

<div className="api-used-in">

[`PageRenderer.firstGlyph`](/mod/game-api/types/alta-items/pagerenderer#m-firstglyph), [`PageRenderer.glyphs`](/mod/game-api/types/alta-items/pagerenderer#m-glyphs).

</div>
