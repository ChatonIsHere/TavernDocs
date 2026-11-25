---
title: "CookingPot"
description: "Its CookingStage (an enum inside CookingPot) moves through Preparation, WarmingUp, Stewing and StewLocked. Everything below is set up in InitializeAsS"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPot

A **class** in `Root.Township`, `Alta.Cooking`.

Its `CookingStage` (an enum inside `CookingPot`) moves through `Preparation`, `WarmingUp`, `Stewing` and `StewLocked`. Everything below is set up in `InitializeAsServer`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<CookingPotSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<CookingPotSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CookingPotSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`CookingPotSaveData`](/game-api/types/alta-crafting/cookingpotsavedata)
- **Nested types** [`CookingStage`](/game-api/types/alta-crafting/cookingpot-cookingstage)
- **Documented in** [Cooking](/game-api/game-systems/cooking#cookingpot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingPot()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkingforconversiontemperature" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" checkingForConversionTemperature"}</code> |  |
| <Link id="m-containedgarnishes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{"> containedGarnishes"}</code> |  |
| <Link id="m-convertedcookabled" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> convertedCookabled"}</code> |  |
| <Link id="m-cookingliquid" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" cookingLiquid"}</code> |  |
| <Link id="m-currentstage" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpot-cookingstage">{"CookingPot.CookingStage"}</Link>{" currentStage"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-potdefinition" /><code>{"private "}<Link to="/game-api/types/alta-crafting/potdefinition">{"PotDefinition"}</Link>{" potDefinition"}</code> |  |
| <Link id="m-potheatarea" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" potHeatArea"}</code> |  |
| <Link id="m-potvolume" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpotvolume">{"CookingPotVolume"}</Link>{" potVolume"}</code> |  |
| <Link id="m-rejectedingredient" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookableevent">{"CookableEvent"}</Link>{" rejectedIngredient"}</code> |  |
| <Link id="m-startedstewing" /><code>{"private UnityEvent startedStewing"}</code> |  |
| <Link id="m-stewmanager" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewmanager">{"StewManager"}</Link>{" stewManager"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containedcookables" /><code>{"HashSet<"}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> ContainedCookables { get; }"}</code> |  |
| <Link id="m-cookingliquid-2" /><code><Link to="/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" "}<Link to="/game-api/types/alta-crafting/cookingliquid">{"CookingLiquid"}</Link>{" { get; }"}</code> |  |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-crafting/potdefinition">{"PotDefinition"}</Link>{" Definition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-registerstewtoheatarea" /><code>{"void RegisterStewToHeatArea("}<Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew)"}</code> |  |
| <Link id="m-startstewlockedstage" /><code>{"void StartStewLockedStage()"}</code> |  |
| <Link id="m-checkforconversiontemperature" /><code>{"private IEnumerator CheckForConversionTemperature() (iterator)"}</code> |  |
| <Link id="m-disablenormalcookingoningredients" /><code>{"private void DisableNormalCookingOnIngredients(IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{"> ingredients)"}</code> |  |
| <Link id="m-garnishadded" /><code>{"private void GarnishAdded("}<Link to="/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{" garnish)"}</code> |  |
| <Link id="m-handleanyingredientsinpotthathaventcalledevents" /><code>{"private void HandleAnyIngredientsInPotThatHaventCalledEvents()"}</code> |  |
| <Link id="m-handleexistinggarnishes" /><code>{"private void HandleExistingGarnishes()"}</code> |  |
| <Link id="m-handleexistingingredientforstewing" /><code>{"private void HandleExistingIngredientForStewing()"}</code> |  |
| <Link id="m-handleingredientaddedwhenlocked" /><code>{"private void HandleIngredientAddedWhenLocked("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> |  |
| <Link id="m-handlenewingredient" /><code>{"private void HandleNewIngredient("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> |  |
| <Link id="m-ingredientadded" /><code>{"private void IngredientAdded("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> |  |
| <Link id="m-ingredientremoved" /><code>{"private void IngredientRemoved("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> |  |
| <Link id="m-iscookable" /><code>{"private bool IsCookable("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> |  |
| <Link id="m-itemaddedtopot" /><code>{"private void ItemAddedToPot(GameObject obj)"}</code> |  |
| <Link id="m-itemremovedfrompot" /><code>{"private void ItemRemovedFromPot(GameObject obj)"}</code> |  |
| <Link id="m-loadatcurrentstage" /><code>{"private void LoadAtCurrentStage()"}</code> |  |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> |  |
| <Link id="m-rejectingredient" /><code>{"private void RejectIngredient("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" newIngredient)"}</code> |  |
| <Link id="m-resetcookableingredient" /><code>{"private void ResetCookableIngredient("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookableIngredient)"}</code> |  |
| <Link id="m-setstewonstewmanager" /><code>{"private void SetStewOnStewManager()"}</code> |  |
| <Link id="m-startcheckingforconversiontemperature" /><code>{"private void StartCheckingForConversionTemperature()"}</code> |  |
| <Link id="m-startstewing" /><code>{"private void StartStewing()"}</code> |  |
| <Link id="m-startstewingstage" /><code>{"private void StartStewingStage()"}</code> |  |
| <Link id="m-startwarmingup" /><code>{"private void StartWarmingUp()"}</code> |  |
| <Link id="m-startwarmingupstage" /><code>{"private void StartWarmingUpStage(bool isSettingLiquidOfStewManager)"}</code> |  |
| <Link id="m-stewemptied" /><code>{"private void StewEmptied()"}</code> |  |
| <Link id="m-wateraddedtopot" /><code>{"private void WaterAddedToPot()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CookingPot`:

[`StewManager.pot`](/game-api/types/alta-crafting/stewmanager#m-pot).
