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
| <Link id="m-ctor" /><code>{"ChiselDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emptyscore" /><code>{"const int EmptyScore"}</code> | <span className="api-desc">Weight (2500) for getting no result when picking with `GetBest`.</span> |
| <Link id="m-recipeglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" recipeGlyph"}</code> | <span className="api-desc">Glyph shown for this recipe.</span> |
| <Link id="m-shardcount" /><code>{"const int ShardCount"}</code> | <span className="api-desc">Number of outer shards (12).</span> |
| <Link id="m-undonepenalty" /><code>{"const int UndonePenalty"}</code> | <span className="api-desc">Error added per shard missing from the chiselled order (5).</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnrandomize" /><code>{"private bool btnRandomize"}</code> | <span className="api-desc">Inspector button that shuffles `chiselOrder`.</span> |
| <Link id="m-chiselorder" /><code>{"private List<int> chiselOrder"}</code> | <span className="api-desc">Backing field for `ChiselOrder`: the order the 12 outer pieces should be chiselled in to get this result.</span> |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/prefabspawnposition">{"PrefabSpawnPosition"}</Link>{"[] prefabs"}</code> | <span className="api-desc">Backing field for `Prefabs`: what spawns on the block, and where, when this definition is the result.</span> |
| <Link id="m-size" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> | <span className="api-desc">Backing field for `Size`. Only definitions of the block's size are considered.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chiselorder-2" /><code>{"List<int> ChiselOrder { get; }"}</code> | <span className="api-desc">The 12 shard indexes in the order this recipe removes them.</span> |
| <Link id="m-prefabs-2" /><code><Link to="/mod/game-api/types/alta-crafting/prefabspawnposition">{"PrefabSpawnPosition"}</Link>{"[] Prefabs { get; }"}</code> | <span className="api-desc">Prefabs (with positions) spawned as the result.</span> |
| <Link id="m-size-2" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | <span className="api-desc">Block size this recipe needs.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | <span className="api-desc">Builds the recipe page for this definition.</span> |
| <Link id="m-getbest" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" GetBest(List<int> chisellingOrder, "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size)"}</code> | <span className="api-desc">Picks a recipe for a chiselled order and size. An exact match wins; else a weighted random pick where worse matches weigh more.</span> |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | <span className="api-desc">The definition's hash.</span> |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | <span className="api-desc">The chisel recipe page provider's identifier.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Resets `chiselOrder` to 0 to 11 when it doesn't have 12 entries, and shuffles it when the Randomize button is pressed.</span> |

## Used in

Members of other types that take, return or hold a `ChiselDefinition`:

<div className="api-used-in">

[`ChisellingDeck.Guide`](/mod/game-api/types/alta-crafting/chisellingdeck#m-guide), [`ChisellingDeckSaveData.spawned`](/mod/game-api/types/alta-crafting/chisellingdecksavedata#m-spawned), [`ChisellingDeckSaveData2.spawned`](/mod/game-api/types/alta-crafting/chisellingdecksavedata2#m-spawned), [`OldChisellingDeckSaveData1.spawned`](/mod/game-api/types/alta-crafting/oldchisellingdecksavedata1#m-spawned), [`RecipePlacer.ChangeDefinition`](/mod/game-api/types/alta-crafting/recipeplacer#m-changedefinition), [`RecipePlacer.Definition`](/mod/game-api/types/alta-crafting/recipeplacer#m-definition), [`TimberBlock.spawnedDefinition`](/mod/game-api/types/alta-crafting/timberblock#m-spawneddefinition), [`ChiselRecipePageProvider.GeneratePage`](/mod/game-api/types/global-c-d/chiselrecipepageprovider#m-generatepage), [`ChiselRecipePageProvider.testRecipe`](/mod/game-api/types/global-c-d/chiselrecipepageprovider#m-testrecipe).

</div>
