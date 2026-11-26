---
title: "StatAffectAccessor"
description: "Component that points area effects at a StatManager, but only for the area filters it accepts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatAffectAccessor

A **class** in `Root.Township`, `Alta.StatSystem`.

Component that points area effects at a `StatManager`, but only for the area filters it accepts.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatAffectAccessor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filters" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/areafilter">{"AreaFilter"}</Link>{" filters"}</code> | Which `AreaFilter` flags may affect this manager. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager"}</code> | The stat manager area effects should change. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isaffecting" /><code>{"bool IsAffecting("}<Link to="/game-api/types/alta-stats-effects/areafilter">{"AreaFilter"}</Link>{" filter, out "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | If the filter overlaps the accepted filters, returns true and gives the manager. |
