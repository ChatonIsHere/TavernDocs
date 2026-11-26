---
title: "RopePersistManager.RopeData"
description: "Snapshot of an UltimateRope (third party Ultimate Rope Editor) with its skin mesh and link transforms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePersistManager.RopeData

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Snapshot of an `UltimateRope` (third party Ultimate Rope Editor) with its skin mesh and link transforms. Nothing in this build fills the manager's map.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RopePersistManager`](/mod/game-api/types/global-q-r/ropepersistmanager)
- **Nested types** [`TransformInfo`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeData("}<Link to="/mod/game-api/types/global-t-x/ultimaterope">{"UltimateRope"}</Link>{" rope)"}</code> | <span className="api-desc">Creates a `RopePersistManager.RopeData` from `rope`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-m-aajointsbroken" /><code>{"bool[][] m_aaJointsBroken"}</code> | <span className="api-desc">Which joints were broken, per link.</span> |
| <Link id="m-m-aajointsprocessed" /><code>{"bool[][] m_aaJointsProcessed"}</code> | <span className="api-desc">Which joints were processed, per link.</span> |
| <Link id="m-m-alinktransforminfo" /><code><Link to="/mod/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{"[] m_aLinkTransformInfo"}</code> | <span className="api-desc">Saved transform of each rope link.</span> |
| <Link id="m-m-amtxskinbindposes" /><code>{"Matrix4x4[] m_amtxSkinBindPoses"}</code> | <span className="api-desc">Copy of the skin mesh bind poses.</span> |
| <Link id="m-m-anskintrianglesrope" /><code>{"int[] m_anSkinTrianglesRope"}</code> | <span className="api-desc">Copy of the triangles in submesh 0 (the rope).</span> |
| <Link id="m-m-anskintrianglessections" /><code>{"int[] m_anSkinTrianglesSections"}</code> | <span className="api-desc">Copy of the triangles in submesh 1 (the sections).</span> |
| <Link id="m-m-askinboneweights" /><code>{"BoneWeight[] m_aSkinBoneWeights"}</code> | <span className="api-desc">Copy of the skin mesh bone weights.</span> |
| <Link id="m-m-av2skinmapping" /><code>{"Vector2[] m_av2SkinMapping"}</code> | <span className="api-desc">Copy of the skin mesh UVs.</span> |
| <Link id="m-m-av3skinvertices" /><code>{"Vector3[] m_av3SkinVertices"}</code> | <span className="api-desc">Copy of the skin mesh vertices.</span> |
| <Link id="m-m-av4skintangents" /><code>{"Vector4[] m_av4SkinTangents"}</code> | <span className="api-desc">Copy of the skin mesh tangents, or null if it has none.</span> |
| <Link id="m-m-bdeleted" /><code>{"bool m_bDeleted"}</code> | <span className="api-desc">Whether the rope was deleted.</span> |
| <Link id="m-m-bskin" /><code>{"bool m_bSkin"}</code> | <span className="api-desc">Whether the rope has a `SkinnedMeshRenderer`, which decides if skin data is copied.</span> |
| <Link id="m-m-hashfieldname2value" /><code>{"Dictionary<string, object> m_hashFieldName2Value"}</code> | <span className="api-desc">Saved rope field values by field name.</span> |
| <Link id="m-m-rope" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope">{"UltimateRope"}</Link>{" m_rope"}</code> | <span className="api-desc">The rope this snapshot is of.</span> |
| <Link id="m-m-transforminforope" /><code><Link to="/mod/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{" m_transformInfoRope"}</code> | <span className="api-desc">Saved transform of the rope object.</span> |
| <Link id="m-m-transforminfosegments" /><code><Link to="/mod/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{"[] m_transformInfoSegments"}</code> | <span className="api-desc">Saved transform of each rope node.</span> |
| <Link id="m-m-transforminfostart" /><code><Link to="/mod/game-api/types/global-q-r/ropepersistmanager-ropedata-transforminfo">{"RopePersistManager.RopeData.TransformInfo"}</Link>{" m_transformInfoStart"}</code> | <span className="api-desc">Saved transform of the rope's start object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-makeskindeepcopy" /><code>{"static void MakeSkinDeepCopy(Vector3[] av3VerticesSource, Vector2[] av2MappingSource, Vector4[] av4TangentsSource, BoneWeight[] aBoneWeightsSource, int[] anTrianglesRopeSource, int[] anTrianglesSectionsSource, Matrix4x4[] aBindPosesSource, Vector3[] av3VerticesDestiny, Vector2[] av2MappingDestiny, Vector4[] av4TangentsDestiny, BoneWeight[] aBoneWeightsDestiny, int[] anTrianglesRopeDestiny, int[] anTrianglesSectionsDestiny, Matrix4x4[] aBindPosesDestiny)"}</code> | <span className="api-desc">Copies skin mesh arrays (vertices, UVs, tangents, weights, triangles, bind poses) into the given arrays.</span> |

## Used in

Members of other types that take, return or hold a `RopeData`:

<div className="api-used-in">

[`RopePersistManager.s_hashInstanceID2RopeData`](/mod/game-api/types/global-q-r/ropepersistmanager#m-s-hashinstanceid2ropedata).

</div>
