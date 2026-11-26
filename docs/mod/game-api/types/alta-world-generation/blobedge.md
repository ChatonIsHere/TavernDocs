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
| <Link id="m-ctor" /><code>{"BlobEdge()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-circles" /><code>{"private int circles"}</code> | <span className="api-desc">Backing field for `Circles`.</span> |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">Backing field for `Curve`.</span> |
| <Link id="m-maximumcircledistance" /><code>{"private float maximumCircleDistance"}</code> | <span className="api-desc">Backing field for `MaximumCircleDistance`.</span> |
| <Link id="m-maximumedgeradius" /><code>{"private float maximumEdgeRadius"}</code> | <span className="api-desc">Backing field for `MaximumEdgeRadius`.</span> |
| <Link id="m-minimumcircledistance" /><code>{"private float minimumCircleDistance"}</code> | <span className="api-desc">Backing field for `MinimumCircleDistance`.</span> |
| <Link id="m-minimumedgeradius" /><code>{"private float minimumEdgeRadius"}</code> | <span className="api-desc">Backing field for `MinimumEdgeRadius`.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Backing field for `OperationType`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Backing field for `Radius`.</span> |
| <Link id="m-sizeattribute" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" sizeAttribute"}</code> | <span className="api-desc">Backing field for `SizeAttribute`.</span> |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | <span className="api-desc">Backing field for `YIndex`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-circles-2" /><code>{"int Circles { get; }"}</code> | <span className="api-desc">How many extra circles surround the centre one.</span> |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | <span className="api-desc">Value from the circle centre (0) to its edge (1).</span> |
| <Link id="m-maximumcircledistance-2" /><code>{"float MaximumCircleDistance { get; }"}</code> | <span className="api-desc">Largest distance of an extra circle from the centre, as a fraction of `Radius`.</span> |
| <Link id="m-maximumedgeradius-2" /><code>{"float MaximumEdgeRadius { get; }"}</code> | <span className="api-desc">Largest radius of an extra circle.</span> |
| <Link id="m-minimumcircledistance-2" /><code>{"float MinimumCircleDistance { get; }"}</code> | <span className="api-desc">Smallest distance of an extra circle from the centre, as a fraction of `Radius`.</span> |
| <Link id="m-minimumedgeradius-2" /><code>{"float MinimumEdgeRadius { get; }"}</code> | <span className="api-desc">Smallest radius of an extra circle.</span> |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | <span className="api-desc">How the curve value combines with the map value (set, max, add and so on).</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Centre of the blob. Only X and Z are used.</span> |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | <span className="api-desc">Radius of the centre circle, scaled by the size attribute.</span> |
| <Link id="m-sizeattribute-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" SizeAttribute { get; }"}</code> | <span className="api-desc">Biome attribute that scales the blob's size.</span> |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | <span className="api-desc">Which layer of the map the blob writes to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates a `BlobEdgeInstance` that places the circles for a generator.</span> |

## Used in

Members of other types that take, return or hold a `BlobEdge`:

<div className="api-used-in">

[`BlobEdgeInstance.BlobEdgeInstance`](/mod/game-api/types/alta-world-generation/blobedgeinstance#m-ctor).

</div>
