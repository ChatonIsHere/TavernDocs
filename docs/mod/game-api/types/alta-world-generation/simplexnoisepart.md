---
title: "SimplexNoisePart"
description: "Cave generator part that combines every cell of a layer with 3D simplex noise from the generator's seed, passed through a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplexNoisePart

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that combines every cell of a layer with 3D simplex noise from the generator's seed, passed through a curve.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`SimplexNoisePartInstance`](/mod/game-api/types/alta-world-generation/simplexnoisepartinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimplexNoisePart()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">Backing field for `Curve`.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Backing field for `OperationType`.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Backing field for `Scale`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | <span className="api-desc">Curve the 0 to 1 noise value is passed through.</span> |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | <span className="api-desc">How the noise value combines with each cell.</span> |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> | <span className="api-desc">Multiplier on cell coordinates before sampling. Smaller values give larger features.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `SimplexNoisePartInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `SimplexNoisePart`:

<div className="api-used-in">

[`SimplexNoisePartInstance.SimplexNoisePartInstance`](/mod/game-api/types/alta-world-generation/simplexnoisepartinstance#m-ctor).

</div>
