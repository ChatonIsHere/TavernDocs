---
title: "PurchasableMap"
description: "Global settings asset mapping shop items: store SKUs to hashes, set contents, item categories and which hashes are cosmetics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchasableMap

A **class** in `Root.Township`, `Alta.Customization`.

Global settings asset mapping shop items: store SKUs to hashes, set contents, item categories and which hashes are cosmetics. Get it with `GlobalSettings<PurchasableMap>.Instance`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`GlobalSettings<PurchasableMap>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PurchasableMap`](/mod/game-api/types/alta-customization/purchasablemap)
- **Nested types** [`CosmeticCategory`](/mod/game-api/types/alta-customization/purchasablemap-cosmeticcategory), [`CosmeticSet`](/mod/game-api/types/alta-customization/purchasablemap-cosmeticset), [`HashIdentifierPair`](/mod/game-api/types/alta-customization/purchasablemap-hashidentifierpair)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PurchasableMap()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allitems" /><code>{"private string[] allItems"}</code> | <span className="api-desc">Backing field for `AllItems`.</span> |
| <Link id="m-categories" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/purchasablemap-cosmeticcategory">{"PurchasableMap.CosmeticCategory"}</Link>{"[] categories"}</code> | <span className="api-desc">Serialized category to item list.</span> |
| <Link id="m-categorymap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{"> categoryMap"}</code> | <span className="api-desc">Lookup built from `categories` on first use.</span> |
| <Link id="m-cosmeticdefinitions" /><code>{"private uint[] cosmeticDefinitions"}</code> | <span className="api-desc">Serialized hashes of cosmetic definitions.</span> |
| <Link id="m-devitems" /><code>{"private uint[] devItems"}</code> | <span className="api-desc">Backing field for `DevItems`.</span> |
| <Link id="m-hashidentifierpairs" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/purchasablemap-hashidentifierpair">{"PurchasableMap.HashIdentifierPair"}</Link>{"[] hashIdentifierPairs"}</code> | <span className="api-desc">Serialized SKU to hash pairs.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mappedcosmeticdefinitions" /><code>{"private HashSet<uint> mappedCosmeticDefinitions"}</code> | <span className="api-desc">Set built from `cosmeticDefinitions` on first use.</span> |
| <Link id="m-mappedhashidentifierpair" /><code>{"private Dictionary<string, uint> mappedHashIdentifierPair"}</code> | <span className="api-desc">Lookup built from `hashIdentifierPairs` on first use.</span> |
| <Link id="m-mappedsets" /><code>{"private Dictionary<uint, uint[]> mappedSets"}</code> | <span className="api-desc">Lookup built from `sets` on first use.</span> |
| <Link id="m-sets" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/purchasablemap-cosmeticset">{"PurchasableMap.CosmeticSet"}</Link>{"[] sets"}</code> | <span className="api-desc">Serialized cosmetic sets and their items.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allitems-2" /><code>{"string[] AllItems { get; }"}</code> | <span className="api-desc">Addressable keys of every purchasable; `Purchasable` loads them all at startup.</span> |
| <Link id="m-devitems-2" /><code>{"uint[] DevItems { get; }"}</code> | <span className="api-desc">Item hashes that `PurchasedList` marks as owned for players with Developer status.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-convertstoreskutohash" /><code>{"uint ConvertStoreSKUToHash(string storeSKU)"}</code> | <span className="api-desc">Returns the item hash for a store SKU. Throws if the SKU isn't mapped.</span> |
| <Link id="m-getitemcategory" /><code><Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" GetItemCategory(uint itemHash)"}</code> | <span className="api-desc">Returns the cosmetic category for an item hash, or null.</span> |
| <Link id="m-getsetcontent" /><code>{"bool GetSetContent(uint hash, out uint[] content)"}</code> | <span className="api-desc">Gets the item hashes in a set; false if the hash isn't a set.</span> |
| <Link id="m-iscosmeticdefinition" /><code>{"bool IsCosmeticDefinition(uint hash)"}</code> | <span className="api-desc">Whether a hash is a cosmetic definition (as opposed to a set or other purchasable).</span> |
