---
title: "CosmeticOwnershipManager"
description: "What a player owns and may use, by category."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticOwnershipManager

A **class** in `Root.Township`, `Alta.Customization`.

What a player owns and may use, by category.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private CosmeticOwnershipManager("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{" purchasedList)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-available" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", HashSet<uint>> available"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-manager" /><code>{"private readonly "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> |  |
| <Link id="m-owned" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", HashSet<uint>> owned"}</code> |  |
| <Link id="m-purchased" /><code>{"private readonly List<uint> purchased"}</code> |  |
| <Link id="m-randomize" /><code>{"private TaskCompletionSource<bool> randomize"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-available-2" /><code>{"IReadOnlyDictionary<"}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", HashSet<uint>> Available { get; }"}</code> |  |
| <Link id="m-owned-2" /><code>{"IReadOnlyDictionary<"}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", HashSet<uint>> Owned { get; }"}</code> |  |
| <Link id="m-purchased-2" /><code>{"IReadOnlyCollection<uint> Purchased { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcategoryoptions" /><code>{"ICollection<uint> GetCategoryOptions("}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" category)"}</code> |  |
| <Link id="m-getpurchases" /><code>{"List<uint> GetPurchases()"}</code> |  |
| <Link id="m-loadfor" /><code>{"static async Task<"}<Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{"> LoadFor("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-loadfor-2" /><code>{"static async Task<"}<Link to="/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{"> LoadFor(int userId, bool isLocalPlayer, "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status, "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-randomize-2" /><code>{"async Task Randomize(bool canUseNonOwned)"}</code> |  |
| <Link id="m-randomize-3" /><code>{"async Task Randomize("}<Link to="/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper, bool canUseNonOwned)"}</code> |  |
| <Link id="m-refreshstore" /><code>{"async Task RefreshStore()"}</code> |  |
| <Link id="m-additem" /><code>{"private void AddItem(uint purchasable)"}</code> |  |
| <Link id="m-wasdestroyed" /><code>{"private bool WasDestroyed()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CosmeticOwnershipManager`:

[`CosmeticCustomizationManager.InitializeForPlayer`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-initializeforplayer), [`CosmeticCustomizationManager.owned`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-owned), [`CosmeticCustomizationManager.Owned`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-owned-2).
