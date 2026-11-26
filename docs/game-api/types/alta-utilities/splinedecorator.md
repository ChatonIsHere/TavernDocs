---
title: "SplineDecorator"
description: "Spline display that places copies of prefabs along its parent BezierSpline, with spacing, offset, scale and rotation options."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineDecorator

A **class** in `Root.Township`, `Alta.Bezier`.

Spline display that places copies of prefabs along its parent `BezierSpline`, with spacing, offset, scale and rotation options. It does not generate on a headless server, so the server only has baked items.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`SplineDisplay`](/game-api/types/alta-utilities/splinedisplay)
- **Nested types** [`ForwardMode`](/game-api/types/alta-utilities/splinedecorator-forwardmode), [`Part`](/game-api/types/alta-utilities/splinedecorator-part), [`RotationMode`](/game-api/types/alta-utilities/splinedecorator-rotationmode), [`ScaleMode`](/game-api/types/alta-utilities/splinedecorator-scalemode), [`UpMode`](/game-api/types/alta-utilities/splinedecorator-upmode)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SplineDecorator()"}</code> |

## Fields

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> | Inspector-only field that draws the Bake button. |
| <Link id="m-cutchance" /><code>{"private float cutChance"}</code> | Chance (0 to 1) that a point is skipped and gets no item. |
| <Link id="m-forwardmode" /><code>{"private "}<Link to="/game-api/types/alta-utilities/splinedecorator-forwardmode">{"SplineDecorator.ForwardMode"}</Link>{" forwardMode"}</code> | Whether an item faces along the curve direction or towards the next item. |
| <Link id="m-heightscalemultiplier" /><code>{"private float heightScaleMultiplier"}</code> | With the Height scale mode, how much each unit above the lowest point adds to the item's Y scale. |
| <Link id="m-heightscaleoffset" /><code>{"private float heightScaleOffset"}</code> | With the Height scale mode, height subtracted before the extra Y scale is worked out. |
| <Link id="m-iscuttinglast" /><code>{"private bool isCuttingLast"}</code> | If set, the last item along the spline is not spawned. |
| <Link id="m-issnappingtoterrain" /><code>{"private bool isSnappingToTerrain"}</code> | If set, each item's height is taken from the terrain (plus the Y offset) instead of the spline. |
| <Link id="m-items" /><code>{"private GameObject[] items"}</code> | Prefabs to place; one is picked at random for each point unless an `ItemModifier` supplies one. |
| <Link id="m-minimumstep" /><code>{"private float minimumStep"}</code> | Step size along the spline when searching for the next point; forced to 0.01 if zero or less. |
| <Link id="m-nonuniformrandomscale" /><code>{"private Vector3 nonUniformRandomScale"}</code> | Random extra scale added per axis independently. |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> | Fixed offset from the spline, in curve space (X sideways, Y up, Z forward). |
| <Link id="m-randomextraseparation" /><code>{"private float randomExtraSeparation"}</code> | Random extra distance, up to this value, added to `separation` for each gap. |
| <Link id="m-randomfinalyrotations" /><code>{"private int randomFinalYRotations"}</code> | Number of discrete random rotation steps applied around the up axis at the end; 0 turns it off. |
| <Link id="m-randomoffset" /><code>{"private Vector3 randomOffset"}</code> | Random extra offset per axis, up to this value, in curve space. |
| <Link id="m-randomscale" /><code>{"private Vector3 randomScale"}</code> | Random extra scale added equally on all axes. |
| <Link id="m-rotationmode" /><code>{"private "}<Link to="/game-api/types/alta-utilities/splinedecorator-rotationmode">{"SplineDecorator.RotationMode"}</Link>{" rotationMode"}</code> | How items are rotated: none, look along the curve, look along it flattened to Y, or follow the terrain normal. |
| <Link id="m-rotationvariation" /><code>{"private float rotationVariation"}</code> | Angle range used by `randomFinalYRotations`. |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | Base local scale of each item. |
| <Link id="m-scalemode" /><code>{"private "}<Link to="/game-api/types/alta-utilities/splinedecorator-scalemode">{"SplineDecorator.ScaleMode"}</Link>{" scaleMode"}</code> | Flags: Stretch scales Z to reach the next item, Height adds Y scale by height above the lowest point. |
| <Link id="m-separation" /><code>{"private float separation"}</code> | Distance between items along the spline; nothing is generated if zero or less. |
| <Link id="m-stepoffset" /><code>{"private float stepOffset"}</code> | Spline progress to start placing from. |
| <Link id="m-upmode" /><code>{"private "}<Link to="/game-api/types/alta-utilities/splinedecorator-upmode">{"SplineDecorator.UpMode"}</Link>{" upMode"}</code> | Up vector for offsets: world up or the curve's own up. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakedebug" /><code>{"void BakeDebug()"}</code> | Inspector Bake button handler: marks the decorator baked and regenerates, so the spawned items are saved with the scene. |
| <Link id="m-generateinternal" /><code>{"protected override void GenerateInternal()"}</code> | Destroys existing children, walks the spline to pick positions, then spawns, positions, scales and rotates one item per point, running any `ItemModifier` components. |
