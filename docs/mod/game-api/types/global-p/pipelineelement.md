---
title: "PipelineElement"
description: "Base class for one step in an object processing pipeline that turns an input object into an output, using a seeded random function and spawn data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipelineElement

An **abstract class** in `Root.Township`, the global namespace.

Base class for one step in an object processing pipeline that turns an input object into an output, using a seeded random function and spawn data.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Derived types** [`PipelineDistribution`](/mod/game-api/types/global-p/pipelinedistribution), [`PipelineFlattenDistribution`](/mod/game-api/types/global-p/pipelineflattendistribution)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PipelineElement()"}</code> | <span className="api-desc">Creates a `PipelineElement` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"abstract string Description { get; }"}</code> | <span className="api-desc">Text describing what the step does.</span> |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> | <span className="api-desc">The step's display name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-possibleresults" /><code>{"abstract IEnumerable<Object> PossibleResults(Object input)"}</code> | <span className="api-desc">Lists every object this step could produce from an input.</span> |
| <Link id="m-process" /><code>{"abstract Object Process(Object input, Func<double> random, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Runs the step on an input object and returns the result.</span> |

## Used in

Members of other types that take, return or hold a `PipelineElement`:

<div className="api-used-in">

[`ObjectPipeline.Elements`](/mod/game-api/types/global-m-o/objectpipeline#m-elements).

</div>
