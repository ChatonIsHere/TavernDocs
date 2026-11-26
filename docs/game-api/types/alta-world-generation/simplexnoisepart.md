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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`SimplexNoisePartInstance`](/game-api/types/alta-world-generation/simplexnoisepartinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimplexNoisePart()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Backing field for `Curve`. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | Backing field for `OperationType`. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Backing field for `Scale`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | Curve the 0 to 1 noise value is passed through. |
| <Link id="m-operationtype-2" /><code><Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | How the noise value combines with each cell. |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> | Multiplier on cell coordinates before sampling. Smaller values give larger features. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `SimplexNoisePartInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `SimplexNoisePart`:

[`SimplexNoisePartInstance.SimplexNoisePartInstance`](/game-api/types/alta-world-generation/simplexnoisepartinstance#m-ctor).
