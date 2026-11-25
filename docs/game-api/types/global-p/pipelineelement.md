---
title: "PipelineElement"
description: "abstract class PipelineElement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipelineElement

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Derived types** [`PipelineDistribution`](/game-api/types/global-p/pipelinedistribution), [`PipelineFlattenDistribution`](/game-api/types/global-p/pipelineflattendistribution)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PipelineElement()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"abstract string Description { get; }"}</code> |  |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-possibleresults" /><code>{"abstract IEnumerable<Object> PossibleResults(Object input)"}</code> |  |
| <Link id="m-process" /><code>{"abstract Object Process(Object input, Func<double> random, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PipelineElement`:

[`ObjectPipeline.Elements`](/game-api/types/global-m-o/objectpipeline#m-elements).
