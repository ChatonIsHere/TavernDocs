---
title: "HeatPointTemperatureController"
description: "Clamps a point between minTemperature and maxTemperature through its TemperatureModifier, on the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointTemperatureController

A **class** in `Root.Township`, `Alta.Heat`.

Clamps a point between `minTemperature` and `maxTemperature` through its `TemperatureModifier`, on the server.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointTemperatureController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxtemperature" /><code>{"private float maxTemperature"}</code> |  |
| <Link id="m-mintemperature" /><code>{"private float minTemperature"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamptemperature" /><code>{"private void ClampTemperature(ref float newtemperature)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
