---
title: "RopePersistManager.RopeData"
description: "class RopePersistManager.RopeData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePersistManager.RopeData

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RopePersistManager`](/game-api/types/global-q-r/ropepersistmanager)
- **Nested types** [`TransformInfo`](/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeData("}<Link to="/game-api/types/global-t-x/ultimaterope">{"UltimateRope"}</Link>{" rope)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-m-aajointsbroken" /><code>{"bool[][] m_aaJointsBroken"}</code> |  |
| <Link id="m-m-aajointsprocessed" /><code>{"bool[][] m_aaJointsProcessed"}</code> |  |
| <Link id="m-m-alinktransforminfo" /><code><Link to="/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{"[] m_aLinkTransformInfo"}</code> |  |
| <Link id="m-m-amtxskinbindposes" /><code>{"Matrix4x4[] m_amtxSkinBindPoses"}</code> |  |
| <Link id="m-m-anskintrianglesrope" /><code>{"int[] m_anSkinTrianglesRope"}</code> |  |
| <Link id="m-m-anskintrianglessections" /><code>{"int[] m_anSkinTrianglesSections"}</code> |  |
| <Link id="m-m-askinboneweights" /><code>{"BoneWeight[] m_aSkinBoneWeights"}</code> |  |
| <Link id="m-m-av2skinmapping" /><code>{"Vector2[] m_av2SkinMapping"}</code> |  |
| <Link id="m-m-av3skinvertices" /><code>{"Vector3[] m_av3SkinVertices"}</code> |  |
| <Link id="m-m-av4skintangents" /><code>{"Vector4[] m_av4SkinTangents"}</code> |  |
| <Link id="m-m-bdeleted" /><code>{"bool m_bDeleted"}</code> |  |
| <Link id="m-m-bskin" /><code>{"bool m_bSkin"}</code> |  |
| <Link id="m-m-hashfieldname2value" /><code>{"Dictionary<string, object> m_hashFieldName2Value"}</code> |  |
| <Link id="m-m-rope" /><code><Link to="/game-api/types/global-t-x/ultimaterope">{"UltimateRope"}</Link>{" m_rope"}</code> |  |
| <Link id="m-m-transforminforope" /><code><Link to="/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{" m_transformInfoRope"}</code> |  |
| <Link id="m-m-transforminfosegments" /><code><Link to="/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{"[] m_transformInfoSegments"}</code> |  |
| <Link id="m-m-transforminfostart" /><code><Link to="/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{" m_transformInfoStart"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-makeskindeepcopy" /><code>{"static void MakeSkinDeepCopy(Vector3[] av3VerticesSource, Vector2[] av2MappingSource, Vector4[] av4TangentsSource, BoneWeight[] aBoneWeightsSource, int[] anTrianglesRopeSource, int[] anTrianglesSectionsSource, Matrix4x4[] aBindPosesSource, Vector3[] av3VerticesDestiny, Vector2[] av2MappingDestiny, Vector4[] av4TangentsDestiny, BoneWeight[] aBoneWeightsDestiny, int[] anTrianglesRopeDestiny, int[] anTrianglesSectionsDestiny, Matrix4x4[] aBindPosesDestiny)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RopeData`:

[`RopePersistManager.s_hashInstanceID2RopeData`](/game-api/types/global-q-r/ropepersistmanager#m-s-hashinstanceid2ropedata).
