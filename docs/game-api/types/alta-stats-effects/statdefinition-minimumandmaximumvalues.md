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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MinimumAndMaximumValues()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether the range is checked at all. |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | Highest value allowed. |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | Lowest value allowed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvaluevalid" /><code>{"bool IsValueValid(float value)"}</code> | True if the range is off, or the value is between `minimum` and `maximum` inclusive. |

## Used in

Members of other types that take, return or hold a `MinimumAndMaximumValues`:

[`StatDefinition.commandMinimumAndMaximumValues`](/game-api/types/alta-stats-effects/statdefinition#m-commandminimumandmaximumvalues).
