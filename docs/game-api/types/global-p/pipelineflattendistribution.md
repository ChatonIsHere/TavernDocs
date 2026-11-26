---
title: "PipelineFlattenDistribution"
description: "Object pipeline step that keeps picking from nested distributions until it reaches something that isn't a distribution."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipelineFlattenDistribution

A **class** in `Root.Township`, no namespace.

Object pipeline step that keeps picking from nested distributions until it reaches something that isn't a distribution.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PipelineElement`](/game-api/types/global-p/pipelineelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PipelineFlattenDistribution()"}</code> | Creates a `PipelineFlattenDistribution` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"override string Description { get; }"}</code> | Editor description of the step. |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Editor name, "Flatten Distribution". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-possibleresults" /><code>{"override IEnumerable<Object> PossibleResults(Object input) (iterator)"}</code> | Lists every final result reachable through the nested distributions. |
| <Link id="m-process" /><code>{"override Object Process(Object input, Func<double> random, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Picks randomly through nested distributions and returns the first non-distribution result. |
