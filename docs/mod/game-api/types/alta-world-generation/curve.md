---
title: "Curve"
description: "Cave generator part that remaps every cell of a layer through an animation curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Curve

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that remaps every cell of a layer through an animation curve.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`CurveInstance`](/mod/game-api/types/alta-world-generation/curveinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Curve()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Backing field for `AnimationCurve`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationcurve" /><code>{"AnimationCurve AnimationCurve { get; }"}</code> | The curve each cell value is passed through. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `CurveInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `Curve`:

[`CurveInstance.CurveInstance`](/mod/game-api/types/alta-world-generation/curveinstance#m-ctor).
