---
title: "LiquidHeatAreaController"
description: "Server: turns a heat area (and optionally a heat point collider) on while a liquid container has liquid in it, and sets the heat point's volume from the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidHeatAreaController

A **class** in `Root.Township`, `Alta.Liquid`.

Server: turns a heat area (and optionally a heat point collider) on while a liquid container has liquid in it, and sets the heat point's volume from the fill level.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidHeatAreaController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hascollider" /><code>{"private bool hasCollider"}</code> | <span className="api-desc">Whether `heatPointCollider` is set.</span> |
| <Link id="m-heatareatocontrol" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" heatAreaToControl"}</code> | <span className="api-desc">The heat area switched on and off.</span> |
| <Link id="m-heatareavolumeperliquidlevel" /><code>{"private float[] heatAreaVolumePerLiquidLevel"}</code> | <span className="api-desc">Heat point volume for each liquid level, indexed by level.</span> |
| <Link id="m-heatpointcollider" /><code>{"private Collider heatPointCollider"}</code> | <span className="api-desc">Optional collider object turned on and off with the heat area.</span> |
| <Link id="m-heatpointtosetvolumeoff" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPointToSetVolumeOff"}</code> | <span className="api-desc">Heat point whose volume is set from the fill level.</span> |
| <Link id="m-issettingvolumeofheatpoint" /><code>{"private bool isSettingVolumeOfHeatPoint"}</code> | <span className="api-desc">Whether to set the heat point volume when the container fills.</span> |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" liquidContainer"}</code> | <span className="api-desc">The container watched for level changes.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the container's level change event.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: fills in default volumes per level if none are set and logs an error for any volume of 0 or less.</span> |
| <Link id="m-setheatareaenabled" /><code>{"private void SetHeatAreaEnabled("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | <span className="api-desc">Server: on going from empty to filled, turns the heat area on and sets the heat point volume; on emptying, turns it off.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Applies the current fill level once.</span> |

</details>
