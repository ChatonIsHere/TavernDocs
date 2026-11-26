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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`SimpleHashedGeneralValue<GenericCraftingRecipe>`](/mod/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`IPageBasis`](/mod/game-api/types/alta-items/ipagebasis), [`ICraftingIngredientProvider`](/mod/game-api/types/global-i-l/icraftingingredientprovider)
- **Derived types** [`GenericCraftingRecipe`](/mod/game-api/types/alta-crafting/genericcraftingrecipe), [`GenericCraftingRecipePageProvider`](/mod/game-api/types/global-e-h/genericcraftingrecipepageprovider)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting#genericcraftingrecipe)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingRecipe()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mappedresult" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{"> mappedResult"}</code> | <span className="api-desc">Static map from result prefab hash to the recipe that makes it.</span> |
| <Link id="m-pieces" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{"[] pieces"}</code> | <span className="api-desc">Backing field for `Pieces`: every piece the station shows, with its source item, mesh, nails and level.</span> |
| <Link id="m-resulthash" /><code>{"private uint resultHash"}</code> | <span className="api-desc">Backing field for `ResultHash`, the prefab spawned when the project is done.</span> |
| <Link id="m-spawnoffset" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" spawnOffset"}</code> | <span className="api-desc">Backing field for `SpawnOffset`, relative to the station's pieces parent.</span> |
| <Link id="m-uniqueglyphs" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] uniqueGlyphs"}</code> | <span className="api-desc">Backing field for `UniqueGlyphs`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pieces-2" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{"[] Pieces { get; }"}</code> | <span className="api-desc">The ghost pieces the recipe needs.</span> |
| <Link id="m-prefabquantities" /><code>{"Dictionary<uint, int> PrefabQuantities { get; }"}</code> | <span className="api-desc">How many pieces of each prefab the recipe needs, by prefab hash. Built fresh on each read.</span> |
| <Link id="m-resulthash-2" /><code>{"uint ResultHash { get; }"}</code> | <span className="api-desc">Hash of the prefab made when the recipe is finished.</span> |
| <Link id="m-spawnoffset-2" /><code><Link to="/mod/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" SpawnOffset { get; }"}</code> | <span className="api-desc">Where the result spawns relative to the station.</span> |
| <Link id="m-uniqueglyphs-2" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] UniqueGlyphs { get; }"}</code> | <span className="api-desc">Glyph positions drawn on the recipe's page.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | <span className="api-desc">Makes the recipe's page data with the generic crafting page provider.</span> |
| <Link id="m-getdefinition" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition">{"GenericCraftingPieceDefinition"}</Link>{" GetDefinition(uint hash)"}</code> | <span className="api-desc">The piece definition with the given hash, or null.</span> |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | <span className="api-desc">The recipe's hash.</span> |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | <span className="api-desc">Identifier of the generic crafting page provider.</span> |
| <Link id="m-getrecipe" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" GetRecipe("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Finds the recipe that makes a prefab. The lookup is built on first use.</span> |
| <Link id="m-initializeproject" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingproject">{"GenericCraftingProject"}</Link>{" InitializeProject("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | <span className="api-desc">Starts a crafting project for this recipe at a station.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mapresults" /><code>{"private static void MapResults()"}</code> | <span className="api-desc">Builds the static map from result prefab hash to recipe on first use of `GetRecipe`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingRecipe`:

<div className="api-used-in">

[`GenericCraftingProject.GenericCraftingProject`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-ctor), [`GenericCraftingProject.Recipe`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-recipe), [`GenericCraftingStation.CheckPageForRecipe`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-checkpageforrecipe), [`GenericCraftingStation.LoadRecipe`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-loadrecipe), [`GenericCraftingStationData.recipe`](/mod/game-api/types/alta-crafting/genericcraftingstationdata#m-recipe), [`IProject.Recipe`](/mod/game-api/types/alta-crafting/iproject#m-recipe), [`GenericCraftingRecipePageProvider.GeneratePage`](/mod/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-generatepage), [`GenericCraftingRecipePageProvider.testRecipe`](/mod/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-testrecipe).

</div>
