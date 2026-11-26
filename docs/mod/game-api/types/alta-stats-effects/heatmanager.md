---
title: "HeatManager"
description: "Server: burns a HealthObject with fire damage while any heat point in its HeatPointCollection is hot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatManager

A **class** in `Root.Township`, `Alta.Heat`.

Server: burns a `HealthObject` with fire damage while any heat point in its `HeatPointCollection` is hot. Used on creatures and other things that take fire damage.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`HeatPointDamageLevel`](/mod/game-api/types/alta-stats-effects/heatmanager-heatpointdamagelevel)
- **Documented in** [Heat](/mod/game-api/game-systems/heat#heatmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burndamagethreshold" /><code>{"private float burnDamageThreshold"}</code> | <span className="api-desc">Temperature above which a heat point counts as hot and deals the small `burningTickDamage` when it rises.</span> |
| <Link id="m-burningtickdamage" /><code>{"private float burningTickDamage"}</code> | <span className="api-desc">Damage per update for each hot (but not ignited) heat point whose temperature went up.</span> |
| <Link id="m-collection" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" collection"}</code> | <span className="api-desc">The heat points that are checked for burning.</span> |
| <Link id="m-damagedata" /><code>{"private static "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damageData"}</code> | <span className="api-desc">Shared damage info with source `Fire`, used for every burn hit.</span> |
| <Link id="m-damagepertemperature" /><code>{"private AnimationCurve damagePerTemperature"}</code> | <span className="api-desc">Curve from temperature to damage per update for heat points past the ignition threshold.</span> |
| <Link id="m-damagetarget" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" damageTarget"}</code> | <span className="api-desc">The `HealthObject` that takes the fire damage.</span> |
| <Link id="m-heatpointlevels" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-stats-effects/heatmanager-heatpointdamagelevel">{"HeatManager.HeatPointDamageLevel"}</Link>{"> heatPointLevels"}</code> | <span className="api-desc">Per heat point burn level trackers (none, hot or ignited), built on the server.</span> |
| <Link id="m-ignitionthreshold" /><code>{"private float ignitionThreshold"}</code> | <span className="api-desc">Temperature above which a heat point counts as ignited and deals curve damage.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burnupdate" /><code>{"private void BurnUpdate("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Runs on each stat update while something is hot. Deals fire damage from the temperature curve for ignited points, or a small tick for warming points.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Server: once the entity is initialized, tracks each heat point's burn level and hooks the stat manager's reset.</span> |
| <Link id="m-onreset" /><code>{"private void OnReset("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">When the target's stats reset, instantly extinguishes every heat point's heat source and resets the collection.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Waits for the target entity to finish initializing, then calls `Initialize`.</span> |
| <Link id="m-updatelevel" /><code>{"private void UpdateLevel(int level)"}</code> | <span className="api-desc">Called when a heat point's burn level changes. Subscribes `BurnUpdate` when the first point gets hot and removes it when none are.</span> |

</details>
