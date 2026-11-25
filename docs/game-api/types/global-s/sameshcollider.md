---
title: "SAMeshCollider"
description: "Component from the third-party SA Collider Builder editor tool: holds the settings used to build mesh colliders for an object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshCollider

A **class** in `Root.Township`, no namespace.

Component from the third-party SA Collider Builder editor tool: holds the settings used to build mesh colliders for an object. Editor-time data; nothing in the game reads it at runtime.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SAMeshCollider()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cleanupmodified" /><code>{"bool cleanupModified"}</code> | Runtime-only editor flag. Not serialized. |
| <Link id="m-defaultmeshcolliderproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" defaultMeshColliderProperty"}</code> | The default mesh collider settings to reset to. |
| <Link id="m-defaultname" /><code>{"string defaultName"}</code> | Base GameObject name the tool adds its `*` or `+` marks to. |
| <Link id="m-edittingmeshcollidertproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" edittingMeshCollidertProperty"}</code> | Copy of the settings being edited in the inspector. Not serialized. |
| <Link id="m-isdebug" /><code>{"bool isDebug"}</code> | Editor debug flag. Not serialized. |
| <Link id="m-meshcolliderproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" meshColliderProperty"}</code> | The mesh collider build settings: split, reducer, collider and rigidbody options. |
| <Link id="m-modified" /><code>{"bool modified"}</code> | True when this object's collider settings differ from the defaults. |
| <Link id="m-modifiedchildren" /><code>{"bool modifiedChildren"}</code> | True when a child's collider settings were changed. |
| <Link id="m-splitmesh" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-splitmesh">{"SAMeshColliderCommon.SplitMesh"}</Link>{" splitMesh"}</code> | Which mesh part this component stands for when split. |
| <Link id="m-splitmode" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-splitmode">{"SAMeshColliderCommon.SplitMode"}</Link>{" splitMode"}</code> | How this object's mesh is split. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty { get; }"}</code> | Collider settings from `meshColliderProperty`, or null. |
| <Link id="m-modifynameenalbed" /><code>{"bool modifyNameEnalbed { get; }"}</code> | Whether the tool marks the GameObject name with `*` or `+` (misspelt in the code). |
| <Link id="m-reducerproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty { get; }"}</code> | Mesh reduction settings from `meshColliderProperty`, or null. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty { get; }"}</code> | Rigidbody settings from `meshColliderProperty`, or null. |
| <Link id="m-splitmaterialenabled" /><code>{"bool splitMaterialEnabled { get; }"}</code> | Whether the mesh is split into separate colliders per material. |
| <Link id="m-splitpolygonnormalangle" /><code>{"float splitPolygonNormalAngle { get; }"}</code> | Angle threshold used when splitting by polygon normal. 0 if no split settings. |
| <Link id="m-splitpolygonnormalenabled" /><code>{"bool splitPolygonNormalEnabled { get; }"}</code> | Whether the mesh is split by polygon normal direction. |
| <Link id="m-splitprimitiveenabled" /><code>{"bool splitPrimitiveEnabled { get; }"}</code> | Whether the mesh is split by primitive. |
| <Link id="m-splitproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" splitProperty { get; }"}</code> | Split settings from `meshColliderProperty`, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-computemodifyname" /><code>{"string _ComputeModifyName()"}</code> | The base name with `*` added if modified or `+` if only children are modified. |
| <Link id="m-ismodifyname" /><code>{"bool _IsModifyName()"}</code> | True if name marking is on and the GameObject's current name matches the computed name. |
| <Link id="m-changedefaultname" /><code>{"void ChangeDefaultName(string defaultName)"}</code> | Sets the base name and renames the GameObject if its name was the tool's computed name. |
| <Link id="m-changemodified" /><code>{"void ChangeModified(bool modified)"}</code> | Sets the modified flag and updates the GameObject's marked name if the tool manages it. |
| <Link id="m-changemodifiedchildren" /><code>{"void ChangeModifiedChildren(bool modifiedChildren)"}</code> | Sets the children-modified flag and updates the GameObject's marked name if the tool manages it. |
| <Link id="m-resetmodified" /><code>{"void ResetModified()"}</code> | Clears both modified flags and restores the unmarked name if the tool manages it. |
| <Link id="m-resetmodifyname" /><code>{"void ResetModifyName()"}</code> | Renames the GameObject to the computed name when name marking is on. |
