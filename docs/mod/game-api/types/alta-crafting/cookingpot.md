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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<CookingPotSaveData>`](/mod/game-api/types/alta-world/isavablefull-t), [`ISavable<CookingPotSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CookingPotSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/mod/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`CookingPotSaveData`](/mod/game-api/types/alta-crafting/cookingpotsavedata)
- **Nested types** [`CookingStage`](/mod/game-api/types/alta-crafting/cookingpot-cookingstage)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking#cookingpot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingPot()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkingforconversiontemperature" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" checkingForConversionTemperature"}</code> | <span className="api-desc">The running temperature check coroutine.</span> |
| <Link id="m-containedgarnishes" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{"> containedGarnishes"}</code> | <span className="api-desc">Set for garnishes in the pot. Not used in this file.</span> |
| <Link id="m-convertedcookabled" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> convertedCookabled"}</code> | <span className="api-desc">Ingredients already added to the stew, so they aren't added twice.</span> |
| <Link id="m-cookingliquid" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" cookingLiquid"}</code> | <span className="api-desc">Backing field for `CookingLiquid`.</span> |
| <Link id="m-currentstage" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingpot-cookingstage">{"CookingPot.CookingStage"}</Link>{" currentStage"}</code> | <span className="api-desc">The pot's cooking stage. Saved, but `Load` copies the field into the save data instead of back, so it is probably never restored.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-potdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/potdefinition">{"PotDefinition"}</Link>{" potDefinition"}</code> | <span className="api-desc">Backing field for `Definition`.</span> |
| <Link id="m-potheatarea" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" potHeatArea"}</code> | <span className="api-desc">The heat area that heats the liquid and stew.</span> |
| <Link id="m-potvolume" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingpotvolume">{"CookingPotVolume"}</Link>{" potVolume"}</code> | <span className="api-desc">Trigger volume that reports objects entering and leaving the pot.</span> |
| <Link id="m-rejectedingredient" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookableevent">{"CookableEvent"}</Link>{" rejectedIngredient"}</code> | <span className="api-desc">Event fired with an ingredient the locked pot pushed out.</span> |
| <Link id="m-startedstewing" /><code>{"private UnityEvent startedStewing"}</code> | <span className="api-desc">Event fired when the pot starts stewing.</span> |
| <Link id="m-stewmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/stewmanager">{"StewManager"}</Link>{" stewManager"}</code> | <span className="api-desc">The stew manager on the same object.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containedcookables" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> ContainedCookables { get; }"}</code> | <span className="api-desc">The plain cookable ingredients currently in the pot.</span> |
| <Link id="m-cookingliquid-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" { get; }"}</code> | <span className="api-desc">The pot's liquid, which holds the water or stew.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-crafting/potdefinition">{"PotDefinition"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">The pot's settings, such as how many ingredients a stew needs and how many garnishes it takes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks the pot volume and liquid events, and starts warming up if liquid is already in.</span> |
| <Link id="m-registerstewtoheatarea" /><code>{"void RegisterStewToHeatArea("}<Link to="/mod/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew)"}</code> | <span className="api-desc">Adds the stew's cooking point to the pot's heat area so the stew keeps cooking.</span> |
| <Link id="m-startstewlockedstage" /><code>{"void StartStewLockedStage()"}</code> | <span className="api-desc">Locks the stew so no more ingredients are taken, and stops the temperature check. Called by `StewManager`.</span> |

