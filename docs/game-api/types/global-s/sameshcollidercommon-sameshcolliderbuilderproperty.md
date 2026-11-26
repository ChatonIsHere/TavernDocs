---
title: "SAMeshColliderCommon.SAMeshColliderBuilderProperty"
description: "Settings for the SA mesh collider builder (third-party editor tool): how to split, reduce and shape colliders made from a mesh."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderCommon.SAMeshColliderBuilderProperty

A **class** in `Root.Township`, no namespace.

Settings for the SA mesh collider builder (third-party editor tool): how to split, reduce and shape colliders made from a mesh.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SAMeshColliderCommon`](/game-api/types/global-s/sameshcollidercommon)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SAMeshColliderBuilderProperty()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | Shared collider settings, such as shape and physic material. |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | Whether generated objects get renamed (on by default). |
| <Link id="m-reducerproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | Settings for simplifying the mesh before making colliders. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | Settings for rigidbodies added alongside the colliders. |
| <Link id="m-splitproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | How the mesh is split into parts: by material, by primitive and optionally by polygon normal angle. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty">{"SAMeshColliderCommon.SAMeshColliderBuilderProperty"}</Link>{" Copy()"}</code> | Returns a copy with each property group shallow-copied. |
| <Link id="m-tosameshcolliderproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" ToSAMeshColliderProperty()"}</code> | Copies these settings into an `SAMeshColliderProperty`. |

## Used in

Members of other types that take, return or hold a `SAMeshColliderBuilderProperty`:

[`SAMeshColliderBuilder.edittingMeshColliderBuilderProperty`](/game-api/types/global-s/sameshcolliderbuilder#m-edittingmeshcolliderbuilderproperty), [`SAMeshColliderBuilder.meshColliderBuilderProperty`](/game-api/types/global-s/sameshcolliderbuilder#m-meshcolliderbuilderproperty).
