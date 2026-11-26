---
title: "GenericCraftingRecipe"
description: "Recipe asset for a generic crafting station: the ghost pieces to fill and the prefab made at the end."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingRecipe

A **class** in `Root.Township`, `Alta.Crafting`.

Recipe asset for a generic crafting station: the ghost pieces to fill and the prefab made at the end. Also a page basis, so it can go in a recipe book.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`SimpleHashedGeneralValue<GenericCraftingRecipe>`](/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`IPageBasis`](/game-api/types/alta-items/ipagebasis), [`ICraftingIngredientProvider`](/game-api/types/global-i-l/icraftingingredientprovider)
- **Derived types** [`GenericCraftingRecipe`](/game-api/types/alta-crafting/genericcraftingrecipe), [`GenericCraftingRecipePageProvider`](/game-api/types/global-e-h/genericcraftingrecipepageprovider)
- **Documented in** [Crafting](/game-api/game-systems/crafting#genericcraftingrecipe)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingRecipe()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mappedresult" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{"> mappedResult"}</code> | Static map from result prefab hash to the recipe that makes it. |
| <Link id="m-pieces" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{"[] pieces"}</code> | Backing field for `Pieces`: every piece the station shows, with its source item, mesh, nails and level. |
| <Link id="m-resulthash" /><code>{"private uint resultHash"}</code> | Backing field for `ResultHash`, the prefab spawned when the project is done. |
| <Link id="m-spawnoffset" /><code>{"private "}<Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" spawnOffset"}</code> | Backing field for `SpawnOffset`, relative to the station's pieces parent. |
| <Link id="m-uniqueglyphs" /><code>{"private "}<Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] uniqueGlyphs"}</code> | Backing field for `UniqueGlyphs`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pieces-2" /><code><Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{"[] Pieces { get; }"}</code> | The ghost pieces the recipe needs. |
| <Link id="m-prefabquantities" /><code>{"Dictionary<uint, int> PrefabQuantities { get; }"}</code> | How many pieces of each prefab the recipe needs, by prefab hash. Built fresh on each read. |
| <Link id="m-resulthash-2" /><code>{"uint ResultHash { get; }"}</code> | Hash of the prefab made when the recipe is finished. |
| <Link id="m-spawnoffset-2" /><code><Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" SpawnOffset { get; }"}</code> | Where the result spawns relative to the station. |
| <Link id="m-uniqueglyphs-2" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] UniqueGlyphs { get; }"}</code> | Glyph positions drawn on the recipe's page. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | Makes the recipe's page data with the generic crafting page provider. |
| <Link id="m-getdefinition" /><code><Link to="/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" GetDefinition(uint hash)"}</code> | The piece definition with the given hash, or null. |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | The recipe's hash. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | Identifier of the generic crafting page provider. |
| <Link id="m-getrecipe" /><code>{"static "}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" GetRecipe("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Finds the recipe that makes a prefab. The lookup is built on first use. |
| <Link id="m-initializeproject" /><code><Link to="/game-api/types/alta-crafting/genericcraftingproject">{"GenericCraftingProject"}</Link>{" InitializeProject("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | Starts a crafting project for this recipe at a station. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mapresults" /><code>{"private static void MapResults()"}</code> | Builds the static map from result prefab hash to recipe on first use of `GetRecipe`. |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingRecipe`:

[`GenericCraftingProject.GenericCraftingProject`](/game-api/types/alta-crafting/genericcraftingproject#m-ctor), [`GenericCraftingProject.Recipe`](/game-api/types/alta-crafting/genericcraftingproject#m-recipe), [`GenericCraftingStation.CheckPageForRecipe`](/game-api/types/alta-crafting/genericcraftingstation#m-checkpageforrecipe), [`GenericCraftingStation.LoadRecipe`](/game-api/types/alta-crafting/genericcraftingstation#m-loadrecipe), [`GenericCraftingStationData.recipe`](/game-api/types/alta-crafting/genericcraftingstationdata#m-recipe), [`IProject.Recipe`](/game-api/types/alta-crafting/iproject#m-recipe), [`GenericCraftingRecipePageProvider.GeneratePage`](/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-generatepage), [`GenericCraftingRecipePageProvider.testRecipe`](/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-testrecipe).
