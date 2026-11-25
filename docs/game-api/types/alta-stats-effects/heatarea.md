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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`PointFilterDelegate`](/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate)
- **Documented in** [Heat](/game-api/game-systems/heat#heatarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatArea()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-affectingpoints" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> affectingPoints"}</code> |  |
| <Link id="m-ambientchecker" /><code>{"private "}<Link to="/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" ambientChecker"}</code> |  |
| <Link id="m-colliderobject" /><code>{"private GameObject colliderObject"}</code> |  |
| <Link id="m-externallyregisteredheatpoints" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> externallyRegisteredHeatPoints"}</code> |  |
| <Link id="m-heatsource" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iheatsource">{"IHeatSource"}</Link>{" heatSource"}</code> |  |
| <Link id="m-heatsourceobject" /><code>{"private Object heatSourceObject"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-priority" /><code>{"private int priority"}</code> |  |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updateheatpoint" /><code>{"private Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{", float> UpdateHeatPoint"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-affectheatpointcount" /><code>{"int AffectHeatPointCount { get; }"}</code> | How many heat points are being affected. |
| <Link id="m-gettemperaturemultiplier" /><code>{"Func<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{", float> GetTemperatureMultiplier { get; set; }"}</code> | Function giving each point a 0 to 1 weight for how strongly the area affects it. Always 1 by default. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | Whether the area's trigger object is active. |
| <Link id="m-targettemperature-2" /><code>{"float TargetTemperature { get; set; }"}</code> | The temperature points are pulled toward when there's no heat source. 23 by default. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedheatpoint" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> AddedHeatPoint"}</code> | Raised when a heat point starts being affected. |
| <Link id="m-pointfilter" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate">{"HeatArea.PointFilterDelegate"}</Link>{" PointFilter"}</code> | Lets listeners reject a heat point that enters the trigger. |
| <Link id="m-removedheatpoint" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> RemovedHeatPoint"}</code> | Raised when a heat point stops being affected. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterheatpointexternal" /><code>{"void DeregisterHeatPointExternal("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Stops affecting a heat point added with `RegisterHeatPointExternal`. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: picks heat source or target temperature mode. On clients the component removes itself. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts updating if points are already inside. |
| <Link id="m-registerheatpointexternal" /><code>{"void RegisterHeatPointExternal("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Affects a heat point without it being in the trigger. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Turns the area's trigger on or off. Turning it off forgets the points inside. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-baseheatpointupdate" /><code>{"private void BaseHeatPointUpdate("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint, float multiplier)"}</code> |  |
| <Link id="m-checkfordisabled" /><code>{"private void CheckForDisabled()"}</code> |  |
| <Link id="m-checkforenabled" /><code>{"private void CheckForEnabled()"}</code> |  |
| <Link id="m-conducttoheatpoint" /><code>{"private void ConductToHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point, float weight)"}</code> |  |
| <Link id="m-deregisterheatpoint" /><code>{"private void DeregisterHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint, Collider heatPointCollider)"}</code> |  |
| <Link id="m-deregisterheatpoint-2" /><code>{"private void DeregisterHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
| <Link id="m-registerheatpoint" /><code>{"private void RegisterHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint, Collider heatPointCollider)"}</code> |  |
| <Link id="m-registerheatpoint-2" /><code>{"private void RegisterHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> |  |
| <Link id="m-updateaffected" /><code>{"private void UpdateAffected()"}</code> |  |
| <Link id="m-updateheatpointtemperature" /><code>{"private bool UpdateHeatPointTemperature("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HeatArea`:

[`Recycler.smeltingArea`](/game-api/types/alta-crafting/recycler#m-smeltingarea), [`CookingPot.potHeatArea`](/game-api/types/alta-crafting/cookingpot#m-potheatarea), [`HeatPointCollectionAreaFilter.heatArea`](/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-heatarea), [`HeatPointToHeatAreaLink.areaToSetTemperatureOff`](/game-api/types/alta-stats-effects/heatpointtoheatarealink#m-areatosettemperatureoff), [`HeatSourceBase.attachedHeatArea`](/game-api/types/alta-stats-effects/heatsourcebase#m-attachedheatarea), [`LiquidHeatAreaController.heatAreaToControl`](/game-api/types/alta-stats-effects/liquidheatareacontroller#m-heatareatocontrol).
