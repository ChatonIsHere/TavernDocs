---
title: "SurfaceDefinition"
description: "Asset describing how embeddable items (arrows, blades) stick into a surface."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SurfaceDefinition

A **class** in `Root.Township`, the global namespace.

Asset describing how embeddable items (arrows, blades) stick into a surface. Read by `Embeddable` when it hits a collider with this surface.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PopupScriptableObject`](/mod/game-api/types/global-p/popupscriptableobject)
- **Derived types** [`SurfaceDefinition.Create`](/mod/game-api/types/global-s/surfacedefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/surfacedefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SurfaceDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-embedmultiplier" /><code>{"private float embedMultiplier"}</code> | Backing field for `EmbedMultiplier`. |
| <Link id="m-requiresdirectionalignment" /><code>{"private bool requiresDirectionAlignment"}</code> | Backing field for `RequiresDirectionAlignment`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-embedmultiplier-2" /><code>{"float EmbedMultiplier { get; }"}</code> | Scales how deep or easily things embed into this surface. Default 1. |
| <Link id="m-requiresdirectionalignment-2" /><code>{"bool RequiresDirectionAlignment { get; }"}</code> | When true, an item only embeds if it hits point first within the allowed angle. Default true. |

## Used in

Members of other types that take, return or hold a `SurfaceDefinition`:

[`Surface.defaultDefinition`](/mod/game-api/types/global-s/surface#m-defaultdefinition), [`Surface.DefaultDefinition`](/mod/game-api/types/global-s/surface#m-defaultdefinition-2), [`Surface.definition`](/mod/game-api/types/global-s/surface#m-definition), [`Surface.Definition`](/mod/game-api/types/global-s/surface#m-definition-2).
