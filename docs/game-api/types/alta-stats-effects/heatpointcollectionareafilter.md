---
title: "HeatPointCollectionAreaFilter"
description: "Stops a HeatArea affecting chosen heat points, such as the object's own, by filtering them out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointCollectionAreaFilter

A **class** in `Root.Township`, `Alta.Heat`.

Stops a `HeatArea` affecting chosen heat points, such as the object's own, by filtering them out.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointCollectionAreaFilter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-avoiding" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> avoiding"}</code> | Heat points the area ignores. |
| <Link id="m-avoidingdefault" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" avoidingDefault"}</code> | Collection whose points are avoided from the start. |
| <Link id="m-heatarea" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" heatArea"}</code> | The heat area being filtered, from the same object. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registeravoiding" /><code>{"void RegisterAvoiding("}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" collection)"}</code> | Adds every heat point in a collection to the avoid list. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Fills the avoid list from `avoidingDefault` and hooks the area's `PointFilter`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the area's `PointFilter`. |
| <Link id="m-pointfilter" /><code>{"private void PointFilter("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point, ref bool isValid)"}</code> | Marks a point invalid if it is in the avoid list. |

</details>
