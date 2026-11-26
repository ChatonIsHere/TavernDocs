---
title: "SAMeshColliderCommon.SAMeshColliderProperty"
description: "All the settings of one SA mesh collider build (split, reducer, collider and rigidbody options), from the third-party SA collider builder tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderCommon.SAMeshColliderProperty

A **class** in `Root.Township`, the global namespace.

All the settings of one SA mesh collider build (split, reducer, collider and rigidbody options), from the third-party SA collider builder tool. Held by `SAMeshCollider`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SAMeshColliderCommon`](/mod/game-api/types/global-s/sameshcollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SAMeshColliderProperty()"}</code> | <span className="api-desc">Creates a `SAMeshColliderCommon.SAMeshColliderProperty` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | <span className="api-desc">Collider options for the generated colliders.</span> |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | <span className="api-desc">Whether the tool renames the generated collider objects. Default true.</span> |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | <span className="api-desc">Options for reducing the mesh before colliders are made from it.</span> |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | <span className="api-desc">Rigidbody options for the generated colliders.</span> |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | <span className="api-desc">How the mesh is split into pieces before making colliders.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" Copy()"}</code> | <span className="api-desc">Returns a new copy with each sub-property shallow-copied.</span> |

## Used in

Members of other types that take, return or hold a `SAMeshColliderProperty`:

<div className="api-used-in">

[`SAMeshCollider.defaultMeshColliderProperty`](/mod/game-api/types/global-s/sameshcollider#m-defaultmeshcolliderproperty), [`SAMeshCollider.edittingMeshCollidertProperty`](/mod/game-api/types/global-s/sameshcollider#m-edittingmeshcollidertproperty), [`SAMeshCollider.meshColliderProperty`](/mod/game-api/types/global-s/sameshcollider#m-meshcolliderproperty), [`SAMeshColliderCommon.SAMeshColliderBuilderProperty.ToSAMeshColliderProperty`](/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty#m-tosameshcolliderproperty).

</div>
