---
title: "StatDefinition.MinimumAndMaximumValues"
description: "Optional range a stat's value must be in when set by a command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatDefinition.MinimumAndMaximumValues

A **private class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Optional range a stat's value must be in when set by a command. Used by `StatDefinition.IsValueValidForCommands`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MinimumAndMaximumValues()"}</code> | <span className="api-desc">Creates a `StatDefinition.MinimumAndMaximumValues` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the range is checked at all.</span> |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | <span className="api-desc">Highest value allowed.</span> |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | <span className="api-desc">Lowest value allowed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvaluevalid" /><code>{"bool IsValueValid(float value)"}</code> | <span className="api-desc">True if the range is off, or the value is between `minimum` and `maximum` inclusive.</span> |

## Used in

Members of other types that take, return or hold a `MinimumAndMaximumValues`:

<div className="api-used-in">

[`StatDefinition.commandMinimumAndMaximumValues`](/mod/game-api/types/alta-stats-effects/statdefinition#m-commandminimumandmaximumvalues).

</div>
