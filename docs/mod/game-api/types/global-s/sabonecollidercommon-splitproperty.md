---
title: "SABoneColliderCommon.SplitProperty"
description: "Settings for how the SA collider builder (a third-party editor tool) splits a skinned mesh by bone weight before making bone colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneColliderCommon.SplitProperty

A **class** in `Root.Township`, the global namespace.

Settings for how the SA collider builder (a third-party editor tool) splits a skinned mesh by bone weight before making bone colliders. Editor data only, nothing in game code reads it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SABoneColliderCommon`](/mod/game-api/types/global-s/sabonecollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplitProperty()"}</code> | <span className="api-desc">Creates a `SABoneColliderCommon.SplitProperty` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bonetriangleextent" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-bonetriangleextent">{"SABoneColliderCommon.BoneTriangleExtent"}</Link>{" boneTriangleExtent"}</code> | <span className="api-desc">Probably how many of a triangle's vertices must belong to a bone for it to count (`Disable`, `Vertex2` or `Vertex1`). Default `Vertex2`.</span> |
| <Link id="m-boneweight2" /><code>{"int boneWeight2"}</code> | <span className="api-desc">Weight threshold (percent, default 50) used when splitting with two bone influences.</span> |
| <Link id="m-boneweight3" /><code>{"int boneWeight3"}</code> | <span className="api-desc">Weight threshold (percent, default 33) used with three bone influences.</span> |
| <Link id="m-boneweight4" /><code>{"int boneWeight4"}</code> | <span className="api-desc">Weight threshold (percent, default 25) used with four bone influences.</span> |
| <Link id="m-boneweighttype" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-boneweighttype">{"SABoneColliderCommon.BoneWeightType"}</Link>{" boneWeightType"}</code> | <span className="api-desc">Whether splitting looks at two or four bone weights per vertex (`Bone2` or `Bone4`).</span> |
| <Link id="m-greaterboneweight" /><code>{"bool greaterBoneWeight"}</code> | <span className="api-desc">Probably assigns a vertex only to its heaviest bone when true. Default true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shallowcopy" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" ShallowCopy()"}</code> | <span className="api-desc">Returns a member-by-member copy of these settings.</span> |

## Used in

Members of other types that take, return or hold a `SplitProperty`:

<div className="api-used-in">

[`SABoneCollider.splitProperty`](/mod/game-api/types/global-s/sabonecollider#m-splitproperty), [`SABoneColliderBuilder.splitProperty`](/mod/game-api/types/global-s/sabonecolliderbuilder#m-splitproperty), [`SABoneColliderCommon.SABoneColliderBuilderProperty.splitProperty`](/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty#m-splitproperty), [`SABoneColliderCommon.SABoneColliderProperty.splitProperty`](/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty#m-splitproperty).

</div>
