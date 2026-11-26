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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`StatManagerSaveData1`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedModifier()"}</code> | <span className="api-desc">Creates a `StatManagerSaveData1.TimedModifier` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The stat being modified.</span> |
| <Link id="m-ismultiplier" /><code>{"bool isMultiplier"}</code> | <span className="api-desc">True if `value` multiplies the stat rather than adding to it.</span> |
| <Link id="m-time" /><code>{"float time"}</code> | <span className="api-desc">Time in seconds, turned into a `TimeSpan` on migration.</span> |
| <Link id="m-value" /><code>{"float value"}</code> | <span className="api-desc">The modifier amount.</span> |

## Used in

Members of other types that take, return or hold a `TimedModifier`:

<div className="api-used-in">

[`StatManagerSaveData1.modifiers`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1#m-modifiers).

</div>
