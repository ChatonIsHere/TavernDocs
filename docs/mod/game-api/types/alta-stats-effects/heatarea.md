---
title: "HeatArea"
description: "Server: a trigger area that heats or cools heat points inside it, toward a set temperature or from a heat source such as a fire."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatArea

A **class** in `Root.Township`, `Alta.Heat`.

Server: a trigger area that heats or cools heat points inside it, toward a set temperature or from a heat source such as a fire. Removed on clients. Only the highest priority area touching a point affects it.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`PointFilterDelegate`](/mod/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate)
- **Documented in** [Heat](/mod/game-api/game-systems/heat#heatarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectingpoints" /><code>{"private Dictionary<Collider, "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> affectingPoints"}</code> | Heat points inside the trigger, keyed by their collider. |
| <Link id="m-ambientchecker" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" ambientChecker"}</code> | Reads the ambient temperature at this entity. |
| <Link id="m-colliderobject" /><code>{"private GameObject colliderObject"}</code> | The trigger object; its active state is `IsActive`. |
| <Link id="m-externallyregisteredheatpoints" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> externallyRegisteredHeatPoints"}</code> | Heat points added by code through `RegisterHeatPointExternal` rather than by trigger. |
| <Link id="m-heatsource" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iheatsource">{"IHeatSource"}</Link>{" heatSource"}</code> | The `IHeatSource` this area spreads, if any. Server only. |
| <Link id="m-heatsourceobject" /><code>{"private Object heatSourceObject"}</code> | Serialized reference to the heat source object. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-priority" /><code>{"private int priority"}</code> | Area priority (0 base, 1 cooking). A point is only heated by its highest-priority area. |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> | Backing field for `TargetTemperature`. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Registration on the update module while points are present. |
| <Link id="m-updateheatpoint" /><code>{"private Action<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{", float> UpdateHeatPoint"}</code> | Chosen at init: `ConductToHeatPoint` with a heat source, otherwise `BaseHeatPointUpdate`. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared fixed-update module for all heat areas. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-affectheatpointcount" /><code>{"int AffectHeatPointCount { get; }"}</code> | How many heat points are being affected. |
| <Link id="m-gettemperaturemultiplier" /><code>{"Func<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{", float> GetTemperatureMultiplier { get; set; }"}</code> | Function giving each point a 0 to 1 weight for how strongly the area affects it. Always 1 by default. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | Whether the area's trigger object is active. |
| <Link id="m-targettemperature-2" /><code>{"float TargetTemperature { get; set; }"}</code> | The temperature points are pulled toward when there's no heat source. 23 by default. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedheatpoint" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> AddedHeatPoint"}</code> | Raised when a heat point starts being affected. |
| <Link id="m-pointfilter" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate">{"HeatArea.PointFilterDelegate"}</Link>{" PointFilter"}</code> | Lets listeners reject a heat point that enters the trigger. |
| <Link id="m-removedheatpoint" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> RemovedHeatPoint"}</code> | Raised when a heat point stops being affected. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterheatpointexternal" /><code>{"void DeregisterHeatPointExternal("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Stops affecting a heat point added with `RegisterHeatPointExternal`. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: picks heat source or target temperature mode. On clients the component removes itself. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts updating if points are already inside. |
| <Link id="m-registerheatpointexternal" /><code>{"void RegisterHeatPointExternal("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Affects a heat point without it being in the trigger. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Turns the area's trigger on or off. Turning it off forgets the points inside. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Server: caches the heat source from `heatSourceObject`. |
| <Link id="m-baseheatpointupdate" /><code>{"private void BaseHeatPointUpdate("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint, float multiplier)"}</code> | Used when there's no heat source: moves a point's temperature toward a blend of ambient and `TargetTemperature`. |
| <Link id="m-checkfordisabled" /><code>{"private void CheckForDisabled()"}</code> | Stops the update when no heat points are left. |
| <Link id="m-checkforenabled" /><code>{"private void CheckForEnabled()"}</code> | Starts the update once at least one heat point is registered. |
| <Link id="m-conducttoheatpoint" /><code>{"private void ConductToHeatPoint("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point, float weight)"}</code> | Used with a heat source: conducts the source's heat into a point, weighted by the multiplier. |
| <Link id="m-deregisterheatpoint" /><code>{"private void DeregisterHeatPoint("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint, Collider heatPointCollider)"}</code> | Removes a heat point (and its collider if given), drops this area's priority from it and fires `RemovedHeatPoint`. |
| <Link id="m-deregisterheatpoint-2" /><code>{"private void DeregisterHeatPoint("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Removes a heat point (and its collider if given), drops this area's priority from it and fires `RemovedHeatPoint`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Server: removes the update. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Registers a `HeatPoint` found on the entering collider or its rigidbody, if `PointFilter` allows it. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Deregisters the heat point of a collider that leaves the trigger. |
| <Link id="m-registerheatpoint" /><code>{"private void RegisterHeatPoint("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint, Collider heatPointCollider)"}</code> | Adds a heat point (with its collider if given), gives it this area's priority and fires `AddedHeatPoint`. |
| <Link id="m-registerheatpoint-2" /><code>{"private void RegisterHeatPoint("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Adds a heat point (with its collider if given), gives it this area's priority and fires `AddedHeatPoint`. |
| <Link id="m-updateaffected" /><code>{"private void UpdateAffected()"}</code> | Fixed update: heats every point in range, and drops one point per tick that is destroyed, disabled or failed. |
| <Link id="m-updateheatpointtemperature" /><code>{"private bool UpdateHeatPointTemperature("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Updates one point if this area is its highest-priority area. Returns false and logs if it throws. |

</details>

## Used in

Members of other types that take, return or hold a `HeatArea`:

[`Recycler.smeltingArea`](/mod/game-api/types/alta-crafting/recycler#m-smeltingarea), [`CookingPot.potHeatArea`](/mod/game-api/types/alta-crafting/cookingpot#m-potheatarea), [`HeatPointCollectionAreaFilter.heatArea`](/mod/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-heatarea), [`HeatPointToHeatAreaLink.areaToSetTemperatureOff`](/mod/game-api/types/alta-stats-effects/heatpointtoheatarealink#m-areatosettemperatureoff), [`HeatSourceBase.attachedHeatArea`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-attachedheatarea), [`LiquidHeatAreaController.heatAreaToControl`](/mod/game-api/types/alta-stats-effects/liquidheatareacontroller#m-heatareatocontrol).
