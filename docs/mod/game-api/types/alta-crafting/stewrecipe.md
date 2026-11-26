---
title: "StewRecipe"
description: "A stew recipe asset: which liquids and ingredients make it, its base prefab and how it changes the stew's effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewRecipe

A **class** in `Root.Township`, `Alta.Cooking`.

A stew recipe asset: which liquids and ingredients make it, its base prefab and how it changes the stew's effects. Looked up by hash; also a page basis for recipe books.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<StewRecipe>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), [`IPageBasis`](/mod/game-api/types/alta-items/ipagebasis), [`ICraftingIngredientProvider`](/mod/game-api/types/global-i-l/icraftingingredientprovider)
- **Derived types** [`StewRecipe`](/mod/game-api/types/alta-crafting/stewrecipe), [`StewRecipePageProvider`](/mod/game-api/types/global-s/stewrecipepageprovider)
- **Attributes** `HashedPath`
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking#stewrecipe)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewRecipe()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseversionhash" /><code>{"private uint baseVersionHash"}</code> | <span className="api-desc">Backing field for `BaseVersionHash`.</span> |
| <Link id="m-combinedstrengths" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combinedStrengths"}</code> | <span className="api-desc">Shared scratch map used while working out stew effects.</span> |
| <Link id="m-effectmodifiers" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectModifiers"}</code> | <span className="api-desc">Backing field for `EffectModifiers`.</span> |
| <Link id="m-effectmodifiersmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> effectModifiersMap"}</code> | <span className="api-desc">Lazy cache behind `EffectModifiersMap`.</span> |
| <Link id="m-extraeffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] extraEffects"}</code> | <span className="api-desc">Backing field for `ExtraEffects`.</span> |
| <Link id="m-giveningredients" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> givenIngredients"}</code> | <span className="api-desc">Shared scratch list used while matching ingredients.</span> |
| <Link id="m-possibleliquids" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{"> possibleLiquids"}</code> | <span className="api-desc">Liquids this stew can be made with. `FindStewRecipeForIngredients` requires the stew's liquid to be in it.</span> |
| <Link id="m-stewingredients" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/stewingredientbase">{"StewIngredientBase"}</Link>{"> stewIngredients"}</code> | <span className="api-desc">Backing field for `StewIngredients`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseversionhash-2" /><code>{"uint BaseVersionHash { get; }"}</code> | <span className="api-desc">Hash of the prefab for this recipe's stew.</span> |
| <Link id="m-effectmodifiers-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] EffectModifiers { get; }"}</code> | <span className="api-desc">Multipliers for effects this recipe changes.</span> |
| <Link id="m-effectmodifiersmap-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> EffectModifiersMap { get; }"}</code> | <span className="api-desc">`EffectModifiers` as a dictionary by effect, built on first read.</span> |
| <Link id="m-extraeffects-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] ExtraEffects { get; }"}</code> | <span className="api-desc">Effects the recipe adds on top of its ingredients.</span> |
| <Link id="m-isdisabledonsimpleserver" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-prefabquantities" /><code>{"Dictionary<uint, int> PrefabQuantities { get; }"}</code> | <span className="api-desc">Ingredient counts by prefab hash. Only counts cookables whose prefab name contains "Ripe".</span> |
| <Link id="m-stewingredients-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/stewingredientbase">{"StewIngredientBase"}</Link>{"> StewIngredients { get; }"}</code> | <span className="api-desc">The ingredients the recipe needs, one entry each.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | <span className="api-desc">Makes the recipe's page data with the stew recipe page provider.</span> |
| <Link id="m-findstewrecipeforingredients" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" FindStewRecipeForIngredients("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" liquid, IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients)"}</code> | <span className="api-desc">Best scoring recipe for a liquid and ingredient list (same count, every ingredient matched), or null.</span> |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | <span className="api-desc">The recipe's hash.</span> |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | <span className="api-desc">Identifier of the stew recipe page provider.</span> |
| <Link id="m-getsteweffects" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> GetStewEffects("}<Link to="/mod/game-api/types/alta-crafting/stewcontentarguments">{"StewContentArguments"}</Link>{" arguments) (iterator)"}</code> | <span className="api-desc">Works out a stew's final effects: global, ingredients, liquid, recipe extras and garnishes, then recipe modifiers. Zero strengths are skipped.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: fills in a default liquid and logs duplicate effects.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforduplicates" /><code>{"private void CheckForDuplicates("}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectsList, string listName)"}</code> | <span className="api-desc">Editor check that logs an error if an effect list has the same effect twice.</span> |
| <Link id="m-getingredients" /><code>{"private Dictionary<uint, int> GetIngredients()"}</code> | <span className="api-desc">Builds `PrefabQuantities`: for each ingredient slot, the first cookable whose prefab name has Ripe, counted by prefab hash.</span> |
| <Link id="m-getmodifiedstrength" /><code>{"private static float GetModifiedStrength("}<Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" currentRecipe, "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effect, float multiplier)"}</code> | <span className="api-desc">Returns the recipe's modifier for an effect times the multiplier, or 1 or 0 by cooking settings when the recipe has none.</span> |
| <Link id="m-handleeffectapplication" /><code>{"private static void HandleEffectApplication(Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combined, IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effectApplications, float multiplier)"}</code> | <span className="api-desc">Adds each effect's strength, times a multiplier, into the combined strength map.</span> |
| <Link id="m-handlegarnishmodifiers" /><code>{"private static void HandleGarnishModifiers(Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combined, List<"}<Link to="/mod/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> garnishes)"}</code> | <span className="api-desc">Multiplies already-combined effects by each garnish's effect multipliers.</span> |
| <Link id="m-isvalidingredientlist" /><code>{"private bool IsValidIngredientList(IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients, out int recipeScore)"}</code> | <span className="api-desc">Checks every recipe slot matches one of the given ingredients and totals a match score for picking the best recipe.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StewRecipe`:

<div className="api-used-in">

[`StewContentArguments.CurrentRecipe`](/mod/game-api/types/alta-crafting/stewcontentarguments#m-currentrecipe), [`StewManager.currentRecipe`](/mod/game-api/types/alta-crafting/stewmanager#m-currentrecipe), [`StewManager.SwapStewToRecipe`](/mod/game-api/types/alta-crafting/stewmanager#m-swapstewtorecipe), [`StewRecipePageProvider.GeneratePage`](/mod/game-api/types/global-s/stewrecipepageprovider#m-generatepage), [`StewRecipePageProvider.testRecipe`](/mod/game-api/types/global-s/stewrecipepageprovider#m-testrecipe).

</div>
