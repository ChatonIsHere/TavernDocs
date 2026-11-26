---
title: Game systems
description: The gameplay systems in Root.Township (stats, food, crafting, smelting, cooking, progression and more), which side runs them, and where to hook them.
sidebar_position: 1
---

# Game systems

These pages cover the systems a player interacts with: stats and hunger, eating and drinking, crafting, heat, smelting and forging, cooking, XP and skills, farming, trading and a few smaller ones. Everything here is in `Root.Township` (build `main-1.7.2.1.42203`).

## Pages

| Page | What it covers |
| --- | --- |
| [Stats](stats.md) | `StatManager`, `Stat`, `StatDefinition`, modifiers. Health, hunger and every other number on a body. |
| [Hunger, eating and drinking](hunger-and-eating.md) | `HungerStat`, `FullnessStat`, `ConsumptionManager`, `EdibleObject`, `PlayerDrinkingMouth`. |
| [Effects](effects.md) | `Alta.Alchemy`: what food, drinks and potions do to the body. |
| [Progression](progression.md) | `PlayerProgressionManager`, `PathExperience`, `ProgressionSettings`. Where XP comes from. |
| [Skills and unlocks](skills-and-unlocks.md) | Skill trees, shrines and orbs, and the climbing tower's stations (`PlayerUnlockStation`). |
| [Crafting](crafting.md) | Joining parts, generic crafting stations (recipe page and nails), `RaycastCrafter`. |
| [Heat](heat.md) | `HeatPoint`, heat sources, fires and fuel. |
| [Smelting and forging](smelting-and-forging.md) | `Smelter`, smelting recipes, moulds, bellows, `ForgedModel`, the recycler. |
| [Cooking](cooking.md) | Roasting (`Cookable`) and stews (`CookingPot`, `StewManager`, `StewRecipe`). |
| [Liquids](liquids.md) | Liquid containers, liquid data and how liquid moves. |
| [Farming, woodcutting and carpentry](farming-and-woodcutting.md) | Growing plants, trees, chiselling. |
| [Trading](trading.md) | Trade vendors, tax, the ATM bank, postboxes. |
| [Customization](customization.md) | Cosmetics, outfits and armour visuals. |
| [Other systems](other-systems.md) | Enchantments, mechanisms, logic circuits, fuses, `GameTaskManager`. |

## Who runs what

Almost all game rules run on the server. The pattern is the same everywhere:

- A component subscribes to its events in `InitializeAsServer`, or checks `NetworkSceneManager.IsServer` before it acts. Docking an ore in a smelter, a pot reaching temperature, food finishing a bite: the client sees the same events, but only the server's copy does anything.
- The server sends results to clients with the entity's `MethodSync` messages (stat syncs, smelter icons, stew changes). A client never decides an outcome. Changing a value on a client changes only what that player sees until the next sync overwrites it.
- Clients run visuals: particles, sounds, the stat bar, the bellows' light. Most visual code is skipped when `ApplicationManager.IsHeadless` is true, which it is on a dedicated server.

So a mod that changes rules (recipe results, XP, hunger, fuel) only needs to be on the server. A mod that adds something players must see in a new way (a new stat bar, a new liquid colour no client knows) needs a client part too, and the client half has to handle a server without it. See [Networking](../networking/overview.md) for how messages work, and [Entity sync](../networking/entity-sync.md) for `MethodSync`.

## Shared building blocks

You meet these in every system:

- **Assets with hashes.** Recipes, stat definitions, effects, liquids, moulds and smelter upgrades are `ScriptableObject`s that derive from `HashedGeneralValue<T>` (in `Alta.Values`). `T.All` lists every loaded one, `T.Get(uint hash)` finds one by hash, and `T.Get(string name)` finds one by asset name. The name lookup strips spaces from what you pass but doesn't lower-case it, while the table is lower-cased, so pass lower case with no spaces (`"hungerstat"`, not `"Hunger Stat"`). The network sends these by hash, so a client can only understand assets it has too.
- **Global settings.** Tuning lives in `GlobalSettings<T>.Instance` (`Alta.Global`): `ProgressionSettings`, `CookingSettings`, `GenericCraftingSettings`, `LiquidSettings`. They're shared assets, so changing a field changes it for the whole process.
- **Server settings.** The host's `ServerSettings` (`ServerHandler.Current.ServerConfig.Settings`) holds knobs these systems read every time they run. Prefer these over a patch when they do what you need:

