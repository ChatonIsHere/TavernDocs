---
title: "SurfaceMaterial"
description: "Empty marker asset naming a surface type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SurfaceMaterial

A **class** in `Root.Township`, `Alta`.

Empty marker asset naming a surface type. Static environment pieces and `ICollisionStandard` objects expose one as their `Material`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`SurfaceMaterial.Create`](/game-api/types/alta-utilities/surfacematerial-create)
- **Nested types** [`Create`](/game-api/types/alta-utilities/surfacematerial-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SurfaceMaterial()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Used in

Members of other types that take, return or hold a `SurfaceMaterial`:

[`ICollisionStandard.Material`](/game-api/types/alta-utilities/icollisionstandard#m-material), [`StaticEnvironmentPiece.material`](/game-api/types/alta-world/staticenvironmentpiece#m-material), [`StaticEnvironmentPiece.Material`](/game-api/types/alta-world/staticenvironmentpiece#m-material-2), [`StaticEnvironmentPieceInstance.Material`](/game-api/types/alta-world/staticenvironmentpieceinstance#m-material).
