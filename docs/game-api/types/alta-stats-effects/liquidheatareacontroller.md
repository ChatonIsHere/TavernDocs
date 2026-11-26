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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Liquids](/game-api/game-systems/liquids)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidHeatAreaController()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hascollider" /><code>{"private bool hasCollider"}</code> | Whether `heatPointCollider` is set. |
| <Link id="m-heatareatocontrol" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" heatAreaToControl"}</code> | The heat area switched on and off. |
| <Link id="m-heatareavolumeperliquidlevel" /><code>{"private float[] heatAreaVolumePerLiquidLevel"}</code> | Heat point volume for each liquid level, indexed by level. |
| <Link id="m-heatpointcollider" /><code>{"private Collider heatPointCollider"}</code> | Optional collider object turned on and off with the heat area. |
| <Link id="m-heatpointtosetvolumeoff" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPointToSetVolumeOff"}</code> | Heat point whose volume is set from the fill level. |
| <Link id="m-issettingvolumeofheatpoint" /><code>{"private bool isSettingVolumeOfHeatPoint"}</code> | Whether to set the heat point volume when the container fills. |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" liquidContainer"}</code> | The container watched for level changes. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the container's level change event. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills in default volumes per level if none are set and logs an error for any volume of 0 or less. |
| <Link id="m-setheatareaenabled" /><code>{"private void SetHeatAreaEnabled("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | Server: on going from empty to filled, turns the heat area on and sets the heat point volume; on emptying, turns it off. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Applies the current fill level once. |

</details>
