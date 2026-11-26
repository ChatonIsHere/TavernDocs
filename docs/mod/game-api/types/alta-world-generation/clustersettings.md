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
| <Link id="m-ctor" /><code>{"ClusterSettings()"}</code> | Creates a `ClusterSettings` with default values. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"private AnimationCurve childCount"}</code> | Curve sampled at a random 0 to 1 value to pick how many children a cluster gets. |
| <Link id="m-iseveningrandomposition" /><code>{"private bool isEveningRandomPosition"}</code> | Pushes random offsets outwards (square root of each axis) for a more even spread. |
| <Link id="m-iskinematic" /><code>{"private bool isKinematic"}</code> | Makes each child's rigidbody kinematic after placing it. |
| <Link id="m-isoffsetrestrictedtoupwards" /><code>{"private bool isOffsetRestrictedToUpwards"}</code> | Keeps the random vertical offset positive (true by default). |
| <Link id="m-israycastingfinal" /><code>{"private bool isRaycastingFinal"}</code> | Raycasts down from the placed point and snaps the child to what it hits. |
| <Link id="m-isrotationunsplit" /><code>{"private bool isRotationUnsplit"}</code> | True for a fully random rotation. False for random spin plus an up tilt between the min and max. |
| <Link id="m-isscalerandom" /><code>{"private bool isScaleRandom"}</code> | Scales each child by `randomScale` sampled at a random value. |
| <Link id="m-maximumuprotation" /><code>{"private float maximumUpRotation"}</code> | Largest tilt in degrees when `isRotationUnsplit` is off. |
| <Link id="m-maxraycastdistance" /><code>{"private float maxRaycastDistance"}</code> | Longest raycast used to snap children (2 by default). |
| <Link id="m-minimumuprotation" /><code>{"private float minimumUpRotation"}</code> | Smallest tilt in degrees when `isRotationUnsplit` is off. |
| <Link id="m-offset" /><code>{"private float offset"}</code> | Radius of the random offset around the parent (0.1 by default). |
| <Link id="m-randomscale" /><code>{"private AnimationCurve randomScale"}</code> | Curve giving child scale when `isScaleRandom` is on. |
| <Link id="m-raycastinglayers" /><code>{"private LayerMask raycastingLayers"}</code> | Layers the snap raycast hits. |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | Fixed height added to every child's position. |
| <Link id="m-verticaloffsetmultiplier" /><code>{"private float verticalOffsetMultiplier"}</code> | Scales the random vertical offset. A negative value places children on a flat disc instead of in a sphere. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount-2" /><code>{"AnimationCurve ChildCount { get; }"}</code> | Curve sampled at a random 0 to 1 value to get how many children to spawn. |
| <Link id="m-iseveningrandomposition-2" /><code>{"bool IsEveningRandomPosition { get; }"}</code> | Pushes random offsets outward (square root of each axis), so children spread more evenly instead of bunching at the centre. |
| <Link id="m-isoffsetrestrictedtoupwards-2" /><code>{"bool IsOffsetRestrictedToUpwards { get; }"}</code> | Keeps the vertical offset positive, so children never sit below the centre. |
| <Link id="m-israycastingfinal-2" /><code>{"bool IsRaycastingFinal { get; }"}</code> | Raycasts each child down onto `RaycastingLayers` after offsetting it, so it sits on a surface. |
| <Link id="m-isrotationunsplit-2" /><code>{"bool IsRotationUnsplit { get; }"}</code> | True gives each child a fully random rotation. False tilts it between `MinimumUpRotation` and `MaximumUpRotation` with random spins. |
| <Link id="m-isscalerandom-2" /><code>{"bool IsScaleRandom { get; }"}</code> | Scales each child by `RandomScale` sampled at a random value. |
| <Link id="m-maximumuprotation-2" /><code>{"float MaximumUpRotation { get; }"}</code> | Largest tilt in degrees when `IsRotationUnsplit` is false. |
| <Link id="m-maxraycastdistance-2" /><code>{"float MaxRaycastDistance { get; }"}</code> | How far the surface snap raycast reaches. |
| <Link id="m-minimumuprotation-2" /><code>{"float MinimumUpRotation { get; }"}</code> | Smallest tilt in degrees when `IsRotationUnsplit` is false. |
| <Link id="m-offset-2" /><code>{"float Offset { get; }"}</code> | Radius of the random position offset around the parent. |
| <Link id="m-randomscale-2" /><code>{"AnimationCurve RandomScale { get; }"}</code> | Scale curve used when `IsScaleRandom` is on. |
| <Link id="m-raycastinglayers-2" /><code>{"LayerMask RaycastingLayers { get; }"}</code> | Layers the surface snap raycast hits. |
| <Link id="m-verticaloffset-2" /><code>{"float VerticalOffset { get; }"}</code> | Added to the child's local height after the random offset. |
| <Link id="m-verticaloffsetmultiplier-2" /><code>{"float VerticalOffsetMultiplier { get; }"}</code> | Scales the random vertical offset. Negative values make the offset flat (a circle instead of a sphere). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"void Position(Transform child, Transform parent)"}</code> | Parents the child and gives it a random rotation, position and scale using these settings. |

## Used in

Members of other types that take, return or hold a `ClusterSettings`:

[`ClusterGenerator.settings`](/mod/game-api/types/alta-world-generation/clustergenerator#m-settings), [`StaticClusterGenerator.settings`](/mod/game-api/types/alta-world-generation/staticclustergenerator#m-settings).
