---
title: "SABoneColliderCommon.SABoneColliderProperty"
description: "Editor settings for building colliders on one bone (from the SA collider builder tool): bone, split, reducer, collider and rigidbody options."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneColliderCommon.SABoneColliderProperty

A **class** in `Root.Township`, the global namespace.

Editor settings for building colliders on one bone (from the SA collider builder tool): bone, split, reducer, collider and rigidbody options.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SABoneColliderCommon`](/mod/game-api/types/global-s/sabonecollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SABoneColliderProperty()"}</code> | Creates a `SABoneColliderCommon.SABoneColliderProperty` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boneproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-boneproperty">{"SABoneColliderCommon.BoneProperty"}</Link>{" boneProperty"}</code> | Bone options. |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | Collider options. |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | Whether generated objects get modified names. |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | Mesh reducer options. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | Rigidbody options. |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | Mesh split options. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" Copy()"}</code> | Returns a copy with each sub property shallow copied. |

## Used in

Members of other types that take, return or hold a `SABoneColliderProperty`:

[`SABoneCollider.boneColliderProperty`](/mod/game-api/types/global-s/sabonecollider#m-bonecolliderproperty), [`SABoneCollider.defaultBoneColliderProperty`](/mod/game-api/types/global-s/sabonecollider#m-defaultbonecolliderproperty), [`SABoneCollider.edittingBoneColliderProperty`](/mod/game-api/types/global-s/sabonecollider#m-edittingbonecolliderproperty), [`SABoneColliderCommon.SABoneColliderBuilderProperty.ToSABoneColliderProperty`](/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty#m-tosabonecolliderproperty).
