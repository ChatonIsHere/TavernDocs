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
| <Link id="m-ctor" /><code>{"CurveWall()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">Cached `MeshFilter` holding the mesh.</span> |
| <Link id="m-halfwidthbottom" /><code>{"private float halfWidthBottom"}</code> | <span className="api-desc">Half the wall's width at the base.</span> |
| <Link id="m-halfwidthtop" /><code>{"private float halfWidthTop"}</code> | <span className="api-desc">Half the wall's width at the top.</span> |
| <Link id="m-height" /><code>{"private float height"}</code> | <span className="api-desc">Wall height along `normalUp`.</span> |
| <Link id="m-isgeneratingbottom" /><code>{"private bool isGeneratingBottom"}</code> | <span className="api-desc">Whether to add faces under the wall.</span> |
| <Link id="m-normalup" /><code>{"private Vector3 normalUp"}</code> | <span className="api-desc">Up direction used for height and side offsets.</span> |
| <Link id="m-segments" /><code>{"private int segments"}</code> | <span className="api-desc">Samples per spline segment.</span> |
| <Link id="m-splinenodes" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/curvewall-curvepoint">{"CurveWall.CurvePoint"}</Link>{"> splineNodes"}</code> | <span className="api-desc">Backing field for `SplineNodes`.</span> |
| <Link id="m-uvstretch" /><code>{"private float uvStretch"}</code> | <span className="api-desc">World length per UV unit along the wall.</span> |
| <Link id="m-uvtopend" /><code>{"private float uvTopEnd"}</code> | <span className="api-desc">UV V value at one top edge.</span> |
| <Link id="m-uvtopstart" /><code>{"private float uvTopStart"}</code> | <span className="api-desc">UV V value at the other top edge.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | <span className="api-desc">True once baked; until then the mesh is flagged not to save into builds.</span> |
| <Link id="m-splinenodes-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-c-d/curvewall-curvepoint">{"CurveWall.CurvePoint"}</Link>{"> SplineNodes { get; }"}</code> | <span className="api-desc">The spline's nodes, for editor tools.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkempty" /><code>{"void CheckEmpty()"}</code> | <span className="api-desc">Adds two default nodes 10 units apart if the spline has none.</span> |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(int index, float time)"}</code> | <span className="api-desc">Meant to return a point on the spline segment `index` at `time`; the bounds check is inverted, so it returns the last node for most indices.</span> |
| <Link id="m-updatemesh" /><code>{"Mesh UpdateMesh()"}</code> | <span className="api-desc">Samples the spline and builds a wall with a sloped top and end caps, then returns the mesh.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcollider" /><code>{"private void AddCollider(Mesh mesh)"}</code> | <span className="api-desc">Adds a `MeshCollider` if missing and gives it the generated mesh.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Rebuilds the mesh unless running headless.</span> |
| <Link id="m-bake" /><code>{"private void IBakeable.Bake()"}</code> | <span className="api-desc">Builds the mesh, marks it baked and destroys this component.</span> |
| <Link id="m-checksetup" /><code>{"private void CheckSetup()"}</code> | <span className="api-desc">Caches the `MeshFilter`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Rebuilds the mesh when inspector values change.</span> |

</details>
