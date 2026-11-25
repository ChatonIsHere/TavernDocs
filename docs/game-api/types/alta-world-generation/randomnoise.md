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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`RandomNoiseInstance`](/game-api/types/alta-world-generation/randomnoiseinstance)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RandomNoise()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-coverage" /><code>{"protected float coverage"}</code> |
| <Link id="m-maximumexclusive" /><code>{"protected float maximumExclusive"}</code> |
| <Link id="m-minimuminclusive" /><code>{"protected float minimumInclusive"}</code> |
| <Link id="m-operationtype" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-coveragemultiplier" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" coverageMultiplier"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-coverage-2" /><code>{"float Coverage { get; }"}</code> | Fraction (0 to 1) of cells that get a random value. The rest get 0 before the operation. |
| <Link id="m-coveragemultiplier-2" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" CoverageMultiplier { get; }"}</code> | Optional plugin layer whose value scales `Coverage` per cell. |
| <Link id="m-maximumexclusive-2" /><code>{"float MaximumExclusive { get; }"}</code> | Upper bound of the random value. If equal to `MinimumInclusive` that value is used directly. |
| <Link id="m-minimuminclusive-2" /><code>{"float MinimumInclusive { get; }"}</code> | Lower bound of the random value. |
| <Link id="m-operationtype-2" /><code><Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | How the random value is combined with the cell's existing value. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `RandomNoiseInstance` that does the work for a plugin instance. |

## Used in

Members of other types that take, return or hold a `RandomNoise`:

[`RandomNoiseInstance.RandomNoiseInstance`](/game-api/types/alta-world-generation/randomnoiseinstance#m-ctor).
