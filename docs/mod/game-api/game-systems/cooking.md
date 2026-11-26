---
title: Cooking
description: Roasting food with Cookable, and stews with CookingPot, StewManager and StewRecipe, and where to hook each step.
sidebar_position: 10
---

# Cooking

`Alta.Cooking` in `Root.Township`. Server only for the rules.

Two kinds of cooking share the same parts:

- **Roasting:** a food item with a `Cookable` gets hot (over a fire, on a pan) and turns into its cooked version, or later its burnt version.
- **Stewing:** a `CookingPot` with liquid in it warms up, ingredients dropped in dissolve into a stew, and the stew's effects come from the ingredients, the liquid, garnishes and (if one matches) a `StewRecipe`. The result is a liquid you drink. See [Liquids](liquids.md).

Both are driven by [heat](heat.md): a `Cookable`'s `CookingPoint` is a `HeatPoint`.

## Roasting: Cookable

`Alta.Cooking.Cookable : NetworkEntityBehaviour`. On every cookable or burnable food.

It's disabled until, on the server, its `CookingPoint` goes above the weak cooking temperature while the item isn't docked. Then its `Update` runs every frame (server only; clients never enable it):

- **Burning** (if `IsBurnable`): above `BurningTemperature`, `BurntProgress` rises over the burning duration, and above `InstantBurnTemperature` it burns at once. When done it swaps to `burntVersion`.
- **Cooking** (if `IsCookable`): above `WeakCookingTemperature`, `CookedProgress` rises. The time to cook goes from the weak duration at the weak temperature to the optimal duration at the optimal temperature. Below the weak temperature, progress decays over `CookingSettings.CookableDecayDuration` seconds. At 1 it swaps to `cookedVersion`.
- Docking the item resets cooked progress and turns it off again.

The code's `CookingTemperatures` defaults are weak 80 for 60 s, optimal 180 for 30 s, burning 200 for 10 s, instant burn 220. In the assets (build `main-1.7.2.1.42203`), about 140 of the 160 `Cookable` components use exactly those. The exceptions are slower or hotter foods, for example:

| Food | Weak | Optimal | Burning | Instant burn |
| --- | --- | --- | --- | --- |
| Most food and stews | 80 for 60 s | 180 for 30 s | 200 for 10 s | 220 |
| Whole pumpkin (ripe, cooked, burnt) | 80 for 240 s | 180 for 120 s | 200 for 40 s | 220 |
| Pumpkin piece | 80 for 30 s | 180 for 15 s | 200 for 5 s | 220 |
| Potato Full Ripe and Cooked | 110 for 60 s | 180 for 30 s | 200 for 60 s | 220 |
| Apple core | 60 for 60 s | 150 for 30 s | 180 for 10 s | 250 |

