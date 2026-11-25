---
title: "IBakeable"
description: "Something that precomputes data in the editor, such as text meshes, spline displays or curve walls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBakeable

An **interface** in `Root.Township`, no namespace.

Something that precomputes data in the editor, such as text meshes, spline displays or curve walls.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`SplineDisplay`](/game-api/types/alta-utilities/splinedisplay), [`BakeLODGroupGrouper`](/game-api/types/alta-utilities/bakelodgroupgrouper), [`ChunkingPrefabReplace`](/game-api/types/global-c-d/chunkingprefabreplace), [`CurveWall`](/game-api/types/global-c-d/curvewall), [`TextRenderer`](/game-api/types/global-t-x/textrenderer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | Whether the data has been baked. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | Builds and stores the precomputed data. |
