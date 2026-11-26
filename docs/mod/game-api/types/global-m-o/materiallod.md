---
title: "MaterialLOD"
description: "A material and LOD level pair, used as a key by StaticObjectCombiner to group renderers when combining meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialLOD

A **class** in `Root.Township`, the global namespace.

A material and LOD level pair, used as a key by `StaticObjectCombiner` to group renderers when combining meshes.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialLOD(Material material, int level)"}</code> | <span className="api-desc">Creates a `MaterialLOD` from `material` and `level`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-level" /><code>{"int level"}</code> | <span className="api-desc">The LOD level.</span> |
| <Link id="m-material" /><code>{"Material material"}</code> | <span className="api-desc">The shared material.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True when material and level match.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of material and level.</span> |

## Used in

Members of other types that take, return or hold a `MaterialLOD`:

<div className="api-used-in">

[`StaticObjectCombiner.GatherRenderers`](/mod/game-api/types/global-s/staticobjectcombiner#m-gatherrenderers), [`StaticObjectCombiner.GetMesh`](/mod/game-api/types/global-s/staticobjectcombiner#m-getmesh), [`StaticObjectCombiner.JoinMeshes`](/mod/game-api/types/global-s/staticobjectcombiner#m-joinmeshes).

</div>
