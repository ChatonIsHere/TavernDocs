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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatAffectAccessor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filters" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/areafilter">{"AreaFilter"}</Link>{" filters"}</code> | <span className="api-desc">Which `AreaFilter` flags may affect this manager.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager"}</code> | <span className="api-desc">The stat manager area effects should change.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isaffecting" /><code>{"bool IsAffecting("}<Link to="/mod/game-api/types/alta-stats-effects/areafilter">{"AreaFilter"}</Link>{" filter, out "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">If the filter overlaps the accepted filters, returns true and gives the manager.</span> |
