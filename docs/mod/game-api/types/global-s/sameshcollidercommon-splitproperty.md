---
title: "SAMeshColliderCommon.SplitProperty"
description: "How the SA mesh collider builder (a third-party editor tool) splits a mesh into separate pieces before making a collider for each."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderCommon.SplitProperty

A **class** in `Root.Township`, the global namespace.

How the SA mesh collider builder (a third-party editor tool) splits a mesh into separate pieces before making a collider for each.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SAMeshColliderCommon`](/mod/game-api/types/global-s/sameshcollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplitProperty()"}</code> | Creates a `SAMeshColliderCommon.SplitProperty` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-splitmaterialenabled" /><code>{"bool splitMaterialEnabled"}</code> | Splits the mesh by material. Default true. |
| <Link id="m-splitpolygonnormalangle" /><code>{"float splitPolygonNormalAngle"}</code> | Angle in degrees (default 45) between face normals above which faces go into separate pieces, when `splitPolygonNormalEnabled` is on. |
| <Link id="m-splitpolygonnormalenabled" /><code>{"bool splitPolygonNormalEnabled"}</code> | Splits the mesh where face normals differ by more than `splitPolygonNormalAngle`. Off by default. |
| <Link id="m-splitprimitiveenabled" /><code>{"bool splitPrimitiveEnabled"}</code> | Splits the mesh into its separate connected parts. Default true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shallowcopy" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" ShallowCopy()"}</code> | Returns a member-by-member copy of these settings. |

## Used in

Members of other types that take, return or hold a `SplitProperty`:

[`SAMeshCollider.splitProperty`](/mod/game-api/types/global-s/sameshcollider#m-splitproperty), [`SAMeshColliderBuilder.splitProperty`](/mod/game-api/types/global-s/sameshcolliderbuilder#m-splitproperty), [`SAMeshColliderCommon.SAMeshColliderBuilderProperty.splitProperty`](/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty#m-splitproperty), [`SAMeshColliderCommon.SAMeshColliderProperty.splitProperty`](/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty#m-splitproperty).
