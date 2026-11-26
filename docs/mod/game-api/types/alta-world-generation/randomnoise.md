---
title: "RandomNoise"
description: "Cave generator part that fills a map layer with hashed random values, combined with the existing values using OperationType."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomNoise

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that fills a map layer with hashed random values, combined with the existing values using `OperationType`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`RandomNoiseInstance`](/mod/game-api/types/alta-world-generation/randomnoiseinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomNoise()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coverage" /><code>{"protected float coverage"}</code> | <span className="api-desc">Backing field for `Coverage`.</span> |
| <Link id="m-maximumexclusive" /><code>{"protected float maximumExclusive"}</code> | <span className="api-desc">Backing field for `MaximumExclusive`.</span> |
| <Link id="m-minimuminclusive" /><code>{"protected float minimumInclusive"}</code> | <span className="api-desc">Backing field for `MinimumInclusive`.</span> |
| <Link id="m-operationtype" /><code>{"protected "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Backing field for `OperationType`.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coveragemultiplier" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" coverageMultiplier"}</code> | <span className="api-desc">Backing field for `CoverageMultiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-coverage-2" /><code>{"float Coverage { get; }"}</code> | <span className="api-desc">Fraction (0 to 1) of cells that get a random value. The rest get 0 before the operation.</span> |
| <Link id="m-coveragemultiplier-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" CoverageMultiplier { get; }"}</code> | <span className="api-desc">Optional plugin layer whose value scales `Coverage` per cell.</span> |
| <Link id="m-maximumexclusive-2" /><code>{"float MaximumExclusive { get; }"}</code> | <span className="api-desc">Upper bound of the random value. If equal to `MinimumInclusive` that value is used directly.</span> |
| <Link id="m-minimuminclusive-2" /><code>{"float MinimumInclusive { get; }"}</code> | <span className="api-desc">Lower bound of the random value.</span> |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | <span className="api-desc">How the random value is combined with the cell's existing value.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `RandomNoiseInstance` that does the work for a plugin instance.</span> |

## Used in

Members of other types that take, return or hold a `RandomNoise`:

<div className="api-used-in">

[`RandomNoiseInstance.RandomNoiseInstance`](/mod/game-api/types/alta-world-generation/randomnoiseinstance#m-ctor).

</div>
