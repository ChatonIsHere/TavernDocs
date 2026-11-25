---
title: "WoodcutTreeBakerAccess<T>"
description: "Adapter the woodcutting tree baker uses to read meshes, materials and LODs from some source type T. Build-time tooling."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeBakerAccess&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Woodcutting`.

Adapter the woodcutting tree baker uses to read meshes, materials and LODs from some source type `T`. Build-time tooling.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`WoodcutTreeAttachmentBaker`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker), [`WoodcutTreeNodeBaker`](/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected WoodcutTreeBakerAccess()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscopyingcolors" /><code>{"virtual bool IsCopyingColors { get; }"}</code> | Whether vertex colours are copied when baking. False unless overridden. |
| <Link id="m-maxlods" /><code>{"abstract int MaxLods { get; }"}</code> | Most LODs this source supports. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"abstract int GetLodCount(T item)"}</code> | Number of LODs the item has. |
| <Link id="m-getmaterial" /><code>{"abstract Material GetMaterial(T item, int index)"}</code> | The item's material at a given index. |
| <Link id="m-getmesh" /><code>{"abstract Mesh GetMesh(T item, int lod)"}</code> | The item's mesh at a given LOD. |
| <Link id="m-getname" /><code>{"abstract string GetName(T item)"}</code> | Name of the item. |
| <Link id="m-gettransform" /><code>{"abstract Transform GetTransform(T item)"}</code> | Transform of the item. |
| <Link id="m-isvalid" /><code>{"abstract bool IsValid(T item, int lod)"}</code> | Whether the item has usable data at a given LOD. |

## Used in

Members of other types that take, return or hold a `WoodcutTreeBakerAccess&lt;T>`:

[`WoodcutTreeBakingHandler.Bake`](/game-api/types/alta-crafting/woodcuttreebakinghandler#m-bake).
