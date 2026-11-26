---
title: "SpineFlairs"
description: "Decorative top, middle and bottom pieces for a book's spine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpineFlairs

A **class** in `Root.Township`, `Alta.Pages`.

Decorative top, middle and bottom pieces for a book's spine. Used by `FlairSettings`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpineFlairs()"}</code> | <span className="api-desc">Creates a `SpineFlairs` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bottom" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/spineedge">{"SpineEdge"}</Link>{" bottom"}</code> | <span className="api-desc">Backing field for `Bottom`.</span> |
| <Link id="m-middle" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/spinemiddle">{"SpineMiddle"}</Link>{" middle"}</code> | <span className="api-desc">Backing field for `Middle`.</span> |
| <Link id="m-top" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/spineedge">{"SpineEdge"}</Link>{" top"}</code> | <span className="api-desc">Backing field for `Top`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bottom-2" /><code><Link to="/mod/game-api/types/alta-items/spineedge">{"SpineEdge"}</Link>{" Bottom { get; }"}</code> | <span className="api-desc">Piece at the bottom end of the spine.</span> |
| <Link id="m-middle-2" /><code><Link to="/mod/game-api/types/alta-items/spinemiddle">{"SpineMiddle"}</Link>{" Middle { get; }"}</code> | <span className="api-desc">Piece along the middle of the spine.</span> |
| <Link id="m-top-2" /><code><Link to="/mod/game-api/types/alta-items/spineedge">{"SpineEdge"}</Link>{" Top { get; }"}</code> | <span className="api-desc">Piece at the top end of the spine.</span> |

## Used in

Members of other types that take, return or hold a `SpineFlairs`:

<div className="api-used-in">

[`FlairSet.Spine`](/mod/game-api/types/alta-items/flairset#m-spine), [`FlairSet.spineFlairs`](/mod/game-api/types/alta-items/flairset#m-spineflairs), [`FlairSettings.BaseSpine`](/mod/game-api/types/alta-items/flairsettings#m-basespine-2), [`FlairSettings.overrideSpine`](/mod/game-api/types/alta-items/flairsettings#m-overridespine), [`FlairSettings.OverrideSpine`](/mod/game-api/types/alta-items/flairsettings#m-overridespine-2).

</div>
