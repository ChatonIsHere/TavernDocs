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
| <Link id="m-ctor" /><code>{"TemperatureToMaterial()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcedtemperature" /><code>{"private static readonly int _ForcedTemperature"}</code> | <span className="api-desc">Shader property ID for `_ForcedTemperature`.</span> |
| <Link id="m-heatpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint"}</code> | <span className="api-desc">The heat point whose temperature drives the glow.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger, used when a renderer in the list is null.</span> |
| <Link id="m-props" /><code>{"private MaterialPropertyBlock props"}</code> | <span className="api-desc">Property block reused to set the shader value.</span> |
| <Link id="m-targetrenderers" /><code>{"private Renderer[] targetRenderers"}</code> | <span className="api-desc">Renderers that get the temperature value.</span> |
| <Link id="m-temperaturetovalue" /><code>{"private AnimationCurve temperatureToValue"}</code> | <span className="api-desc">Curve from temperature to the 0 to 1 shader value. Default runs from 23 to 1200 degrees.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | <span className="api-desc">Editor: fills in the heat point and, if empty, the renderers that use the `Township Tale/MetalNonForging` shader.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Off headless, creates the property block and subscribes to the heat point's `Changed` event.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: strips null entries from the renderer list.</span> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | <span className="api-desc">Maps the heat point's temperature through the curve and applies it to every target renderer.</span> |

</details>
