---
title: "SABoneColliderBuilder"
description: "Settings component from the SA Collider Builder asset for building colliders from a skinned mesh's bones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneColliderBuilder

A **class** in `Root.Township`, the global namespace.

Settings component from the SA Collider Builder asset for building colliders from a skinned mesh's bones. Editor tooling; it holds settings only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SABoneColliderBuilder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bonecolliderbuilderproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty">{"SABoneColliderCommon.SABoneColliderBuilderProperty"}</Link>{" boneColliderBuilderProperty"}</code> | All build settings: split, reducer, collider and rigidbody. |
| <Link id="m-cleanupmodified" /><code>{"bool cleanupModified"}</code> | Editor flag. Not serialized. |
| <Link id="m-edittingbonecolliderbuilderproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty">{"SABoneColliderCommon.SABoneColliderBuilderProperty"}</Link>{" edittingBoneColliderBuilderProperty"}</code> | Copy of the settings being edited in the inspector. Not serialized. |
| <Link id="m-isdebug" /><code>{"bool isDebug"}</code> | Editor debug flag. Not serialized. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty { get; }"}</code> | Collider settings from `boneColliderBuilderProperty`, or null. |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty { get; }"}</code> | Shape reduction settings from `boneColliderBuilderProperty`, or null. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty { get; }"}</code> | Rigidbody settings from `boneColliderBuilderProperty`, or null. |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty { get; }"}</code> | Bone weight split settings from `boneColliderBuilderProperty`, or null. |
