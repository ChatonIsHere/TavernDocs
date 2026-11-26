---
title: "CookingPot"
description: "The cooking pot: tracks ingredients and garnishes dropped in, and moves through the stages Preparation, WarmingUp, Stewing and StewLocked as liquid is added..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPot

A **class** in `Root.Township`, `Alta.Cooking`.

The cooking pot: tracks ingredients and garnishes dropped in, and moves through the stages Preparation, WarmingUp, Stewing and StewLocked as liquid is added and heats up. The server runs it; the `StewManager` on the same object makes the stew.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<CookingPotSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<CookingPotSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CookingPotSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`CookingPotSaveData`](/game-api/types/alta-crafting/cookingpotsavedata)
- **Nested types** [`CookingStage`](/game-api/types/alta-crafting/cookingpot-cookingstage)
- **Documented in** [Cooking](/game-api/game-systems/cooking#cookingpot)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookingPot()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkingforconversiontemperature" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" checkingForConversionTemperature"}</code> | The running temperature check coroutine. |
| <Link id="m-containedgarnishes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{"> containedGarnishes"}</code> | Set for garnishes in the pot. Not used in this file. |
| <Link id="m-convertedcookabled" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> convertedCookabled"}</code> | Ingredients already added to the stew, so they aren't added twice. |
| <Link id="m-cookingliquid" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" cookingLiquid"}</code> | Backing field for `CookingLiquid`. |
| <Link id="m-currentstage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpot-cookingstage">{"CookingPot.CookingStage"}</Link>{" currentStage"}</code> | The pot's cooking stage. Saved, but `Load` copies the field into the save data instead of back, so it is probably never restored. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-potdefinition" /><code>{"private "}<Link to="/game-api/types/alta-crafting/potdefinition">{"PotDefinition"}</Link>{" potDefinition"}</code> | Backing field for `Definition`. |
| <Link id="m-potheatarea" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" potHeatArea"}</code> | The heat area that heats the liquid and stew. |
| <Link id="m-potvolume" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpotvolume">{"CookingPotVolume"}</Link>{" potVolume"}</code> | Trigger volume that reports objects entering and leaving the pot. |
| <Link id="m-rejectedingredient" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookableevent">{"CookableEvent"}</Link>{" rejectedIngredient"}</code> | Event fired with an ingredient the locked pot pushed out. |
| <Link id="m-startedstewing" /><code>{"private UnityEvent startedStewing"}</code> | Event fired when the pot starts stewing. |
| <Link id="m-stewmanager" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewmanager">{"StewManager"}</Link>{" stewManager"}</code> | The stew manager on the same object. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containedcookables" /><code>{"HashSet<"}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> ContainedCookables { get; }"}</code> | The plain cookable ingredients currently in the pot. |
| <Link id="m-cookingliquid-2" /><code><Link to="/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" "}<Link to="/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" { get; }"}</code> | The pot's liquid, which holds the water or stew. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-crafting/potdefinition">{"PotDefinition"}</Link>{" Definition { get; }"}</code> | The pot's settings, such as how many ingredients a stew needs and how many garnishes it takes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks the pot volume and liquid events, and starts warming up if liquid is already in. |
| <Link id="m-registerstewtoheatarea" /><code>{"void RegisterStewToHeatArea("}<Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew)"}</code> | Adds the stew's cooking point to the pot's heat area so the stew keeps cooking. |
| <Link id="m-startstewlockedstage" /><code>{"void StartStewLockedStage()"}</code> | Locks the stew so no more ingredients are taken, and stops the temperature check. Called by `StewManager`. |

