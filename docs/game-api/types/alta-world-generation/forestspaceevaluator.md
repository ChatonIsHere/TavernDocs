---
title: "ForestSpaceEvaluator"
description: "A node map step in forest generation that marks triangle spaces as dense or open from their edge types."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestSpaceEvaluator

A **class** in `Root.Township`, `Alta.Forests`.

A node map step in forest generation that marks triangle spaces as dense or open from their edge types.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestSpaceEvaluator()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Sets a space to `Dense` when all three edges are type 0, or `Open` when all three are `Normal`; mixed spaces are left alone. |
