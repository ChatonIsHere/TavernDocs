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
| <Link id="m-ctor" /><code>{"MaterialLOD(Material material, int level)"}</code> | Creates a `MaterialLOD` from `material` and `level`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-level" /><code>{"int level"}</code> | The LOD level. |
| <Link id="m-material" /><code>{"Material material"}</code> | The shared material. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True when material and level match. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of material and level. |

## Used in

Members of other types that take, return or hold a `MaterialLOD`:

[`StaticObjectCombiner.GatherRenderers`](/mod/game-api/types/global-s/staticobjectcombiner#m-gatherrenderers), [`StaticObjectCombiner.GetMesh`](/mod/game-api/types/global-s/staticobjectcombiner#m-getmesh), [`StaticObjectCombiner.JoinMeshes`](/mod/game-api/types/global-s/staticobjectcombiner#m-joinmeshes).
