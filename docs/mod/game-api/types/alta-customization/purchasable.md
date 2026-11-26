---
title: "Purchasable"
description: "Base asset for a shop item or cosmetic that can be owned, loaded through Addressables by its hash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Purchasable

A **class** in `Root.Township`, `Alta.Customization`.

Base asset for a shop item or cosmetic that can be owned, loaded through Addressables by its hash. With external cosmetics on, the catalog comes from Alta's DigitalOcean bundle store.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CosmeticSetDefinition`](/mod/game-api/types/alta-customization/cosmeticsetdefinition), [`PlayerCosmeticDefinition`](/mod/game-api/types/alta-customization/playercosmeticdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Purchasable()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loadedpurchasables" /><code>{"static Dictionary<uint, "}<Link to="/mod/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{"> LoadedPurchasables"}</code> | Every purchasable by hash, once `LoadAllIntoRAM` has run. Null before that. |
| <Link id="m-sku" /><code>{"protected string sku"}</code> | Backing field for `Sku`. |

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidtargeturl" /><code>{"private const string AndroidTargetUrl"}</code> | Address of Alta's Android cosmetics bundles. That host is gone. |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> | Backing field for `DisplayName`. |
| <Link id="m-hash" /><code>{"private uint hash"}</code> | Backing field for `Hash`; `Get` sets it to the hash it was loaded by. |
| <Link id="m-iscatalogloaded" /><code>{"private static bool isCatalogLoaded"}</code> | True once `CheckCatalogAsync` has run. |
| <Link id="m-isfreefordevs" /><code>{"private bool isFreeForDevs"}</code> | Backing field for `IsFreeForDevs`. |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> | Backing field for `IsLocked`. |
| <Link id="m-lastcatalogrefresh" /><code>{"private static DateTime lastCatalogRefresh"}</code> | When the catalog was last loaded or checked. |
| <Link id="m-linuxtargeturl" /><code>{"private const string LinuxTargetUrl"}</code> | Address of Alta's Linux cosmetics bundles. That host is gone. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | Logger for this class. |
| <Link id="m-overridehash" /><code>{"private uint overrideHash"}</code> | Backing field for `OverrideHash`. |
| <Link id="m-windowstargeturl" /><code>{"private const string WindowsTargetUrl"}</code> | Address of Alta's Windows cosmetics bundles. That host is gone. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname-2" /><code>{"string DisplayName { get; }"}</code> | Name shown to players. |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | The item's hash, which other systems use as its id. |
| <Link id="m-isfreefordevs-2" /><code>{"bool IsFreeForDevs { get; }"}</code> | Probably whether developers get the item without buying it. |
| <Link id="m-islocked-2" /><code>{"bool IsLocked { get; }"}</code> | Whether the item starts locked. |
| <Link id="m-overridehash-2" /><code>{"uint OverrideHash { get; }"}</code> | Alternative hash set in the inspector. |
| <Link id="m-sku-2" /><code>{"string Sku { get; }"}</code> | The store SKU string. Its compressed hash is the lookup key. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isusingallinram" /><code>{"private static bool IsUsingAllInRAM { get; set; }"}</code> | True once `LoadAllIntoRAM` has loaded every purchasable, so `Get` reads `LoadedPurchasables` instead of loading. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcatalogasync" /><code>{"static async Task CheckCatalogAsync()"}</code> | Loads the remote Addressables catalog once, if the build uses external cosmetics. |
| <Link id="m-get" /><code>{"static async Task<T> Get<T>("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, string sku)"}</code> | Loads a purchasable by SKU or hash, from RAM if preloaded. Retries once after a catalog refresh, then logs an error. |
| <Link id="m-get-2" /><code>{"static async Task<T> Get<T>("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, uint hash)"}</code> | Loads a purchasable by SKU or hash, from RAM if preloaded. Retries once after a catalog refresh, then logs an error. |
| <Link id="m-loadallintoram" /><code>{"static async Task LoadAllIntoRAM()"}</code> | Loads every purchasable listed in `PurchasableMap` into `LoadedPurchasables`, so later `Get` calls skip Addressables. |
| <Link id="m-setdisplayname" /><code>{"void SetDisplayName(string name)"}</code> | Sets the display name. |
| <Link id="m-sethash" /><code>{"void SetHash(uint hash)"}</code> | Sets the hash. |
| <Link id="m-setsku" /><code>{"void SetSku(string sku)"}</code> | Sets the SKU. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-formattedsku" /><code>{"internal virtual string FormattedSku()"}</code> | The display name in lower case with spaces as dashes. |
| <Link id="m-gettargeturl" /><code>{"private static string GetTargetUrl()"}</code> | Picks the cosmetics bundle address for the current platform (Windows, Android or Linux). |
| <Link id="m-refreshwassuccessful" /><code>{"private static async Task<bool> RefreshWasSuccessful()"}</code> | Checks for Addressables catalog updates and returns true if there were any. |
| <Link id="m-tryrefreshcatalog" /><code>{"private static async Task<bool> TryRefreshCatalog()"}</code> | With external cosmetics on, checks for catalog updates at most once a minute. `Get` retries after one. |
| <Link id="m-waslastrefreshedoveraminuteago" /><code>{"private static bool WasLastRefreshedOverAMinuteAgo()"}</code> | True if the catalog was last checked more than a minute ago. |

</details>

## Used in

Members of other types that take, return or hold a `Purchasable`:

[`CosmeticSetDefinition.items`](/mod/game-api/types/alta-customization/cosmeticsetdefinition#m-items), [`CosmeticSetDefinition.Items`](/mod/game-api/types/alta-customization/cosmeticsetdefinition#m-items-2), [`MainMenuShopItem.AddItem`](/mod/game-api/types/alta-customization/mainmenushopitem#m-additem), [`MainMenuShopItem.item`](/mod/game-api/types/alta-customization/mainmenushopitem#m-item).
