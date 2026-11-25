---
title: "PurchasedList"
description: "class PurchasedList in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchasedList

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PurchasedList(int playerIdentifier, "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"PurchasedList("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-available" /><code>{"private static HashSet<uint> available"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-owned" /><code>{"private static HashSet<uint> owned"}</code> |  |
| <Link id="m-owneditems" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{"> ownedItems"}</code> |  |
| <Link id="m-personal" /><code>{"private static "}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{" personal"}</code> |  |
| <Link id="m-playerid" /><code>{"private int playerId"}</code> |  |
| <Link id="m-status" /><code>{"private "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentonstore" /><code>{"static HashSet<uint> CurrentOnStore { get; }"}</code> |  |
| <Link id="m-currentrotationtosets" /><code>{"static Dictionary<uint, uint> CurrentRotationToSets { get; }"}</code> |  |
| <Link id="m-ownedbyall" /><code>{"static HashSet<uint> OwnedByAll { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ownedupdated" /><code>{"static event Action OwnedUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcurrentrotation" /><code>{"async Task AddCurrentRotation()"}</code> |  |
| <Link id="m-buyitem" /><code>{"static void BuyItem(uint hash)"}</code> |  |
| <Link id="m-getforplayer" /><code>{"static async Task<"}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{"> GetForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-getforplayer-2" /><code>{"static async Task<"}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{"> GetForPlayer(int playerIdentifier, bool isLocalPlayer, "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status)"}</code> |  |
| <Link id="m-isavailable" /><code>{"static bool IsAvailable(uint item)"}</code> |  |
| <Link id="m-isowned" /><code>{"static bool IsOwned(uint item)"}</code> |  |
| <Link id="m-loadallavailable" /><code>{"IEnumerable<uint> LoadAllAvailable(Func<uint, bool> filter) (iterator)"}</code> |  |
| <Link id="m-loadallowned" /><code>{"IEnumerable<uint> LoadAllOwned(Func<uint, bool> filter) (iterator)"}</code> |  |
| <Link id="m-refresh" /><code>{"async Task Refresh()"}</code> |  |
| <Link id="m-updatecurrentrotation" /><code>{"static async Task UpdateCurrentRotation()"}</code> |  |
| <Link id="m-validateplayersowneditems" /><code>{"static Task<bool> ValidatePlayersOwnedItems("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, IEnumerable<uint> items)"}</code> |  |
| <Link id="m-additems" /><code>{"private static void AddItems("}<Link to="/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"[] items)"}</code> |  |
| <Link id="m-clearavailablehashes" /><code>{"private static void ClearAvailableHashes()"}</code> |  |
| <Link id="m-clearpurchasedhashes" /><code>{"private static void ClearPurchasedHashes()"}</code> |  |
| <Link id="m-initialize" /><code>{"private static void Initialize()"}</code> |  |
| <Link id="m-invalidatecache" /><code>{"private static void InvalidateCache()"}</code> |  |
| <Link id="m-refreshowneditemscache" /><code>{"private static async Task RefreshOwnedItemsCache()"}</code> |  |
| <Link id="m-updatedeveloperitems" /><code>{"private void UpdateDeveloperItems()"}</code> |  |
| <Link id="m-updateowneditems" /><code>{"private static void UpdateOwnedItems()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PurchasedList`:

[`CosmeticOwnershipManager.CosmeticOwnershipManager`](/game-api/types/alta-customization/cosmeticownershipmanager#m-ctor).
