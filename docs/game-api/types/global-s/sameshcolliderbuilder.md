---
title: "SAMeshColliderBuilder"
description: "Editor component from the SA Collider Builder tool that builds mesh colliders for its object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderBuilder

A **class** in `Root.Township`, no namespace.

Editor component from the SA Collider Builder tool that builds mesh colliders for its object. The properties are shortcuts into `meshColliderBuilderProperty`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SAMeshColliderBuilder()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cleanupmodified" /><code>{"bool cleanupModified"}</code> | Editor state flag, not serialized. |
| <Link id="m-edittingmeshcolliderbuilderproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty">{"SAMeshColliderCommon.SAMeshColliderBuilderProperty"}</Link>{" edittingMeshColliderBuilderProperty"}</code> | The copy of the settings being edited in the inspector. Not serialized. |
| <Link id="m-isdebug" /><code>{"bool isDebug"}</code> | Editor debug flag, not serialized. |
| <Link id="m-meshcolliderbuilderproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty">{"SAMeshColliderCommon.SAMeshColliderBuilderProperty"}</Link>{" meshColliderBuilderProperty"}</code> | All builder settings: split, reducer, collider and rigidbody. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty { get; }"}</code> | Collider settings from the builder property, or null. |
| <Link id="m-reducerproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty { get; }"}</code> | Polygon reduction settings, or null. |
| <Link id="m-rigidbodyproperty" /><code><Link to="/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty { get; }"}</code> | Rigidbody settings, or null. |
| <Link id="m-splitmaterialenabled" /><code>{"bool splitMaterialEnabled { get; }"}</code> | Whether colliders are split per material. |
| <Link id="m-splitpolygonnormalangle" /><code>{"float splitPolygonNormalAngle { get; }"}</code> | Normal angle used when splitting by polygon normal. |
| <Link id="m-splitpolygonnormalenabled" /><code>{"bool splitPolygonNormalEnabled { get; }"}</code> | Whether colliders are split by polygon normal. |
| <Link id="m-splitprimitiveenabled" /><code>{"bool splitPrimitiveEnabled { get; }"}</code> | Whether colliders are split per primitive. |
| <Link id="m-splitproperty" /><code><Link to="/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" splitProperty { get; }"}</code> | Split settings, or null. |
