---
title: "PositionSurfaceDefinitionSettings"
description: "Global settings for placing points on surfaces (spherical and directional bounds surfaces)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSurfaceDefinitionSettings

A **class** in `Root.Township`, no namespace.

Global settings for placing points on surfaces (spherical and directional bounds surfaces). Get it with `GlobalSettings<PositionSurfaceDefinitionSettings>.Instance`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<PositionSurfaceDefinitionSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PositionSurfaceDefinitionSettings`](/game-api/types/global-p/positionsurfacedefinitionsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionSurfaceDefinitionSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | Backing field for `LayerMask`. |
| <Link id="m-retries" /><code>{"private int retries"}</code> | Backing field for `Retries`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-layermask-2" /><code>{"LayerMask LayerMask { get; }"}</code> | Layers the surface raycasts hit. |
| <Link id="m-retries-2" /><code>{"int Retries { get; }"}</code> | How many times to try finding a valid point. |

## Used in

Members of other types that take, return or hold a `PositionSurfaceDefinitionSettings`:

[`PositionSurfaceDefinition.settings`](/game-api/types/alta-world/positionsurfacedefinition#m-settings).
