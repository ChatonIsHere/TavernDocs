---
title: "CurveWall"
description: "Builds a wall mesh and matching MeshCollider along a Bezier spline of CurvePoints."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveWall

A **class** in `Root.Township`, the global namespace.

Builds a wall mesh and matching `MeshCollider` along a Bezier spline of `CurvePoint`s. Editor and level-design tool; it can be baked, after which the component removes itself and leaves the mesh.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/mod/game-api/types/global-i-l/ibakeable)
- **Nested types** [`CurvePoint`](/mod/game-api/types/global-c-d/curvewall-curvepoint)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveWall()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | Cached `MeshFilter` holding the mesh. |
| <Link id="m-halfwidthbottom" /><code>{"private float halfWidthBottom"}</code> | Half the wall's width at the base. |
| <Link id="m-halfwidthtop" /><code>{"private float halfWidthTop"}</code> | Half the wall's width at the top. |
| <Link id="m-height" /><code>{"private float height"}</code> | Wall height along `normalUp`. |
| <Link id="m-isgeneratingbottom" /><code>{"private bool isGeneratingBottom"}</code> | Whether to add faces under the wall. |
| <Link id="m-normalup" /><code>{"private Vector3 normalUp"}</code> | Up direction used for height and side offsets. |
| <Link id="m-segments" /><code>{"private int segments"}</code> | Samples per spline segment. |
| <Link id="m-splinenodes" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/curvewall-curvepoint">{"CurveWall.CurvePoint"}</Link>{"> splineNodes"}</code> | Backing field for `SplineNodes`. |
| <Link id="m-uvstretch" /><code>{"private float uvStretch"}</code> | World length per UV unit along the wall. |
| <Link id="m-uvtopend" /><code>{"private float uvTopEnd"}</code> | UV V value at one top edge. |
| <Link id="m-uvtopstart" /><code>{"private float uvTopStart"}</code> | UV V value at the other top edge. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | True once baked; until then the mesh is flagged not to save into builds. |
| <Link id="m-splinenodes-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-c-d/curvewall-curvepoint">{"CurveWall.CurvePoint"}</Link>{"> SplineNodes { get; }"}</code> | The spline's nodes, for editor tools. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkempty" /><code>{"void CheckEmpty()"}</code> | Adds two default nodes 10 units apart if the spline has none. |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(int index, float time)"}</code> | Meant to return a point on the spline segment `index` at `time`; the bounds check is inverted, so it returns the last node for most indices. |
| <Link id="m-updatemesh" /><code>{"Mesh UpdateMesh()"}</code> | Samples the spline and builds a wall with a sloped top and end caps, then returns the mesh. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcollider" /><code>{"private void AddCollider(Mesh mesh)"}</code> | Adds a `MeshCollider` if missing and gives it the generated mesh. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Rebuilds the mesh unless running headless. |
| <Link id="m-bake" /><code>{"private void IBakeable.Bake()"}</code> | Builds the mesh, marks it baked and destroys this component. |
| <Link id="m-checksetup" /><code>{"private void CheckSetup()"}</code> | Caches the `MeshFilter`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Rebuilds the mesh when inspector values change. |

</details>
