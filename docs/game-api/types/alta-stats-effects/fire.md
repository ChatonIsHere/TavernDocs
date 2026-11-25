---
title: "Fire"
description: "Fires that use fuel (campfires, and the smelter's innerFire)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Fire

A **class** in `Root.Township`, `Alta.Heat`.

Fires that use fuel (campfires, and the smelter's `innerFire`).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatSourceBase`](/game-api/types/alta-stats-effects/heatsourcebase), [`IFlammable`](/game-api/types/alta-stats-effects/iflammable), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler), [`ISavable<FireSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<FireSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`FireDissolve`](/game-api/types/alta-stats-effects/firedissolve), [`FireSaveData`](/game-api/types/alta-stats-effects/firesavedata)
- **Nested types** [`FuelConsumptionState`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate)
- **Attributes** `SavingInfo`, `RequireComponent`
- **Documented in** [Heat](/game-api/game-systems/heat#fire), [Health and damage](/game-api/items/health-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Fire()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activefireeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledfireeffect">{"PooledFireEffect"}</Link>{" activeFireEffect"}</code> |  |
| <Link id="m-basefuel" /><code>{"private float baseFuel"}</code> |  |
| <Link id="m-basefuelduration" /><code>{"private float baseFuelDuration"}</code> |  |
| <Link id="m-consumptionstate" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState"}</code> |  |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> |  |
| <Link id="m-destroyed" /><code>{"private static List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> destroyed"}</code> |  |
| <Link id="m-destroyonextinguish" /><code>{"private GameObject destroyOnExtinguish"}</code> |  |
| <Link id="m-firecollider" /><code>{"private Collider fireCollider"}</code> |  |
| <Link id="m-fuelarea" /><code>{"private "}<Link to="/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" fuelArea"}</code> |  |
| <Link id="m-fuelconsumptionduration" /><code>{"private float fuelConsumptionDuration"}</code> |  |
| <Link id="m-fuelconsumptionprogress" /><code>{"private float fuelConsumptionProgress"}</code> |  |
| <Link id="m-fueldock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fuelDock"}</code> |  |
| <Link id="m-isfuelbased" /><code>{"private bool isFuelBased"}</code> |  |
| <Link id="m-isignoringsparks" /><code>{"private bool isIgnoringSparks"}</code> |  |
| <Link id="m-isinnofiredock" /><code>{"private bool isInNoFireDock"}</code> |  |
| <Link id="m-isprewarmingeffect" /><code>{"private bool isPreWarmingEffect"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maximumefficiency" /><code>{"private float maximumEfficiency"}</code> |  |
| <Link id="m-mintimedifferencetosimulate" /><code>{"private float minTimeDifferenceToSimulate"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alta-heat-iflammable-isignoringsparks" /><code>{"private bool Alta.Heat.IFlammable.IsIgnoringSparks { get; }"}</code> |  |
| <Link id="m-lightcoroutine" /><code>{"protected override IEnumerator LightCoroutine { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkextinguish" /><code>{"void CheckExtinguish("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-forceprogress" /><code>{"void ForceProgress(float progress)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-simulatesparks" /><code>{"static void SimulateSparks(Vector3 position, float radius, float chance)"}</code> |  |
| <Link id="m-stopextinguish" /><code>{"void StopExtinguish("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-trylight" /><code>{"void TryLight()"}</code> |  |
| <Link id="m-allowlighting" /><code>{"private void AllowLighting("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-calculateefficiency" /><code>{"private static void CalculateEfficiency("}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, ref float efficiency, ref float distribution)"}</code> |  |
| <Link id="m-consumefuel" /><code>{"private void ConsumeFuel("}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, "}<Link to="/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{" fuel, float fuelDamage, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-delayedfuelsimulation" /><code>{"private IEnumerator DelayedFuelSimulation(float timeDifference) (iterator)"}</code> |  |
| <Link id="m-delayreenablecollider" /><code>{"private IEnumerator DelayReenableCollider() (iterator)"}</code> |  |
| <Link id="m-fueldock-2" /><code>{"private IEnumerator FuelDock() (iterator)"}</code> |  |
| <Link id="m-geteffect" /><code>{"protected override void GetEffect()"}</code> |  |
| <Link id="m-getfuel" /><code>{"private "}<Link to="/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{" GetFuel("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-graduallyconsumefuel" /><code>{"private IEnumerator GraduallyConsumeFuel() (iterator)"}</code> |  |
| <Link id="m-handlefueladded" /><code>{"private void HandleFuelAdded("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, bool isSimulation)"}</code> |  |
| <Link id="m-handlefuelremoved" /><code>{"private void HandleFuelRemoved("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState)"}</code> |  |
| <Link id="m-light" /><code>{"protected override void Light()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-pickupset" /><code>{"private void PickupSet("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup)"}</code> |  |
| <Link id="m-releaseeffect" /><code>{"protected override void ReleaseEffect()"}</code> |  |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> |  |
| <Link id="m-reset" /><code>{"protected override void Reset()"}</code> |  |
| <Link id="m-rootset" /><code>{"protected virtual void RootSet("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> |  |
| <Link id="m-runfuel" /><code>{"private IEnumerator RunFuel() (iterator)"}</code> |  |
| <Link id="m-serializeproperties" /><code>{"protected override void SerializeProperties("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-setprogress" /><code>{"protected override void SetProgress(float progress)"}</code> |  |
| <Link id="m-simulatetime" /><code>{"protected override void SimulateTime(float timeDifference)"}</code> |  |
| <Link id="m-subdocked" /><code>{"private void Subdocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" subDock, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" subDockPickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" topDock)"}</code> |  |
| <Link id="m-tickfuelconsumption" /><code>{"private void TickFuelConsumption("}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" consumptionState, float deltaTime)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Fire`:

[`Smelter.innerFire`](/game-api/types/alta-crafting/smelter#m-innerfire), [`FireStatusRaycastCrafter.baseFire`](/game-api/types/alta-stats-effects/firestatusraycastcrafter#m-basefire), [`BookRestrictor.summoningFire`](/game-api/types/alta-items/bookrestrictor#m-summoningfire), [`DockedFireLogic.fire`](/game-api/types/global-c-d/dockedfirelogic#m-fire), [`FireLogic.fire`](/game-api/types/global-e-h/firelogic#m-fire), [`PlaceItemNoDockFirePuzzleLogic.firesInCollider`](/game-api/types/global-p/placeitemnodockfirepuzzlelogic#m-firesincollider), [`PlaceItemNoDockFirePuzzleLogic.RemoveFromFireList`](/game-api/types/global-p/placeitemnodockfirepuzzlelogic#m-removefromfirelist).
