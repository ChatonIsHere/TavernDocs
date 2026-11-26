---
title: "SABoneColliderCommon.SABoneColliderBuilderProperty"
description: "Settings for the SA bone collider builder (third-party editor tool): how to split, reduce and shape colliders for each bone, and what rigidbodies to add."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneColliderCommon.SABoneColliderBuilderProperty

A **class** in `Root.Township`, the global namespace.

Settings for the SA bone collider builder (third-party editor tool): how to split, reduce and shape colliders for each bone, and what rigidbodies to add.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SABoneColliderCommon`](/mod/game-api/types/global-s/sabonecollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SABoneColliderBuilderProperty()"}</code> | <span className="api-desc">Creates a `SABoneColliderCommon.SABoneColliderBuilderProperty` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | <span className="api-desc">Shared collider settings, such as shape and physic material.</span> |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | <span className="api-desc">Whether generated objects get renamed.</span> |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | <span className="api-desc">Settings for simplifying the mesh before making colliders.</span> |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | <span className="api-desc">Settings for rigidbodies added alongside the colliders.</span> |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | <span className="api-desc">How vertices are split between bones by bone weight.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty">{"SABoneColliderCommon.SABoneColliderBuilderProperty"}</Link>{" Copy()"}</code> | <span className="api-desc">Returns a copy with each property group shallow-copied.</span> |
| <Link id="m-tosabonecolliderproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" ToSABoneColliderProperty()"}</code> | <span className="api-desc">Copies these settings into a per-bone `SABoneColliderProperty`.</span> |

## Used in

Members of other types that take, return or hold a `SABoneColliderBuilderProperty`:

<div className="api-used-in">

[`SABoneColliderBuilder.boneColliderBuilderProperty`](/mod/game-api/types/global-s/sabonecolliderbuilder#m-bonecolliderbuilderproperty), [`SABoneColliderBuilder.edittingBoneColliderBuilderProperty`](/mod/game-api/types/global-s/sabonecolliderbuilder#m-edittingbonecolliderbuilderproperty).

</div>
