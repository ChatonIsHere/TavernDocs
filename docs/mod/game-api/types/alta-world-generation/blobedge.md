---
title: "BlobEdge"
description: "A cave map generator part that stamps a blob (a centre circle plus smaller circles around it) into one layer of the cave map, combined with the existing..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlobEdge

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

A cave map generator part that stamps a blob (a centre circle plus smaller circles around it) into one layer of the cave map, combined with the existing values by an operation.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`BlobEdgeInstance`](/mod/game-api/types/alta-world-generation/blobedgeinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BlobEdge()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-circles" /><code>{"private int circles"}</code> | Backing field for `Circles`. |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Backing field for `Curve`. |
| <Link id="m-maximumcircledistance" /><code>{"private float maximumCircleDistance"}</code> | Backing field for `MaximumCircleDistance`. |
| <Link id="m-maximumedgeradius" /><code>{"private float maximumEdgeRadius"}</code> | Backing field for `MaximumEdgeRadius`. |
| <Link id="m-minimumcircledistance" /><code>{"private float minimumCircleDistance"}</code> | Backing field for `MinimumCircleDistance`. |
| <Link id="m-minimumedgeradius" /><code>{"private float minimumEdgeRadius"}</code> | Backing field for `MinimumEdgeRadius`. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | Backing field for `OperationType`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Backing field for `Radius`. |
| <Link id="m-sizeattribute" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" sizeAttribute"}</code> | Backing field for `SizeAttribute`. |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | Backing field for `YIndex`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-circles-2" /><code>{"int Circles { get; }"}</code> | How many extra circles surround the centre one. |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | Value from the circle centre (0) to its edge (1). |
| <Link id="m-maximumcircledistance-2" /><code>{"float MaximumCircleDistance { get; }"}</code> | Largest distance of an extra circle from the centre, as a fraction of `Radius`. |
| <Link id="m-maximumedgeradius-2" /><code>{"float MaximumEdgeRadius { get; }"}</code> | Largest radius of an extra circle. |
| <Link id="m-minimumcircledistance-2" /><code>{"float MinimumCircleDistance { get; }"}</code> | Smallest distance of an extra circle from the centre, as a fraction of `Radius`. |
| <Link id="m-minimumedgeradius-2" /><code>{"float MinimumEdgeRadius { get; }"}</code> | Smallest radius of an extra circle. |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | How the curve value combines with the map value (set, max, add and so on). |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | Centre of the blob. Only X and Z are used. |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | Radius of the centre circle, scaled by the size attribute. |
| <Link id="m-sizeattribute-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" SizeAttribute { get; }"}</code> | Biome attribute that scales the blob's size. |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | Which layer of the map the blob writes to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates a `BlobEdgeInstance` that places the circles for a generator. |

## Used in

Members of other types that take, return or hold a `BlobEdge`:

[`BlobEdgeInstance.BlobEdgeInstance`](/mod/game-api/types/alta-world-generation/blobedgeinstance#m-ctor).
