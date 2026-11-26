---
title: "LODBaker"
description: "Client: merges the mesh renderers of each LOD level in a LODGroup into one mesh per material, to cut draw calls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODBaker

A **class** in `Root.Township`, the global namespace.

Client: merges the mesh renderers of each LOD level in a `LODGroup` into one mesh per material, to cut draw calls. Does nothing on the headless server.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`MeshBase`](/mod/game-api/types/global-i-l/lodbaker-meshbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODBaker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"private LODGroup group"}</code> | <span className="api-desc">The LOD group to bake.</span> |
| <Link id="m-isbaked" /><code>{"private bool isBaked"}</code> | <span className="api-desc">Whether baking has run.</span> |
| <Link id="m-isbakingonstart" /><code>{"private bool isBakingOnStart"}</code> | <span className="api-desc">Bake automatically in `Start`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-preserved" /><code>{"private List<Renderer> preserved"}</code> | <span className="api-desc">Renderers left as they are and not merged.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | <span className="api-desc">Client, once: combines each LOD's mesh renderers by material into new child renderers and hides the originals. Preserved renderers are kept.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Marks as baked so it is not baked again.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Client: recalculates the group's bounds if its size is 0.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Bakes if `isBakingOnStart` is set.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LODBaker`:

<div className="api-used-in">

[`GenericCraftingResult.baker`](/mod/game-api/types/alta-crafting/genericcraftingresult#m-baker).

</div>
