---
title: "SABoneColliderCommon.SABoneColliderBuilderProperty"
description: "Settings for the SA bone collider builder (third-party editor tool): how to split, reduce and shape colliders for each bone, and what rigidbodies to add."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneColliderCommon.SABoneColliderBuilderProperty

A **class** in `Root.Township`, no namespace.

Settings for the SA bone collider builder (third-party editor tool): how to split, reduce and shape colliders for each bone, and what rigidbodies to add.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SABoneColliderCommon`](/game-api/types/global-s/sabonecollidercommon)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SABoneColliderBuilderProperty()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | Shared collider settings, such as shape and physic material. |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | Whether generated objects get renamed. |
| <Link id="m-reducerproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | Settings for simplifying the mesh before making colliders. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | Settings for rigidbodies added alongside the colliders. |
| <Link id="m-splitproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | How vertices are split between bones by bone weight. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty">{"SABoneColliderCommon.SABoneColliderBuilderProperty"}</Link>{" Copy()"}</code> | Returns a copy with each property group shallow-copied. |
| <Link id="m-tosabonecolliderproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" ToSABoneColliderProperty()"}</code> | Copies these settings into a per-bone `SABoneColliderProperty`. |

## Used in

Members of other types that take, return or hold a `SABoneColliderBuilderProperty`:

[`SABoneColliderBuilder.boneColliderBuilderProperty`](/game-api/types/global-s/sabonecolliderbuilder#m-bonecolliderbuilderproperty), [`SABoneColliderBuilder.edittingBoneColliderBuilderProperty`](/game-api/types/global-s/sabonecolliderbuilder#m-edittingbonecolliderbuilderproperty).
