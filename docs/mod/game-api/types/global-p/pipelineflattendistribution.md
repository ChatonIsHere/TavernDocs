---
title: "PipelineFlattenDistribution"
description: "Object pipeline step that keeps picking from nested distributions until it reaches something that isn't a distribution."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipelineFlattenDistribution

A **class** in `Root.Township`, the global namespace.

Object pipeline step that keeps picking from nested distributions until it reaches something that isn't a distribution.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PipelineElement`](/mod/game-api/types/global-p/pipelineelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PipelineFlattenDistribution()"}</code> | <span className="api-desc">Creates a `PipelineFlattenDistribution` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"override string Description { get; }"}</code> | <span className="api-desc">Editor description of the step.</span> |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Editor name, "Flatten Distribution".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-possibleresults" /><code>{"override IEnumerable<Object> PossibleResults(Object input) (iterator)"}</code> | <span className="api-desc">Lists every final result reachable through the nested distributions.</span> |
| <Link id="m-process" /><code>{"override Object Process(Object input, Func<double> random, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Picks randomly through nested distributions and returns the first non-distribution result.</span> |
