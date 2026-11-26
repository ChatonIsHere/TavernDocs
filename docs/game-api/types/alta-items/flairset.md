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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`FlairSet.Create`](/game-api/types/alta-items/flairset-create)
- **Nested types** [`Create`](/game-api/types/alta-items/flairset-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlairSet()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-edgefaceflairs" /><code>{"private "}<Link to="/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" edgeFaceFlairs"}</code> | Backing field for `EdgeFace`. |
| <Link id="m-spinefaceflairs" /><code>{"private "}<Link to="/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" spineFaceFlairs"}</code> | Backing field for `SpineFace`. |
| <Link id="m-spineflairs" /><code>{"private "}<Link to="/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" spineFlairs"}</code> | Backing field for `Spine`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edgeface" /><code><Link to="/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" EdgeFace { get; }"}</code> | Flairs for the face of the page edge. |
| <Link id="m-spine" /><code><Link to="/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" Spine { get; }"}</code> | Flairs for the spine: top, middle and bottom. |
| <Link id="m-spineface" /><code><Link to="/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" SpineFace { get; }"}</code> | Flairs for the face next to the spine. |

## Used in

Members of other types that take, return or hold a `FlairSet`:

[`FlairSettings.baseEdgeFace`](/game-api/types/alta-items/flairsettings#m-baseedgeface), [`FlairSettings.baseSpine`](/game-api/types/alta-items/flairsettings#m-basespine), [`FlairSettings.baseSpineFace`](/game-api/types/alta-items/flairsettings#m-basespineface).
