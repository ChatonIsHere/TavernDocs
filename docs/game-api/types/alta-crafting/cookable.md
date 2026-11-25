---
title: "Cookable"
description: "Makes an item cook and burn from the heat at its CookingPoint, then replace itself with a cooked or burnt prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Cookable

A **class** in `Root.Township`, `Alta.Cooking`.

Makes an item cook and burn from the heat at its `CookingPoint`, then replace itself with a cooked or burnt prefab. Only runs on the server: it is enabled once the item is hot enough and not docked. Progress is saved.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CookableSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CookableSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ICookableSettings`](/game-api/types/alta-crafting/icookablesettings)
- **Derived types** [`CookableEvent`](/game-api/types/alta-crafting/cookableevent), [`CookableSaveData`](/game-api/types/alta-crafting/cookablesavedata), [`CookableUnityEvent`](/game-api/types/alta-crafting/cookableunityevent)
- **Documented in** [Cooking](/game-api/game-systems/cooking#roasting-cookable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Cookable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-burnteffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" burntEffect"}</code> |  |
| <Link id="m-burntprogress" /><code>{"private float burntProgress"}</code> |  |
| <Link id="m-burntspawnpoint" /><code>{"private Transform burntSpawnPoint"}</code> |  |
| <Link id="m-burntversion" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" burntVersion"}</code> | Prefab the item turns into when burnt. |
| <Link id="m-cookableitem" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookableItem"}</code> |  |
| <Link id="m-cookedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" cookedEffect"}</code> |  |
| <Link id="m-cookedprogress" /><code>{"private float cookedProgress"}</code> |  |
| <Link id="m-cookedspawnpoint" /><code>{"private Transform cookedSpawnPoint"}</code> |  |
| <Link id="m-cookedversion" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" cookedVersion"}</code> | Prefab the item turns into when cooked. |
| <Link id="m-cookingpoint" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" cookingPoint"}</code> |  |
| <Link id="m-cookingtemperatures" /><code>{"protected "}<Link to="/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" cookingTemperatures"}</code> | The temperature settings asset. |
| <Link id="m-experienceawardedwhenroasted" /><code>{"private int experienceAwardedWhenRoasted"}</code> |  |
| <Link id="m-isburnable" /><code>{"private bool isBurnable"}</code> |  |
| <Link id="m-iscookable" /><code>{"private bool isCookable"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-burningtemperature" /><code>{"float BurningTemperature { get; }"}</code> | Temperature above which the item starts burning. |
| <Link id="m-burntprogress-2" /><code>{"float BurntProgress { get; }"}</code> | Burn progress from 0 to 1. Resets when the item cools below the burning temperature. |
| <Link id="m-cookableitem-2" /><code><Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" "}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" { get; }"}</code> | The `CookableItem` on the pickup's item. |
| <Link id="m-cookedprogress-2" /><code>{"float CookedProgress { get; }"}</code> | Cooking progress. The item becomes the cooked version when it passes 1; it decays back while cool. |
| <Link id="m-cookingpoint-2" /><code><Link to="/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" "}<Link to="/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" { get; }"}</code> | The heat point on the same object that gives the temperature. |
| <Link id="m-cookingtemperatures-2" /><code><Link to="/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" "}<Link to="/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" { get; }"}</code> | The temperature and duration settings for weak, optimal and burning cooking. |
| <Link id="m-cookingvalue" /><code>{"float CookingValue { get; private set; }"}</code> | How close the heat is to optimal, from 0 (weak) to 1 (optimal). 0 while too cool. |
| <Link id="m-currenttemperature" /><code>{"float CurrentTemperature { get; }"}</code> | Current temperature of the cooking point. |
| <Link id="m-isburnable-2" /><code>{"bool IsBurnable { get; }"}</code> | Whether the item can burn. |
| <Link id="m-isburning" /><code>{"bool IsBurning { get; private set; }"}</code> | True while above the burning temperature. |
| <Link id="m-iscookable-2" /><code>{"bool IsCookable { get; }"}</code> | Whether the item can cook. |
| <Link id="m-isusingsimplecookingmode" /><code>{"bool IsUsingSimpleCookingMode { get; set; }"}</code> | Set by cooking pots for their ingredients: progress only goes up and the item never swaps or burns. |
| <Link id="m-optimalcookingtemperature" /><code>{"float OptimalCookingTemperature { get; }"}</code> | Temperature at which cooking is fastest. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup this belongs to, found in parents. |
| <Link id="m-weakcookingtemperature" /><code>{"float WeakCookingTemperature { get; }"}</code> | Lowest temperature that cooks at all. |
| <Link id="m-burningduration" /><code>{"private float BurningDuration { get; }"}</code> |  |
| <Link id="m-instantburntemperature" /><code>{"private float InstantBurnTemperature { get; }"}</code> |  |
| <Link id="m-optimalcookingduration" /><code>{"private float OptimalCookingDuration { get; }"}</code> |  |
| <Link id="m-weakcookingduration" /><code>{"private float WeakCookingDuration { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-swappedtoburntversion" /><code>{"event "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" SwappedToBurntVersion"}</code> | Raised with the new entity (or null) when the item burns. |
| <Link id="m-swappedtocookedversion" /><code>{"event "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" SwappedToCookedVersion"}</code> | Raised with the new entity (or null) when the item finishes cooking. Stews listen to it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network message that plays the cooked or burnt effect on clients. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: enables cooking straight away if the item is already hot or part done, otherwise waits for heat. |
| <Link id="m-replacewith" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ReplaceWith(uint prefabHash, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect, Transform spawnPosition)"}</code> | Plays the effect, spawns the given prefab in place (if the hash is not 0) and destroys this item. Returns the new entity. |
| <Link id="m-resetprogress" /><code>{"void ResetProgress()"}</code> | Sets cooked progress back to 0. |
| <Link id="m-advancecookedprogressfortemperature" /><code>{"private void AdvanceCookedProgressForTemperature(float temperature)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkenable" /><code>{"private void CheckEnable("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> |  |
| <Link id="m-handleburnabletemperatures" /><code>{"private bool HandleBurnableTemperatures(float temperature)"}</code> |  |
| <Link id="m-handlenormalcookingtemperature" /><code>{"private bool HandleNormalCookingTemperature(float temperature)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-spawncookedversion" /><code>{"private void SpawnCookedVersion()"}</code> |  |
| <Link id="m-swaptoburntversion" /><code>{"private void SwapToBurntVersion()"}</code> |  |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isCooked)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Cookable`:

