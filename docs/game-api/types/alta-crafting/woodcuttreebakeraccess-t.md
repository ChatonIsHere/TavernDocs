---
title: "WoodcutTreeBakerAccess<T>"
description: "abstract class WoodcutTreeBakerAccess<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeBakerAccess&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Woodcutting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`WoodcutTreeAttachmentBaker`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker), [`WoodcutTreeNodeBaker`](/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected WoodcutTreeBakerAccess()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscopyingcolors" /><code>{"virtual bool IsCopyingColors { get; }"}</code> |  |
| <Link id="m-maxlods" /><code>{"abstract int MaxLods { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"abstract int GetLodCount(T item)"}</code> |  |
| <Link id="m-getmaterial" /><code>{"abstract Material GetMaterial(T item, int index)"}</code> |  |
| <Link id="m-getmesh" /><code>{"abstract Mesh GetMesh(T item, int lod)"}</code> |  |
| <Link id="m-getname" /><code>{"abstract string GetName(T item)"}</code> |  |
| <Link id="m-gettransform" /><code>{"abstract Transform GetTransform(T item)"}</code> |  |
| <Link id="m-isvalid" /><code>{"abstract bool IsValid(T item, int lod)"}</code> |  |

## Used in

Members of other types that take, return or hold a `WoodcutTreeBakerAccess&lt;T>`:

[`WoodcutTreeBakingHandler.Bake`](/game-api/types/alta-crafting/woodcuttreebakinghandler#m-bake).
