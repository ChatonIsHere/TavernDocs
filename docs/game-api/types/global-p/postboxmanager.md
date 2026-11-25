---
title: "PostboxManager"
description: "class PostboxManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostboxManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PerPlayerManager<PostboxManager, PlayerPostboxStorage, PlayerPostboxStorageFileFormat>`](/game-api/types/global-p/perplayermanager-tthis-tcontent-tsaveformat)
- **Derived types** [`PostboxManager`](/game-api/types/global-p/postboxmanager)
- **Nested types** [`TradeVendorData`](/game-api/types/global-p/postboxmanager-tradevendordata)
- **Documented in** [Trading](/game-api/game-systems/trading)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PostboxManager()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-initialcontent" /><code>{"private "}<Link to="/game-api/types/global-p/playerpostboxstorage-initialcontent">{"PlayerPostboxStorage.InitialContent"}</Link>{"[] initialContent"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-wipedata" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/global-p/postboxmanager-tradevendordata">{"PostboxManager.TradeVendorData"}</Link>{"> wipeData"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-concludewipe" /><code>{"async void ConcludeWipe()"}</code> |
| <Link id="m-getcontentasync" /><code>{"override async Task<"}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{"> GetContentAsync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-posttoplayer" /><code>{"static async void PostToPlayer(int playerIdentifier, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |
| <Link id="m-tradewipe" /><code>{"void TradeWipe(int playerIdentifier, int coinCount, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dockedItem)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |

</details>