[`CookingPot.ContainedCookables`](/game-api/types/alta-crafting/cookingpot#m-containedcookables), [`CookingPot.convertedCookabled`](/game-api/types/alta-crafting/cookingpot#m-convertedcookabled), [`CookingPot.DisableNormalCookingOnIngredients`](/game-api/types/alta-crafting/cookingpot#m-disablenormalcookingoningredients), [`CookingPot.HandleIngredientAddedWhenLocked`](/game-api/types/alta-crafting/cookingpot#m-handleingredientaddedwhenlocked), [`CookingPot.HandleNewIngredient`](/game-api/types/alta-crafting/cookingpot#m-handlenewingredient), [`CookingPot.IngredientAdded`](/game-api/types/alta-crafting/cookingpot#m-ingredientadded), [`CookingPot.IngredientRemoved`](/game-api/types/alta-crafting/cookingpot#m-ingredientremoved), [`CookingPot.RejectIngredient`](/game-api/types/alta-crafting/cookingpot#m-rejectingredient), [`CookingPot.ResetCookableIngredient`](/game-api/types/alta-crafting/cookingpot#m-resetcookableingredient), [`StewComponent.cookable`](/game-api/types/alta-crafting/stewcomponent#m-cookable), [`StewComponent.Cookable`](/game-api/types/alta-crafting/stewcomponent#m-cookable-2), [`StewManager.AddCookableToStew`](/game-api/types/alta-crafting/stewmanager#m-addcookabletostew), [`StewManager.AddIngredient`](/game-api/types/alta-crafting/stewmanager#m-addingredient).
