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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`TimberPiece`](/game-api/types/alta-crafting/timberpiece)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationModel(Vector3 pivottingDirection, Vector3 size, bool inversedUp)"}</code> | Creates a `TimberPiece.RotationModel` from `pivottingDirection`, `size` and `inversedUp`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inversedup" /><code>{"private bool inversedUp"}</code> | When true, the rotation axis is reversed (the piece is upside down). |
| <Link id="m-pivottingdirection" /><code>{"private Vector3 pivottingDirection"}</code> | The direction the piece pivots towards. |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | The piece's size, used to find the edge distance. |
| <Link id="m-xcompare" /><code>{"private float xCompare"}</code> | Normalised X of the size. Decides whether the X or Z half-size is used for `Distance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance { get; private set; }"}</code> | Distance from the piece's centre to its edge along the pivot direction, from the piece size. |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; private set; }"}</code> | False when built with a zero pivot direction. `Update` sets it to true. |
| <Link id="m-rotationaxis" /><code>{"Vector3 RotationAxis { get; private set; }"}</code> | Horizontal axis at right angles to the pivot direction, flipped when `inversedUp` is set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update(Vector3 newDirection)"}</code> | Recalculates `Distance` and `RotationAxis` for a new pivot direction. |

## Used in

Members of other types that take, return or hold a `RotationModel`:

[`TimberPiece.rotationModel`](/game-api/types/alta-crafting/timberpiece#m-rotationmodel).
