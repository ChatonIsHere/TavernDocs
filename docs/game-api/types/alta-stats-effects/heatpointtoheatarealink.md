---
title: "HeatPointToHeatAreaLink"
description: "Keeps a HeatArea's target temperature equal to a HeatPoint's temperature, so a hot object heats its surroundings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointToHeatAreaLink

A **class** in `Root.Township`, `Alta.Heat`.

Keeps a `HeatArea`'s target temperature equal to a `HeatPoint`'s temperature, so a hot object heats its surroundings.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointToHeatAreaLink()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areatosettemperatureoff" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" areaToSetTemperatureOff"}</code> | The heat area whose target is set. |
| <Link id="m-pointtogettemperaturefrom" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" pointToGetTemperatureFrom"}</code> | The heat point read from. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the point's `Changed` event. |
| <Link id="m-updatetargettemperatureofheatarea" /><code>{"private void UpdateTargetTemperatureOfHeatArea("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Sets the area's `TargetTemperature` to the point's current temperature. |

</details>
