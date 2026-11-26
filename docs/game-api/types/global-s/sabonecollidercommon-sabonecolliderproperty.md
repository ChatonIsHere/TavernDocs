---
title: "SABoneColliderCommon.SABoneColliderProperty"
description: "Editor settings for building colliders on one bone (from the SA collider builder tool): bone, split, reducer, collider and rigidbody options."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneColliderCommon.SABoneColliderProperty

A **class** in `Root.Township`, no namespace.

Editor settings for building colliders on one bone (from the SA collider builder tool): bone, split, reducer, collider and rigidbody options.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SABoneColliderCommon`](/game-api/types/global-s/sabonecollidercommon)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SABoneColliderProperty()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boneproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-boneproperty">{"SABoneColliderCommon.BoneProperty"}</Link>{" boneProperty"}</code> | Bone options. |
| <Link id="m-colliderproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | Collider options. |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | Whether generated objects get modified names. |
| <Link id="m-reducerproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | Mesh reducer options. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | Rigidbody options. |
| <Link id="m-splitproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | Mesh split options. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" Copy()"}</code> | Returns a copy with each sub property shallow copied. |

## Used in

Members of other types that take, return or hold a `SABoneColliderProperty`:

[`SABoneCollider.boneColliderProperty`](/game-api/types/global-s/sabonecollider#m-bonecolliderproperty), [`SABoneCollider.defaultBoneColliderProperty`](/game-api/types/global-s/sabonecollider#m-defaultbonecolliderproperty), [`SABoneCollider.edittingBoneColliderProperty`](/game-api/types/global-s/sabonecollider#m-edittingbonecolliderproperty), [`SABoneColliderCommon.SABoneColliderBuilderProperty.ToSABoneColliderProperty`](/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty#m-tosabonecolliderproperty).
