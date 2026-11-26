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
| <Link id="m-ctor" /><code>{"SplitProperty()"}</code> | <span className="api-desc">Creates a `SAMeshColliderCommon.SplitProperty` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-splitmaterialenabled" /><code>{"bool splitMaterialEnabled"}</code> | <span className="api-desc">Splits the mesh by material. Default true.</span> |
| <Link id="m-splitpolygonnormalangle" /><code>{"float splitPolygonNormalAngle"}</code> | <span className="api-desc">Angle in degrees (default 45) between face normals above which faces go into separate pieces, when `splitPolygonNormalEnabled` is on.</span> |
| <Link id="m-splitpolygonnormalenabled" /><code>{"bool splitPolygonNormalEnabled"}</code> | <span className="api-desc">Splits the mesh where face normals differ by more than `splitPolygonNormalAngle`. Off by default.</span> |
| <Link id="m-splitprimitiveenabled" /><code>{"bool splitPrimitiveEnabled"}</code> | <span className="api-desc">Splits the mesh into its separate connected parts. Default true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shallowcopy" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" ShallowCopy()"}</code> | <span className="api-desc">Returns a member-by-member copy of these settings.</span> |

## Used in

Members of other types that take, return or hold a `SplitProperty`:

<div className="api-used-in">

[`SAMeshCollider.splitProperty`](/mod/game-api/types/global-s/sameshcollider#m-splitproperty), [`SAMeshColliderBuilder.splitProperty`](/mod/game-api/types/global-s/sameshcolliderbuilder#m-splitproperty), [`SAMeshColliderCommon.SAMeshColliderBuilderProperty.splitProperty`](/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty#m-splitproperty), [`SAMeshColliderCommon.SAMeshColliderProperty.splitProperty`](/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty#m-splitproperty).

</div>
