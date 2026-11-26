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
| <Link id="m-ctor" /><code>{"Curve()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">Backing field for `AnimationCurve`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationcurve" /><code>{"AnimationCurve AnimationCurve { get; }"}</code> | <span className="api-desc">The curve each cell value is passed through.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `CurveInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `Curve`:

<div className="api-used-in">

[`CurveInstance.CurveInstance`](/mod/game-api/types/alta-world-generation/curveinstance#m-ctor).

</div>
