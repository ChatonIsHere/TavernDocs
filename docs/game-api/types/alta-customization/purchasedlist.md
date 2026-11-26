---
title: "PurchasedList"
description: "Which cosmetic hashes the local player owns or can pick, built from default cosmetics, the shop API's owned items and developer items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchasedList

A **class** in `Root.Township`, `Alta.Customization`.

Which cosmetic hashes the local player owns or can pick, built from default cosmetics, the shop API's owned items and developer items. The owned and available sets are static, so every instance shares them. Does nothing on a dedicated server.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PurchasedList(int playerIdentifier, "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status)"}</code> |
| <Link id="m-ctor-2" /><code>{"PurchasedList("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-available" /><code>{"private static HashSet<uint> available"}</code> | Static set of item hashes the player can use, owned or not. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-owned" /><code>{"private static HashSet<uint> owned"}</code> | Static set of item hashes the player owns. Shared by every `PurchasedList`, not per player. |
| <Link id="m-owneditems" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{"> ownedItems"}</code> | Cached owned shop items from the API. |
| <Link id="m-personal" /><code>{"private static "}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{" personal"}</code> | The local player's list, reused between calls. |
| <Link id="m-playerid" /><code>{"private int playerId"}</code> | The player's user ID. |
| <Link id="m-status" /><code>{"private "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status"}</code> | The player's subscriber status, used to grant developer items. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentonstore" /><code>{"static HashSet<uint> CurrentOnStore { get; }"}</code> | Hashes of items in the current shop rotation, with sets expanded to their contents. |
| <Link id="m-currentrotationtosets" /><code>{"static Dictionary<uint, uint> CurrentRotationToSets { get; }"}</code> | Maps each item hash in the shop rotation to the store item (set or single) it came from. |
| <Link id="m-ownedbyall" /><code>{"static HashSet<uint> OwnedByAll { get; private set; }"}</code> | Default cosmetics everyone owns, from `CustomizationSettings`. Null until the first refresh. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ownedupdated" /><code>{"static event Action OwnedUpdated"}</code> | Raised after developer items are added, for players with Developer status. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcurrentrotation" /><code>{"async Task AddCurrentRotation()"}</code> | Fetches the current shop rotation and marks every item in it as available. |
| <Link id="m-buyitem" /><code>{"static void BuyItem(uint hash)"}</code> | Marks an item (and every item in its set) as owned and clears the cached owned list so the next refresh asks the API again. |
| <Link id="m-getforplayer" /><code>{"static async Task<"}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{"> GetForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Returns a refreshed list for a player. The local player's list is cached and reused. |
| <Link id="m-getforplayer-2" /><code>{"static async Task<"}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{"> GetForPlayer(int playerIdentifier, bool isLocalPlayer, "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status)"}</code> | Returns a refreshed list for a player. The local player's list is cached and reused. |
| <Link id="m-isavailable" /><code>{"static bool IsAvailable(uint item)"}</code> | True if the item is owned or available to pick. |
| <Link id="m-isowned" /><code>{"static bool IsOwned(uint item)"}</code> | True if the item is in the static owned set. |
| <Link id="m-loadallavailable" /><code>{"IEnumerable<uint> LoadAllAvailable(Func<uint, bool> filter) (iterator)"}</code> | Every available hash that passes the filter. |
| <Link id="m-loadallowned" /><code>{"IEnumerable<uint> LoadAllOwned(Func<uint, bool> filter) (iterator)"}</code> | Every owned hash that passes the filter. |
| <Link id="m-refresh" /><code>{"async Task Refresh()"}</code> | Client or local test only: rebuilds the owned and available sets, fetching owned items from the shop API if not cached. |
| <Link id="m-updatecurrentrotation" /><code>{"static async Task UpdateCurrentRotation()"}</code> | Fetches the current shop configuration and rebuilds `CurrentOnStore`. Clears it on error. |
| <Link id="m-validateplayersowneditems" /><code>{"static Task<bool> ValidatePlayersOwnedItems("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, IEnumerable<uint> items)"}</code> | Meant to check a player owns the given items. Always returns true in this build. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additems" /><code>{"private static void AddItems("}<Link to="/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"[] items)"}</code> | Adds store items to the current rotation, expanding sets into their items. |
| <Link id="m-clearavailablehashes" /><code>{"private static void ClearAvailableHashes()"}</code> | Resets the available set to the items everyone owns. |
| <Link id="m-clearpurchasedhashes" /><code>{"private static void ClearPurchasedHashes()"}</code> | Resets the owned set to the items everyone owns. |
| <Link id="m-initialize" /><code>{"private static void Initialize()"}</code> | On first use, fills `OwnedByAll` from the default cosmetics. |
| <Link id="m-invalidatecache" /><code>{"private static void InvalidateCache()"}</code> | Drops the cached owned items so the next refresh fetches them again. |
| <Link id="m-refreshowneditemscache" /><code>{"private static async Task RefreshOwnedItemsCache()"}</code> | Fetches the account's owned shop items from the API. |
| <Link id="m-updatedeveloperitems" /><code>{"private void UpdateDeveloperItems()"}</code> | For developers, adds the developer-only items to owned and available. |
| <Link id="m-updateowneditems" /><code>{"private static void UpdateOwnedItems()"}</code> | Adds the cached owned shop items to owned and available. |

</details>

## Used in

Members of other types that take, return or hold a `PurchasedList`:

[`CosmeticOwnershipManager.CosmeticOwnershipManager`](/game-api/types/alta-customization/cosmeticownershipmanager#m-ctor).
