---
title: "SABoneCollider"
description: "Editor tool component (from the SAColliderBuilder asset) that holds settings for generating colliders on a bone, and marks the object's name with  or + when..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneCollider

A **class** in `Root.Township`, no namespace.

Editor tool component (from the SAColliderBuilder asset) that holds settings for generating colliders on a bone, and marks the object's name with `*` or `+` when it or its children were edited.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SABoneCollider()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bonecolliderproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" boneColliderProperty"}</code> | All collider-building settings for this bone. |
| <Link id="m-cleanupmodified" /><code>{"bool cleanupModified"}</code> | Editor flag, not saved. |
| <Link id="m-defaultbonecolliderproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" defaultBoneColliderProperty"}</code> | The settings to go back to on reset. |
| <Link id="m-defaultname" /><code>{"string defaultName"}</code> | The object's name without the modified marker. |
| <Link id="m-edittingbonecolliderproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" edittingBoneColliderProperty"}</code> | Settings being edited in the inspector. Not saved. |
| <Link id="m-isdebug" /><code>{"bool isDebug"}</code> | Editor debug flag, not saved. |
| <Link id="m-modified" /><code>{"bool modified"}</code> | True if this bone's settings were changed from the defaults. |
| <Link id="m-modifiedchildren" /><code>{"bool modifiedChildren"}</code> | True if a child bone's settings were changed. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boneproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-boneproperty">{"SABoneColliderCommon.BoneProperty"}</Link>{" boneProperty { get; }"}</code> | Bone part of the settings, or null. |
| <Link id="m-colliderproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty { get; }"}</code> | Collider part of the settings, or null. |
| <Link id="m-modifynameenalbed" /><code>{"bool modifyNameEnalbed { get; }"}</code> | Whether the name marker is used (misspelled in the asset). |
| <Link id="m-recursivery" /><code>{"bool recursivery { get; }"}</code> | Whether the settings also apply to child bones (misspelled in the asset). |
| <Link id="m-reducerproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty { get; }"}</code> | Mesh reducer part of the settings, or null. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty { get; }"}</code> | Rigidbody part of the settings, or null. |
| <Link id="m-splitproperty" /><code><Link to="/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty { get; }"}</code> | Split part of the settings, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-computemodifyname" /><code>{"string _ComputeModifyName()"}</code> | The base name with `*` when modified, `+` when only children are modified. |
| <Link id="m-ismodifyname" /><code>{"bool _IsModifyName()"}</code> | True if the object's current name equals the computed name. |
| <Link id="m-changedefaultname" /><code>{"void ChangeDefaultName(string defaultName)"}</code> | Sets the base name and renames the object if it still had the computed name. |
| <Link id="m-changemodified" /><code>{"void ChangeModified(bool modified)"}</code> | Sets the modified flag and updates the name marker. |
| <Link id="m-changemodifiedchildren" /><code>{"void ChangeModifiedChildren(bool modifiedChildren)"}</code> | Sets the children-modified flag and updates the name marker. |
| <Link id="m-resetmodified" /><code>{"void ResetModified()"}</code> | Clears both modified flags and updates the name marker. |
| <Link id="m-resetmodifyname" /><code>{"void ResetModifyName()"}</code> | Renames the object to the computed name, if the marker is enabled. |
