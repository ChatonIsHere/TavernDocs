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
| <Link id="m-ctor" /><code>{"PurchasableMap()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allitems" /><code>{"private string[] allItems"}</code> | Backing field for `AllItems`. |
| <Link id="m-categories" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/purchasablemap-cosmeticcategory">{"PurchasableMap.CosmeticCategory"}</Link>{"[] categories"}</code> | Serialized category to item list. |
| <Link id="m-categorymap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{"> categoryMap"}</code> | Lookup built from `categories` on first use. |
| <Link id="m-cosmeticdefinitions" /><code>{"private uint[] cosmeticDefinitions"}</code> | Serialized hashes of cosmetic definitions. |
| <Link id="m-devitems" /><code>{"private uint[] devItems"}</code> | Backing field for `DevItems`. |
| <Link id="m-hashidentifierpairs" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/purchasablemap-hashidentifierpair">{"PurchasableMap.HashIdentifierPair"}</Link>{"[] hashIdentifierPairs"}</code> | Serialized SKU to hash pairs. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mappedcosmeticdefinitions" /><code>{"private HashSet<uint> mappedCosmeticDefinitions"}</code> | Set built from `cosmeticDefinitions` on first use. |
| <Link id="m-mappedhashidentifierpair" /><code>{"private Dictionary<string, uint> mappedHashIdentifierPair"}</code> | Lookup built from `hashIdentifierPairs` on first use. |
| <Link id="m-mappedsets" /><code>{"private Dictionary<uint, uint[]> mappedSets"}</code> | Lookup built from `sets` on first use. |
| <Link id="m-sets" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/purchasablemap-cosmeticset">{"PurchasableMap.CosmeticSet"}</Link>{"[] sets"}</code> | Serialized cosmetic sets and their items. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allitems-2" /><code>{"string[] AllItems { get; }"}</code> | Addressable keys of every purchasable; `Purchasable` loads them all at startup. |
| <Link id="m-devitems-2" /><code>{"uint[] DevItems { get; }"}</code> | Item hashes that `PurchasedList` marks as owned for players with Developer status. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-convertstoreskutohash" /><code>{"uint ConvertStoreSKUToHash(string storeSKU)"}</code> | Returns the item hash for a store SKU. Throws if the SKU isn't mapped. |
| <Link id="m-getitemcategory" /><code><Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" GetItemCategory(uint itemHash)"}</code> | Returns the cosmetic category for an item hash, or null. |
| <Link id="m-getsetcontent" /><code>{"bool GetSetContent(uint hash, out uint[] content)"}</code> | Gets the item hashes in a set; false if the hash isn't a set. |
| <Link id="m-iscosmeticdefinition" /><code>{"bool IsCosmeticDefinition(uint hash)"}</code> | Whether a hash is a cosmetic definition (as opposed to a set or other purchasable). |
