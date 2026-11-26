---
title: "GenerationStage"
description: "Order of cave generation stages, from floor and roof through voxels and marching cubes to static, dynamic and aesthetic dressing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationStage

An **enum** in `Root.Township`, `Alta.Caves`.

Order of cave generation stages, from floor and roof through voxels and marching cubes to static, dynamic and aesthetic dressing. Each cave `Plugin` has one.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Values

| Member |
| --- |
| <Link id="m-aesth" /><code>{"Aesth = 8000"}</code> |
| <Link id="m-dynamic" /><code>{"Dynamic = 7000"}</code> |
| <Link id="m-floorroof" /><code>{"FloorRoof = 1000"}</code> |
| <Link id="m-marchingcubes" /><code>{"MarchingCubes = 4000"}</code> |
| <Link id="m-mask" /><code>{"Mask = 5000"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-static" /><code>{"Static = 6000"}</code> |
| <Link id="m-stretch" /><code>{"Stretch = 2000"}</code> |
| <Link id="m-voxels" /><code>{"Voxels = 3000"}</code> |

## Used in

Members of other types that take, return or hold a `GenerationStage`:

<div className="api-used-in">

[`Plugin.generationStage`](/mod/game-api/types/alta-world-generation/plugin#m-generationstage), [`Plugin.Stage`](/mod/game-api/types/alta-world-generation/plugin#m-stage).

</div>
