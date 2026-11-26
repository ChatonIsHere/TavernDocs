---
title: "TemperatureToMaterial"
description: "Client: makes metal glow with heat by setting the _ForcedTemperature shader property on its renderers from a heat point's temperature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureToMaterial

A **class** in `Root.Township`, `Alta.Heat`.

Client: makes metal glow with heat by setting the `_ForcedTemperature` shader property on its renderers from a heat point's temperature. Does nothing on a headless server.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Documented in** [Heat](/mod/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureToMaterial()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcedtemperature" /><code>{"private static readonly int _ForcedTemperature"}</code> | Shader property ID for `_ForcedTemperature`. |
| <Link id="m-heatpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint"}</code> | The heat point whose temperature drives the glow. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger, used when a renderer in the list is null. |
| <Link id="m-props" /><code>{"private MaterialPropertyBlock props"}</code> | Property block reused to set the shader value. |
| <Link id="m-targetrenderers" /><code>{"private Renderer[] targetRenderers"}</code> | Renderers that get the temperature value. |
| <Link id="m-temperaturetovalue" /><code>{"private AnimationCurve temperatureToValue"}</code> | Curve from temperature to the 0 to 1 shader value. Default runs from 23 to 1200 degrees. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | Editor: fills in the heat point and, if empty, the renderers that use the `Township Tale/MetalNonForging` shader. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Off headless, creates the property block and subscribes to the heat point's `Changed` event. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: strips null entries from the renderer list. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Maps the heat point's temperature through the curve and applies it to every target renderer. |

</details>
