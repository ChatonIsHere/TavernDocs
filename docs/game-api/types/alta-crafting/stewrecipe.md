---
title: "StewRecipe"
description: "Assets under Cooking/Stew Recipes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewRecipe

A **class** in `Root.Township`, `Alta.Cooking`.

Assets under `Cooking/Stew Recipes`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<StewRecipe>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`IPageBasis`](/game-api/types/alta-items/ipagebasis), [`ICraftingIngredientProvider`](/game-api/types/global-i-l/icraftingingredientprovider)
- **Derived types** [`StewRecipe`](/game-api/types/alta-crafting/stewrecipe), [`StewRecipePageProvider`](/game-api/types/global-s/stewrecipepageprovider)
- **Attributes** `HashedPath`
- **Documented in** [Cooking](/game-api/game-systems/cooking#stewrecipe)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewRecipe()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baseversionhash" /><code>{"private uint baseVersionHash"}</code> |  |
| <Link id="m-combinedstrengths" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combinedStrengths"}</code> |  |
| <Link id="m-effectmodifiers" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectModifiers"}</code> |  |
| <Link id="m-effectmodifiersmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> effectModifiersMap"}</code> |  |
| <Link id="m-extraeffects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] extraEffects"}</code> |  |
| <Link id="m-giveningredients" /><code>{"private static List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> givenIngredients"}</code> |  |
| <Link id="m-possibleliquids" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{"> possibleLiquids"}</code> |  |
| <Link id="m-stewingredients" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/stewingredientbase">{"StewIngredientBase"}</Link>{"> stewIngredients"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseversionhash-2" /><code>{"uint BaseVersionHash { get; }"}</code> |  |
| <Link id="m-effectmodifiers-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] EffectModifiers { get; }"}</code> |  |
| <Link id="m-effectmodifiersmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> EffectModifiersMap { get; }"}</code> |  |
| <Link id="m-extraeffects-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] ExtraEffects { get; }"}</code> |  |
| <Link id="m-isdisabledonsimpleserver" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> |  |
| <Link id="m-prefabquantities" /><code>{"Dictionary<uint, int> PrefabQuantities { get; }"}</code> |  |
| <Link id="m-stewingredients-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/stewingredientbase">{"StewIngredientBase"}</Link>{"> StewIngredients { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> |  |
| <Link id="m-findstewrecipeforingredients" /><code>{"static "}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" FindStewRecipeForIngredients("}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" liquid, IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients)"}</code> |  |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> |  |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> |  |
| <Link id="m-getsteweffects" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> GetStewEffects("}<Link to="/game-api/types/alta-crafting/stewcontentarguments">{"StewContentArguments"}</Link>{" arguments) (iterator)"}</code> |  |
| <Link id="m-checkforduplicates" /><code>{"private void CheckForDuplicates("}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectsList, string listName)"}</code> |  |
| <Link id="m-getingredients" /><code>{"private Dictionary<uint, int> GetIngredients()"}</code> |  |
| <Link id="m-getmodifiedstrength" /><code>{"private static float GetModifiedStrength("}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" currentRecipe, "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effect, float multiplier)"}</code> |  |
| <Link id="m-handleeffectapplication" /><code>{"private static void HandleEffectApplication(Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combined, IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effectApplications, float multiplier)"}</code> |  |
| <Link id="m-handlegarnishmodifiers" /><code>{"private static void HandleGarnishModifiers(Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combined, List<"}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> garnishes)"}</code> |  |
| <Link id="m-isvalidingredientlist" /><code>{"private bool IsValidIngredientList(IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients, out int recipeScore)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `StewRecipe`:

[`StewContentArguments.CurrentRecipe`](/game-api/types/alta-crafting/stewcontentarguments#m-currentrecipe), [`StewManager.currentRecipe`](/game-api/types/alta-crafting/stewmanager#m-currentrecipe), [`StewManager.SwapStewToRecipe`](/game-api/types/alta-crafting/stewmanager#m-swapstewtorecipe), [`StewRecipePageProvider.GeneratePage`](/game-api/types/global-s/stewrecipepageprovider#m-generatepage), [`StewRecipePageProvider.testRecipe`](/game-api/types/global-s/stewrecipepageprovider#m-testrecipe).
