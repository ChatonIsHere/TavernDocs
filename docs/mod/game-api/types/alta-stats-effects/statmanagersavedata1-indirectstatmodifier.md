---
title: "StatManagerSaveData1.IndirectStatModifier"
description: "Version 1 save record of indirect modifiers on one stat, with time in seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManagerSaveData1.IndirectStatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

Version 1 save record of indirect modifiers on one stat, with time in seconds. Migrated to `StatManagerSaveData` with a `TimeSpan`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`StatManagerSaveData1`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndirectStatModifier()"}</code> | <span className="api-desc">Creates a `StatManagerSaveData1.IndirectStatModifier` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The stat the modifiers apply to.</span> |
| <Link id="m-modifiers" /><code><Link to="/mod/game-api/types/alta-stats-effects/indirectmodifiersavedata">{"IndirectModifierSaveData"}</Link>{"[] modifiers"}</code> | <span className="api-desc">The saved indirect modifiers.</span> |
| <Link id="m-time" /><code>{"float time"}</code> | <span className="api-desc">Time in seconds, turned into a `TimeSpan` on migration.</span> |

## Used in

Members of other types that take, return or hold a `IndirectStatModifier`:

<div className="api-used-in">

[`StatManagerSaveData1.indirectModifiers`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1#m-indirectmodifiers).

</div>
