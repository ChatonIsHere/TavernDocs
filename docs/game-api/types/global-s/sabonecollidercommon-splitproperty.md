---
title: "SABoneColliderCommon.SplitProperty"
description: "Settings for how the SA collider builder (a third-party editor tool) splits a skinned mesh by bone weight before making bone colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneColliderCommon.SplitProperty

A **class** in `Root.Township`, no namespace.

Settings for how the SA collider builder (a third-party editor tool) splits a skinned mesh by bone weight before making bone colliders. Editor data only, nothing in game code reads it.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SABoneColliderCommon`](/game-api/types/global-s/sabonecollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplitProperty()"}</code> | Creates a `SABoneColliderCommon.SplitProperty` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bonetriangleextent" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-bonetriangleextent">{"SABoneColliderCommon.BoneTriangleExtent"}</Link>{" boneTriangleExtent"}</code> | Probably how many of a triangle's vertices must belong to a bone for it to count (`Disable`, `Vertex2` or `Vertex1`). Default `Vertex2`. |
| <Link id="m-boneweight2" /><code>{"int boneWeight2"}</code> | Weight threshold (percent, default 50) used when splitting with two bone influences. |
| <Link id="m-boneweight3" /><code>{"int boneWeight3"}</code> | Weight threshold (percent, default 33) used with three bone influences. |
| <Link id="m-boneweight4" /><code>{"int boneWeight4"}</code> | Weight threshold (percent, default 25) used with four bone influences. |
| <Link id="m-boneweighttype" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-boneweighttype">{"SABoneColliderCommon.BoneWeightType"}</Link>{" boneWeightType"}</code> | Whether splitting looks at two or four bone weights per vertex (`Bone2` or `Bone4`). |
| <Link id="m-greaterboneweight" /><code>{"bool greaterBoneWeight"}</code> | Probably assigns a vertex only to its heaviest bone when true. Default true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shallowcopy" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" ShallowCopy()"}</code> | Returns a member-by-member copy of these settings. |

## Used in

Members of other types that take, return or hold a `SplitProperty`:

[`SABoneCollider.splitProperty`](/game-api/types/global-s/sabonecollider#m-splitproperty), [`SABoneColliderBuilder.splitProperty`](/game-api/types/global-s/sabonecolliderbuilder#m-splitproperty), [`SABoneColliderCommon.SABoneColliderBuilderProperty.splitProperty`](/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty#m-splitproperty), [`SABoneColliderCommon.SABoneColliderProperty.splitProperty`](/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty#m-splitproperty).
