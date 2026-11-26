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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CookableSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CookableSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ICookableSettings`](/mod/game-api/types/alta-crafting/icookablesettings)
- **Derived types** [`CookableEvent`](/mod/game-api/types/alta-crafting/cookableevent), [`CookableSaveData`](/mod/game-api/types/alta-crafting/cookablesavedata), [`CookableUnityEvent`](/mod/game-api/types/alta-crafting/cookableunityevent)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking#roasting-cookable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Cookable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-burntversion" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" burntVersion"}</code> | <span className="api-desc">Prefab the item turns into when burnt.</span> |
| <Link id="m-cookedversion" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" cookedVersion"}</code> | <span className="api-desc">Prefab the item turns into when cooked.</span> |
| <Link id="m-cookingtemperatures" /><code>{"protected "}<Link to="/mod/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" cookingTemperatures"}</code> | <span className="api-desc">The temperature settings asset.</span> |

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burnteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" burntEffect"}</code> | <span className="api-desc">Effect played when the item burns.</span> |
| <Link id="m-burntprogress" /><code>{"private float burntProgress"}</code> | <span className="api-desc">Backing field for `BurntProgress`. Saved.</span> |
| <Link id="m-burntspawnpoint" /><code>{"private Transform burntSpawnPoint"}</code> | <span className="api-desc">Spawn point passed to `ReplaceWith` for the burnt version. `ReplaceWith` ignores it.</span> |
| <Link id="m-cookableitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookableItem"}</code> | <span className="api-desc">Cache for `CookableItem`.</span> |
| <Link id="m-cookedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" cookedEffect"}</code> | <span className="api-desc">Effect played when the item finishes cooking.</span> |
| <Link id="m-cookedprogress" /><code>{"private float cookedProgress"}</code> | <span className="api-desc">Backing field for `CookedProgress`. Saved.</span> |
| <Link id="m-cookedspawnpoint" /><code>{"private Transform cookedSpawnPoint"}</code> | <span className="api-desc">Spawn point passed to `ReplaceWith` for the cooked version. `ReplaceWith` ignores it.</span> |
| <Link id="m-cookingpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" cookingPoint"}</code> | <span className="api-desc">Backing field for `CookingPoint`.</span> |
| <Link id="m-experienceawardedwhenroasted" /><code>{"private int experienceAwardedWhenRoasted"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-isburnable" /><code>{"private bool isBurnable"}</code> | <span className="api-desc">Backing field for `IsBurnable`.</span> |
| <Link id="m-iscookable" /><code>{"private bool isCookable"}</code> | <span className="api-desc">Backing field for `IsCookable`.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Cache for `Pickup`.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> | <span className="api-desc">Method sync that plays the cooked or burnt effect on clients.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-burningtemperature" /><code>{"float BurningTemperature { get; }"}</code> | <span className="api-desc">Temperature above which the item starts burning.</span> |
| <Link id="m-burntprogress-2" /><code>{"float BurntProgress { get; }"}</code> | <span className="api-desc">Burn progress from 0 to 1. Resets when the item cools below the burning temperature.</span> |
| <Link id="m-cookableitem-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" { get; }"}</code> | <span className="api-desc">The `CookableItem` on the pickup's item.</span> |
| <Link id="m-cookedprogress-2" /><code>{"float CookedProgress { get; }"}</code> | <span className="api-desc">Cooking progress. The item becomes the cooked version when it passes 1; it decays back while cool.</span> |
| <Link id="m-cookingpoint-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" { get; }"}</code> | <span className="api-desc">The heat point on the same object that gives the temperature.</span> |
| <Link id="m-cookingtemperatures-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" { get; }"}</code> | <span className="api-desc">The temperature and duration settings for weak, optimal and burning cooking.</span> |
| <Link id="m-cookingvalue" /><code>{"float CookingValue { get; private set; }"}</code> | <span className="api-desc">How close the heat is to optimal, from 0 (weak) to 1 (optimal). 0 while too cool.</span> |
| <Link id="m-currenttemperature" /><code>{"float CurrentTemperature { get; }"}</code> | <span className="api-desc">Current temperature of the cooking point.</span> |
| <Link id="m-isburnable-2" /><code>{"bool IsBurnable { get; }"}</code> | <span className="api-desc">Whether the item can burn.</span> |
| <Link id="m-isburning" /><code>{"bool IsBurning { get; private set; }"}</code> | <span className="api-desc">True while above the burning temperature.</span> |
| <Link id="m-iscookable-2" /><code>{"bool IsCookable { get; }"}</code> | <span className="api-desc">Whether the item can cook.</span> |
| <Link id="m-isusingsimplecookingmode" /><code>{"bool IsUsingSimpleCookingMode { get; set; }"}</code> | <span className="api-desc">Set by cooking pots for their ingredients: progress only goes up and the item never swaps or burns.</span> |
| <Link id="m-optimalcookingtemperature" /><code>{"float OptimalCookingTemperature { get; }"}</code> | <span className="api-desc">Temperature at which cooking is fastest.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The pickup this belongs to, found in parents.</span> |
| <Link id="m-weakcookingtemperature" /><code>{"float WeakCookingTemperature { get; }"}</code> | <span className="api-desc">Lowest temperature that cooks at all.</span> |

<details className="api-private">
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burningduration" /><code>{"private float BurningDuration { get; }"}</code> | <span className="api-desc">Seconds above the burning temperature before the item burns.</span> |
| <Link id="m-instantburntemperature" /><code>{"private float InstantBurnTemperature { get; }"}</code> | <span className="api-desc">Temperature at which the item burns at once.</span> |
| <Link id="m-optimalcookingduration" /><code>{"private float OptimalCookingDuration { get; }"}</code> | <span className="api-desc">Seconds to cook at the optimal temperature.</span> |
| <Link id="m-weakcookingduration" /><code>{"private float WeakCookingDuration { get; }"}</code> | <span className="api-desc">Seconds to cook at the weak temperature.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-swappedtoburntversion" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" SwappedToBurntVersion"}</code> | <span className="api-desc">Raised with the new entity (or null) when the item burns.</span> |
| <Link id="m-swappedtocookedversion" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" SwappedToCookedVersion"}</code> | <span className="api-desc">Raised with the new entity (or null) when the item finishes cooking. Stews listen to it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network message that plays the cooked or burnt effect on clients.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: enables cooking straight away if the item is already hot or part done, otherwise waits for heat.</span> |
| <Link id="m-replacewith" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ReplaceWith(uint prefabHash, "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect, Transform spawnPosition)"}</code> | <span className="api-desc">Plays the effect, spawns the given prefab in place (if the hash is not 0) and destroys this item. Returns the new entity.</span> |
| <Link id="m-resetprogress" /><code>{"void ResetProgress()"}</code> | <span className="api-desc">Sets cooked progress back to 0.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advancecookedprogressfortemperature" /><code>{"private void AdvanceCookedProgressForTemperature(float temperature)"}</code> | <span className="api-desc">Adds cooking progress for this frame: faster the closer the heat is to optimal. Also sets `CookingValue`.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the cooking point and pickup and starts disabled until heat is high enough.</span> |
| <Link id="m-checkenable" /><code>{"private void CheckEnable("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">Heat change handler: enables cooking once the point is above the weak temperature and the item is not docked.</span> |
| <Link id="m-handleburnabletemperatures" /><code>{"private bool HandleBurnableTemperatures(float temperature)"}</code> | <span className="api-desc">Adds burn progress while above the burning temperature (resets it below). True when the item should burn now.</span> |
| <Link id="m-handlenormalcookingtemperature" /><code>{"private bool HandleNormalCookingTemperature(float temperature)"}</code> | <span className="api-desc">Cooks while above the weak temperature, decays progress below it. True when cooked progress passes 1.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks `CheckEnable` from the cooking point.</span> |
| <Link id="m-spawncookedversion" /><code>{"private void SpawnCookedVersion()"}</code> | <span className="api-desc">Swaps to the cooked prefab, raises `SwappedToCookedVersion` and counts a cooked food stat for the last holder.</span> |
| <Link id="m-swaptoburntversion" /><code>{"private void SwapToBurntVersion()"}</code> | <span className="api-desc">Swaps to the burnt prefab and raises `SwappedToBurntVersion`.</span> |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isCooked)"}</code> | <span className="api-desc">Method sync handler: plays the cooked or burnt effect at the item on receivers.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Server, while enabled: stops and resets when docked, otherwise advances burning and cooking and swaps the item when done.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Cookable`:

