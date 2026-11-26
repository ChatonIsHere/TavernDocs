---
title: "PathEndsPart"
description: "Generatable part that places two objects at the ends of a forest path edge during generation, facing along the path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathEndsPart

A **class** in `Root.Township`, the global namespace.

Generatable part that places two objects at the ends of a forest path edge during generation, facing along the path.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Nested types** [`Arrangement`](/mod/game-api/types/global-p/pathendspart-arrangement)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathEndsPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrangement" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pathendspart-arrangement">{"PathEndsPart.Arrangement"}</Link>{" arrangement"}</code> | Which side goes towards the forest entrance, or random or symmetrical. |
| <Link id="m-distancefromends" /><code>{"private float distanceFromEnds"}</code> | Backing field for `DistanceFromEnds`. |
| <Link id="m-entranceindex" /><code>{"private int entranceIndex"}</code> | Index of the forest node treated as the entrance when choosing which end is which. |
| <Link id="m-sidea" /><code>{"private Transform sideA"}</code> | The object placed at one end of the path. |
| <Link id="m-sideb" /><code>{"private Transform sideB"}</code> | The object placed at the other end of the path. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distancefromends-2" /><code>{"float DistanceFromEnds { get; set; }"}</code> | How far in from each end of the path the two sides are placed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Places `sideA` and `sideB` at the ends of the forest edge being spawned. Only runs when the spawn data is forest node map data. |

## Used in

Members of other types that take, return or hold a `PathEndsPart`:

[`LinearPartClonerPart.pathEndsPart`](/mod/game-api/types/global-i-l/linearpartclonerpart#m-pathendspart).
