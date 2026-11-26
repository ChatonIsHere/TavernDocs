---
title: "PipelineDistribution"
description: "Object pipeline step that picks one random entry from a distribution input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipelineDistribution

A **class** in `Root.Township`, the global namespace.

Object pipeline step that picks one random entry from a distribution input.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PipelineElement`](/mod/game-api/types/global-p/pipelineelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PipelineDistribution()"}</code> | Creates a `PipelineDistribution` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"override string Description { get; }"}</code> | Editor description of the step. |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Editor name, "Distribution". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-possibleresults" /><code>{"override IEnumerable<Object> PossibleResults(Object input) (iterator)"}</code> | Lists every entry in the input distribution. |
| <Link id="m-process" /><code>{"override Object Process(Object input, Func<double> random, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Returns a random entry from the input distribution using the spawn attributes, or null if the input isn't one. |
