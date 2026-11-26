---
title: "CylindricalBoundsSurface"
description: "Spawn surface that finds points by raycasting sideways (outward or inward) inside a cylinder arc around the object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CylindricalBoundsSurface

A **class** in `Root.Township`, `Alta.Chunks`.

Spawn surface that finds points by raycasting sideways (outward or inward) inside a cylinder arc around the object. Its settings are saved with the object.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`PositionSurfaceDefinition`](/mod/game-api/types/alta-world/positionsurfacedefinition), [`ISavable<CylindricalBoundsSurfaceSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CylindricalBoundsSurfaceSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CylindricalBoundsSurfaceSaveData`](/mod/game-api/types/alta-world/cylindricalboundssurfacesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CylindricalBoundsSurface()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/cylindricalboundssurfacesavedata">{"CylindricalBoundsSurfaceSaveData"}</Link>{" config"}</code> | <span className="api-desc">The cylinder settings (arc, height, max offset, start and end radius), also used as its save data.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> | <span className="api-desc">Tries up to the global retry count of radial raycasts from the start radius toward the end radius and returns the first hit.</span> |
| <Link id="m-getraycast" /><code>{"void GetRaycast(out Vector3 position, out Vector3 direction)"}</code> | <span className="api-desc">Picks a random start point and direction inside the configured arc, height and side offset, in world space.</span> |
| <Link id="m-setsize" /><code>{"override void SetSize(float size)"}</code> | <span className="api-desc">Does nothing for this surface.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |

</details>
