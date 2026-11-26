---
title: "RaycastCrafter.PlacedItem"
description: "Message payload a RaycastCrafter sends when it is placed onto a surface: the entity and where it went."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastCrafter.PlacedItem

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message payload a `RaycastCrafter` sends when it is placed onto a surface: the entity and where it went.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RaycastCrafter`](/mod/game-api/types/global-q-r/raycastcrafter)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The placed entity. |
| <Link id="m-transformsave" /><code>{"TransformSave TransformSave { get; set; }"}</code> | Position and rotation it was placed at. |

## Used in

Members of other types that take, return or hold a `PlacedItem`:

[`RaycastCrafter.PlaceOnSurface`](/mod/game-api/types/global-q-r/raycastcrafter#m-placeonsurface), [`RaycastCrafter.ReplaceByPrefab`](/mod/game-api/types/global-q-r/raycastcrafter#m-replacebyprefab), [`RaycastCrafter.syncPlace`](/mod/game-api/types/global-q-r/raycastcrafter#m-syncplace), [`RaycastCrafter.SyncPlaced`](/mod/game-api/types/global-q-r/raycastcrafter#m-syncplaced).
