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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpineFlairs()"}</code> | Creates a `SpineFlairs` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bottom" /><code>{"private "}<Link to="/game-api/types/alta-items/spineedge">{"SpineEdge"}</Link>{" bottom"}</code> | Backing field for `Bottom`. |
| <Link id="m-middle" /><code>{"private "}<Link to="/game-api/types/alta-items/spinemiddle">{"SpineMiddle"}</Link>{" middle"}</code> | Backing field for `Middle`. |
| <Link id="m-top" /><code>{"private "}<Link to="/game-api/types/alta-items/spineedge">{"SpineEdge"}</Link>{" top"}</code> | Backing field for `Top`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bottom-2" /><code><Link to="/game-api/types/alta-items/spineedge">{"SpineEdge"}</Link>{" Bottom { get; }"}</code> | Piece at the bottom end of the spine. |
| <Link id="m-middle-2" /><code><Link to="/game-api/types/alta-items/spinemiddle">{"SpineMiddle"}</Link>{" Middle { get; }"}</code> | Piece along the middle of the spine. |
| <Link id="m-top-2" /><code><Link to="/game-api/types/alta-items/spineedge">{"SpineEdge"}</Link>{" Top { get; }"}</code> | Piece at the top end of the spine. |

## Used in

Members of other types that take, return or hold a `SpineFlairs`:

[`FlairSet.Spine`](/game-api/types/alta-items/flairset#m-spine), [`FlairSet.spineFlairs`](/game-api/types/alta-items/flairset#m-spineflairs), [`FlairSettings.BaseSpine`](/game-api/types/alta-items/flairsettings#m-basespine-2), [`FlairSettings.overrideSpine`](/game-api/types/alta-items/flairsettings#m-overridespine), [`FlairSettings.OverrideSpine`](/game-api/types/alta-items/flairsettings#m-overridespine-2).
