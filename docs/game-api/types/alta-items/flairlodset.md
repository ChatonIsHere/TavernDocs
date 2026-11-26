---
title: "FlairLodSet"
description: "Component on a book flair prefab listing its renderers for each of three LOD levels, so the book can add them to its LOD group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlairLodSet

A **class** in `Root.Township`, `Alta.Pages`.

Component on a book flair prefab listing its renderers for each of three LOD levels, so the book can add them to its LOD group.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlairLodSet()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lod0" /><code>{"private Renderer[] lod0"}</code> | Renderers for the closest LOD. |
| <Link id="m-lod1" /><code>{"private Renderer[] lod1"}</code> | Renderers for the middle LOD. |
| <Link id="m-lod2" /><code>{"private Renderer[] lod2"}</code> | Renderers for the far LOD. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addto" /><code>{"void AddTo(List<Renderer>[] lods)"}</code> | Adds this flair's renderers to the matching LOD lists. |
| <Link id="m-removefrom" /><code>{"void RemoveFrom(List<Renderer>[] lods)"}</code> | Removes this flair's renderers from the LOD lists. |
| <Link id="m-set01material" /><code>{"void Set01Material(Material material)"}</code> | Sets the shared material on the LOD 0 and LOD 1 renderers only. |

## Used in

Members of other types that take, return or hold a `FlairLodSet`:

[`BookFlair.AddTo`](/game-api/types/alta-items/bookflair#m-addto), [`BookFlair.prefab`](/game-api/types/alta-items/bookflair#m-prefab).
