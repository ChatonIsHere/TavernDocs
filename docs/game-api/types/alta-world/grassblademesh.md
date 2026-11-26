---
title: "GrassBladeMesh"
description: "A ScriptableObject holding one grass blade's mesh data and base colour, used by the grass system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassBladeMesh

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

A ScriptableObject holding one grass blade's mesh data and base colour, used by the grass system.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GrassBladeMesh.Create`](/game-api/types/alta-world/grassblademesh-create)
- **Nested types** [`Create`](/game-api/types/alta-world/grassblademesh-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GrassBladeMesh()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecolor" /><code>{"private Color baseColor"}</code> | Base colour of the blade. Backing field for `Color`. |
| <Link id="m-isavailable" /><code>{"private bool isAvailable"}</code> | Backing field for `IsAvailable`. |
| <Link id="m-triangles" /><code>{"private int[] triangles"}</code> | Triangle indices of the blade mesh. Backing field for `Triangles`. |
| <Link id="m-vertices" /><code>{"private Vector3[] vertices"}</code> | Vertices of the blade mesh. Backing field for `Vertices`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"Color Color { get; }"}</code> | Base colour of the blade. |
| <Link id="m-isavailable-2" /><code>{"bool IsAvailable { get; set; }"}</code> | Serialized availability flag for this blade mesh. |
| <Link id="m-maxy" /><code>{"float MaxY { get; }"}</code> | Height of the tallest vertex (at least 0). |
| <Link id="m-triangles-2" /><code>{"int[] Triangles { get; set; }"}</code> | Triangle indices of the blade mesh. |
| <Link id="m-vertices-2" /><code>{"Vector3[] Vertices { get; set; }"}</code> | Vertex positions of the blade mesh. |

## Used in

Members of other types that take, return or hold a `GrassBladeMesh`:

[`GrassBlade.bladeMesh`](/game-api/types/alta-world/grassblade#m-blademesh), [`GrassBlade.Initialize`](/game-api/types/alta-world/grassblade#m-initialize), [`GrassBlade.Mesh`](/game-api/types/alta-world/grassblade#m-mesh), [`GrassClumpHolder.ReceiveBlade`](/game-api/types/alta-world/grassclumpholder#m-receiveblade), [`GrassEditorHolder.LoadStructure`](/game-api/types/alta-world/grasseditorholder#m-loadstructure).
