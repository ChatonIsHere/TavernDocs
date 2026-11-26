---
title: "PostboxManager"
description: "Server: the per-player manager that loads and saves each player's postbox contents (PlayerPostboxStorage)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostboxManager

A **class** in `Root.Township`, the global namespace.

Server: the per-player manager that loads and saves each player's postbox contents (`PlayerPostboxStorage`). Reach it through `PerPlayerManager<PostboxManager, PlayerPostboxStorage, PlayerPostboxStorageFileFormat>.Instance`. It also collects trade vendor refunds during a wipe and posts them afterwards.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PerPlayerManager<PostboxManager, PlayerPostboxStorage, PlayerPostboxStorageFileFormat>`](/mod/game-api/types/global-p/perplayermanager-tthis-tcontent-tsaveformat)
- **Derived types** [`PostboxManager`](/mod/game-api/types/global-p/postboxmanager)
- **Nested types** [`TradeVendorData`](/mod/game-api/types/global-p/postboxmanager-tradevendordata)
- **Documented in** [Trading](/mod/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostboxManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialcontent" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerpostboxstorage-initialcontent">{"PlayerPostboxStorage.InitialContent"}</Link>{"[] initialContent"}</code> | Items a player's postbox starts with the first time it's created. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-wipedata" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/global-p/postboxmanager-tradevendordata">{"PostboxManager.TradeVendorData"}</Link>{"> wipeData"}</code> | Refunds collected during a wipe, keyed by player identifier. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-concludewipe" /><code>{"async void ConcludeWipe()"}</code> | Server: after a wipe finishes, pushes each player's collected wipe refunds (coins as a coin or pouch, plus items) into their postbox. |
| <Link id="m-getcontentasync" /><code>{"override async Task<"}<Link to="/mod/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{"> GetContentAsync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: loads a player's postbox storage and fills it with `initialContent` if it's new. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: sets up the wipe data and hooks `ConcludeWipe` to `ServerWipeManager.WipeOperationsFinished`. |
| <Link id="m-posttoplayer" /><code>{"static async void PostToPlayer(int playerIdentifier, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Server: saves a prefab, destroys it in the world and pushes the save into the given player's postbox, saving if they're offline. |
| <Link id="m-tradewipe" /><code>{"void TradeWipe(int playerIdentifier, int coinCount, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dockedItem)"}</code> | Server: records coins and a docked item from a trade vendor to refund to a player once the wipe ends. Destroys the item. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks `ConcludeWipe` from the wipe event. |

</details>
