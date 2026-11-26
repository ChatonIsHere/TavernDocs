---
title: "SAMeshColliderCommon.SAMeshColliderBuilderProperty"
description: "Settings for the SA mesh collider builder (third-party editor tool): how to split, reduce and shape colliders made from a mesh."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderCommon.SAMeshColliderBuilderProperty

A **class** in `Root.Township`, the global namespace.

Settings for the SA mesh collider builder (third-party editor tool): how to split, reduce and shape colliders made from a mesh.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SAMeshColliderCommon`](/mod/game-api/types/global-s/sameshcollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SAMeshColliderBuilderProperty()"}</code> | <span className="api-desc">Creates a `SAMeshColliderCommon.SAMeshColliderBuilderProperty` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | <span className="api-desc">Shared collider settings, such as shape and physic material.</span> |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | <span className="api-desc">Whether generated objects get renamed (on by default).</span> |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | <span className="api-desc">Settings for simplifying the mesh before making colliders.</span> |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | <span className="api-desc">Settings for rigidbodies added alongside the colliders.</span> |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | <span className="api-desc">How the mesh is split into parts: by material, by primitive and optionally by polygon normal angle.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty">{"SAMeshColliderCommon.SAMeshColliderBuilderProperty"}</Link>{" Copy()"}</code> | <span className="api-desc">Returns a copy with each property group shallow-copied.</span> |
| <Link id="m-tosameshcolliderproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" ToSAMeshColliderProperty()"}</code> | <span className="api-desc">Copies these settings into an `SAMeshColliderProperty`.</span> |

## Used in

Members of other types that take, return or hold a `SAMeshColliderBuilderProperty`:

<div className="api-used-in">

[`SAMeshColliderBuilder.edittingMeshColliderBuilderProperty`](/mod/game-api/types/global-s/sameshcolliderbuilder#m-edittingmeshcolliderbuilderproperty), [`SAMeshColliderBuilder.meshColliderBuilderProperty`](/mod/game-api/types/global-s/sameshcolliderbuilder#m-meshcolliderbuilderproperty).

</div>
