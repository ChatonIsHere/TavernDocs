---
title: "TimberPiece.RotationModel"
description: "Works out how a TimberPiece tips over as it is chiselled: the axis it rotates around and how far the pivot edge is from its centre."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberPiece.RotationModel

A **class** in `Root.Township`, `Alta.Carpentry`.

Works out how a `TimberPiece` tips over as it is chiselled: the axis it rotates around and how far the pivot edge is from its centre.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TimberPiece`](/mod/game-api/types/alta-crafting/timberpiece)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationModel(Vector3 pivottingDirection, Vector3 size, bool inversedUp)"}</code> | <span className="api-desc">Creates a `TimberPiece.RotationModel` from `pivottingDirection`, `size` and `inversedUp`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inversedup" /><code>{"private bool inversedUp"}</code> | <span className="api-desc">When true, the rotation axis is reversed (the piece is upside down).</span> |
| <Link id="m-pivottingdirection" /><code>{"private Vector3 pivottingDirection"}</code> | <span className="api-desc">The direction the piece pivots towards.</span> |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | <span className="api-desc">The piece's size, used to find the edge distance.</span> |
| <Link id="m-xcompare" /><code>{"private float xCompare"}</code> | <span className="api-desc">Normalised X of the size. Decides whether the X or Z half-size is used for `Distance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance { get; private set; }"}</code> | <span className="api-desc">Distance from the piece's centre to its edge along the pivot direction, from the piece size.</span> |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; private set; }"}</code> | <span className="api-desc">False when built with a zero pivot direction. `Update` sets it to true.</span> |
| <Link id="m-rotationaxis" /><code>{"Vector3 RotationAxis { get; private set; }"}</code> | <span className="api-desc">Horizontal axis at right angles to the pivot direction, flipped when `inversedUp` is set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update(Vector3 newDirection)"}</code> | <span className="api-desc">Recalculates `Distance` and `RotationAxis` for a new pivot direction.</span> |

## Used in

Members of other types that take, return or hold a `RotationModel`:

<div className="api-used-in">

[`TimberPiece.rotationModel`](/mod/game-api/types/alta-crafting/timberpiece#m-rotationmodel).

</div>
