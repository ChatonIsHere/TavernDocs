---
title: "CurveWall"
description: "class CurveWall in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveWall

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/game-api/types/global-i-l/ibakeable)
- **Nested types** [`CurvePoint`](/game-api/types/global-c-d/curvewall-curvepoint)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveWall()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> |  |
| <Link id="m-halfwidthbottom" /><code>{"private float halfWidthBottom"}</code> |  |
| <Link id="m-halfwidthtop" /><code>{"private float halfWidthTop"}</code> |  |
| <Link id="m-height" /><code>{"private float height"}</code> |  |
| <Link id="m-isgeneratingbottom" /><code>{"private bool isGeneratingBottom"}</code> |  |
| <Link id="m-normalup" /><code>{"private Vector3 normalUp"}</code> |  |
| <Link id="m-segments" /><code>{"private int segments"}</code> |  |
| <Link id="m-splinenodes" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/curvewall-curvepoint">{"CurveWall.CurvePoint"}</Link>{"> splineNodes"}</code> |  |
| <Link id="m-uvstretch" /><code>{"private float uvStretch"}</code> |  |
| <Link id="m-uvtopend" /><code>{"private float uvTopEnd"}</code> |  |
| <Link id="m-uvtopstart" /><code>{"private float uvTopStart"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> |  |
| <Link id="m-splinenodes-2" /><code>{"List<"}<Link to="/game-api/types/global-c-d/curvewall-curvepoint">{"CurveWall.CurvePoint"}</Link>{"> SplineNodes { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkempty" /><code>{"void CheckEmpty()"}</code> |  |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(int index, float time)"}</code> |  |
| <Link id="m-updatemesh" /><code>{"Mesh UpdateMesh()"}</code> |  |
| <Link id="m-addcollider" /><code>{"private void AddCollider(Mesh mesh)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBakeable.Bake()"}</code> |  |
| <Link id="m-checksetup" /><code>{"private void CheckSetup()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
