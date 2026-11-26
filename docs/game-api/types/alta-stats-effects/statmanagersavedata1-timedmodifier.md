---
title: "StatManagerSaveData1.TimedModifier"
description: "Version 1 save record of a timed stat modifier, with time in seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManagerSaveData1.TimedModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

Version 1 save record of a timed stat modifier, with time in seconds. Migrated to `StatManagerSaveData` with a `TimeSpan`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StatManagerSaveData1`](/game-api/types/alta-stats-effects/statmanagersavedata1)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimedModifier()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | The stat being modified. |
| <Link id="m-ismultiplier" /><code>{"bool isMultiplier"}</code> | True if `value` multiplies the stat rather than adding to it. |
| <Link id="m-time" /><code>{"float time"}</code> | Time in seconds, turned into a `TimeSpan` on migration. |
| <Link id="m-value" /><code>{"float value"}</code> | The modifier amount. |

## Used in

Members of other types that take, return or hold a `TimedModifier`:

[`StatManagerSaveData1.modifiers`](/game-api/types/alta-stats-effects/statmanagersavedata1#m-modifiers).
