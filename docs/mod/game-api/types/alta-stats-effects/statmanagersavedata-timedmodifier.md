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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`StatManagerSaveData`](/mod/game-api/types/alta-stats-effects/statmanagersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedModifier()"}</code> | <span className="api-desc">Creates a `StatManagerSaveData.TimedModifier` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The stat the modifier changes.</span> |
| <Link id="m-ismultiplier" /><code>{"bool isMultiplier"}</code> | <span className="api-desc">True if `value` multiplies the stat rather than adding to it.</span> |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | <span className="api-desc">The modifier's timeline entry time, saved with `Timeline.SaveEntry`.</span> |
| <Link id="m-value" /><code>{"float value"}</code> | <span className="api-desc">Amount of the change.</span> |

## Used in

Members of other types that take, return or hold a `TimedModifier`:

<div className="api-used-in">

[`StatManagerSaveData.modifiers`](/mod/game-api/types/alta-stats-effects/statmanagersavedata#m-modifiers), [`TimedStatModifier.Load`](/mod/game-api/types/alta-stats-effects/timedstatmodifier#m-load), [`TimedStatModifier.Save`](/mod/game-api/types/alta-stats-effects/timedstatmodifier#m-save).

</div>
