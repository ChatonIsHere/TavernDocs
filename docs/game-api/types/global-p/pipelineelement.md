---
title: "PipelineElement"
description: "Base class for one step in an object processing pipeline that turns an input object into an output, using a seeded random function and spawn data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipelineElement

An **abstract class** in `Root.Township`, no namespace.

Base class for one step in an object processing pipeline that turns an input object into an output, using a seeded random function and spawn data.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Derived types** [`PipelineDistribution`](/game-api/types/global-p/pipelinedistribution), [`PipelineFlattenDistribution`](/game-api/types/global-p/pipelineflattendistribution)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PipelineElement()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"abstract string Description { get; }"}</code> | Text describing what the step does. |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> | The step's display name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-possibleresults" /><code>{"abstract IEnumerable<Object> PossibleResults(Object input)"}</code> | Lists every object this step could produce from an input. |
| <Link id="m-process" /><code>{"abstract Object Process(Object input, Func<double> random, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Runs the step on an input object and returns the result. |

## Used in

Members of other types that take, return or hold a `PipelineElement`:

[`ObjectPipeline.Elements`](/game-api/types/global-m-o/objectpipeline#m-elements).
