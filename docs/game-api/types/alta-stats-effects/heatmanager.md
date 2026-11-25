---
title: "HeatManager"
description: "Burns a body: it watches a HeatPointCollection's points and, on the server, damages its HealthObject when they pass burnDamageThreshold, and lights it above..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatManager

A **class** in `Root.Township`, `Alta.Heat`.

Burns a body: it watches a `HeatPointCollection`'s points and, on the server, damages its `HealthObject` when they pass `burnDamageThreshold`, and lights it above `ignitionThreshold`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`HeatPointDamageLevel`](/game-api/types/alta-stats-effects/heatmanager-heatpointdamagelevel)
- **Documented in** [Heat](/game-api/game-systems/heat#heatmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeatManager()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-burndamagethreshold" /><code>{"private float burnDamageThreshold"}</code> |
| <Link id="m-burningtickdamage" /><code>{"private float burningTickDamage"}</code> |
| <Link id="m-collection" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" collection"}</code> |
| <Link id="m-damagedata" /><code>{"private static "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damageData"}</code> |
| <Link id="m-damagepertemperature" /><code>{"private AnimationCurve damagePerTemperature"}</code> |
| <Link id="m-damagetarget" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" damageTarget"}</code> |
| <Link id="m-heatpointlevels" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/heatmanager-heatpointdamagelevel">{"HeatManager.HeatPointDamageLevel"}</Link>{"> heatPointLevels"}</code> |
| <Link id="m-ignitionthreshold" /><code>{"private float ignitionThreshold"}</code> |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-burnupdate" /><code>{"private void BurnUpdate("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-onreset" /><code>{"private void OnReset("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updatelevel" /><code>{"private void UpdateLevel(int level)"}</code> |

</details>
