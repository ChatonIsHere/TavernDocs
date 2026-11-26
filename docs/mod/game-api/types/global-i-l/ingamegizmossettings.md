---
title: "InGameGizmosSettings"
description: "Global settings asset holding the pooled line and sphere gizmo prefabs, with static helpers to draw debug lines and spheres in the game world."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameGizmosSettings

A **class** in `Root.Township`, the global namespace.

Global settings asset holding the pooled line and sphere gizmo prefabs, with static helpers to draw debug lines and spheres in the game world. Get it through `GlobalSettings<InGameGizmosSettings>.Instance`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`GlobalSettings<InGameGizmosSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`InGameGizmosSettings`](/mod/game-api/types/global-i-l/ingamegizmossettings), [`InGameGizmosSettings.Create`](/mod/game-api/types/global-i-l/ingamegizmossettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-i-l/ingamegizmossettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InGameGizmosSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-linedefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lineDefinition"}</code> | <span className="api-desc">Pool definition for the line gizmo prefab used by `DrawLine`.</span> |
| <Link id="m-spheredefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" sphereDefinition"}</code> | <span className="api-desc">Pool definition for the sphere gizmo prefab used by `DrawSphere`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"static Color Color { get; set; }"}</code> | <span className="api-desc">Colour applied to each gizmo when it is taken from the pool. Set it before calling `DrawLine` or `DrawSphere`. Defaults to white.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawline" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" DrawLine(Vector3 from, Vector3 to)"}</code> | <span className="api-desc">Takes an `InGameLineGizmo` from the pool and places it between two world points, or between two transforms with local offsets. Returns it so you can release it.</span> |
| <Link id="m-drawline-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" DrawLine(Transform from, Transform to, Vector3 offsetFrom, Vector3 offsetTo)"}</code> | <span className="api-desc">Takes an `InGameLineGizmo` from the pool and places it between two world points, or between two transforms with local offsets. Returns it so you can release it.</span> |
| <Link id="m-drawsphere" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" DrawSphere(Vector3 position, float radius)"}</code> | <span className="api-desc">Takes an `InGameSphereGizmo` from the pool and places it at a world point, or on a transform with an offset, at the given radius.</span> |
| <Link id="m-drawsphere-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" DrawSphere(Transform position, float radius, Vector3 offset)"}</code> | <span className="api-desc">Takes an `InGameSphereGizmo` from the pool and places it at a world point, or on a transform with an offset, at the given radius.</span> |