So a typical food over a fire at 180 or more cooks in 30 seconds, and if it gets above 200 it burns 10 seconds later. [Cookables and garnishes](../reference/recipes.md#cookables-and-garnishes) lists every food's stew category and effects (not its temperatures).

| Member | What it does | Notes |
| --- | --- | --- |
| `float CookedProgress`, `float BurntProgress { get; }` | 0 to 1. | Saved. |
| `float CurrentTemperature { get; }` | The cooking point's temperature. | |
| `bool IsCookable`, `bool IsBurnable { get; }` | What it can turn into. | |
| `CookingTemperatures CookingTemperatures { get; }` | Its temperature thresholds and durations. | |
| `bool IsUsingSimpleCookingMode { get; set; }` | Set by a pot for ingredients: progress only, no swapping. | |
| `CookableItem CookableItem { get; }` | The item's stew data (category, effects, chunk visual). | |
| `NetworkEntity ReplaceWith(uint prefabHash, PooledObjectDefinition effect, Transform spawnPosition)` | Swaps the item for another prefab (0 for none) and destroys it. | |
| `event NetworkEntityHandler SwappedToCookedVersion`, `SwappedToBurntVersion` | Raised with the new entity (null if none). | |

`SpawnCookedVersion` and `SwapToBurntVersion` (private) do the swaps. Cooking also counts the `CookFoodStat` achievement for the last player who held it. Roasting gives no XP in this build, and the Cooking skill tree is disabled with no skills; see [Progression](progression.md).

## Stewing

### CookingPot

`Alta.Cooking.CookingPot : NetworkEntityBehaviour`. Its `CookingStage` (an enum inside `CookingPot`) moves through `Preparation`, `WarmingUp`, `Stewing` and `StewLocked`. Everything below is set up in `InitializeAsServer`.

1. **Preparation to WarmingUp:** liquid poured in. The pot registers the liquid's heat point with its heat area and tells the `StewManager` the base liquid.
2. **WarmingUp to Stewing:** once the liquid and an ingredient are both above `CookingSettings.MinimumStewingTemperature`, and nobody is holding the ingredient, the pot creates the default stew, starts `Stewing`, refuses more liquid, and hands the ingredient to the `StewManager`.
3. **Stewing:** each ingredient that gets hot enough dissolves into the stew. Garnishes are only taken now.
4. **StewLocked:** when the stew has `PotDefinition.MinNumberOfIngredients`, the manager picks a recipe and locks. New ingredients are pushed back out.

Only items whose `CookableItem` is exactly `CookableItem` count as ingredients; `CookingGarnish` items are garnishes. Emptying the pot (`StewEmptied`) resets everything.

### StewManager

`Alta.Cooking.StewManager : NetworkEntityBehaviour`. Next to the pot, saved with it. Holds the stew.

| Member | What it does |
| --- | --- |
| `List<CookableItem> Ingredients { get; }`, `List<CookingGarnish> Garnishes { get; }` | What's in the stew. |
| `LiquidDefinition StewLiquidBase { get; }` | The liquid it started from. |
| `void AddCookableToStew(Cookable cookable)` | Adds an ingredient and fades the item out. |
| `void AddGarnishToStew(ICookingGarnishMarker garnish)` | Adds a garnish. |
| `void RemoveAnyStew(bool isDestroyingStewEntity = true)` | Clears it. |
| `event Action<CookableItem> AddedIngredient` | Raised with each ingredient added. Server. |

Private steps worth knowing (CookingLib patches most of them):

- `CheckForRecipe` and `CheckForValidRecipe`: at the minimum ingredient count, `StewRecipe.FindStewRecipeForIngredients` picks a recipe. No match swaps the stew for `CookingSettings.NonRecipeStewPrefab`.
- `CreateContentWithTint`: builds the stew's `LiquidData` from `StewRecipe.GetStewEffects` and puts it in the pot.
- `HandleNewStewStage`: the stew entity has its own `Cookable`, so it cooks on into its next stage and can burn. A burnt-away stew empties the pot.

### StewRecipe

`Alta.Cooking.StewRecipe : HashedGeneralValue<StewRecipe>`. Assets under `Cooking/Stew Recipes`.

| Member | What it does |
| --- | --- |
| `static StewRecipe FindStewRecipeForIngredients(LiquidDefinition liquid, IEnumerable<CookableItem> ingredients)` | The best-scoring recipe whose ingredient count matches exactly, whose `possibleLiquids` include `liquid`, and whose every `StewIngredients` entry is met by a different ingredient. Null if none. |
| `static IEnumerable<EffectDefinitionApplication> GetStewEffects(StewContentArguments arguments)` | Adds up the effects: `CookingSettings.GlobalStewEffects`, each ingredient's effects (times the stew's `BaseEffectsMultiplier`), the liquid's (times `BaseLiquidEffectsMultiplier`), the recipe's `ExtraEffects`, and garnishes (which also multiply). Then scales each effect by the recipe's `EffectModifiers`. |
| `List<StewIngredientBase> StewIngredients { get; }` | Ingredient slots. A slot is a `CookableCategoryDefinition` or a `CookableCollectionDefinition`, which says whether a `CookableItem` fits and with what score. |
| `uint BaseVersionHash { get; }` | The stew prefab this recipe swaps to. |
| `EffectDefinitionApplication[] ExtraEffects`, `EffectModifiers` | Extra effects and per-effect multipliers. |

`StewContentArguments` is a struct with `CurrentRecipe`, `Stew` (the `StewComponent`), `LiquidBase`, `Ingredients` and `Garnishes`.

## CookingSettings

`GlobalSettings<CookingSettings>.Instance`. `CookableDecayDuration`, `MinimumStewingTemperature`, `DefaultStew`, `NonRecipeStewPrefab`, `GlobalStewEffects`, `MaxNumberOfItemsInStew` (the network limit), `IsAssumingNoEffectModificationOnMissing` and the dissolve effects.

:::note[Asset values]
Build `main-1.7.2.1.42203`, checked against a live server's `CookingSettings`.
:::

