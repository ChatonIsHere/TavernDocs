---
title: "LODBaker"
description: "Client: merges the mesh renderers of each LOD level in a LODGroup into one mesh per material, to cut draw calls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODBaker

A **class** in `Root.Township`, no namespace.

Client: merges the mesh renderers of each LOD level in a `LODGroup` into one mesh per material, to cut draw calls. Does nothing on the headless server.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`MeshBase`](/game-api/types/global-i-l/lodbaker-meshbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODBaker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"private LODGroup group"}</code> | The LOD group to bake. |
| <Link id="m-isbaked" /><code>{"private bool isBaked"}</code> | Whether baking has run. |
| <Link id="m-isbakingonstart" /><code>{"private bool isBakingOnStart"}</code> | Bake automatically in `Start`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-preserved" /><code>{"private List<Renderer> preserved"}</code> | Renderers left as they are and not merged. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | Client, once: combines each LOD's mesh renderers by material into new child renderers and hides the originals. Preserved renderers are kept. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Marks as baked so it is not baked again. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Client: recalculates the group's bounds if its size is 0. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Bakes if `isBakingOnStart` is set. |

</details>

## Used in

Members of other types that take, return or hold a `LODBaker`:

[`GenericCraftingResult.baker`](/game-api/types/alta-crafting/genericcraftingresult#m-baker).
