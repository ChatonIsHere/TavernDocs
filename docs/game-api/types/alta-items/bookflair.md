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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`FaceEdgeCorner`](/game-api/types/alta-items/faceedgecorner), [`FaceEdgeMiddle`](/game-api/types/alta-items/faceedgemiddle), [`FaceEmblem`](/game-api/types/alta-items/faceemblem), [`FaceEmblemFrame`](/game-api/types/alta-items/faceemblemframe), [`FaceSpineCorner`](/game-api/types/alta-items/facespinecorner), [`FaceSpineMiddle`](/game-api/types/alta-items/facespinemiddle), [`SpineEdge`](/game-api/types/alta-items/spineedge), [`SpineMiddle`](/game-api/types/alta-items/spinemiddle)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected BookFlair()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-items/flairlodset">{"FlairLodSet"}</Link>{" prefab"}</code> | The `FlairLodSet` prefab that `AddTo` spawns under the attach point. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addto" /><code>{"virtual "}<Link to="/game-api/types/alta-items/flairlodset">{"FlairLodSet"}</Link>{" AddTo(Transform parent, List<Renderer>[] lods)"}</code> | Spawns the flair prefab under the given transform and adds its renderers to the book's LOD lists. |

## Used in

Members of other types that take, return or hold a `BookFlair`:

[`Book.AddFlair`](/game-api/types/alta-items/book#m-addflair).
