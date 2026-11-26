---
title: "IBakeable"
description: "Something that precomputes data in the editor, such as text meshes, spline displays or curve walls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBakeable

An **interface** in `Root.Township`, the global namespace.

Something that precomputes data in the editor, such as text meshes, spline displays or curve walls.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`SplineDisplay`](/mod/game-api/types/alta-utilities/splinedisplay), [`BakeLODGroupGrouper`](/mod/game-api/types/alta-utilities/bakelodgroupgrouper), [`ChunkingPrefabReplace`](/mod/game-api/types/global-c-d/chunkingprefabreplace), [`CurveWall`](/mod/game-api/types/global-c-d/curvewall), [`TextRenderer`](/mod/game-api/types/global-t-x/textrenderer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | <span className="api-desc">Whether the data has been baked.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | <span className="api-desc">Builds and stores the precomputed data.</span> |
