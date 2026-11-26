---
title: "Fire"
description: "A heat source that burns, either on a timer or on fuel from a dock and a fuel area (campfires, the smelter's inner fire, tinder)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Fire

A **class** in `Root.Township`, `Alta.Heat`.

A heat source that burns, either on a timer or on fuel from a dock and a fuel area (campfires, the smelter's inner fire, tinder). The server lights and puts it out; it goes out if docked somewhere that doesn't allow fire.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatSourceBase`](/game-api/types/alta-stats-effects/heatsourcebase), [`IFlammable`](/game-api/types/alta-stats-effects/iflammable), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler), [`ISavable<FireSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<FireSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`FireDissolve`](/game-api/types/alta-stats-effects/firedissolve), [`FireSaveData`](/game-api/types/alta-stats-effects/firesavedata)
- **Nested types** [`FuelConsumptionState`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate)
- **Attributes** `SavingInfo`, `RequireComponent`
- **Documented in** [Heat](/game-api/game-systems/heat#fire), [Health and damage](/game-api/items/health-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Fire()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activefireeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledfireeffect">{"PooledFireEffect"}</Link>{" activeFireEffect"}</code> | The current fire effect, if it's a `PooledFireEffect`. |
| <Link id="m-basefuel" /><code>{"private float baseFuel"}</code> | Fuel the fire starts with, from 0 to 1, before any added fuel. Defaults to 0.3. |
| <Link id="m-basefuelduration" /><code>{"private float baseFuelDuration"}</code> | Seconds the base fuel burns for. |
| <Link id="m-consumptionstate" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState"}</code> | Pooled tracking of fuel in the fuel area while it burns. |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | Crafting part on the prefab root. When set, the fire follows the root's pickup. |
| <Link id="m-destroyed" /><code>{"private static List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> destroyed"}</code> | Static scratch list of destroyed fuel pickups for `TickFuelConsumption`. |
| <Link id="m-destroyonextinguish" /><code>{"private GameObject destroyOnExtinguish"}</code> | Object destroyed when the fire goes out. |
| <Link id="m-firecollider" /><code>{"private Collider fireCollider"}</code> | The fire's collider, turned back on after docking into a dock that isn't physical. |
| <Link id="m-fuelarea" /><code>{"private "}<Link to="/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" fuelArea"}</code> | Area whose contained pickups burn as fuel. |
| <Link id="m-fuelconsumptionduration" /><code>{"private float fuelConsumptionDuration"}</code> | Seconds per docked fuel item when simulating time passed. |
| <Link id="m-fuelconsumptionprogress" /><code>{"private float fuelConsumptionProgress"}</code> | Progress burning the current docked fuel item, from 0 to 1. Synced and saved. |
| <Link id="m-fueldock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fuelDock"}</code> | Dock whose stored fuel burns one item at a time. |
| <Link id="m-isfuelbased" /><code>{"private bool isFuelBased"}</code> | Whether the fire burns fuel. When false it runs on a lit timer instead. |
| <Link id="m-isignoringsparks" /><code>{"private bool isIgnoringSparks"}</code> | When true, sparks from `SimulateSparks` don't light this fire. |
| <Link id="m-isinnofiredock" /><code>{"private bool isInNoFireDock"}</code> | True after the fire's pickup was docked somewhere fire isn't allowed; blocks lighting until it's undocked. |
| <Link id="m-isprewarmingeffect" /><code>{"private bool isPreWarmingEffect"}</code> | Set on a replacement fire so its effect starts already warmed up. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maximumefficiency" /><code>{"private float maximumEfficiency"}</code> | Efficiency at which the fire burns at full strength. Defaults to 10. |
| <Link id="m-mintimedifferencetosimulate" /><code>{"private float minTimeDifferenceToSimulate"}</code> | Fuel-based fires only simulate time gaps longer than this, in seconds. Defaults to 10. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup this fire is on, whose docking can put it out. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lightcoroutine" /><code>{"protected override IEnumerator LightCoroutine { get; }"}</code> | What runs while lit: the lit timer, or the fuel burn for fuel-based fires. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-heat-iflammable-isignoringsparks" /><code>{"private bool Alta.Heat.IFlammable.IsIgnoringSparks { get; }"}</code> | Explicit `IFlammable` property: returns `isIgnoringSparks`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkextinguish" /><code>{"void CheckExtinguish("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Dock handler: puts the fire out when its item is docked where fire isn't allowed (or called with no dock, as on disable). |
| <Link id="m-forceprogress" /><code>{"void ForceProgress(float progress)"}</code> | Sets how far through its burn the fire is; a fuel fire instead shortens its base fuel time. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks dock events on the item's pickup, or on the crafting root once it is known. |
| <Link id="m-simulatesparks" /><code>{"static void SimulateSparks(Vector3 position, float radius, float chance)"}</code> | Tries to light every flammable thing within a radius, with a chance. |
| <Link id="m-stopextinguish" /><code>{"void StopExtinguish("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Undock handler: stops watching the dock's sub-docks. |
| <Link id="m-trylight" /><code>{"void TryLight()"}</code> | Server: lights the fire if it isn't lit, isn't in a no-fire dock and, for fuel fires, has base fuel or fuel to burn. |
| <Link id="m-geteffect" /><code>{"protected override void GetEffect()"}</code> | Gets the fire effect (not on headless) and sets it lit. |
| <Link id="m-light" /><code>{"protected override void Light()"}</code> | Lights the fire, unless on the server while it sits in a no-fire dock. |
| <Link id="m-releaseeffect" /><code>{"protected override void ReleaseEffect()"}</code> | Releases the fire effect. |
| <Link id="m-reset" /><code>{"protected override void Reset()"}</code> | Resets the fire; a timer fire also restarts its timer. |
| <Link id="m-rootset" /><code>{"protected virtual void RootSet("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> | Hooks dock events on the crafting root's pickup. |
| <Link id="m-serializeproperties" /><code>{"protected override void SerializeProperties("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Adds the fuel consumption progress to the synced heat source state. |
| <Link id="m-setprogress" /><code>{"protected override void SetProgress(float progress)"}</code> | Sets burn progress and updates the fire effect. |
| <Link id="m-simulatetime" /><code>{"protected override void SimulateTime(float timeDifference)"}</code> | Catches up after time away: a fuel fire burns off fuel if the gap is long enough, a timer fire moves its timer. |

<details>
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowlighting" /><code>{"private void AllowLighting("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When the pickup leaves the dock that put the fire out, lets it be lit again. |
| <Link id="m-calculateefficiency" /><code>{"private static void CalculateEfficiency("}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, ref float efficiency, ref float distribution)"}</code> | Sums the heat efficiency and burn priority of all fuel in the fuel area. |
| <Link id="m-consumefuel" /><code>{"private void ConsumeFuel("}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, "}<Link to="/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{" fuel, float fuelDamage, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Burns down one fuel pickup. Server: when its life runs out it becomes its burnt version or is destroyed. |
| <Link id="m-delayedfuelsimulation" /><code>{"private IEnumerator DelayedFuelSimulation(float timeDifference) (iterator)"}</code> | After a long gap, destroys docked fuel for the time passed and burns the fuel area forward in one tick. |
| <Link id="m-delayreenablecollider" /><code>{"private IEnumerator DelayReenableCollider() (iterator)"}</code> | Turns the fire collider back on at the end of the frame. |
| <Link id="m-fueldock-2" /><code>{"private IEnumerator FuelDock() (iterator)"}</code> | Coroutine that burns docked fuel one item at a time, setting fire strength from what's left. |
| <Link id="m-getfuel" /><code>{"private "}<Link to="/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{" GetFuel("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Gets the `Fuel` data for a pickup's item and physical material. |
| <Link id="m-graduallyconsumefuel" /><code>{"private IEnumerator GraduallyConsumeFuel() (iterator)"}</code> | Coroutine that burns everything in the fuel area each frame until it's empty, and counts the campfire-lit stat. |
| <Link id="m-handlefueladded" /><code>{"private void HandleFuelAdded("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, bool isSimulation)"}</code> | Starts tracking a fuel pickup with a randomised life, adding its volume to the heat point. |
| <Link id="m-handlefuelremoved" /><code>{"private void HandleFuelRemoved("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState)"}</code> | Stops tracking a fuel pickup and takes its volume off the heat point. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Runs the extinguish check when the fire is disabled, unless it's being destroyed or the game is quitting. |
| <Link id="m-pickupset" /><code>{"private void PickupSet("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup)"}</code> | Hooks the dock and undock events of the pickup the fire belongs to. |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | Explicit `IEntityReplaceHandler` method: carries the fire's progress and lit state to the replacement, unless the replace skips charge. |
| <Link id="m-runfuel" /><code>{"private IEnumerator RunFuel() (iterator)"}</code> | Coroutine for fuel-based fires: burns the base fuel, then the fuel dock, then the fuel area, then the server puts it out. |
| <Link id="m-subdocked" /><code>{"private void Subdocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" subDock, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" subDockPickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" topDock)"}</code> | Puts the fire out when something is docked under it in a dock that doesn't allow fire. |
| <Link id="m-tickfuelconsumption" /><code>{"private void TickFuelConsumption("}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, float deltaTime)"}</code> | One step of burning the fuel area: sets fire strength and spreads the burn over the fuel by priority. |

</details>

## Used in

Members of other types that take, return or hold a `Fire`:

[`Smelter.innerFire`](/game-api/types/alta-crafting/smelter#m-innerfire), [`FireStatusRaycastCrafter.baseFire`](/game-api/types/alta-stats-effects/firestatusraycastcrafter#m-basefire), [`BookRestrictor.summoningFire`](/game-api/types/alta-items/bookrestrictor#m-summoningfire), [`DockedFireLogic.fire`](/game-api/types/global-c-d/dockedfirelogic#m-fire), [`FireLogic.fire`](/game-api/types/global-e-h/firelogic#m-fire), [`PlaceItemNoDockFirePuzzleLogic.firesInCollider`](/game-api/types/global-p/placeitemnodockfirepuzzlelogic#m-firesincollider), [`PlaceItemNoDockFirePuzzleLogic.RemoveFromFireList`](/game-api/types/global-p/placeitemnodockfirepuzzlelogic#m-removefromfirelist).