<details>
<summary>25 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforconversiontemperature" /><code>{"private IEnumerator CheckForConversionTemperature() (iterator)"}</code> | Coroutine that, while the liquid is hot enough, adds each hot, untouched ingredient in the pot to the stew. Runs until the stew locks. |
| <Link id="m-disablenormalcookingoningredients" /><code>{"private void DisableNormalCookingOnIngredients(IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> ingredients)"}</code> | Puts ingredients into simple cooking mode while they are in the stewing pot. |
| <Link id="m-garnishadded" /><code>{"private void GarnishAdded("}<Link to="/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{" garnish)"}</code> | Adds a garnish to the stew, but only while stewing or locked. |
| <Link id="m-handleanyingredientsinpotthathaventcalledevents" /><code>{"private void HandleAnyIngredientsInPotThatHaventCalledEvents()"}</code> | On load, registers ingredients already inside the pot volume. |
| <Link id="m-handleexistinggarnishes" /><code>{"private void HandleExistingGarnishes()"}</code> | When stewing starts, adds garnishes that were already in the pot. |
| <Link id="m-handleexistingingredientforstewing" /><code>{"private void HandleExistingIngredientForStewing()"}</code> | Switches current ingredients to simple cooking and starts the temperature check. |
| <Link id="m-handleingredientaddedwhenlocked" /><code>{"private void HandleIngredientAddedWhenLocked("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> | Rejects an ingredient added after the stew is locked. |
| <Link id="m-handlenewingredient" /><code>{"private void HandleNewIngredient("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> | While stewing, prepares a new ingredient and restarts the temperature check if needed; when locked, rejects it. |
| <Link id="m-ingredientadded" /><code>{"private void IngredientAdded("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> | Tracks a new cookable ingredient and handles it for the current stage. |
| <Link id="m-ingredientremoved" /><code>{"private void IngredientRemoved("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> | Stops tracking an ingredient and turns its normal cooking back on. |
| <Link id="m-iscookable" /><code>{"private bool IsCookable("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | True if the item has a `CookableItem` component of exactly that type (not a subclass). |
| <Link id="m-itemaddedtopot" /><code>{"private void ItemAddedToPot(GameObject obj)"}</code> | Pot volume handler: sorts a new object into garnish or ingredient. |
| <Link id="m-itemremovedfrompot" /><code>{"private void ItemRemovedFromPot(GameObject obj)"}</code> | Pot volume handler: removes a cookable ingredient that left the pot. |
| <Link id="m-loadatcurrentstage" /><code>{"private void LoadAtCurrentStage()"}</code> | After a load, re-runs the stage setup up to `currentStage` and finds the child stew. |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | Registers ingredients already in the pot, then restores the current stage. |
| <Link id="m-rejectingredient" /><code>{"private void RejectIngredient("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> | Pushes the ingredient out with a force from `CookingSettings` and fires `rejectedIngredient`. |
| <Link id="m-resetcookableingredient" /><code>{"private void ResetCookableIngredient("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> | Turns normal cooking back on for an ingredient. |
| <Link id="m-setstewonstewmanager" /><code>{"private void SetStewOnStewManager()"}</code> | Finds the stew entity under the pot and hands it to the stew manager. Used when loading. |
| <Link id="m-startcheckingforconversiontemperature" /><code>{"private void StartCheckingForConversionTemperature()"}</code> | Restarts the `CheckForConversionTemperature` coroutine. |
| <Link id="m-startstewing" /><code>{"private void StartStewing()"}</code> | On the first ingredient converted while warming up, moves to Stewing, creates the default stew and adds existing garnishes. |
| <Link id="m-startstewingstage" /><code>{"private void StartStewingStage()"}</code> | Sets the stage to Stewing, makes the liquid refuse more liquid and fires `startedStewing`. |
| <Link id="m-startwarmingup" /><code>{"private void StartWarmingUp()"}</code> | Starts warming up when liquid is added during Preparation. |
| <Link id="m-startwarmingupstage" /><code>{"private void StartWarmingUpStage(bool isSettingLiquidOfStewManager)"}</code> | Sets the stage to WarmingUp, heats the liquid in the pot's heat area and optionally sets the stew's base liquid. |
| <Link id="m-stewemptied" /><code>{"private void StewEmptied()"}</code> | Resets the pot to Preparation when the stew or liquid is emptied, and removes the stew. |
| <Link id="m-wateraddedtopot" /><code>{"private void WaterAddedToPot()"}</code> | Liquid handler that starts warming up. |

</details>

## Used in

Members of other types that take, return or hold a `CookingPot`:

[`StewManager.pot`](/game-api/types/alta-crafting/stewmanager#m-pot).
