---
title: "MaterialLOD"
description: "A material and LOD level pair, used as a key by StaticObjectCombiner to group renderers when combining meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialLOD

A **class** in `Root.Township`, no namespace.

A material and LOD level pair, used as a key by `StaticObjectCombiner` to group renderers when combining meshes.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MaterialLOD(Material material, int level)"}</code> |

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

[`StaticObjectCombiner.GatherRenderers`](/game-api/types/global-s/staticobjectcombiner#m-gatherrenderers), [`StaticObjectCombiner.GetMesh`](/game-api/types/global-s/staticobjectcombiner#m-getmesh), [`StaticObjectCombiner.JoinMeshes`](/game-api/types/global-s/staticobjectcombiner#m-joinmeshes).
