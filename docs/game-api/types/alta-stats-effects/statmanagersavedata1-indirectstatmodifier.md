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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StatManagerSaveData1`](/game-api/types/alta-stats-effects/statmanagersavedata1)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IndirectStatModifier()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | The stat the modifiers apply to. |
| <Link id="m-modifiers" /><code><Link to="/game-api/types/alta-stats-effects/indirectmodifiersavedata">{"IndirectModifierSaveData"}</Link>{"[] modifiers"}</code> | The saved indirect modifiers. |
| <Link id="m-time" /><code>{"float time"}</code> | Time in seconds, turned into a `TimeSpan` on migration. |

## Used in

Members of other types that take, return or hold a `IndirectStatModifier`:

[`StatManagerSaveData1.indirectModifiers`](/game-api/types/alta-stats-effects/statmanagersavedata1#m-indirectmodifiers).
