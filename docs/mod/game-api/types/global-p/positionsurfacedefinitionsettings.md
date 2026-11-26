---
title: "PositionSurfaceDefinitionSettings"
description: "Global settings for placing points on surfaces (spherical and directional bounds surfaces)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSurfaceDefinitionSettings

A **class** in `Root.Township`, the global namespace.

Global settings for placing points on surfaces (spherical and directional bounds surfaces). Get it with `GlobalSettings<PositionSurfaceDefinitionSettings>.Instance`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<PositionSurfaceDefinitionSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PositionSurfaceDefinitionSettings`](/mod/game-api/types/global-p/positionsurfacedefinitionsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionSurfaceDefinitionSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | <span className="api-desc">Backing field for `LayerMask`.</span> |
| <Link id="m-retries" /><code>{"private int retries"}</code> | <span className="api-desc">Backing field for `Retries`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-layermask-2" /><code>{"LayerMask LayerMask { get; }"}</code> | <span className="api-desc">Layers the surface raycasts hit.</span> |
| <Link id="m-retries-2" /><code>{"int Retries { get; }"}</code> | <span className="api-desc">How many times to try finding a valid point.</span> |

## Used in

Members of other types that take, return or hold a `PositionSurfaceDefinitionSettings`:

<div className="api-used-in">

[`PositionSurfaceDefinition.settings`](/mod/game-api/types/alta-world/positionsurfacedefinition#m-settings).

</div>
