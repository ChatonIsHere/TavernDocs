---
title: "GenericCraftingRecipe"
description: "Get one with GenericCraftingRecipe.All, or by the result with static GenericCraftingRecipe GetRecipe(NetworkPrefab prefab) (the result map is built on"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingRecipe

A **class** in `Root.Township`, `Alta.Crafting`.

Get one with `GenericCraftingRecipe.All`, or by the result with `static GenericCraftingRecipe GetRecipe(NetworkPrefab prefab)` (the result map is built once, on first use).

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`SimpleHashedGeneralValue<GenericCraftingRecipe>`](/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`IPageBasis`](/game-api/types/alta-items/ipagebasis), [`ICraftingIngredientProvider`](/game-api/types/global-i-l/icraftingingredientprovider)
- **Derived types** [`GenericCraftingRecipe`](/game-api/types/alta-crafting/genericcraftingrecipe), [`GenericCraftingRecipePageProvider`](/game-api/types/global-e-h/genericcraftingrecipepageprovider)
- **Documented in** [Crafting](/game-api/game-systems/crafting#genericcraftingrecipe)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingRecipe()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-mappedresult" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{"> mappedResult"}</code> |  |
| <Link id="m-pieces" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{"[] pieces"}</code> |  |
| <Link id="m-resulthash" /><code>{"private uint resultHash"}</code> |  |
| <Link id="m-spawnoffset" /><code>{"private "}<Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" spawnOffset"}</code> |  |
| <Link id="m-uniqueglyphs" /><code>{"private "}<Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] uniqueGlyphs"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pieces-2" /><code><Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{"[] Pieces { get; }"}</code> |  |
| <Link id="m-prefabquantities" /><code>{"Dictionary<uint, int> PrefabQuantities { get; }"}</code> |  |
| <Link id="m-resulthash-2" /><code>{"uint ResultHash { get; }"}</code> |  |
| <Link id="m-spawnoffset-2" /><code><Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" SpawnOffset { get; }"}</code> |  |
| <Link id="m-uniqueglyphs-2" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] UniqueGlyphs { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> |  |
| <Link id="m-getdefinition" /><code><Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" GetDefinition(uint hash)"}</code> |  |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> |  |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> |  |
| <Link id="m-getrecipe" /><code>{"static "}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" GetRecipe("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-initializeproject" /><code><Link to="/game-api/types/alta-crafting/genericcraftingproject">{"GenericCraftingProject"}</Link>{" InitializeProject("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> |  |
| <Link id="m-mapresults" /><code>{"private static void MapResults()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenericCraftingRecipe`:

[`GenericCraftingProject.GenericCraftingProject`](/game-api/types/alta-crafting/genericcraftingproject#m-ctor), [`GenericCraftingProject.Recipe`](/game-api/types/alta-crafting/genericcraftingproject#m-recipe), [`GenericCraftingStation.CheckPageForRecipe`](/game-api/types/alta-crafting/genericcraftingstation#m-checkpageforrecipe), [`GenericCraftingStation.LoadRecipe`](/game-api/types/alta-crafting/genericcraftingstation#m-loadrecipe), [`GenericCraftingStationData.recipe`](/game-api/types/alta-crafting/genericcraftingstationdata#m-recipe), [`IProject.Recipe`](/game-api/types/alta-crafting/iproject#m-recipe), [`GenericCraftingRecipePageProvider.GeneratePage`](/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-generatepage), [`GenericCraftingRecipePageProvider.testRecipe`](/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-testrecipe).
