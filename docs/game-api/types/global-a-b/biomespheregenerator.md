---
title: "BiomeSphereGenerator"
description: "class BiomeSphereGenerator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphereGenerator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSphereGenerator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> |  |
| <Link id="m-last" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" last"}</code> |  |
| <Link id="m-maxcompetitionscore" /><code>{"private float maxCompetitionScore"}</code> |  |
| <Link id="m-nodetoattemptratio" /><code>{"private float nodeToAttemptRatio"}</code> |  |
| <Link id="m-spheres" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"[] spheres"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishinitialize" /><code>{"override Task FinishInitialize()"}</code> |  |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-regenerate" /><code>{"void Regenerate()"}</code> |  |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BiomeSphereGenerator`:

[`BiomeSphereManager.generator`](/game-api/types/global-a-b/biomespheremanager#m-generator).