<details className="api-private">
<summary>25 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforconversiontemperature" /><code>{"private IEnumerator CheckForConversionTemperature() (iterator)"}</code> | <span className="api-desc">Coroutine that, while the liquid is hot enough, adds each hot, untouched ingredient in the pot to the stew. Runs until the stew locks.</span> |
| <Link id="m-disablenormalcookingoningredients" /><code>{"private void DisableNormalCookingOnIngredients(IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> ingredients)"}</code> | <span className="api-desc">Puts ingredients into simple cooking mode while they are in the stewing pot.</span> |
| <Link id="m-garnishadded" /><code>{"private void GarnishAdded("}<Link to="/mod/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{" garnish)"}</code> | <span className="api-desc">Adds a garnish to the stew, but only while stewing or locked.</span> |
| <Link id="m-handleanyingredientsinpotthathaventcalledevents" /><code>{"private void HandleAnyIngredientsInPotThatHaventCalledEvents()"}</code> | <span className="api-desc">On load, registers ingredients already inside the pot volume.</span> |
| <Link id="m-handleexistinggarnishes" /><code>{"private void HandleExistingGarnishes()"}</code> | <span className="api-desc">When stewing starts, adds garnishes that were already in the pot.</span> |
| <Link id="m-handleexistingingredientforstewing" /><code>{"private void HandleExistingIngredientForStewing()"}</code> | <span className="api-desc">Switches current ingredients to simple cooking and starts the temperature check.</span> |
| <Link id="m-handleingredientaddedwhenlocked" /><code>{"private void HandleIngredientAddedWhenLocked("}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> | <span className="api-desc">Rejects an ingredient added after the stew is locked.</span> |
| <Link id="m-handlenewingredient" /><code>{"private void HandleNewIngredient("}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> | <span className="api-desc">While stewing, prepares a new ingredient and restarts the temperature check if needed; when locked, rejects it.</span> |
| <Link id="m-ingredientadded" /><code>{"private void IngredientAdded("}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> | <span className="api-desc">Tracks a new cookable ingredient and handles it for the current stage.</span> |
| <Link id="m-ingredientremoved" /><code>{"private void IngredientRemoved("}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> | <span className="api-desc">Stops tracking an ingredient and turns its normal cooking back on.</span> |
| <Link id="m-iscookable" /><code>{"private bool IsCookable("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | <span className="api-desc">True if the item has a `CookableItem` component of exactly that type (not a subclass).</span> |
| <Link id="m-itemaddedtopot" /><code>{"private void ItemAddedToPot(GameObject obj)"}</code> | <span className="api-desc">Pot volume handler: sorts a new object into garnish or ingredient.</span> |
| <Link id="m-itemremovedfrompot" /><code>{"private void ItemRemovedFromPot(GameObject obj)"}</code> | <span className="api-desc">Pot volume handler: removes a cookable ingredient that left the pot.</span> |
| <Link id="m-loadatcurrentstage" /><code>{"private void LoadAtCurrentStage()"}</code> | <span className="api-desc">After a load, re-runs the stage setup up to `currentStage` and finds the child stew.</span> |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | <span className="api-desc">Registers ingredients already in the pot, then restores the current stage.</span> |
| <Link id="m-rejectingredient" /><code>{"private void RejectIngredient("}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> | <span className="api-desc">Pushes the ingredient out with a force from `CookingSettings` and fires `rejectedIngredient`.</span> |
| <Link id="m-resetcookableingredient" /><code>{"private void ResetCookableIngredient("}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> | <span className="api-desc">Turns normal cooking back on for an ingredient.</span> |
| <Link id="m-setstewonstewmanager" /><code>{"private void SetStewOnStewManager()"}</code> | <span className="api-desc">Finds the stew entity under the pot and hands it to the stew manager. Used when loading.</span> |
| <Link id="m-startcheckingforconversiontemperature" /><code>{"private void StartCheckingForConversionTemperature()"}</code> | <span className="api-desc">Restarts the `CheckForConversionTemperature` coroutine.</span> |
| <Link id="m-startstewing" /><code>{"private void StartStewing()"}</code> | <span className="api-desc">On the first ingredient converted while warming up, moves to Stewing, creates the default stew and adds existing garnishes.</span> |
| <Link id="m-startstewingstage" /><code>{"private void StartStewingStage()"}</code> | <span className="api-desc">Sets the stage to Stewing, makes the liquid refuse more liquid and fires `startedStewing`.</span> |
| <Link id="m-startwarmingup" /><code>{"private void StartWarmingUp()"}</code> | <span className="api-desc">Starts warming up when liquid is added during Preparation.</span> |
| <Link id="m-startwarmingupstage" /><code>{"private void StartWarmingUpStage(bool isSettingLiquidOfStewManager)"}</code> | <span className="api-desc">Sets the stage to WarmingUp, heats the liquid in the pot's heat area and optionally sets the stew's base liquid.</span> |
| <Link id="m-stewemptied" /><code>{"private void StewEmptied()"}</code> | <span className="api-desc">Resets the pot to Preparation when the stew or liquid is emptied, and removes the stew.</span> |
| <Link id="m-wateraddedtopot" /><code>{"private void WaterAddedToPot()"}</code> | <span className="api-desc">Liquid handler that starts warming up.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CookingPot`:

<div className="api-used-in">

[`StewManager.pot`](/mod/game-api/types/alta-crafting/stewmanager#m-pot).

</div>
