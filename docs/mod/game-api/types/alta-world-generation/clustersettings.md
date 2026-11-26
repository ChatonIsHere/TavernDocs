---
title: "ClusterSettings"
description: "How a cluster generator scatters child objects (such as crystals or mushrooms) around a point in a cave: how many, how they are rotated, offset and scaled,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClusterSettings

A **class** in `Root.Township`, `Alta.Caves.Displays`.

How a cluster generator scatters child objects (such as crystals or mushrooms) around a point in a cave: how many, how they are rotated, offset and scaled, and whether they snap down onto a surface.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClusterSettings()"}</code> | <span className="api-desc">Creates a `ClusterSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"private AnimationCurve childCount"}</code> | <span className="api-desc">Curve sampled at a random 0 to 1 value to pick how many children a cluster gets.</span> |
| <Link id="m-iseveningrandomposition" /><code>{"private bool isEveningRandomPosition"}</code> | <span className="api-desc">Pushes random offsets outwards (square root of each axis) for a more even spread.</span> |
| <Link id="m-iskinematic" /><code>{"private bool isKinematic"}</code> | <span className="api-desc">Makes each child's rigidbody kinematic after placing it.</span> |
| <Link id="m-isoffsetrestrictedtoupwards" /><code>{"private bool isOffsetRestrictedToUpwards"}</code> | <span className="api-desc">Keeps the random vertical offset positive (true by default).</span> |
| <Link id="m-israycastingfinal" /><code>{"private bool isRaycastingFinal"}</code> | <span className="api-desc">Raycasts down from the placed point and snaps the child to what it hits.</span> |
| <Link id="m-isrotationunsplit" /><code>{"private bool isRotationUnsplit"}</code> | <span className="api-desc">True for a fully random rotation. False for random spin plus an up tilt between the min and max.</span> |
| <Link id="m-isscalerandom" /><code>{"private bool isScaleRandom"}</code> | <span className="api-desc">Scales each child by `randomScale` sampled at a random value.</span> |
| <Link id="m-maximumuprotation" /><code>{"private float maximumUpRotation"}</code> | <span className="api-desc">Largest tilt in degrees when `isRotationUnsplit` is off.</span> |
| <Link id="m-maxraycastdistance" /><code>{"private float maxRaycastDistance"}</code> | <span className="api-desc">Longest raycast used to snap children (2 by default).</span> |
| <Link id="m-minimumuprotation" /><code>{"private float minimumUpRotation"}</code> | <span className="api-desc">Smallest tilt in degrees when `isRotationUnsplit` is off.</span> |
| <Link id="m-offset" /><code>{"private float offset"}</code> | <span className="api-desc">Radius of the random offset around the parent (0.1 by default).</span> |
| <Link id="m-randomscale" /><code>{"private AnimationCurve randomScale"}</code> | <span className="api-desc">Curve giving child scale when `isScaleRandom` is on.</span> |
| <Link id="m-raycastinglayers" /><code>{"private LayerMask raycastingLayers"}</code> | <span className="api-desc">Layers the snap raycast hits.</span> |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | <span className="api-desc">Fixed height added to every child's position.</span> |
| <Link id="m-verticaloffsetmultiplier" /><code>{"private float verticalOffsetMultiplier"}</code> | <span className="api-desc">Scales the random vertical offset. A negative value places children on a flat disc instead of in a sphere.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount-2" /><code>{"AnimationCurve ChildCount { get; }"}</code> | <span className="api-desc">Curve sampled at a random 0 to 1 value to get how many children to spawn.</span> |
| <Link id="m-iseveningrandomposition-2" /><code>{"bool IsEveningRandomPosition { get; }"}</code> | <span className="api-desc">Pushes random offsets outward (square root of each axis), so children spread more evenly instead of bunching at the centre.</span> |
| <Link id="m-isoffsetrestrictedtoupwards-2" /><code>{"bool IsOffsetRestrictedToUpwards { get; }"}</code> | <span className="api-desc">Keeps the vertical offset positive, so children never sit below the centre.</span> |
| <Link id="m-israycastingfinal-2" /><code>{"bool IsRaycastingFinal { get; }"}</code> | <span className="api-desc">Raycasts each child down onto `RaycastingLayers` after offsetting it, so it sits on a surface.</span> |
| <Link id="m-isrotationunsplit-2" /><code>{"bool IsRotationUnsplit { get; }"}</code> | <span className="api-desc">True gives each child a fully random rotation. False tilts it between `MinimumUpRotation` and `MaximumUpRotation` with random spins.</span> |
| <Link id="m-isscalerandom-2" /><code>{"bool IsScaleRandom { get; }"}</code> | <span className="api-desc">Scales each child by `RandomScale` sampled at a random value.</span> |
| <Link id="m-maximumuprotation-2" /><code>{"float MaximumUpRotation { get; }"}</code> | <span className="api-desc">Largest tilt in degrees when `IsRotationUnsplit` is false.</span> |
| <Link id="m-maxraycastdistance-2" /><code>{"float MaxRaycastDistance { get; }"}</code> | <span className="api-desc">How far the surface snap raycast reaches.</span> |
| <Link id="m-minimumuprotation-2" /><code>{"float MinimumUpRotation { get; }"}</code> | <span className="api-desc">Smallest tilt in degrees when `IsRotationUnsplit` is false.</span> |
| <Link id="m-offset-2" /><code>{"float Offset { get; }"}</code> | <span className="api-desc">Radius of the random position offset around the parent.</span> |
| <Link id="m-randomscale-2" /><code>{"AnimationCurve RandomScale { get; }"}</code> | <span className="api-desc">Scale curve used when `IsScaleRandom` is on.</span> |
| <Link id="m-raycastinglayers-2" /><code>{"LayerMask RaycastingLayers { get; }"}</code> | <span className="api-desc">Layers the surface snap raycast hits.</span> |
| <Link id="m-verticaloffset-2" /><code>{"float VerticalOffset { get; }"}</code> | <span className="api-desc">Added to the child's local height after the random offset.</span> |
| <Link id="m-verticaloffsetmultiplier-2" /><code>{"float VerticalOffsetMultiplier { get; }"}</code> | <span className="api-desc">Scales the random vertical offset. Negative values make the offset flat (a circle instead of a sphere).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"void Position(Transform child, Transform parent)"}</code> | <span className="api-desc">Parents the child and gives it a random rotation, position and scale using these settings.</span> |

## Used in

Members of other types that take, return or hold a `ClusterSettings`:

<div className="api-used-in">

[`ClusterGenerator.settings`](/mod/game-api/types/alta-world-generation/clustergenerator#m-settings), [`StaticClusterGenerator.settings`](/mod/game-api/types/alta-world-generation/staticclustergenerator#m-settings).

</div>
