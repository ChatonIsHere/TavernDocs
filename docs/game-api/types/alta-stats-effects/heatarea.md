---
title: "HeatArea"
description: "A trigger volume around a heat source (above a fire, inside a smelter or a pot's base)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatArea

A **class** in `Root.Township`, `Alta.Heat`.

A trigger volume around a heat source (above a fire, inside a smelter or a pot's base).

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
| <Link id="m-affectheatpointcount" /><code>{"int AffectHeatPointCount { get; }"}</code> |  |
| <Link id="m-gettemperaturemultiplier" /><code>{"Func<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{", float> GetTemperatureMultiplier { get; set; }"}</code> |  |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> |  |
| <Link id="m-targettemperature-2" /><code>{"float TargetTemperature { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedheatpoint" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> AddedHeatPoint"}</code> |  |
| <Link id="m-pointfilter" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate">{"HeatArea.PointFilterDelegate"}</Link>{" PointFilter"}</code> |  |
| <Link id="m-removedheatpoint" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> RemovedHeatPoint"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterheatpointexternal" /><code>{"void DeregisterHeatPointExternal("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-registerheatpointexternal" /><code>{"void RegisterHeatPointExternal("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> |  |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> |  |
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
