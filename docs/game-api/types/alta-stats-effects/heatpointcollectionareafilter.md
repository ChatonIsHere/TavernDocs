---
title: "HeatPointCollectionAreaFilter"
description: "class HeatPointCollectionAreaFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointCollectionAreaFilter

A **class** in `Root.Township`, `Alta.Heat`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointCollectionAreaFilter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-avoiding" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> avoiding"}</code> |  |
| <Link id="m-avoidingdefault" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" avoidingDefault"}</code> |  |
| <Link id="m-heatarea" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" heatArea"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registeravoiding" /><code>{"void RegisterAvoiding("}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" collection)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-pointfilter" /><code>{"private void PointFilter("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point, ref bool isValid)"}</code> |  |
