---
title: "SAMeshColliderCommon.SAMeshColliderProperty"
description: "All the settings of one SA mesh collider build (split, reducer, collider and rigidbody options), from the third-party SA collider builder tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderCommon.SAMeshColliderProperty

A **class** in `Root.Township`, no namespace.

All the settings of one SA mesh collider build (split, reducer, collider and rigidbody options), from the third-party SA collider builder tool. Held by `SAMeshCollider`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SAMeshColliderCommon`](/game-api/types/global-s/sameshcollidercommon)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SAMeshColliderProperty()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty"}</code> | Collider options for the generated colliders. |
| <Link id="m-modifynameenabled" /><code>{"bool modifyNameEnabled"}</code> | Whether the tool renames the generated collider objects. Default true. |
| <Link id="m-reducerproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty"}</code> | Options for reducing the mesh before colliders are made from it. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty"}</code> | Rigidbody options for the generated colliders. |
| <Link id="m-splitproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" splitProperty"}</code> | How the mesh is split into pieces before making colliders. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" Copy()"}</code> | Returns a new copy with each sub-property shallow-copied. |

## Used in

Members of other types that take, return or hold a `SAMeshColliderProperty`:

[`SAMeshCollider.defaultMeshColliderProperty`](/game-api/types/global-s/sameshcollider#m-defaultmeshcolliderproperty), [`SAMeshCollider.edittingMeshCollidertProperty`](/game-api/types/global-s/sameshcollider#m-edittingmeshcollidertproperty), [`SAMeshCollider.meshColliderProperty`](/game-api/types/global-s/sameshcollider#m-meshcolliderproperty), [`SAMeshColliderCommon.SAMeshColliderBuilderProperty.ToSAMeshColliderProperty`](/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty#m-tosameshcolliderproperty).
