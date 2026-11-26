---
title: "SAMeshColliderBuilder"
description: "Editor component from the SA Collider Builder tool that builds mesh colliders for its object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderBuilder

A **class** in `Root.Township`, the global namespace.

Editor component from the SA Collider Builder tool that builds mesh colliders for its object. The properties are shortcuts into `meshColliderBuilderProperty`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SAMeshColliderBuilder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cleanupmodified" /><code>{"bool cleanupModified"}</code> | <span className="api-desc">Editor state flag, not serialized.</span> |
| <Link id="m-edittingmeshcolliderbuilderproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty">{"SAMeshColliderCommon.SAMeshColliderBuilderProperty"}</Link>{" edittingMeshColliderBuilderProperty"}</code> | <span className="api-desc">The copy of the settings being edited in the inspector. Not serialized.</span> |
| <Link id="m-isdebug" /><code>{"bool isDebug"}</code> | <span className="api-desc">Editor debug flag, not serialized.</span> |
| <Link id="m-meshcolliderbuilderproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty">{"SAMeshColliderCommon.SAMeshColliderBuilderProperty"}</Link>{" meshColliderBuilderProperty"}</code> | <span className="api-desc">All builder settings: split, reducer, collider and rigidbody.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-colliderproperty">{"SAColliderBuilderCommon.ColliderProperty"}</Link>{" colliderProperty { get; }"}</code> | <span className="api-desc">Collider settings from the builder property, or null.</span> |
| <Link id="m-reducerproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty">{"SAColliderBuilderCommon.ReducerProperty"}</Link>{" reducerProperty { get; }"}</code> | <span className="api-desc">Polygon reduction settings, or null.</span> |
| <Link id="m-rigidbodyproperty" /><code><Link to="/mod/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty">{"SAColliderBuilderCommon.RigidbodyProperty"}</Link>{" rigidbodyProperty { get; }"}</code> | <span className="api-desc">Rigidbody settings, or null.</span> |
| <Link id="m-splitmaterialenabled" /><code>{"bool splitMaterialEnabled { get; }"}</code> | <span className="api-desc">Whether colliders are split per material.</span> |
| <Link id="m-splitpolygonnormalangle" /><code>{"float splitPolygonNormalAngle { get; }"}</code> | <span className="api-desc">Normal angle used when splitting by polygon normal.</span> |
| <Link id="m-splitpolygonnormalenabled" /><code>{"bool splitPolygonNormalEnabled { get; }"}</code> | <span className="api-desc">Whether colliders are split by polygon normal.</span> |
| <Link id="m-splitprimitiveenabled" /><code>{"bool splitPrimitiveEnabled { get; }"}</code> | <span className="api-desc">Whether colliders are split per primitive.</span> |
| <Link id="m-splitproperty" /><code><Link to="/mod/game-api/types/global-s/sameshcollidercommon-splitproperty">{"SAMeshColliderCommon.SplitProperty"}</Link>{" splitProperty { get; }"}</code> | <span className="api-desc">Split settings, or null.</span> |
