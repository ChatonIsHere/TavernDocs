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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`ActionItemsManager`](/mod/game-api/types/alta-player/actionitemsmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnedItemInfo(int actionItemIndex, Vector3 position, bool isSpawn, uint spawnedIdentifier, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> | <span className="api-desc">Creates an `ActionItemsManager.SpawnedItemInfo` from `actionItemIndex`, `position`, `isSpawn`, `spawnedIdentifier` and `owner`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionitemindex" /><code>{"int actionItemIndex"}</code> | <span className="api-desc">Index of the action item in the manager's list.</span> |
| <Link id="m-isspawn" /><code>{"bool isSpawn"}</code> | <span className="api-desc">True when the item was spawned, false when it was removed.</span> |
| <Link id="m-owner" /><code>{"int owner"}</code> | <span className="api-desc">User ID of the player the item belongs to.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Where the item was spawned or removed.</span> |
| <Link id="m-spawnedidentifier" /><code>{"uint spawnedIdentifier"}</code> | <span className="api-desc">Entity ID of the spawned item; 0 when removing.</span> |

## Used in

Members of other types that take, return or hold a `SpawnedItemInfo`:

<div className="api-used-in">

[`ActionItemsManager.FadeActionItemOnRemotePlayer`](/mod/game-api/types/alta-player/actionitemsmanager#m-fadeactionitemonremoteplayer), [`ActionItemsManager.PlayItemEffects`](/mod/game-api/types/alta-player/actionitemsmanager#m-playitemeffects), [`ActionItemsManager.ProcessSpawnDestroyArgumentsForLocalPlayer`](/mod/game-api/types/alta-player/actionitemsmanager#m-processspawndestroyargumentsforlocalplayer), [`ActionItemsManager.SyncSpawnedItemInfoToClient`](/mod/game-api/types/alta-player/actionitemsmanager#m-syncspawnediteminfotoclient), [`ActionItemsManager.syncSpawnedToClient`](/mod/game-api/types/alta-player/actionitemsmanager#m-syncspawnedtoclient).

</div>
