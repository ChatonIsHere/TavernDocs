---
title: "SAColliderBuilderCommon.ReducerProperty"
description: "Mesh reduction settings for the third-party SA Collider Builder editor tool (how a mesh is simplified into colliders)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAColliderBuilderCommon.ReducerProperty

A **class** in `Root.Township`, no namespace.

Mesh reduction settings for the third-party SA Collider Builder editor tool (how a mesh is simplified into colliders). Editor-time data.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SAColliderBuilderCommon`](/game-api/types/global-s/sacolliderbuildercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReducerProperty()"}</code> | Creates a `SAColliderBuilderCommon.ReducerProperty` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collidertochild" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-collidertochild">{"SAColliderBuilderCommon.ColliderToChild"}</Link>{" colliderToChild"}</code> | Whether colliders go on a child object (auto, on or off). |
| <Link id="m-fittype" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-fittype">{"SAColliderBuilderCommon.FitType"}</Link>{" fitType"}</code> | How the shape fits the mesh. |
| <Link id="m-maxtriangles" /><code>{"int maxTriangles"}</code> | Triangle limit for generated mesh colliders (255 by default). |
| <Link id="m-meshtype" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-meshtype">{"SAColliderBuilderCommon.MeshType"}</Link>{" meshType"}</code> | Mesh collider kind: raw, convex boxes or convex hull and so on. |
| <Link id="m-minthickness" /><code>{"Vector3 minThickness"}</code> | Smallest thickness per axis for generated shapes. |
| <Link id="m-minthicknesselementtype" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-elementtype">{"SAColliderBuilderCommon.ElementType"}</Link>{" minThicknessElementType"}</code> | Which axes `minThickness` applies to. |
| <Link id="m-offset" /><code>{"Vector3 offset"}</code> | Offset added to the generated shape. |
| <Link id="m-optimizerotation" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-bool3">{"SAColliderBuilderCommon.Bool3"}</Link>{" optimizeRotation"}</code> | Per axis, whether the shape's rotation is optimised to fit. |
| <Link id="m-optimizerotationelementtype" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-elementtype">{"SAColliderBuilderCommon.ElementType"}</Link>{" optimizeRotationElementType"}</code> | Which axes `optimizeRotation` applies to. |
| <Link id="m-scale" /><code>{"Vector3 scale"}</code> | Scale applied to the generated shape. |
| <Link id="m-scaleelementtype" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-elementtype">{"SAColliderBuilderCommon.ElementType"}</Link>{" scaleElementType"}</code> | Which axes `scale` applies to. |
| <Link id="m-shapetype" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-shapetype">{"SAColliderBuilderCommon.ShapeType"}</Link>{" shapeType"}</code> | Collider shape to build: none, mesh, box or capsule and so on. |
| <Link id="m-slicemode" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-slicemode">{"SAColliderBuilderCommon.SliceMode"}</Link>{" sliceMode"}</code> | Axis to slice along, or auto. |
| <Link id="m-thicknessa" /><code>{"Vector3 thicknessA"}</code> | Extra thickness on one side. |
| <Link id="m-thicknessb" /><code>{"Vector3 thicknessB"}</code> | Extra thickness on the other side. |
| <Link id="m-viewadvanced" /><code>{"bool viewAdvanced"}</code> | Editor flag to show advanced options. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shallowcopy" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" ShallowCopy()"}</code> | Returns a member-by-member copy. |

## Used in

Members of other types that take, return or hold a `ReducerProperty`:

[`SABoneCollider.reducerProperty`](/game-api/types/global-s/sabonecollider#m-reducerproperty), [`SABoneColliderBuilder.reducerProperty`](/game-api/types/global-s/sabonecolliderbuilder#m-reducerproperty), [`SABoneColliderCommon.SABoneColliderBuilderProperty.reducerProperty`](/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty#m-reducerproperty), [`SABoneColliderCommon.SABoneColliderProperty.reducerProperty`](/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty#m-reducerproperty), [`SAMeshCollider.reducerProperty`](/game-api/types/global-s/sameshcollider#m-reducerproperty), [`SAMeshColliderBuilder.reducerProperty`](/game-api/types/global-s/sameshcolliderbuilder#m-reducerproperty), [`SAMeshColliderCommon.SAMeshColliderBuilderProperty.reducerProperty`](/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty#m-reducerproperty), [`SAMeshColliderCommon.SAMeshColliderProperty.reducerProperty`](/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty#m-reducerproperty).
