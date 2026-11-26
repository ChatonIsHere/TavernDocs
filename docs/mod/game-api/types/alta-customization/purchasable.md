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
| <Link id="m-ctor" /><code>{"Purchasable()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loadedpurchasables" /><code>{"static Dictionary<uint, "}<Link to="/mod/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{"> LoadedPurchasables"}</code> | <span className="api-desc">Every purchasable by hash, once `LoadAllIntoRAM` has run. Null before that.</span> |
| <Link id="m-sku" /><code>{"protected string sku"}</code> | <span className="api-desc">Backing field for `Sku`.</span> |

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidtargeturl" /><code>{"private const string AndroidTargetUrl"}</code> | <span className="api-desc">Address of Alta's Android cosmetics bundles. That host is gone.</span> |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> | <span className="api-desc">Backing field for `DisplayName`.</span> |
| <Link id="m-hash" /><code>{"private uint hash"}</code> | <span className="api-desc">Backing field for `Hash`; `Get` sets it to the hash it was loaded by.</span> |
| <Link id="m-iscatalogloaded" /><code>{"private static bool isCatalogLoaded"}</code> | <span className="api-desc">True once `CheckCatalogAsync` has run.</span> |
| <Link id="m-isfreefordevs" /><code>{"private bool isFreeForDevs"}</code> | <span className="api-desc">Backing field for `IsFreeForDevs`.</span> |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> | <span className="api-desc">Backing field for `IsLocked`.</span> |
| <Link id="m-lastcatalogrefresh" /><code>{"private static DateTime lastCatalogRefresh"}</code> | <span className="api-desc">When the catalog was last loaded or checked.</span> |
| <Link id="m-linuxtargeturl" /><code>{"private const string LinuxTargetUrl"}</code> | <span className="api-desc">Address of Alta's Linux cosmetics bundles. That host is gone.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-overridehash" /><code>{"private uint overrideHash"}</code> | <span className="api-desc">Backing field for `OverrideHash`.</span> |
| <Link id="m-windowstargeturl" /><code>{"private const string WindowsTargetUrl"}</code> | <span className="api-desc">Address of Alta's Windows cosmetics bundles. That host is gone.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname-2" /><code>{"string DisplayName { get; }"}</code> | <span className="api-desc">Name shown to players.</span> |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">The item's hash, which other systems use as its id.</span> |
| <Link id="m-isfreefordevs-2" /><code>{"bool IsFreeForDevs { get; }"}</code> | <span className="api-desc">Probably whether developers get the item without buying it.</span> |
| <Link id="m-islocked-2" /><code>{"bool IsLocked { get; }"}</code> | <span className="api-desc">Whether the item starts locked.</span> |
| <Link id="m-overridehash-2" /><code>{"uint OverrideHash { get; }"}</code> | <span className="api-desc">Alternative hash set in the inspector.</span> |
| <Link id="m-sku-2" /><code>{"string Sku { get; }"}</code> | <span className="api-desc">The store SKU string. Its compressed hash is the lookup key.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isusingallinram" /><code>{"private static bool IsUsingAllInRAM { get; set; }"}</code> | <span className="api-desc">True once `LoadAllIntoRAM` has loaded every purchasable, so `Get` reads `LoadedPurchasables` instead of loading.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcatalogasync" /><code>{"static async Task CheckCatalogAsync()"}</code> | <span className="api-desc">Loads the remote Addressables catalog once, if the build uses external cosmetics.</span> |
| <Link id="m-get" /><code>{"static async Task<T> Get<T>("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, string sku)"}</code> | <span className="api-desc">Loads a purchasable by SKU or hash, from RAM if preloaded. Retries once after a catalog refresh, then logs an error.</span> |
| <Link id="m-get-2" /><code>{"static async Task<T> Get<T>("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, uint hash)"}</code> | <span className="api-desc">Loads a purchasable by SKU or hash, from RAM if preloaded. Retries once after a catalog refresh, then logs an error.</span> |
| <Link id="m-loadallintoram" /><code>{"static async Task LoadAllIntoRAM()"}</code> | <span className="api-desc">Loads every purchasable listed in `PurchasableMap` into `LoadedPurchasables`, so later `Get` calls skip Addressables.</span> |
| <Link id="m-setdisplayname" /><code>{"void SetDisplayName(string name)"}</code> | <span className="api-desc">Sets the display name.</span> |
| <Link id="m-sethash" /><code>{"void SetHash(uint hash)"}</code> | <span className="api-desc">Sets the hash.</span> |
| <Link id="m-setsku" /><code>{"void SetSku(string sku)"}</code> | <span className="api-desc">Sets the SKU.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-formattedsku" /><code>{"internal virtual string FormattedSku()"}</code> | <span className="api-desc">The display name in lower case with spaces as dashes.</span> |
| <Link id="m-gettargeturl" /><code>{"private static string GetTargetUrl()"}</code> | <span className="api-desc">Picks the cosmetics bundle address for the current platform (Windows, Android or Linux).</span> |
| <Link id="m-refreshwassuccessful" /><code>{"private static async Task<bool> RefreshWasSuccessful()"}</code> | <span className="api-desc">Checks for Addressables catalog updates and returns true if there were any.</span> |
| <Link id="m-tryrefreshcatalog" /><code>{"private static async Task<bool> TryRefreshCatalog()"}</code> | <span className="api-desc">With external cosmetics on, checks for catalog updates at most once a minute. `Get` retries after one.</span> |
| <Link id="m-waslastrefreshedoveraminuteago" /><code>{"private static bool WasLastRefreshedOverAMinuteAgo()"}</code> | <span className="api-desc">True if the catalog was last checked more than a minute ago.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Purchasable`:

<div className="api-used-in">

[`CosmeticSetDefinition.items`](/mod/game-api/types/alta-customization/cosmeticsetdefinition#m-items), [`CosmeticSetDefinition.Items`](/mod/game-api/types/alta-customization/cosmeticsetdefinition#m-items-2), [`MainMenuShopItem.AddItem`](/mod/game-api/types/alta-customization/mainmenushopitem#m-additem), [`MainMenuShopItem.item`](/mod/game-api/types/alta-customization/mainmenushopitem#m-item).

</div>
