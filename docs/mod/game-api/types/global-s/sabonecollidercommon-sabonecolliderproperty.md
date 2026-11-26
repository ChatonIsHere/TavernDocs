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
| <Link id="m-ctor" /><code>{"SABoneColliderProperty()"}</code> | <span className="api-desc">Creates a `SABoneColliderCommon.SABoneColliderProperty` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boneproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-boneproperty">{"SABoneColliderCommon.BoneProperty"}</Link>{" boneProperty"}</code> | <span className="api-desc">Bone options.</span> |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | <span className="api-desc">Collider options.</span> |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | <span className="api-desc">Whether generated objects get modified names.</span> |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | <span className="api-desc">Mesh reducer options.</span> |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | <span className="api-desc">Rigidbody options.</span> |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | <span className="api-desc">Mesh split options.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" Copy()"}</code> | <span className="api-desc">Returns a copy with each sub property shallow copied.</span> |

## Used in

Members of other types that take, return or hold a `SABoneColliderProperty`:

<div className="api-used-in">

[`SABoneCollider.boneColliderProperty`](/mod/game-api/types/global-s/sabonecollider#m-bonecolliderproperty), [`SABoneCollider.defaultBoneColliderProperty`](/mod/game-api/types/global-s/sabonecollider#m-defaultbonecolliderproperty), [`SABoneCollider.edittingBoneColliderProperty`](/mod/game-api/types/global-s/sabonecollider#m-edittingbonecolliderproperty), [`SABoneColliderCommon.SABoneColliderBuilderProperty.ToSABoneColliderProperty`](/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty#m-tosabonecolliderproperty).

</div>
