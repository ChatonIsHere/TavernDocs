---
title: "CylindricalBoundsSurface"
description: "class CylindricalBoundsSurface in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CylindricalBoundsSurface

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`PositionSurfaceDefinition`](/game-api/types/alta-world/positionsurfacedefinition), [`ISavable<CylindricalBoundsSurfaceSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CylindricalBoundsSurfaceSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CylindricalBoundsSurfaceSaveData`](/game-api/types/alta-world/cylindricalboundssurfacesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CylindricalBoundsSurface()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private "}<Link to="/game-api/types/alta-world/cylindricalboundssurfacesavedata">{"CylindricalBoundsSurfaceSaveData"}</Link>{" config"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> |  |
| <Link id="m-getraycast" /><code>{"void GetRaycast(out Vector3 position, out Vector3 direction)"}</code> |  |
| <Link id="m-setsize" /><code>{"override void SetSize(float size)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
