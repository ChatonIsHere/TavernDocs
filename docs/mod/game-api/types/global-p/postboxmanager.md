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
| <Link id="m-ctor" /><code>{"PostboxManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialcontent" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerpostboxstorage-initialcontent">{"PlayerPostboxStorage.InitialContent"}</Link>{"[] initialContent"}</code> | <span className="api-desc">Items a player's postbox starts with the first time it's created.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-wipedata" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/global-p/postboxmanager-tradevendordata">{"PostboxManager.TradeVendorData"}</Link>{"> wipeData"}</code> | <span className="api-desc">Refunds collected during a wipe, keyed by player identifier.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-concludewipe" /><code>{"async void ConcludeWipe()"}</code> | <span className="api-desc">Server: after a wipe finishes, pushes each player's collected wipe refunds (coins as a coin or pouch, plus items) into their postbox.</span> |
| <Link id="m-getcontentasync" /><code>{"override async Task<"}<Link to="/mod/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{"> GetContentAsync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: loads a player's postbox storage and fills it with `initialContent` if it's new.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: sets up the wipe data and hooks `ConcludeWipe` to `ServerWipeManager.WipeOperationsFinished`.</span> |
| <Link id="m-posttoplayer" /><code>{"static async void PostToPlayer(int playerIdentifier, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Server: saves a prefab, destroys it in the world and pushes the save into the given player's postbox, saving if they're offline.</span> |
| <Link id="m-tradewipe" /><code>{"void TradeWipe(int playerIdentifier, int coinCount, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dockedItem)"}</code> | <span className="api-desc">Server: records coins and a docked item from a trade vendor to refund to a player once the wipe ends. Destroys the item.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks `ConcludeWipe` from the wipe event.</span> |

</details>
