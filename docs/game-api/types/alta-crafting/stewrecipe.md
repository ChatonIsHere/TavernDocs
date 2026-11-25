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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<StewRecipe>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`IPageBasis`](/game-api/types/alta-items/ipagebasis), [`ICraftingIngredientProvider`](/game-api/types/global-i-l/icraftingingredientprovider)
- **Derived types** [`StewRecipe`](/game-api/types/alta-crafting/stewrecipe), [`StewRecipePageProvider`](/game-api/types/global-s/stewrecipepageprovider)
- **Attributes** `HashedPath`
- **Documented in** [Cooking](/game-api/game-systems/cooking#stewrecipe)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StewRecipe()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-baseversionhash" /><code>{"private uint baseVersionHash"}</code> |
| <Link id="m-combinedstrengths" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combinedStrengths"}</code> |
| <Link id="m-effectmodifiers" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectModifiers"}</code> |
| <Link id="m-effectmodifiersmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> effectModifiersMap"}</code> |
| <Link id="m-extraeffects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] extraEffects"}</code> |
| <Link id="m-giveningredients" /><code>{"private static List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> givenIngredients"}</code> |
| <Link id="m-possibleliquids" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{"> possibleLiquids"}</code> |
| <Link id="m-stewingredients" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/stewingredientbase">{"StewIngredientBase"}</Link>{"> stewIngredients"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseversionhash-2" /><code>{"uint BaseVersionHash { get; }"}</code> | Hash of the prefab for this recipe's stew. |
| <Link id="m-effectmodifiers-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] EffectModifiers { get; }"}</code> | Multipliers for effects this recipe changes. |
| <Link id="m-effectmodifiersmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> EffectModifiersMap { get; }"}</code> | `EffectModifiers` as a dictionary by effect, built on first read. |
| <Link id="m-extraeffects-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] ExtraEffects { get; }"}</code> | Effects the recipe adds on top of its ingredients. |
| <Link id="m-isdisabledonsimpleserver" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> | Always false. |
| <Link id="m-prefabquantities" /><code>{"Dictionary<uint, int> PrefabQuantities { get; }"}</code> | Ingredient counts by prefab hash. Only counts cookables whose prefab name contains "Ripe". |
| <Link id="m-stewingredients-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/stewingredientbase">{"StewIngredientBase"}</Link>{"> StewIngredients { get; }"}</code> | The ingredients the recipe needs, one entry each. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | Makes the recipe's page data with the stew recipe page provider. |
| <Link id="m-findstewrecipeforingredients" /><code>{"static "}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" FindStewRecipeForIngredients("}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" liquid, IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients)"}</code> | Best scoring recipe for a liquid and ingredient list (same count, every ingredient matched), or null. |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | The recipe's hash. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | Identifier of the stew recipe page provider. |
| <Link id="m-getsteweffects" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> GetStewEffects("}<Link to="/game-api/types/alta-crafting/stewcontentarguments">{"StewContentArguments"}</Link>{" arguments) (iterator)"}</code> | Works out a stew's final effects: global, ingredients, liquid, recipe extras and garnishes, then recipe modifiers. Zero strengths are skipped. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: fills in a default liquid and logs duplicate effects. |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkforduplicates" /><code>{"private void CheckForDuplicates("}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectsList, string listName)"}</code> |
| <Link id="m-getingredients" /><code>{"private Dictionary<uint, int> GetIngredients()"}</code> |
| <Link id="m-getmodifiedstrength" /><code>{"private static float GetModifiedStrength("}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" currentRecipe, "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effect, float multiplier)"}</code> |
| <Link id="m-handleeffectapplication" /><code>{"private static void HandleEffectApplication(Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combined, IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effectApplications, float multiplier)"}</code> |
| <Link id="m-handlegarnishmodifiers" /><code>{"private static void HandleGarnishModifiers(Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> combined, List<"}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> garnishes)"}</code> |
| <Link id="m-isvalidingredientlist" /><code>{"private bool IsValidIngredientList(IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients, out int recipeScore)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `StewRecipe`:

[`StewContentArguments.CurrentRecipe`](/game-api/types/alta-crafting/stewcontentarguments#m-currentrecipe), [`StewManager.currentRecipe`](/game-api/types/alta-crafting/stewmanager#m-currentrecipe), [`StewManager.SwapStewToRecipe`](/game-api/types/alta-crafting/stewmanager#m-swapstewtorecipe), [`StewRecipePageProvider.GeneratePage`](/game-api/types/global-s/stewrecipepageprovider#m-generatepage), [`StewRecipePageProvider.testRecipe`](/game-api/types/global-s/stewrecipepageprovider#m-testrecipe).
