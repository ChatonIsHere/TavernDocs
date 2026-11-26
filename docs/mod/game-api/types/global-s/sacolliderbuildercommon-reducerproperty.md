---
title: "SAColliderBuilderCommon.ReducerProperty"
description: "Mesh reduction settings for the third-party SA Collider Builder editor tool (how a mesh is simplified into colliders)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAColliderBuilderCommon.ReducerProperty

A **class** in `Root.Township`, the global namespace.

Mesh reduction settings for the third-party SA Collider Builder editor tool (how a mesh is simplified into colliders). Editor-time data.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SAColliderBuilderCommon`](/mod/game-api/types/global-s/sacolliderbuildercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReducerProperty()"}</code> | <span className="api-desc">Creates a `SAColliderBuilderCommon.ReducerProperty` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collidertochild" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-collidertochild">{"SAColliderBuilderCommon.ColliderToChild"}</Link>{" colliderToChild"}</code> | <span className="api-desc">Whether colliders go on a child object (auto, on or off).</span> |
| <Link id="m-fittype" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-fittype">{"SAColliderBuilderCommon.FitType"}</Link>{" fitType"}</code> | <span className="api-desc">How the shape fits the mesh.</span> |
| <Link id="m-maxtriangles" /><code>{"int maxTriangles"}</code> | <span className="api-desc">Triangle limit for generated mesh colliders (255 by default).</span> |
| <Link id="m-meshtype" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-meshtype">{"SAColliderBuilderCommon.MeshType"}</Link>{" meshType"}</code> | <span className="api-desc">Mesh collider kind: raw, convex boxes or convex hull and so on.</span> |
| <Link id="m-minthickness" /><code>{"Vector3 minThickness"}</code> | <span className="api-desc">Smallest thickness per axis for generated shapes.</span> |
| <Link id="m-minthicknesselementtype" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-elementtype">{"SAColliderBuilderCommon.ElementType"}</Link>{" minThicknessElementType"}</code> | <span className="api-desc">Which axes `minThickness` applies to.</span> |
| <Link id="m-offset" /><code>{"Vector3 offset"}</code> | <span className="api-desc">Offset added to the generated shape.</span> |
| <Link id="m-optimizerotation" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-bool3">{"SAColliderBuilderCommon.Bool3"}</Link>{" optimizeRotation"}</code> | <span className="api-desc">Per axis, whether the shape's rotation is optimised to fit.</span> |
| <Link id="m-optimizerotationelementtype" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-elementtype">{"SAColliderBuilderCommon.ElementType"}</Link>{" optimizeRotationElementType"}</code> | <span className="api-desc">Which axes `optimizeRotation` applies to.</span> |
| <Link id="m-scale" /><code>{"Vector3 scale"}</code> | <span className="api-desc">Scale applied to the generated shape.</span> |
| <Link id="m-scaleelementtype" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-elementtype">{"SAColliderBuilderCommon.ElementType"}</Link>{" scaleElementType"}</code> | <span className="api-desc">Which axes `scale` applies to.</span> |
| <Link id="m-shapetype" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-shapetype">{"SAColliderBuilderCommon.ShapeType"}</Link>{" shapeType"}</code> | <span className="api-desc">Collider shape to build: none, mesh, box or capsule and so on.</span> |
| <Link id="m-slicemode" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-slicemode">{"SAColliderBuilderCommon.SliceMode"}</Link>{" sliceMode"}</code> | <span className="api-desc">Axis to slice along, or auto.</span> |
| <Link id="m-thicknessa" /><code>{"Vector3 thicknessA"}</code> | <span className="api-desc">Extra thickness on one side.</span> |
| <Link id="m-thicknessb" /><code>{"Vector3 thicknessB"}</code> | <span className="api-desc">Extra thickness on the other side.</span> |
| <Link id="m-viewadvanced" /><code>{"bool viewAdvanced"}</code> | <span className="api-desc">Editor flag to show advanced options.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shallowcopy" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" ShallowCopy()"}</code> | <span className="api-desc">Returns a member-by-member copy.</span> |

## Used in

Members of other types that take, return or hold a `ReducerProperty`:

<div className="api-used-in">

[`SABoneCollider.reducerProperty`](/mod/game-api/types/global-s/sabonecollider#m-reducerproperty), [`SABoneColliderBuilder.reducerProperty`](/mod/game-api/types/global-s/sabonecolliderbuilder#m-reducerproperty), [`SABoneColliderCommon.SABoneColliderBuilderProperty.reducerProperty`](/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty#m-reducerproperty), [`SABoneColliderCommon.SABoneColliderProperty.reducerProperty`](/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty#m-reducerproperty), [`SAMeshCollider.reducerProperty`](/mod/game-api/types/global-s/sameshcollider#m-reducerproperty), [`SAMeshColliderBuilder.reducerProperty`](/mod/game-api/types/global-s/sameshcolliderbuilder#m-reducerproperty), [`SAMeshColliderCommon.SAMeshColliderBuilderProperty.reducerProperty`](/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty#m-reducerproperty), [`SAMeshColliderCommon.SAMeshColliderProperty.reducerProperty`](/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty#m-reducerproperty).

</div>
