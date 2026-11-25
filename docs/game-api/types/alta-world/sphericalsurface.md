---
title: "SphericalSurface"
description: "class SphericalSurface in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphericalSurface

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`PositionSurfaceDefinition`](/game-api/types/alta-world/positionsurfacedefinition), [`ISavable<SphericalSurfaceSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SphericalSurfaceSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SphericalSurfaceSaveData`](/game-api/types/alta-world/sphericalsurfacesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphericalSurface()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ishemisphere" /><code>{"private bool isHemisphere"}</code> |  |
| <Link id="m-radius" /><code>{"private float radius"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> |  |
| <Link id="m-setsize" /><code>{"override void SetSize(float size)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
