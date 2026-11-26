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
| <Link id="m-ctor" /><code>{"StewRecipe()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseversionhash" /><code>{"private uint baseVersionHash"}</code> | Backing field for `BaseVersionHash`. |
| <Link id="m-combinedstrengths" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combinedStrengths"}</code> | Shared scratch map used while working out stew effects. |
| <Link id="m-effectmodifiers" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectModifiers"}</code> | Backing field for `EffectModifiers`. |
| <Link id="m-effectmodifiersmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> effectModifiersMap"}</code> | Lazy cache behind `EffectModifiersMap`. |
| <Link id="m-extraeffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] extraEffects"}</code> | Backing field for `ExtraEffects`. |
| <Link id="m-giveningredients" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> givenIngredients"}</code> | Shared scratch list used while matching ingredients. |
| <Link id="m-possibleliquids" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{"> possibleLiquids"}</code> | Liquids this stew can be made with. `FindStewRecipeForIngredients` requires the stew's liquid to be in it. |
| <Link id="m-stewingredients" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/stewingredientbase">{"StewIngredientBase"}</Link>{"> stewIngredients"}</code> | Backing field for `StewIngredients`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseversionhash-2" /><code>{"uint BaseVersionHash { get; }"}</code> | Hash of the prefab for this recipe's stew. |
| <Link id="m-effectmodifiers-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] EffectModifiers { get; }"}</code> | Multipliers for effects this recipe changes. |
| <Link id="m-effectmodifiersmap-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> EffectModifiersMap { get; }"}</code> | `EffectModifiers` as a dictionary by effect, built on first read. |
| <Link id="m-extraeffects-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] ExtraEffects { get; }"}</code> | Effects the recipe adds on top of its ingredients. |
| <Link id="m-isdisabledonsimpleserver" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> | Always false. |
| <Link id="m-prefabquantities" /><code>{"Dictionary<uint, int> PrefabQuantities { get; }"}</code> | Ingredient counts by prefab hash. Only counts cookables whose prefab name contains "Ripe". |
| <Link id="m-stewingredients-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/stewingredientbase">{"StewIngredientBase"}</Link>{"> StewIngredients { get; }"}</code> | The ingredients the recipe needs, one entry each. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | Makes the recipe's page data with the stew recipe page provider. |
| <Link id="m-findstewrecipeforingredients" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" FindStewRecipeForIngredients("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" liquid, IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients)"}</code> | Best scoring recipe for a liquid and ingredient list (same count, every ingredient matched), or null. |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | The recipe's hash. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | Identifier of the stew recipe page provider. |
| <Link id="m-getsteweffects" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> GetStewEffects("}<Link to="/mod/game-api/types/alta-crafting/stewcontentarguments">{"StewContentArguments"}</Link>{" arguments) (iterator)"}</code> | Works out a stew's final effects: global, ingredients, liquid, recipe extras and garnishes, then recipe modifiers. Zero strengths are skipped. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: fills in a default liquid and logs duplicate effects. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforduplicates" /><code>{"private void CheckForDuplicates("}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectsList, string listName)"}</code> | Editor check that logs an error if an effect list has the same effect twice. |
| <Link id="m-getingredients" /><code>{"private Dictionary<uint, int> GetIngredients()"}</code> | Builds `PrefabQuantities`: for each ingredient slot, the first cookable whose prefab name has Ripe, counted by prefab hash. |
| <Link id="m-getmodifiedstrength" /><code>{"private static float GetModifiedStrength("}<Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" currentRecipe, "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effect, float multiplier)"}</code> | Returns the recipe's modifier for an effect times the multiplier, or 1 or 0 by cooking settings when the recipe has none. |
| <Link id="m-handleeffectapplication" /><code>{"private static void HandleEffectApplication(Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combined, IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effectApplications, float multiplier)"}</code> | Adds each effect's strength, times a multiplier, into the combined strength map. |
| <Link id="m-handlegarnishmodifiers" /><code>{"private static void HandleGarnishModifiers(Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combined, List<"}<Link to="/mod/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> garnishes)"}</code> | Multiplies already-combined effects by each garnish's effect multipliers. |
| <Link id="m-isvalidingredientlist" /><code>{"private bool IsValidIngredientList(IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients, out int recipeScore)"}</code> | Checks every recipe slot matches one of the given ingredients and totals a match score for picking the best recipe. |

</details>

## Used in

Members of other types that take, return or hold a `StewRecipe`:

[`StewContentArguments.CurrentRecipe`](/mod/game-api/types/alta-crafting/stewcontentarguments#m-currentrecipe), [`StewManager.currentRecipe`](/mod/game-api/types/alta-crafting/stewmanager#m-currentrecipe), [`StewManager.SwapStewToRecipe`](/mod/game-api/types/alta-crafting/stewmanager#m-swapstewtorecipe), [`StewRecipePageProvider.GeneratePage`](/mod/game-api/types/global-s/stewrecipepageprovider#m-generatepage), [`StewRecipePageProvider.testRecipe`](/mod/game-api/types/global-s/stewrecipepageprovider#m-testrecipe).
