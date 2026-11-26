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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PurchasedList(int playerIdentifier, "}<Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status)"}</code> | <span className="api-desc">Creates a `PurchasedList` from `player`.</span> |
| <Link id="m-ctor-2" /><code>{"PurchasedList("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Creates a `PurchasedList` from `player`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-available" /><code>{"private static HashSet<uint> available"}</code> | <span className="api-desc">Static set of item hashes the player can use, owned or not.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-owned" /><code>{"private static HashSet<uint> owned"}</code> | <span className="api-desc">Static set of item hashes the player owns. Shared by every `PurchasedList`, not per player.</span> |
| <Link id="m-owneditems" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{"> ownedItems"}</code> | <span className="api-desc">Cached owned shop items from the API.</span> |
| <Link id="m-personal" /><code>{"private static "}<Link to="/mod/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{" personal"}</code> | <span className="api-desc">The local player's list, reused between calls.</span> |
| <Link id="m-playerid" /><code>{"private int playerId"}</code> | <span className="api-desc">The player's user ID.</span> |
| <Link id="m-status" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status"}</code> | <span className="api-desc">The player's subscriber status, used to grant developer items.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentonstore" /><code>{"static HashSet<uint> CurrentOnStore { get; }"}</code> | <span className="api-desc">Hashes of items in the current shop rotation, with sets expanded to their contents.</span> |
| <Link id="m-currentrotationtosets" /><code>{"static Dictionary<uint, uint> CurrentRotationToSets { get; }"}</code> | <span className="api-desc">Maps each item hash in the shop rotation to the store item (set or single) it came from.</span> |
| <Link id="m-ownedbyall" /><code>{"static HashSet<uint> OwnedByAll { get; private set; }"}</code> | <span className="api-desc">Default cosmetics everyone owns, from `CustomizationSettings`. Null until the first refresh.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ownedupdated" /><code>{"static event Action OwnedUpdated"}</code> | <span className="api-desc">Raised after developer items are added, for players with Developer status.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcurrentrotation" /><code>{"async Task AddCurrentRotation()"}</code> | <span className="api-desc">Fetches the current shop rotation and marks every item in it as available.</span> |
| <Link id="m-buyitem" /><code>{"static void BuyItem(uint hash)"}</code> | <span className="api-desc">Marks an item (and every item in its set) as owned and clears the cached owned list so the next refresh asks the API again.</span> |
| <Link id="m-getforplayer" /><code>{"static async Task<"}<Link to="/mod/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{"> GetForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Returns a refreshed list for a player. The local player's list is cached and reused.</span> |
| <Link id="m-getforplayer-2" /><code>{"static async Task<"}<Link to="/mod/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{"> GetForPlayer(int playerIdentifier, bool isLocalPlayer, "}<Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status)"}</code> | <span className="api-desc">Returns a refreshed list for a player. The local player's list is cached and reused.</span> |
| <Link id="m-isavailable" /><code>{"static bool IsAvailable(uint item)"}</code> | <span className="api-desc">True if the item is owned or available to pick.</span> |
| <Link id="m-isowned" /><code>{"static bool IsOwned(uint item)"}</code> | <span className="api-desc">True if the item is in the static owned set.</span> |
| <Link id="m-loadallavailable" /><code>{"IEnumerable<uint> LoadAllAvailable(Func<uint, bool> filter) (iterator)"}</code> | <span className="api-desc">Every available hash that passes the filter.</span> |
| <Link id="m-loadallowned" /><code>{"IEnumerable<uint> LoadAllOwned(Func<uint, bool> filter) (iterator)"}</code> | <span className="api-desc">Every owned hash that passes the filter.</span> |
| <Link id="m-refresh" /><code>{"async Task Refresh()"}</code> | <span className="api-desc">Client or local test only: rebuilds the owned and available sets, fetching owned items from the shop API if not cached.</span> |
| <Link id="m-updatecurrentrotation" /><code>{"static async Task UpdateCurrentRotation()"}</code> | <span className="api-desc">Fetches the current shop configuration and rebuilds `CurrentOnStore`. Clears it on error.</span> |
| <Link id="m-validateplayersowneditems" /><code>{"static Task<bool> ValidatePlayersOwnedItems("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, IEnumerable<uint> items)"}</code> | <span className="api-desc">Meant to check a player owns the given items. Always returns true in this build.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additems" /><code>{"private static void AddItems("}<Link to="/mod/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"[] items)"}</code> | <span className="api-desc">Adds store items to the current rotation, expanding sets into their items.</span> |
| <Link id="m-clearavailablehashes" /><code>{"private static void ClearAvailableHashes()"}</code> | <span className="api-desc">Resets the available set to the items everyone owns.</span> |
| <Link id="m-clearpurchasedhashes" /><code>{"private static void ClearPurchasedHashes()"}</code> | <span className="api-desc">Resets the owned set to the items everyone owns.</span> |
| <Link id="m-initialize" /><code>{"private static void Initialize()"}</code> | <span className="api-desc">On first use, fills `OwnedByAll` from the default cosmetics.</span> |
| <Link id="m-invalidatecache" /><code>{"private static void InvalidateCache()"}</code> | <span className="api-desc">Drops the cached owned items so the next refresh fetches them again.</span> |
| <Link id="m-refreshowneditemscache" /><code>{"private static async Task RefreshOwnedItemsCache()"}</code> | <span className="api-desc">Fetches the account's owned shop items from the API.</span> |
| <Link id="m-updatedeveloperitems" /><code>{"private void UpdateDeveloperItems()"}</code> | <span className="api-desc">For developers, adds the developer-only items to owned and available.</span> |
| <Link id="m-updateowneditems" /><code>{"private static void UpdateOwnedItems()"}</code> | <span className="api-desc">Adds the cached owned shop items to owned and available.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PurchasedList`:

<div className="api-used-in">

[`CosmeticOwnershipManager.CosmeticOwnershipManager`](/mod/game-api/types/alta-customization/cosmeticownershipmanager#m-ctor).

</div>
