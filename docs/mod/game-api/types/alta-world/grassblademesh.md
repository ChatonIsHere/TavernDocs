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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GrassBladeMesh.Create`](/mod/game-api/types/alta-world/grassblademesh-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world/grassblademesh-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassBladeMesh()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecolor" /><code>{"private Color baseColor"}</code> | <span className="api-desc">Base colour of the blade. Backing field for `Color`.</span> |
| <Link id="m-isavailable" /><code>{"private bool isAvailable"}</code> | <span className="api-desc">Backing field for `IsAvailable`.</span> |
| <Link id="m-triangles" /><code>{"private int[] triangles"}</code> | <span className="api-desc">Triangle indices of the blade mesh. Backing field for `Triangles`.</span> |
| <Link id="m-vertices" /><code>{"private Vector3[] vertices"}</code> | <span className="api-desc">Vertices of the blade mesh. Backing field for `Vertices`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"Color Color { get; }"}</code> | <span className="api-desc">Base colour of the blade.</span> |
| <Link id="m-isavailable-2" /><code>{"bool IsAvailable { get; set; }"}</code> | <span className="api-desc">Serialized availability flag for this blade mesh.</span> |
| <Link id="m-maxy" /><code>{"float MaxY { get; }"}</code> | <span className="api-desc">Height of the tallest vertex (at least 0).</span> |
| <Link id="m-triangles-2" /><code>{"int[] Triangles { get; set; }"}</code> | <span className="api-desc">Triangle indices of the blade mesh.</span> |
| <Link id="m-vertices-2" /><code>{"Vector3[] Vertices { get; set; }"}</code> | <span className="api-desc">Vertex positions of the blade mesh.</span> |

## Used in

Members of other types that take, return or hold a `GrassBladeMesh`:

<div className="api-used-in">

[`GrassBlade.bladeMesh`](/mod/game-api/types/alta-world/grassblade#m-blademesh), [`GrassBlade.Initialize`](/mod/game-api/types/alta-world/grassblade#m-initialize), [`GrassBlade.Mesh`](/mod/game-api/types/alta-world/grassblade#m-mesh), [`GrassClumpHolder.ReceiveBlade`](/mod/game-api/types/alta-world/grassclumpholder#m-receiveblade), [`GrassEditorHolder.LoadStructure`](/mod/game-api/types/alta-world/grasseditorholder#m-loadstructure).

</div>
