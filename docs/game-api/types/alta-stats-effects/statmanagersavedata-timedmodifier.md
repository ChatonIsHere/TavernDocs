---
title: "StatManagerSaveData.TimedModifier"
description: "A saved stat modifier that ends after a time, reapplied to the StatManager on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManagerSaveData.TimedModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

A saved stat modifier that ends after a time, reapplied to the `StatManager` on load.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StatManagerSaveData`](/game-api/types/alta-stats-effects/statmanagersavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimedModifier()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | The stat the modifier changes. |
| <Link id="m-ismultiplier" /><code>{"bool isMultiplier"}</code> | True if `value` multiplies the stat rather than adding to it. |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | The modifier's timeline entry time, saved with `Timeline.SaveEntry`. |
| <Link id="m-value" /><code>{"float value"}</code> | Amount of the change. |

## Used in

Members of other types that take, return or hold a `TimedModifier`:

[`StatManagerSaveData.modifiers`](/game-api/types/alta-stats-effects/statmanagersavedata#m-modifiers), [`TimedStatModifier.Load`](/game-api/types/alta-stats-effects/timedstatmodifier#m-load), [`TimedStatModifier.Save`](/game-api/types/alta-stats-effects/timedstatmodifier#m-save).
