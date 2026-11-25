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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CosmeticSetDefinition`](/game-api/types/alta-customization/cosmeticsetdefinition), [`PlayerCosmeticDefinition`](/game-api/types/alta-customization/playercosmeticdefinition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Purchasable()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loadedpurchasables" /><code>{"static Dictionary<uint, "}<Link to="/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{"> LoadedPurchasables"}</code> | Every purchasable by hash, once `LoadAllIntoRAM` has run. Null before that. |
| <Link id="m-sku" /><code>{"protected string sku"}</code> | Backing field for `Sku`. |

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androidtargeturl" /><code>{"private const string AndroidTargetUrl"}</code> |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> |
| <Link id="m-hash" /><code>{"private uint hash"}</code> |
| <Link id="m-iscatalogloaded" /><code>{"private static bool isCatalogLoaded"}</code> |
| <Link id="m-isfreefordevs" /><code>{"private bool isFreeForDevs"}</code> |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> |
| <Link id="m-lastcatalogrefresh" /><code>{"private static DateTime lastCatalogRefresh"}</code> |
| <Link id="m-linuxtargeturl" /><code>{"private const string LinuxTargetUrl"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |
| <Link id="m-overridehash" /><code>{"private uint overrideHash"}</code> |
| <Link id="m-windowstargeturl" /><code>{"private const string WindowsTargetUrl"}</code> |

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

| Member |
| --- |
| <Link id="m-isusingallinram" /><code>{"private static bool IsUsingAllInRAM { get; set; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcatalogasync" /><code>{"static async Task CheckCatalogAsync()"}</code> | Loads the remote Addressables catalog once, if the build uses external cosmetics. |
| <Link id="m-get" /><code>{"static async Task<T> Get<T>("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, string sku)"}</code> | Loads a purchasable by SKU or hash, from RAM if preloaded. Retries once after a catalog refresh, then logs an error. |
| <Link id="m-get-2" /><code>{"static async Task<T> Get<T>("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, uint hash)"}</code> | Loads a purchasable by SKU or hash, from RAM if preloaded. Retries once after a catalog refresh, then logs an error. |
| <Link id="m-loadallintoram" /><code>{"static async Task LoadAllIntoRAM()"}</code> | Loads every purchasable listed in `PurchasableMap` into `LoadedPurchasables`, so later `Get` calls skip Addressables. |
| <Link id="m-setdisplayname" /><code>{"void SetDisplayName(string name)"}</code> | Sets the display name. |
| <Link id="m-sethash" /><code>{"void SetHash(uint hash)"}</code> | Sets the hash. |
| <Link id="m-setsku" /><code>{"void SetSku(string sku)"}</code> | Sets the SKU. |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-formattedsku" /><code>{"internal virtual string FormattedSku()"}</code> |
| <Link id="m-gettargeturl" /><code>{"private static string GetTargetUrl()"}</code> |
| <Link id="m-refreshwassuccessful" /><code>{"private static async Task<bool> RefreshWasSuccessful()"}</code> |
| <Link id="m-tryrefreshcatalog" /><code>{"private static async Task<bool> TryRefreshCatalog()"}</code> |
| <Link id="m-waslastrefreshedoveraminuteago" /><code>{"private static bool WasLastRefreshedOverAMinuteAgo()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Purchasable`:

[`CosmeticSetDefinition.items`](/game-api/types/alta-customization/cosmeticsetdefinition#m-items), [`CosmeticSetDefinition.Items`](/game-api/types/alta-customization/cosmeticsetdefinition#m-items-2), [`MainMenuShopItem.AddItem`](/game-api/types/alta-customization/mainmenushopitem#m-additem), [`MainMenuShopItem.item`](/game-api/types/alta-customization/mainmenushopitem#m-item).
