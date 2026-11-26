---
title: "CustomOutline"
description: "A UI outline effect that draws eight shadow copies around a graphic, with an optional glint that recolours some vertices."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomOutline

A **class** in `Root.Township`, `UnityEngine.UI`.

A UI outline effect that draws eight shadow copies around a graphic, with an optional glint that recolours some vertices.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `Shadow`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomOutline()"}</code> | <span className="api-desc">Creates a `CustomOutline` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-glintcolor" /><code>{"Color glintColor"}</code> | <span className="api-desc">Colour used for the glint vertices.</span> |
| <Link id="m-glinteffect" /><code>{"bool glintEffect"}</code> | <span className="api-desc">Whether to tint some vertices with `glintColor`.</span> |
| <Link id="m-glintvertex" /><code>{"int glintVertex"}</code> | <span className="api-desc">Which vertex of each 6-vertex quad the glint centres on (0 to 5).</span> |
| <Link id="m-glintwidth" /><code>{"int glintWidth"}</code> | <span className="api-desc">How many vertices either side of `glintVertex` also get the glint.</span> |
| <Link id="m-m-size" /><code>{"float m_size"}</code> | <span className="api-desc">Outline offset in pixels (0 to 15).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifymesh" /><code>{"override void ModifyMesh(VertexHelper vh)"}</code> | <span className="api-desc">Optionally tints the glint vertices, then adds eight offset copies of the mesh in `effectColor` (four diagonals and four sides at 1.5 times the size).</span> |
