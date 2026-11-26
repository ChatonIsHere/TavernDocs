---
title: "SAMeshCollider"
description: "Component from the third-party SA Collider Builder editor tool: holds the settings used to build mesh colliders for an object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshCollider

A **class** in `Root.Township`, the global namespace.

Component from the third-party SA Collider Builder editor tool: holds the settings used to build mesh colliders for an object. Editor-time data; nothing in the game reads it at runtime.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SAMeshCollider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cleanupmodified" /><code>{"bool cleanupModified"}</code> | <span className="api-desc">Runtime-only editor flag. Not serialized.</span> |
| <Link id="m-defaultmeshcolliderproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" defaultMeshColliderProperty"}</code> | <span className="api-desc">The default mesh collider settings to reset to.</span> |
| <Link id="m-defaultname" /><code>{"string defaultName"}</code> | <span className="api-desc">Base GameObject name the tool adds its `*` or `+` marks to.</span> |
| <Link id="m-edittingmeshcollidertproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" edittingMeshCollidertProperty"}</code> | <span className="api-desc">Copy of the settings being edited in the inspector. Not serialized.</span> |
| <Link id="m-isdebug" /><code>{"bool isDebug"}</code> | <span className="api-desc">Editor debug flag. Not serialized.</span> |
| <Link id="m-meshcolliderproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty">{"SAMeshColliderCommon.SAMeshColliderProperty"}</Link>{" meshColliderProperty"}</code> | <span className="api-desc">The mesh collider build settings: split, reducer, collider and rigidbody options.</span> |
| <Link id="m-modified" /><code>{"bool modified"}</code> | <span className="api-desc">True when this object's collider settings differ from the defaults.</span> |
| <Link id="m-modifiedchildren" /><code>{"bool modifiedChildren"}</code> | <span className="api-desc">True when a child's collider settings were changed.</span> |
| <Link id="m-splitmesh" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-splitmesh">{"SAMeshColliderCommon.SplitMesh"}</Link>{" splitMesh"}</code> | <span className="api-desc">Which mesh part this component stands for when split.</span> |
| <Link id="m-splitmode" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-splitmode">{"SAMeshColliderCommon.SplitMode"}</Link>{" splitMode"}</code> | <span className="api-desc">How this object's mesh is split.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty { get; }"}</code> | <span className="api-desc">Collider settings from `meshColliderProperty`, or null.</span> |
| <Link id="m-modifynameenalbed" /><code>{"bool modifyNameEnalbed { get; }"}</code> | <span className="api-desc">Whether the tool marks the GameObject name with `*` or `+` (misspelt in the code).</span> |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty { get; }"}</code> | <span className="api-desc">Mesh reduction settings from `meshColliderProperty`, or null.</span> |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty { get; }"}</code> | <span className="api-desc">Rigidbody settings from `meshColliderProperty`, or null.</span> |
| <Link id="m-splitmaterialenabled" /><code>{"bool splitMaterialEnabled { get; }"}</code> | <span className="api-desc">Whether the mesh is split into separate colliders per material.</span> |
| <Link id="m-splitpolygonnormalangle" /><code>{"float splitPolygonNormalAngle { get; }"}</code> | <span className="api-desc">Angle threshold used when splitting by polygon normal. 0 if no split settings.</span> |
| <Link id="m-splitpolygonnormalenabled" /><code>{"bool splitPolygonNormalEnabled { get; }"}</code> | <span className="api-desc">Whether the mesh is split by polygon normal direction.</span> |
| <Link id="m-splitprimitiveenabled" /><code>{"bool splitPrimitiveEnabled { get; }"}</code> | <span className="api-desc">Whether the mesh is split by primitive.</span> |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" splitProperty { get; }"}</code> | <span className="api-desc">Split settings from `meshColliderProperty`, or null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-computemodifyname" /><code>{"string _ComputeModifyName()"}</code> | <span className="api-desc">The base name with `*` added if modified or `+` if only children are modified.</span> |
| <Link id="m-ismodifyname" /><code>{"bool _IsModifyName()"}</code> | <span className="api-desc">True if name marking is on and the GameObject's current name matches the computed name.</span> |
| <Link id="m-changedefaultname" /><code>{"void ChangeDefaultName(string defaultName)"}</code> | <span className="api-desc">Sets the base name and renames the GameObject if its name was the tool's computed name.</span> |
| <Link id="m-changemodified" /><code>{"void ChangeModified(bool modified)"}</code> | <span className="api-desc">Sets the modified flag and updates the GameObject's marked name if the tool manages it.</span> |
| <Link id="m-changemodifiedchildren" /><code>{"void ChangeModifiedChildren(bool modifiedChildren)"}</code> | <span className="api-desc">Sets the children-modified flag and updates the GameObject's marked name if the tool manages it.</span> |
| <Link id="m-resetmodified" /><code>{"void ResetModified()"}</code> | <span className="api-desc">Clears both modified flags and restores the unmarked name if the tool manages it.</span> |
| <Link id="m-resetmodifyname" /><code>{"void ResetModifyName()"}</code> | <span className="api-desc">Renames the GameObject to the computed name when name marking is on.</span> |
