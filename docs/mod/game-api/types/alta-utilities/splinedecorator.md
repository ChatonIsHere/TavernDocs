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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`SplineDisplay`](/mod/game-api/types/alta-utilities/splinedisplay)
- **Nested types** [`ForwardMode`](/mod/game-api/types/alta-utilities/splinedecorator-forwardmode), [`Part`](/mod/game-api/types/alta-utilities/splinedecorator-part), [`RotationMode`](/mod/game-api/types/alta-utilities/splinedecorator-rotationmode), [`ScaleMode`](/mod/game-api/types/alta-utilities/splinedecorator-scalemode), [`UpMode`](/mod/game-api/types/alta-utilities/splinedecorator-upmode)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineDecorator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> | <span className="api-desc">Inspector-only field that draws the Bake button.</span> |
| <Link id="m-cutchance" /><code>{"private float cutChance"}</code> | <span className="api-desc">Chance (0 to 1) that a point is skipped and gets no item.</span> |
| <Link id="m-forwardmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/splinedecorator-forwardmode">{"SplineDecorator.ForwardMode"}</Link>{" forwardMode"}</code> | <span className="api-desc">Whether an item faces along the curve direction or towards the next item.</span> |
| <Link id="m-heightscalemultiplier" /><code>{"private float heightScaleMultiplier"}</code> | <span className="api-desc">With the Height scale mode, how much each unit above the lowest point adds to the item's Y scale.</span> |
| <Link id="m-heightscaleoffset" /><code>{"private float heightScaleOffset"}</code> | <span className="api-desc">With the Height scale mode, height subtracted before the extra Y scale is worked out.</span> |
| <Link id="m-iscuttinglast" /><code>{"private bool isCuttingLast"}</code> | <span className="api-desc">If set, the last item along the spline is not spawned.</span> |
| <Link id="m-issnappingtoterrain" /><code>{"private bool isSnappingToTerrain"}</code> | <span className="api-desc">If set, each item's height is taken from the terrain (plus the Y offset) instead of the spline.</span> |
| <Link id="m-items" /><code>{"private GameObject[] items"}</code> | <span className="api-desc">Prefabs to place; one is picked at random for each point unless an `ItemModifier` supplies one.</span> |
| <Link id="m-minimumstep" /><code>{"private float minimumStep"}</code> | <span className="api-desc">Step size along the spline when searching for the next point; forced to 0.01 if zero or less.</span> |
| <Link id="m-nonuniformrandomscale" /><code>{"private Vector3 nonUniformRandomScale"}</code> | <span className="api-desc">Random extra scale added per axis independently.</span> |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> | <span className="api-desc">Fixed offset from the spline, in curve space (X sideways, Y up, Z forward).</span> |
| <Link id="m-randomextraseparation" /><code>{"private float randomExtraSeparation"}</code> | <span className="api-desc">Random extra distance, up to this value, added to `separation` for each gap.</span> |
| <Link id="m-randomfinalyrotations" /><code>{"private int randomFinalYRotations"}</code> | <span className="api-desc">Number of discrete random rotation steps applied around the up axis at the end; 0 turns it off.</span> |
| <Link id="m-randomoffset" /><code>{"private Vector3 randomOffset"}</code> | <span className="api-desc">Random extra offset per axis, up to this value, in curve space.</span> |
| <Link id="m-randomscale" /><code>{"private Vector3 randomScale"}</code> | <span className="api-desc">Random extra scale added equally on all axes.</span> |
| <Link id="m-rotationmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/splinedecorator-rotationmode">{"SplineDecorator.RotationMode"}</Link>{" rotationMode"}</code> | <span className="api-desc">How items are rotated: none, look along the curve, look along it flattened to Y, or follow the terrain normal.</span> |
| <Link id="m-rotationvariation" /><code>{"private float rotationVariation"}</code> | <span className="api-desc">Angle range used by `randomFinalYRotations`.</span> |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | <span className="api-desc">Base local scale of each item.</span> |
| <Link id="m-scalemode" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/splinedecorator-scalemode">{"SplineDecorator.ScaleMode"}</Link>{" scaleMode"}</code> | <span className="api-desc">Flags: Stretch scales Z to reach the next item, Height adds Y scale by height above the lowest point.</span> |
| <Link id="m-separation" /><code>{"private float separation"}</code> | <span className="api-desc">Distance between items along the spline; nothing is generated if zero or less.</span> |
| <Link id="m-stepoffset" /><code>{"private float stepOffset"}</code> | <span className="api-desc">Spline progress to start placing from.</span> |
| <Link id="m-upmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/splinedecorator-upmode">{"SplineDecorator.UpMode"}</Link>{" upMode"}</code> | <span className="api-desc">Up vector for offsets: world up or the curve's own up.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakedebug" /><code>{"void BakeDebug()"}</code> | <span className="api-desc">Inspector Bake button handler: marks the decorator baked and regenerates, so the spawned items are saved with the scene.</span> |
| <Link id="m-generateinternal" /><code>{"protected override void GenerateInternal()"}</code> | <span className="api-desc">Destroys existing children, walks the spline to pick positions, then spawns, positions, scales and rotates one item per point, running any `ItemModifier` components.</span> |
