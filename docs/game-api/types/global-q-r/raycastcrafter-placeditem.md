---
title: "RaycastCrafter.PlacedItem"
description: "Message payload a RaycastCrafter sends when it is placed onto a surface: the entity and where it went."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastCrafter.PlacedItem

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message payload a `RaycastCrafter` sends when it is placed onto a surface: the entity and where it went.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RaycastCrafter`](/game-api/types/global-q-r/raycastcrafter)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The placed entity. |
| <Link id="m-transformsave" /><code>{"TransformSave TransformSave { get; set; }"}</code> | Position and rotation it was placed at. |

## Used in

Members of other types that take, return or hold a `PlacedItem`:

[`RaycastCrafter.PlaceOnSurface`](/game-api/types/global-q-r/raycastcrafter#m-placeonsurface), [`RaycastCrafter.ReplaceByPrefab`](/game-api/types/global-q-r/raycastcrafter#m-replacebyprefab), [`RaycastCrafter.syncPlace`](/game-api/types/global-q-r/raycastcrafter#m-syncplace), [`RaycastCrafter.SyncPlaced`](/game-api/types/global-q-r/raycastcrafter#m-syncplaced).