| Setting | Value |
| --- | --- |
| `cookableDecayDuration` | 30 s (a half-cooked food loses its progress over 30 s off the heat) |
| `minimumStewingTemperature` | 80 |
| `ingredientRejectionForce` | 300 |
| `maxNumberOfItemsInStew` | 31 |
| `globalStewEffects` | `Feed` at 3, so every stew adds 3 fullness on top of its ingredients |
| `isAssumingNoEffectModificationOnMissing` | on (effects a recipe doesn't list keep their strength) |
| `Medium Pot` (`PotDefinition`) | 4 ingredients to lock a stew, 3 garnishes |

There are 15 stew recipes. Two examples:

| Recipe | Ingredients | Extra effects | Effect modifiers |
| --- | --- | --- | --- |
| Poultry Potato Stew | 2 Poultry, 2 Potato | none | damage buff x1.3, `Nourish` x1.1 |
| Vegetable Ragu | Eggplant, Onion, Carrot, Tomato | `Nourish` 0.3 | damage protection buff x1.35, `Nourish` x1.1 |

Ingredient slots are categories (Berries, Fruit, Garnish, Mushrooms, Pork, Poultry, Vegetables) or collections (Brown, Red, Cave and Glowing Mushroom, Carrot, Eggplant, Onion, Potato, Pumpkin, Tomato). Every recipe takes `Water` as its only liquid (checked against a live server). [Recipes](../reference/recipes.md#stews) lists all 15, with their ingredients and effects.

## Hooking it

- **Recipe matching:** `StewRecipe.FindStewRecipeForIngredients` is public and static. A postfix can swap `__result`.
- **Stew strength:** `StewRecipe.GetStewEffects` is an iterator. A postfix gets the unstarted enumerable; replace `__result` with your own list.
- **Roasting:** `Cookable`'s private `AdvanceCookedProgressForTemperature`, `SpawnCookedVersion` and `SwapToBurntVersion` are good targets. `Update` runs every frame for every warm food item, so avoid it.
- **New ingredients or recipes** need `CookableItem`s and `StewRecipe` assets that exist on clients too, since stews and their effects are sent by hash. That's what CookingLib provides.

```csharp
using System.Collections.Generic;
using System.Linq;
using Alta.Alchemy;
using Alta.Cooking;
using HarmonyLib;

[HarmonyPatch(typeof(StewRecipe), nameof(StewRecipe.GetStewEffects))]
static class StrongerStewPatch
{
    static void Postfix(StewContentArguments arguments, ref IEnumerable<EffectDefinitionApplication> __result)
    {
        if (arguments.CurrentRecipe == null)
        {
            return;
        }
        __result = __result
            .Select(e => new EffectDefinitionApplication(e.EffectToModify, e.StrengthMultiplier * 1.5f))
            .ToList();
    }
}
```

Food roasts a quarter faster with this. The method and the `cookedProgress` field are private, so the patch names them by string:

```csharp
using Alta.Cooking;
using HarmonyLib;

[HarmonyPatch(typeof(Cookable), "AdvanceCookedProgressForTemperature")]
static class FasterRoastPatch
{
    static readonly AccessTools.FieldRef<Cookable, float> Progress =
        AccessTools.FieldRefAccess<Cookable, float>("cookedProgress");

    static void Prefix(Cookable __instance, out float __state) => __state = Progress(__instance);

    static void Postfix(Cookable __instance, float __state)
    {
        Progress(__instance) += (Progress(__instance) - __state) * 0.25f;
    }
}
```

## Other types in this area

| Type | What it is |
| --- | --- |
| `CookingPoint` | The `HeatPoint` on a cookable. |
| `CookingLiquid` | The pot's liquid: its heat point, boiling effects and conversion to stew liquid. |
| `StewComponent` | On a stew entity: tint, effect multipliers, and its own `Cookable` for the next stage. |
| `CookingGarnish`, `CookingGarnishComponent` | Garnish items: extra effects and multipliers. |
| `CookableCategoryDefinition`, `CookableCollectionDefinition` | Recipe ingredient slots. |
| `PotDefinition` | `MinNumberOfIngredients`, `NumberOfGarnishes`. |
| `CookingStage` (the `ItemComponent`) | Marks an item `Burnt`, `Cooked`, `Ripe` or `Unripe`. Not the pot's stage enum. |
| `FruitNinja` | A test spawner (editor Start and Stop buttons) that spawns random `itemsToSpawn`, faster over time. |
| `LiquidChunkVisuals`, `LiquidVisualChunkDefinition` | The floating chunks you see in a stew. Client visuals. |

## See also

- [Heat](heat.md)
- [Liquids](liquids.md)
- [Hunger, eating and drinking](hunger-and-eating.md)
- [Effects](effects.md)
