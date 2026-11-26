---
title: "SetSwitch"
description: "Internal helper that keeps at most one ModifierSet applied at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetSwitch

A **internal class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal helper that keeps at most one `ModifierSet` applied at a time.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetSwitch()"}</code> | <span className="api-desc">Creates a `SetSwitch` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{" active"}</code> | <span className="api-desc">The set that is applied now.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set("}<Link to="/mod/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{" set)"}</code> | <span className="api-desc">Removes the current set and applies the new one, if it is different. Null clears it.</span> |
