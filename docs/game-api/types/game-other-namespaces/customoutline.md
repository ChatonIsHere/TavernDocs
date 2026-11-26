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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `Shadow`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomOutline()"}</code> | Creates a `CustomOutline` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-glintcolor" /><code>{"Color glintColor"}</code> | Colour used for the glint vertices. |
| <Link id="m-glinteffect" /><code>{"bool glintEffect"}</code> | Whether to tint some vertices with `glintColor`. |
| <Link id="m-glintvertex" /><code>{"int glintVertex"}</code> | Which vertex of each 6-vertex quad the glint centres on (0 to 5). |
| <Link id="m-glintwidth" /><code>{"int glintWidth"}</code> | How many vertices either side of `glintVertex` also get the glint. |
| <Link id="m-m-size" /><code>{"float m_size"}</code> | Outline offset in pixels (0 to 15). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifymesh" /><code>{"override void ModifyMesh(VertexHelper vh)"}</code> | Optionally tints the glint vertices, then adds eight offset copies of the mesh in `effectColor` (four diagonals and four sides at 1.5 times the size). |
