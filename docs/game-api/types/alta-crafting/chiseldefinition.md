---
title: "ChiselDefinition"
description: "SimpleHashedGeneralValue<ChiselDefinition> under Carpentry/Chisel Definitions: a recipe page for chiselling."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselDefinition

A **class** in `Root.Township`, `Alta.Carpentry`.

`SimpleHashedGeneralValue<ChiselDefinition>` under `Carpentry/Chisel Definitions`: a recipe page for chiselling.

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
| <Link id="m-emptyscore" /><code>{"const int EmptyScore"}</code> |  |
| <Link id="m-recipeglyph" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" recipeGlyph"}</code> |  |
| <Link id="m-shardcount" /><code>{"const int ShardCount"}</code> |  |
| <Link id="m-undonepenalty" /><code>{"const int UndonePenalty"}</code> |  |
| <Link id="m-btnrandomize" /><code>{"private bool btnRandomize"}</code> |  |
| <Link id="m-chiselorder" /><code>{"private List<int> chiselOrder"}</code> |  |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/game-api/types/alta-crafting/prefabspawnposition">{"PrefabSpawnPosition"}</Link>{"[] prefabs"}</code> |  |
| <Link id="m-size" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chiselorder-2" /><code>{"List<int> ChiselOrder { get; }"}</code> |  |
| <Link id="m-prefabs-2" /><code><Link to="/game-api/types/alta-crafting/prefabspawnposition">{"PrefabSpawnPosition"}</Link>{"[] Prefabs { get; }"}</code> |  |
| <Link id="m-size-2" /><code><Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> |  |
| <Link id="m-getbest" /><code>{"static "}<Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" GetBest(List<int> chisellingOrder, "}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size)"}</code> |  |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> |  |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChiselDefinition`:

[`ChisellingDeck.Guide`](/game-api/types/alta-crafting/chisellingdeck#m-guide), [`ChisellingDeckSaveData.spawned`](/game-api/types/alta-crafting/chisellingdecksavedata#m-spawned), [`ChisellingDeckSaveData2.spawned`](/game-api/types/alta-crafting/chisellingdecksavedata2#m-spawned), [`OldChisellingDeckSaveData1.spawned`](/game-api/types/alta-crafting/oldchisellingdecksavedata1#m-spawned), [`RecipePlacer.ChangeDefinition`](/game-api/types/alta-crafting/recipeplacer#m-changedefinition), [`RecipePlacer.Definition`](/game-api/types/alta-crafting/recipeplacer#m-definition), [`TimberBlock.spawnedDefinition`](/game-api/types/alta-crafting/timberblock#m-spawneddefinition), [`ChiselRecipePageProvider.GeneratePage`](/game-api/types/global-c-d/chiselrecipepageprovider#m-generatepage), [`ChiselRecipePageProvider.testRecipe`](/game-api/types/global-c-d/chiselrecipepageprovider#m-testrecipe).
