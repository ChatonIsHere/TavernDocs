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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SetSwitch()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{" active"}</code> | The set that is applied now. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set("}<Link to="/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{" set)"}</code> | Removes the current set and applies the new one, if it is different. Null clears it. |
