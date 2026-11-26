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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`CircleInstance`](/game-api/types/alta-world-generation/circleinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Circle()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Backing field for `Curve`. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | Backing field for `OperationType`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Backing field for `Radius`. |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | Backing field for `YIndex`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | Value from the centre (0) to the edge (1). |
| <Link id="m-operationtype-2" /><code><Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | How the curve value combines with each cell. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | Centre of the circle in map coordinates. The bounds check uses X and Z, but the distance check uses X and Y. |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | Radius of the circle in cells. |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | Which Y slice of the layer the circle is drawn into. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `CircleInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `Circle`:

[`CircleInstance.CircleInstance`](/game-api/types/alta-world-generation/circleinstance#m-ctor).
