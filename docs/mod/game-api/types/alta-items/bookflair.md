---
title: "BookFlair"
description: "Base asset for a decoration (spine, edge, emblem) added to a book's model, with renderers for each LOD."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BookFlair

An **abstract class** in `Root.Township`, `Alta.Pages`.

Base asset for a decoration (spine, edge, emblem) added to a book's model, with renderers for each LOD.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`FaceEdgeCorner`](/mod/game-api/types/alta-items/faceedgecorner), [`FaceEdgeMiddle`](/mod/game-api/types/alta-items/faceedgemiddle), [`FaceEmblem`](/mod/game-api/types/alta-items/faceemblem), [`FaceEmblemFrame`](/mod/game-api/types/alta-items/faceemblemframe), [`FaceSpineCorner`](/mod/game-api/types/alta-items/facespinecorner), [`FaceSpineMiddle`](/mod/game-api/types/alta-items/facespinemiddle), [`SpineEdge`](/mod/game-api/types/alta-items/spineedge), [`SpineMiddle`](/mod/game-api/types/alta-items/spinemiddle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BookFlair()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/flairlodset">{"FlairLodSet"}</Link>{" prefab"}</code> | <span className="api-desc">The `FlairLodSet` prefab that `AddTo` spawns under the attach point.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addto" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-items/flairlodset">{"FlairLodSet"}</Link>{" AddTo(Transform parent, List<Renderer>[] lods)"}</code> | <span className="api-desc">Spawns the flair prefab under the given transform and adds its renderers to the book's LOD lists.</span> |

## Used in

Members of other types that take, return or hold a `BookFlair`:

<div className="api-used-in">

[`Book.AddFlair`](/mod/game-api/types/alta-items/book#m-addflair).

</div>
