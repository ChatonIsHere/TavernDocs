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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`SimpleHashedGeneralValue<ChiselDefinition>`](/mod/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`IPageBasis`](/mod/game-api/types/alta-items/ipagebasis)
- **Derived types** [`ChiselDefinition`](/mod/game-api/types/alta-crafting/chiseldefinition), [`ChiselDefinition.Create`](/mod/game-api/types/alta-crafting/chiseldefinition-create), [`ChiselRecipePageProvider`](/mod/game-api/types/global-c-d/chiselrecipepageprovider)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/chiseldefinition-create), [`SpawnSpread`](/mod/game-api/types/alta-crafting/chiseldefinition-spawnspread)
- **Attributes** `HashedPath`
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emptyscore" /><code>{"const int EmptyScore"}</code> | Weight (2500) for getting no result when picking with `GetBest`. |
| <Link id="m-recipeglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" recipeGlyph"}</code> | Glyph shown for this recipe. |
| <Link id="m-shardcount" /><code>{"const int ShardCount"}</code> | Number of outer shards (12). |
| <Link id="m-undonepenalty" /><code>{"const int UndonePenalty"}</code> | Error added per shard missing from the chiselled order (5). |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnrandomize" /><code>{"private bool btnRandomize"}</code> | Inspector button that shuffles `chiselOrder`. |
| <Link id="m-chiselorder" /><code>{"private List<int> chiselOrder"}</code> | Backing field for `ChiselOrder`: the order the 12 outer pieces should be chiselled in to get this result. |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/prefabspawnposition">{"PrefabSpawnPosition"}</Link>{"[] prefabs"}</code> | Backing field for `Prefabs`: what spawns on the block, and where, when this definition is the result. |
| <Link id="m-size" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> | Backing field for `Size`. Only definitions of the block's size are considered. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chiselorder-2" /><code>{"List<int> ChiselOrder { get; }"}</code> | The 12 shard indexes in the order this recipe removes them. |
| <Link id="m-prefabs-2" /><code><Link to="/mod/game-api/types/alta-crafting/prefabspawnposition">{"PrefabSpawnPosition"}</Link>{"[] Prefabs { get; }"}</code> | Prefabs (with positions) spawned as the result. |
| <Link id="m-size-2" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | Block size this recipe needs. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | Builds the recipe page for this definition. |
| <Link id="m-getbest" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" GetBest(List<int> chisellingOrder, "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size)"}</code> | Picks a recipe for a chiselled order and size. An exact match wins; else a weighted random pick where worse matches weigh more. |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | The definition's hash. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | The chisel recipe page provider's identifier. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Resets `chiselOrder` to 0 to 11 when it doesn't have 12 entries, and shuffles it when the Randomize button is pressed. |

## Used in

Members of other types that take, return or hold a `ChiselDefinition`:

[`ChisellingDeck.Guide`](/mod/game-api/types/alta-crafting/chisellingdeck#m-guide), [`ChisellingDeckSaveData.spawned`](/mod/game-api/types/alta-crafting/chisellingdecksavedata#m-spawned), [`ChisellingDeckSaveData2.spawned`](/mod/game-api/types/alta-crafting/chisellingdecksavedata2#m-spawned), [`OldChisellingDeckSaveData1.spawned`](/mod/game-api/types/alta-crafting/oldchisellingdecksavedata1#m-spawned), [`RecipePlacer.ChangeDefinition`](/mod/game-api/types/alta-crafting/recipeplacer#m-changedefinition), [`RecipePlacer.Definition`](/mod/game-api/types/alta-crafting/recipeplacer#m-definition), [`TimberBlock.spawnedDefinition`](/mod/game-api/types/alta-crafting/timberblock#m-spawneddefinition), [`ChiselRecipePageProvider.GeneratePage`](/mod/game-api/types/global-c-d/chiselrecipepageprovider#m-generatepage), [`ChiselRecipePageProvider.testRecipe`](/mod/game-api/types/global-c-d/chiselrecipepageprovider#m-testrecipe).
