---
title: "ChiselDefinition"
description: "A chiselling recipe under Carpentry/Chisel Definitions: the order the 12 outer shards are removed in, the block size and the prefabs it makes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselDefinition

A **class** in `Root.Township`, `Alta.Carpentry`.

A chiselling recipe under `Carpentry/Chisel Definitions`: the order the 12 outer shards are removed in, the block size and the prefabs it makes. Also a recipe page (`IPageBasis`).

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`SimpleHashedGeneralValue<ChiselDefinition>`](/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`IPageBasis`](/game-api/types/alta-items/ipagebasis)
- **Derived types** [`ChiselDefinition`](/game-api/types/alta-crafting/chiseldefinition), [`ChiselDefinition.Create`](/game-api/types/alta-crafting/chiseldefinition-create), [`ChiselRecipePageProvider`](/game-api/types/global-c-d/chiselrecipepageprovider)
- **Nested types** [`Create`](/game-api/types/alta-crafting/chiseldefinition-create), [`SpawnSpread`](/game-api/types/alta-crafting/chiseldefinition-spawnspread)
- **Attributes** `HashedPath`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emptyscore" /><code>{"const int EmptyScore"}</code> | Weight (2500) for getting no result when picking with `GetBest`. |
| <Link id="m-recipeglyph" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" recipeGlyph"}</code> | Glyph shown for this recipe. |
| <Link id="m-shardcount" /><code>{"const int ShardCount"}</code> | Number of outer shards (12). |
| <Link id="m-undonepenalty" /><code>{"const int UndonePenalty"}</code> | Error added per shard missing from the chiselled order (5). |
| <Link id="m-btnrandomize" /><code>{"private bool btnRandomize"}</code> |  |
| <Link id="m-chiselorder" /><code>{"private List<int> chiselOrder"}</code> |  |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/game-api/types/alta-crafting/prefabspawnposition">{"PrefabSpawnPosition"}</Link>{"[] prefabs"}</code> |  |
| <Link id="m-size" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chiselorder-2" /><code>{"List<int> ChiselOrder { get; }"}</code> | The 12 shard indexes in the order this recipe removes them. |
| <Link id="m-prefabs-2" /><code><Link to="/game-api/types/alta-crafting/prefabspawnposition">{"PrefabSpawnPosition"}</Link>{"[] Prefabs { get; }"}</code> | Prefabs (with positions) spawned as the result. |
| <Link id="m-size-2" /><code><Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | Block size this recipe needs. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | Builds the recipe page for this definition. |
| <Link id="m-getbest" /><code>{"static "}<Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" GetBest(List<int> chisellingOrder, "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size)"}</code> | Picks a recipe for a chiselled order and size. An exact match wins; else a weighted random pick where worse matches weigh more. |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | The definition's hash. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | The chisel recipe page provider's identifier. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChiselDefinition`:

[`ChisellingDeck.Guide`](/game-api/types/alta-crafting/chisellingdeck#m-guide), [`ChisellingDeckSaveData.spawned`](/game-api/types/alta-crafting/chisellingdecksavedata#m-spawned), [`ChisellingDeckSaveData2.spawned`](/game-api/types/alta-crafting/chisellingdecksavedata2#m-spawned), [`OldChisellingDeckSaveData1.spawned`](/game-api/types/alta-crafting/oldchisellingdecksavedata1#m-spawned), [`RecipePlacer.ChangeDefinition`](/game-api/types/alta-crafting/recipeplacer#m-changedefinition), [`RecipePlacer.Definition`](/game-api/types/alta-crafting/recipeplacer#m-definition), [`TimberBlock.spawnedDefinition`](/game-api/types/alta-crafting/timberblock#m-spawneddefinition), [`ChiselRecipePageProvider.GeneratePage`](/game-api/types/global-c-d/chiselrecipepageprovider#m-generatepage), [`ChiselRecipePageProvider.testRecipe`](/game-api/types/global-c-d/chiselrecipepageprovider#m-testrecipe).
