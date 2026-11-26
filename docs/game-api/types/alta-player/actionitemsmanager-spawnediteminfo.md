---
title: "ActionItemsManager.SpawnedItemInfo"
description: "Private message data the server sends to chunks when an action item (a summoned quick access item) is spawned or removed for a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemsManager.SpawnedItemInfo

A **private struct** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private message data the server sends to chunks when an action item (a summoned quick access item) is spawned or removed for a player.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`ActionItemsManager`](/game-api/types/alta-player/actionitemsmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnedItemInfo(int actionItemIndex, Vector3 position, bool isSpawn, uint spawnedIdentifier, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> | Creates an `ActionItemsManager.SpawnedItemInfo` from `actionItemIndex`, `position`, `isSpawn`, `spawnedIdentifier` and `owner`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionitemindex" /><code>{"int actionItemIndex"}</code> | Index of the action item in the manager's list. |
| <Link id="m-isspawn" /><code>{"bool isSpawn"}</code> | True when the item was spawned, false when it was removed. |
| <Link id="m-owner" /><code>{"int owner"}</code> | User ID of the player the item belongs to. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Where the item was spawned or removed. |
| <Link id="m-spawnedidentifier" /><code>{"uint spawnedIdentifier"}</code> | Entity ID of the spawned item; 0 when removing. |

## Used in

Members of other types that take, return or hold a `SpawnedItemInfo`:

[`ActionItemsManager.FadeActionItemOnRemotePlayer`](/game-api/types/alta-player/actionitemsmanager#m-fadeactionitemonremoteplayer), [`ActionItemsManager.PlayItemEffects`](/game-api/types/alta-player/actionitemsmanager#m-playitemeffects), [`ActionItemsManager.ProcessSpawnDestroyArgumentsForLocalPlayer`](/game-api/types/alta-player/actionitemsmanager#m-processspawndestroyargumentsforlocalplayer), [`ActionItemsManager.SyncSpawnedItemInfoToClient`](/game-api/types/alta-player/actionitemsmanager#m-syncspawnediteminfotoclient), [`ActionItemsManager.syncSpawnedToClient`](/game-api/types/alta-player/actionitemsmanager#m-syncspawnedtoclient).
