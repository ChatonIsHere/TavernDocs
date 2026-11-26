---
title: "SABoneCollider"
description: "Editor tool component (from the SAColliderBuilder asset) that holds settings for generating colliders on a bone, and marks the object's name with  or + when..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SABoneCollider

A **class** in `Root.Township`, the global namespace.

Editor tool component (from the SAColliderBuilder asset) that holds settings for generating colliders on a bone, and marks the object's name with `*` or `+` when it or its children were edited.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SABoneCollider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bonecolliderproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" boneColliderProperty"}</code> | <span className="api-desc">All collider-building settings for this bone.</span> |
| <Link id="m-cleanupmodified" /><code>{"bool cleanupModified"}</code> | <span className="api-desc">Editor flag, not saved.</span> |
| <Link id="m-defaultbonecolliderproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" defaultBoneColliderProperty"}</code> | <span className="api-desc">The settings to go back to on reset.</span> |
| <Link id="m-defaultname" /><code>{"string defaultName"}</code> | <span className="api-desc">The object's name without the modified marker.</span> |
| <Link id="m-edittingbonecolliderproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty">{"SABoneColliderCommon.SABoneColliderProperty"}</Link>{" edittingBoneColliderProperty"}</code> | <span className="api-desc">Settings being edited in the inspector. Not saved.</span> |
| <Link id="m-isdebug" /><code>{"bool isDebug"}</code> | <span className="api-desc">Editor debug flag, not saved.</span> |
| <Link id="m-modified" /><code>{"bool modified"}</code> | <span className="api-desc">True if this bone's settings were changed from the defaults.</span> |
| <Link id="m-modifiedchildren" /><code>{"bool modifiedChildren"}</code> | <span className="api-desc">True if a child bone's settings were changed.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boneproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-boneproperty">{"SABoneColliderCommon.BoneProperty"}</Link>{" boneProperty { get; }"}</code> | <span className="api-desc">Bone part of the settings, or null.</span> |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty { get; }"}</code> | <span className="api-desc">Collider part of the settings, or null.</span> |
| <Link id="m-modifynameenalbed" /><code>{"bool modifyNameEnalbed { get; }"}</code> | <span className="api-desc">Whether the name marker is used (misspelled in the asset).</span> |
| <Link id="m-recursivery" /><code>{"bool recursivery { get; }"}</code> | <span className="api-desc">Whether the settings also apply to child bones (misspelled in the asset).</span> |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty { get; }"}</code> | <span className="api-desc">Mesh reducer part of the settings, or null.</span> |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty { get; }"}</code> | <span className="api-desc">Rigidbody part of the settings, or null.</span> |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sabonecollidercommon-splitproperty">{"SABoneColliderCommon.SplitProperty"}</Link>{" splitProperty { get; }"}</code> | <span className="api-desc">Split part of the settings, or null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-computemodifyname" /><code>{"string _ComputeModifyName()"}</code> | <span className="api-desc">The base name with `*` when modified, `+` when only children are modified.</span> |
| <Link id="m-ismodifyname" /><code>{"bool _IsModifyName()"}</code> | <span className="api-desc">True if the object's current name equals the computed name.</span> |
| <Link id="m-changedefaultname" /><code>{"void ChangeDefaultName(string defaultName)"}</code> | <span className="api-desc">Sets the base name and renames the object if it still had the computed name.</span> |
| <Link id="m-changemodified" /><code>{"void ChangeModified(bool modified)"}</code> | <span className="api-desc">Sets the modified flag and updates the name marker.</span> |
| <Link id="m-changemodifiedchildren" /><code>{"void ChangeModifiedChildren(bool modifiedChildren)"}</code> | <span className="api-desc">Sets the children-modified flag and updates the name marker.</span> |
| <Link id="m-resetmodified" /><code>{"void ResetModified()"}</code> | <span className="api-desc">Clears both modified flags and updates the name marker.</span> |
| <Link id="m-resetmodifyname" /><code>{"void ResetModifyName()"}</code> | <span className="api-desc">Renames the object to the computed name, if the marker is enabled.</span> |
