---
title: "SABoneColliderBuilder"
description: "Settings component from the SA Collider Builder asset for building colliders from a skinned mesh's bones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneColliderBuilder

A **class** in `Root.Township`, no namespace.

Settings component from the SA Collider Builder asset for building colliders from a skinned mesh's bones. Editor tooling; it holds settings only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SABoneColliderBuilder()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bonecolliderbuilderproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty">{"SABoneColliderCommon.SABoneColliderBuilderProperty"}</Link>{" boneColliderBuilderProperty"}</code> | All build settings: split, reducer, collider and rigidbody. |
| <Link id="m-cleanupmodified" /><code>{"bool cleanupModified"}</code> | Editor flag. Not serialized. |
| <Link id="m-edittingbonecolliderbuilderproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty">{"SABoneColliderCommon.SABoneColliderBuilderProperty"}</Link>{" edittingBoneColliderBuilderProperty"}</code> | Copy of the settings being edited in the inspector. Not serialized. |
| <Link id="m-isdebug" /><code>{"bool isDebug"}</code> | Editor debug flag. Not serialized. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty { get; }"}</code> | Collider settings from `boneColliderBuilderProperty`, or null. |
| <Link id="m-reducerproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty { get; }"}</code> | Shape reduction settings from `boneColliderBuilderProperty`, or null. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty { get; }"}</code> | Rigidbody settings from `boneColliderBuilderProperty`, or null. |
| <Link id="m-splitproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty { get; }"}</code> | Bone weight split settings from `boneColliderBuilderProperty`, or null. |