<div className="api-used-in">

[`CookingPot.ContainedCookables`](/mod/game-api/types/alta-crafting/cookingpot#m-containedcookables), [`CookingPot.convertedCookabled`](/mod/game-api/types/alta-crafting/cookingpot#m-convertedcookabled), [`CookingPot.DisableNormalCookingOnIngredients`](/mod/game-api/types/alta-crafting/cookingpot#m-disablenormalcookingoningredients), [`CookingPot.HandleIngredientAddedWhenLocked`](/mod/game-api/types/alta-crafting/cookingpot#m-handleingredientaddedwhenlocked), [`CookingPot.HandleNewIngredient`](/mod/game-api/types/alta-crafting/cookingpot#m-handlenewingredient), [`CookingPot.IngredientAdded`](/mod/game-api/types/alta-crafting/cookingpot#m-ingredientadded), [`CookingPot.IngredientRemoved`](/mod/game-api/types/alta-crafting/cookingpot#m-ingredientremoved), [`CookingPot.RejectIngredient`](/mod/game-api/types/alta-crafting/cookingpot#m-rejectingredient), [`CookingPot.ResetCookableIngredient`](/mod/game-api/types/alta-crafting/cookingpot#m-resetcookableingredient), [`StewComponent.cookable`](/mod/game-api/types/alta-crafting/stewcomponent#m-cookable), [`StewComponent.Cookable`](/mod/game-api/types/alta-crafting/stewcomponent#m-cookable-2), [`StewManager.AddCookableToStew`](/mod/game-api/types/alta-crafting/stewmanager#m-addcookabletostew), [`StewManager.AddIngredient`](/mod/game-api/types/alta-crafting/stewmanager#m-addingredient).

</div>
