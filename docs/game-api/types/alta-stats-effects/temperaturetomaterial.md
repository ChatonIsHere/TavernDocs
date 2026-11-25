---
title: "TemperatureToMaterial"
description: "Glow and colour from temperature. Client visuals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureToMaterial

A **class** in `Root.Township`, `Alta.Heat`.

Glow and colour from temperature. Client visuals.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureToMaterial()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-forcedtemperature" /><code>{"private static readonly int _ForcedTemperature"}</code> |  |
| <Link id="m-heatpoint" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-props" /><code>{"private MaterialPropertyBlock props"}</code> |  |
| <Link id="m-targetrenderers" /><code>{"private Renderer[] targetRenderers"}</code> |  |
| <Link id="m-temperaturetovalue" /><code>{"private AnimationCurve temperatureToValue"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> |  |
