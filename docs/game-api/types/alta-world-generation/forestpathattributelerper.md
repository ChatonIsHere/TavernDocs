---
title: "ForestPathAttributeLerper"
description: "A node map step in forest generation that gives each edge the average of its two nodes' values for chosen biome attributes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestPathAttributeLerper

A **class** in `Root.Township`, `Alta.Forests`.

A node map step in forest generation that gives each edge the average of its two nodes' values for chosen biome attributes.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestPathAttributeLerper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{"[] attributes"}</code> | The biome attributes to average onto edges. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | For every edge, sets each listed attribute it doesn't already have to the average of its end nodes' values. |
