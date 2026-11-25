---
title: "PurchasableMap"
description: "class PurchasableMap in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchasableMap

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`GlobalSettings<PurchasableMap>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PurchasableMap`](/game-api/types/alta-customization/purchasablemap)
- **Nested types** [`CosmeticCategory`](/game-api/types/alta-customization/purchasablemap-cosmeticcategory), [`CosmeticSet`](/game-api/types/alta-customization/purchasablemap-cosmeticset), [`HashIdentifierPair`](/game-api/types/alta-customization/purchasablemap-hashidentifierpair)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PurchasableMap()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-allitems" /><code>{"private string[] allItems"}</code> |
| <Link id="m-categories" /><code>{"private "}<Link to="/game-api/types/alta-customization/purchasablemap-cosmeticcategory">{"PurchasableMap.CosmeticCategory"}</Link>{"[] categories"}</code> |
| <Link id="m-categorymap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{"> categoryMap"}</code> |
| <Link id="m-cosmeticdefinitions" /><code>{"private uint[] cosmeticDefinitions"}</code> |
| <Link id="m-devitems" /><code>{"private uint[] devItems"}</code> |
| <Link id="m-hashidentifierpairs" /><code>{"private "}<Link to="/game-api/types/alta-customization/purchasablemap-hashidentifierpair">{"PurchasableMap.HashIdentifierPair"}</Link>{"[] hashIdentifierPairs"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-mappedcosmeticdefinitions" /><code>{"private HashSet<uint> mappedCosmeticDefinitions"}</code> |
| <Link id="m-mappedhashidentifierpair" /><code>{"private Dictionary<string, uint> mappedHashIdentifierPair"}</code> |
| <Link id="m-mappedsets" /><code>{"private Dictionary<uint, uint[]> mappedSets"}</code> |
| <Link id="m-sets" /><code>{"private "}<Link to="/game-api/types/alta-customization/purchasablemap-cosmeticset">{"PurchasableMap.CosmeticSet"}</Link>{"[] sets"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-allitems-2" /><code>{"string[] AllItems { get; }"}</code> |
| <Link id="m-devitems-2" /><code>{"uint[] DevItems { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-convertstoreskutohash" /><code>{"uint ConvertStoreSKUToHash(string storeSKU)"}</code> |
| <Link id="m-getitemcategory" /><code><Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" GetItemCategory(uint itemHash)"}</code> |
| <Link id="m-getsetcontent" /><code>{"bool GetSetContent(uint hash, out uint[] content)"}</code> |
| <Link id="m-iscosmeticdefinition" /><code>{"bool IsCosmeticDefinition(uint hash)"}</code> |
