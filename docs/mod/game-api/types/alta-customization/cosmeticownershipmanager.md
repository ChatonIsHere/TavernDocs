---
title: "CosmeticOwnershipManager"
description: "Which cosmetics a player has bought, owns and may pick from, by category."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticOwnershipManager

A **class** in `Root.Township`, `Alta.Customization`.

Which cosmetics a player has bought, owns and may pick from, by category. Get one with the async `LoadFor`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Documented in** [Customization](/mod/game-api/game-systems/customization)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private CosmeticOwnershipManager("}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{" purchasedList)"}</code> | Creates a `CosmeticOwnershipManager` from `manager` and `purchasedList`. |

</details>

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-available" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", HashSet<uint>> available"}</code> | Backing field for `Available`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-manager" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> | The player's customization manager. |
| <Link id="m-owned" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", HashSet<uint>> owned"}</code> | Backing field for `Owned`. |
| <Link id="m-purchased" /><code>{"private readonly List<uint> purchased"}</code> | Backing field for `Purchased`. |
| <Link id="m-randomize" /><code>{"private TaskCompletionSource<bool> randomize"}</code> | Task for the randomize in progress, so a second call waits for it instead. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-available-2" /><code>{"IReadOnlyDictionary<"}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", HashSet<uint>> Available { get; }"}</code> | Cosmetic IDs the player can choose from per category: owned ones plus ones made available without buying. |
| <Link id="m-owned-2" /><code>{"IReadOnlyDictionary<"}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", HashSet<uint>> Owned { get; }"}</code> | Cosmetic IDs the player owns per category, including items from the current store rotation. |
| <Link id="m-purchased-2" /><code>{"IReadOnlyCollection<uint> Purchased { get; }"}</code> | Every purchased cosmetic ID (only purchasables that are cosmetics). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcategoryoptions" /><code>{"ICollection<uint> GetCategoryOptions("}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" category)"}</code> | Returns the available cosmetic IDs for one category. |
| <Link id="m-getpurchases" /><code>{"List<uint> GetPurchases()"}</code> | Returns the list of purchased cosmetic IDs. |
| <Link id="m-loadfor" /><code>{"static async Task<"}<Link to="/mod/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{"> LoadFor("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Loads a player's or user ID's purchases and builds a manager, adding the current store rotation for the local player. The user ID overload returns null on failure. |
| <Link id="m-loadfor-2" /><code>{"static async Task<"}<Link to="/mod/game-api/types/alta-customization/cosmeticownershipmanager">{"CosmeticOwnershipManager"}</Link>{"> LoadFor(int userId, bool isLocalPlayer, "}<Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status, "}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> | Loads a player's or user ID's purchases and builds a manager, adding the current store rotation for the local player. The user ID overload returns null on failure. |
| <Link id="m-randomize-2" /><code>{"async Task Randomize(bool canUseNonOwned)"}</code> | Replaces the character's cosmetics with a random pick per category, from owned items or all available ones. Concurrent calls wait for the running one. |
| <Link id="m-randomize-3" /><code>{"async Task Randomize("}<Link to="/mod/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper, bool canUseNonOwned)"}</code> | Replaces the character's cosmetics with a random pick per category, from owned items or all available ones. Concurrent calls wait for the running one. |
| <Link id="m-refreshstore" /><code>{"async Task RefreshStore()"}</code> | Removes the old store rotation's items, fetches the current rotation and adds its items (expanding sets) as owned. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additem" /><code>{"private void AddItem(uint purchasable)"}</code> | Adds a cosmetic to purchased and owned if it is a cosmetic definition. |
| <Link id="m-wasdestroyed" /><code>{"private bool WasDestroyed()"}</code> | True if any customization handler has been destroyed, so randomizing stops. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticOwnershipManager`:

[`CosmeticCustomizationManager.InitializeForPlayer`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-initializeforplayer), [`CosmeticCustomizationManager.owned`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-owned), [`CosmeticCustomizationManager.Owned`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-owned-2).
