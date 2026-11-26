---
title: "FlairSet"
description: "Asset with one set of decorative flairs for a book's pages: spine, spine face and edge face."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlairSet

A **class** in `Root.Township`, `Alta.Pages`.

Asset with one set of decorative flairs for a book's pages: spine, spine face and edge face. `FlairSettings` holds the base sets.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`FlairSet.Create`](/mod/game-api/types/alta-items/flairset-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/flairset-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlairSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-edgefaceflairs" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" edgeFaceFlairs"}</code> | <span className="api-desc">Backing field for `EdgeFace`.</span> |
| <Link id="m-spinefaceflairs" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" spineFaceFlairs"}</code> | <span className="api-desc">Backing field for `SpineFace`.</span> |
| <Link id="m-spineflairs" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" spineFlairs"}</code> | <span className="api-desc">Backing field for `Spine`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edgeface" /><code><Link to="/mod/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" EdgeFace { get; }"}</code> | <span className="api-desc">Flairs for the face of the page edge.</span> |
| <Link id="m-spine" /><code><Link to="/mod/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" Spine { get; }"}</code> | <span className="api-desc">Flairs for the spine: top, middle and bottom.</span> |
| <Link id="m-spineface" /><code><Link to="/mod/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" SpineFace { get; }"}</code> | <span className="api-desc">Flairs for the face next to the spine.</span> |

## Used in

Members of other types that take, return or hold a `FlairSet`:

<div className="api-used-in">

[`FlairSettings.baseEdgeFace`](/mod/game-api/types/alta-items/flairsettings#m-baseedgeface), [`FlairSettings.baseSpine`](/mod/game-api/types/alta-items/flairsettings#m-basespine), [`FlairSettings.baseSpineFace`](/mod/game-api/types/alta-items/flairsettings#m-basespineface).

</div>
