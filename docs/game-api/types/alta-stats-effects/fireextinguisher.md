---
title: "FireExtinguisher"
description: "class FireExtinguisher in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireExtinguisher

A **class** in `Root.Township`, `Alta.Heat`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireExtinguisher()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-heatpointlayer" /><code>{"private int heatPointLayer"}</code> |  |
| <Link id="m-sourcesmap" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-stats-effects/heatsourcebase">{"HeatSourceBase"}</Link>{"> sourcesMap"}</code> |  |
| <Link id="m-validationroutine" /><code>{"private Coroutine validationRoutine"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ensureheatsourcesarevalid" /><code>{"private IEnumerator EnsureHeatSourcesAreValid() (iterator)"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
