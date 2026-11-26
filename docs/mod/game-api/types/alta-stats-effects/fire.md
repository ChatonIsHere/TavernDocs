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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatSourceBase`](/mod/game-api/types/alta-stats-effects/heatsourcebase), [`IFlammable`](/mod/game-api/types/alta-stats-effects/iflammable), [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler), [`ISavable<FireSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<FireSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`FireDissolve`](/mod/game-api/types/alta-stats-effects/firedissolve), [`FireSaveData`](/mod/game-api/types/alta-stats-effects/firesavedata)
- **Nested types** [`FuelConsumptionState`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate)
- **Attributes** `SavingInfo`, `RequireComponent`
- **Documented in** [Heat](/mod/game-api/game-systems/heat#fire), [Health and damage](/mod/game-api/items/health-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Fire()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activefireeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledfireeffect">{"PooledFireEffect"}</Link>{" activeFireEffect"}</code> | <span className="api-desc">The current fire effect, if it's a `PooledFireEffect`.</span> |
| <Link id="m-basefuel" /><code>{"private float baseFuel"}</code> | <span className="api-desc">Fuel the fire starts with, from 0 to 1, before any added fuel. Defaults to 0.3.</span> |
| <Link id="m-basefuelduration" /><code>{"private float baseFuelDuration"}</code> | <span className="api-desc">Seconds the base fuel burns for.</span> |
| <Link id="m-consumptionstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState"}</code> | <span className="api-desc">Pooled tracking of fuel in the fuel area while it burns.</span> |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | <span className="api-desc">Crafting part on the prefab root. When set, the fire follows the root's pickup.</span> |
| <Link id="m-destroyed" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> destroyed"}</code> | <span className="api-desc">Static scratch list of destroyed fuel pickups for `TickFuelConsumption`.</span> |
| <Link id="m-destroyonextinguish" /><code>{"private GameObject destroyOnExtinguish"}</code> | <span className="api-desc">Object destroyed when the fire goes out.</span> |
| <Link id="m-firecollider" /><code>{"private Collider fireCollider"}</code> | <span className="api-desc">The fire's collider, turned back on after docking into a dock that isn't physical.</span> |
| <Link id="m-fuelarea" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" fuelArea"}</code> | <span className="api-desc">Area whose contained pickups burn as fuel.</span> |
| <Link id="m-fuelconsumptionduration" /><code>{"private float fuelConsumptionDuration"}</code> | <span className="api-desc">Seconds per docked fuel item when simulating time passed.</span> |
| <Link id="m-fuelconsumptionprogress" /><code>{"private float fuelConsumptionProgress"}</code> | <span className="api-desc">Progress burning the current docked fuel item, from 0 to 1. Synced and saved.</span> |
| <Link id="m-fueldock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fuelDock"}</code> | <span className="api-desc">Dock whose stored fuel burns one item at a time.</span> |
| <Link id="m-isfuelbased" /><code>{"private bool isFuelBased"}</code> | <span className="api-desc">Whether the fire burns fuel. When false it runs on a lit timer instead.</span> |
| <Link id="m-isignoringsparks" /><code>{"private bool isIgnoringSparks"}</code> | <span className="api-desc">When true, sparks from `SimulateSparks` don't light this fire.</span> |
| <Link id="m-isinnofiredock" /><code>{"private bool isInNoFireDock"}</code> | <span className="api-desc">True after the fire's pickup was docked somewhere fire isn't allowed; blocks lighting until it's undocked.</span> |
| <Link id="m-isprewarmingeffect" /><code>{"private bool isPreWarmingEffect"}</code> | <span className="api-desc">Set on a replacement fire so its effect starts already warmed up.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maximumefficiency" /><code>{"private float maximumEfficiency"}</code> | <span className="api-desc">Efficiency at which the fire burns at full strength. Defaults to 10.</span> |
| <Link id="m-mintimedifferencetosimulate" /><code>{"private float minTimeDifferenceToSimulate"}</code> | <span className="api-desc">Fuel-based fires only simulate time gaps longer than this, in seconds. Defaults to 10.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup this fire is on, whose docking can put it out.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lightcoroutine" /><code>{"protected override IEnumerator LightCoroutine { get; }"}</code> | <span className="api-desc">What runs while lit: the lit timer, or the fuel burn for fuel-based fires.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-heat-iflammable-isignoringsparks" /><code>{"private bool Alta.Heat.IFlammable.IsIgnoringSparks { get; }"}</code> | <span className="api-desc">Explicit `IFlammable` property: returns `isIgnoringSparks`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkextinguish" /><code>{"void CheckExtinguish("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Dock handler: puts the fire out when its item is docked where fire isn't allowed (or called with no dock, as on disable).</span> |
| <Link id="m-forceprogress" /><code>{"void ForceProgress(float progress)"}</code> | <span className="api-desc">Sets how far through its burn the fire is; a fuel fire instead shortens its base fuel time.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks dock events on the item's pickup, or on the crafting root once it is known.</span> |
| <Link id="m-simulatesparks" /><code>{"static void SimulateSparks(Vector3 position, float radius, float chance)"}</code> | <span className="api-desc">Tries to light every flammable thing within a radius, with a chance.</span> |
| <Link id="m-stopextinguish" /><code>{"void StopExtinguish("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Undock handler: stops watching the dock's sub-docks.</span> |
| <Link id="m-trylight" /><code>{"void TryLight()"}</code> | <span className="api-desc">Server: lights the fire if it isn't lit, isn't in a no-fire dock and, for fuel fires, has base fuel or fuel to burn.</span> |
| <Link id="m-geteffect" /><code>{"protected override void GetEffect()"}</code> | <span className="api-desc">Gets the fire effect (not on headless) and sets it lit.</span> |
| <Link id="m-light" /><code>{"protected override void Light()"}</code> | <span className="api-desc">Lights the fire, unless on the server while it sits in a no-fire dock.</span> |
| <Link id="m-releaseeffect" /><code>{"protected override void ReleaseEffect()"}</code> | <span className="api-desc">Releases the fire effect.</span> |
| <Link id="m-reset" /><code>{"protected override void Reset()"}</code> | <span className="api-desc">Resets the fire; a timer fire also restarts its timer.</span> |
| <Link id="m-rootset" /><code>{"protected virtual void RootSet("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> | <span className="api-desc">Hooks dock events on the crafting root's pickup.</span> |
| <Link id="m-serializeproperties" /><code>{"protected override void SerializeProperties("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Adds the fuel consumption progress to the synced heat source state.</span> |
| <Link id="m-setprogress" /><code>{"protected override void SetProgress(float progress)"}</code> | <span className="api-desc">Sets burn progress and updates the fire effect.</span> |
| <Link id="m-simulatetime" /><code>{"protected override void SimulateTime(float timeDifference)"}</code> | <span className="api-desc">Catches up after time away: a fuel fire burns off fuel if the gap is long enough, a timer fire moves its timer.</span> |

<details className="api-private">
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowlighting" /><code>{"private void AllowLighting("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">When the pickup leaves the dock that put the fire out, lets it be lit again.</span> |
| <Link id="m-calculateefficiency" /><code>{"private static void CalculateEfficiency("}<Link to="/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, ref float efficiency, ref float distribution)"}</code> | <span className="api-desc">Sums the heat efficiency and burn priority of all fuel in the fuel area.</span> |
| <Link id="m-consumefuel" /><code>{"private void ConsumeFuel("}<Link to="/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, "}<Link to="/mod/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{" fuel, float fuelDamage, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Burns down one fuel pickup. Server: when its life runs out it becomes its burnt version or is destroyed.</span> |
| <Link id="m-delayedfuelsimulation" /><code>{"private IEnumerator DelayedFuelSimulation(float timeDifference) (iterator)"}</code> | <span className="api-desc">After a long gap, destroys docked fuel for the time passed and burns the fuel area forward in one tick.</span> |
| <Link id="m-delayreenablecollider" /><code>{"private IEnumerator DelayReenableCollider() (iterator)"}</code> | <span className="api-desc">Turns the fire collider back on at the end of the frame.</span> |
| <Link id="m-fueldock-2" /><code>{"private IEnumerator FuelDock() (iterator)"}</code> | <span className="api-desc">Coroutine that burns docked fuel one item at a time, setting fire strength from what's left.</span> |
| <Link id="m-getfuel" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{" GetFuel("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Gets the `Fuel` data for a pickup's item and physical material.</span> |
| <Link id="m-graduallyconsumefuel" /><code>{"private IEnumerator GraduallyConsumeFuel() (iterator)"}</code> | <span className="api-desc">Coroutine that burns everything in the fuel area each frame until it's empty, and counts the campfire-lit stat.</span> |
| <Link id="m-handlefueladded" /><code>{"private void HandleFuelAdded("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, bool isSimulation)"}</code> | <span className="api-desc">Starts tracking a fuel pickup with a randomised life, adding its volume to the heat point.</span> |
| <Link id="m-handlefuelremoved" /><code>{"private void HandleFuelRemoved("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState)"}</code> | <span className="api-desc">Stops tracking a fuel pickup and takes its volume off the heat point.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Runs the extinguish check when the fire is disabled, unless it's being destroyed or the game is quitting.</span> |
| <Link id="m-pickupset" /><code>{"private void PickupSet("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup)"}</code> | <span className="api-desc">Hooks the dock and undock events of the pickup the fire belongs to.</span> |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | <span className="api-desc">Explicit `IEntityReplaceHandler` method: carries the fire's progress and lit state to the replacement, unless the replace skips charge.</span> |
| <Link id="m-runfuel" /><code>{"private IEnumerator RunFuel() (iterator)"}</code> | <span className="api-desc">Coroutine for fuel-based fires: burns the base fuel, then the fuel dock, then the fuel area, then the server puts it out.</span> |
| <Link id="m-subdocked" /><code>{"private void Subdocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" subDock, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" subDockPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" topDock)"}</code> | <span className="api-desc">Puts the fire out when something is docked under it in a dock that doesn't allow fire.</span> |
| <Link id="m-tickfuelconsumption" /><code>{"private void TickFuelConsumption("}<Link to="/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, float deltaTime)"}</code> | <span className="api-desc">One step of burning the fuel area: sets fire strength and spreads the burn over the fuel by priority.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Fire`:

<div className="api-used-in">

[`Smelter.innerFire`](/mod/game-api/types/alta-crafting/smelter#m-innerfire), [`FireStatusRaycastCrafter.baseFire`](/mod/game-api/types/alta-stats-effects/firestatusraycastcrafter#m-basefire), [`BookRestrictor.summoningFire`](/mod/game-api/types/alta-items/bookrestrictor#m-summoningfire), [`DockedFireLogic.fire`](/mod/game-api/types/global-c-d/dockedfirelogic#m-fire), [`FireLogic.fire`](/mod/game-api/types/global-e-h/firelogic#m-fire), [`PlaceItemNoDockFirePuzzleLogic.firesInCollider`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogic#m-firesincollider), [`PlaceItemNoDockFirePuzzleLogic.RemoveFromFireList`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogic#m-removefromfirelist).

</div>
