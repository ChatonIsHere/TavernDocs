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
| <Link id="m-ctor" /><code>{"PathEndsPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrangement" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pathendspart-arrangement">{"PathEndsPart.Arrangement"}</Link>{" arrangement"}</code> | <span className="api-desc">Which side goes towards the forest entrance, or random or symmetrical.</span> |
| <Link id="m-distancefromends" /><code>{"private float distanceFromEnds"}</code> | <span className="api-desc">Backing field for `DistanceFromEnds`.</span> |
| <Link id="m-entranceindex" /><code>{"private int entranceIndex"}</code> | <span className="api-desc">Index of the forest node treated as the entrance when choosing which end is which.</span> |
| <Link id="m-sidea" /><code>{"private Transform sideA"}</code> | <span className="api-desc">The object placed at one end of the path.</span> |
| <Link id="m-sideb" /><code>{"private Transform sideB"}</code> | <span className="api-desc">The object placed at the other end of the path.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distancefromends-2" /><code>{"float DistanceFromEnds { get; set; }"}</code> | <span className="api-desc">How far in from each end of the path the two sides are placed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | <span className="api-desc">Places `sideA` and `sideB` at the ends of the forest edge being spawned. Only runs when the spawn data is forest node map data.</span> |

## Used in

Members of other types that take, return or hold a `PathEndsPart`:

<div className="api-used-in">

[`LinearPartClonerPart.pathEndsPart`](/mod/game-api/types/global-i-l/linearpartclonerpart#m-pathendspart).

</div>
