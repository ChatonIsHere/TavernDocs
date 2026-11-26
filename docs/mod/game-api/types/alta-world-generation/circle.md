---
title: "Circle"
description: "Cave generator part that stamps a circle into one Y slice of a layer, with a curve from centre to edge."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Circle

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that stamps a circle into one Y slice of a layer, with a curve from centre to edge.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`CircleInstance`](/mod/game-api/types/alta-world-generation/circleinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Circle()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">Backing field for `Curve`.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Backing field for `OperationType`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Backing field for `Radius`.</span> |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | <span className="api-desc">Backing field for `YIndex`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | <span className="api-desc">Value from the centre (0) to the edge (1).</span> |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | <span className="api-desc">How the curve value combines with each cell.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Centre of the circle in map coordinates. The bounds check uses X and Z, but the distance check uses X and Y.</span> |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | <span className="api-desc">Radius of the circle in cells.</span> |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | <span className="api-desc">Which Y slice of the layer the circle is drawn into.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `CircleInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `Circle`:

<div className="api-used-in">

[`CircleInstance.CircleInstance`](/mod/game-api/types/alta-world-generation/circleinstance#m-ctor).

</div>