| Setting | Default | Read by |
| --- | --- | --- |
| `HungerTick` | 0.0005 | `HungerStat`, every stat tick |
| `HealthRegenMultiplier` | 1 | `HungerStat` regeneration |
| `HungerDealsDamage` | true | `HungerStat` starvation |
| `IsResetingHungerOnDeath` | false | `StatManager.DeathReset` |
| `XPX` and `ForgingXPX`, `WoodcuttingXPX`, `MiningXPX`, `ChiselingXPX`, `CookingXPX`, `MeleeXPX`, `RangedXPX` | 1 | `PathExperience.GainExperience` |
| `UnspentExperienceLostOnDeath` | 0 | `PlayerProgressionManager` on death |
| `DecayMultiplier`, `SpawningRateMultiplier` | 1 | decay and spawning, through `NetworkScene` |
| `TimeSpeedMultiplier` | 1 | `Timeline.Instance.TimeSpeed` (set by `TimeManager`). Everything scheduled on the `Timeline` speeds up with it: stat ticks (so hunger and regeneration), timed modifiers, growth stages, vendor tax and tree respawns. |

## Real values

Pages in this area quote values from the game's assets (build `main-1.7.2.1.42203`) where they matter, marked as asset values: player stats, hunger levels, cooking temperatures, stew and smelting recipes, fuel, the XP curve, skill trees and trading costs. The full generated lists of items, recipes and stats are in the [reference tables](../reference/overview.md): [Items and materials](../reference/items-and-materials.md), [Recipes](../reference/recipes.md) and [Stats](../reference/stats.md).

## Hooks that cover a lot

A few methods sit where many systems meet:

- `PlayerProgressionManager.GainExperience(IPlayer, ProgressionPath, int)`: every XP grant in the game ends here. See [Progression](progression.md).
- `ConsumptionManager.HandleConsumptionEffects` (internal): everything a player eats or drinks. See [Hunger, eating and drinking](hunger-and-eating.md).
- `GameTaskManager.ActionExecuted(IPlayer, GameTaskActionArgument)`: a static the game calls for achievement counters when a player eats, smelts, crafts, docks or spawns certain things. See [Other systems](other-systems.md).
- `StatManager.Tick` (protected virtual): once a second per body, on the server.

## What existing mods hook

Real mods are a good map of what works. From their source:

- **CookingLib** patches `CookingPot` (`InitializeAsServer`, `StartWarmingUpStage`, `LoadAtCurrentStage`), `StewManager` (`CheckForValidRecipe`, `HandleNewStewStage`, `CreateContentWithTint`), `StewRecipe.FindStewRecipeForIngredients`, `Cookable` (`SpawnCookedVersion`, `SwapToBurntVersion`), `ConsumptionManager.HandleConsumptionEffects`, `EdibleObject.StartEat`, `PlayerDrinkingMouth.LiquidAmountChanged` and `LiquidData`'s save and network code.
- **CustomRecipesAPI** adds `SmeltingRecipe` and `MouldDefinition` assets by writing them into `HashedGeneralValue<T>`'s private `items` table and into `SmelterUpgrades.recipes`, and adds items to the ore dock's `PickupDockSettings`.
- **Hydrate or Dierate** keeps its thirst value in its own code and sends it with its own message, rather than adding a game stat. [Stats](stats.md) explains why that's the safe choice.
- **DyeingAPI** and CookingLib both patch `LiquidContainerTrigger.OnTriggerEnter` to react to items dipped in liquid.

All of these have to work against the vanilla client, which is why most of them change server-side rules and leave the visuals alone.
