---
title: "WoodcutTreeBakerAccess<T>"
description: "Adapter the woodcutting tree baker uses to read meshes, materials and LODs from some source type T."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeBakerAccess&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Woodcutting`.

Adapter the woodcutting tree baker uses to read meshes, materials and LODs from some source type `T`. Build-time tooling.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`WoodcutTreeAttachmentBaker`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker), [`WoodcutTreeNodeBaker`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected WoodcutTreeBakerAccess()"}</code> | <span className="api-desc">Creates a `WoodcutTreeBakerAccess` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscopyingcolors" /><code>{"virtual bool IsCopyingColors { get; }"}</code> | <span className="api-desc">Whether vertex colours are copied when baking. False unless overridden.</span> |
| <Link id="m-maxlods" /><code>{"abstract int MaxLods { get; }"}</code> | <span className="api-desc">Most LODs this source supports.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"abstract int GetLodCount(T item)"}</code> | <span className="api-desc">Number of LODs the item has.</span> |
| <Link id="m-getmaterial" /><code>{"abstract Material GetMaterial(T item, int index)"}</code> | <span className="api-desc">The item's material at a given index.</span> |
| <Link id="m-getmesh" /><code>{"abstract Mesh GetMesh(T item, int lod)"}</code> | <span className="api-desc">The item's mesh at a given LOD.</span> |
| <Link id="m-getname" /><code>{"abstract string GetName(T item)"}</code> | <span className="api-desc">Name of the item.</span> |
| <Link id="m-gettransform" /><code>{"abstract Transform GetTransform(T item)"}</code> | <span className="api-desc">Transform of the item.</span> |
| <Link id="m-isvalid" /><code>{"abstract bool IsValid(T item, int lod)"}</code> | <span className="api-desc">Whether the item has usable data at a given LOD.</span> |

## Used in

Members of other types that take, return or hold a `WoodcutTreeBakerAccess&lt;T>`:

<div className="api-used-in">

[`WoodcutTreeBakingHandler.Bake`](/mod/game-api/types/alta-crafting/woodcuttreebakinghandler#m-bake).

</div>
