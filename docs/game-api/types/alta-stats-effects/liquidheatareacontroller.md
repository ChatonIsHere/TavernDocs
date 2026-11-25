---
title: "LiquidHeatAreaController"
description: "Links a container's liquid to a heat area and heat point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidHeatAreaController

A **class** in `Root.Township`, `Alta.Liquid`.

Links a container's liquid to a heat area and heat point.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Liquids](/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidHeatAreaController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hascollider" /><code>{"private bool hasCollider"}</code> |  |
| <Link id="m-heatareatocontrol" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" heatAreaToControl"}</code> |  |
| <Link id="m-heatareavolumeperliquidlevel" /><code>{"private float[] heatAreaVolumePerLiquidLevel"}</code> |  |
| <Link id="m-heatpointcollider" /><code>{"private Collider heatPointCollider"}</code> |  |
| <Link id="m-heatpointtosetvolumeoff" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPointToSetVolumeOff"}</code> |  |
| <Link id="m-issettingvolumeofheatpoint" /><code>{"private bool isSettingVolumeOfHeatPoint"}</code> |  |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" liquidContainer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-setheatareaenabled" /><code>{"private void SetHeatAreaEnabled("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
