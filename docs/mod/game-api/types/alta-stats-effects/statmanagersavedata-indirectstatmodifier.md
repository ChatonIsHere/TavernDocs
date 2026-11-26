---
title: "StatManagerSaveData.IndirectStatModifier"
description: "Saved indirect modifiers on one stat of a StatManager, with the timeline time they were saved at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManagerSaveData.IndirectStatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

Saved indirect modifiers on one stat of a `StatManager`, with the timeline time they were saved at.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`StatManagerSaveData`](/mod/game-api/types/alta-stats-effects/statmanagersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndirectStatModifier()"}</code> | Creates a `StatManagerSaveData.IndirectStatModifier` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | The stat the modifiers apply to. |
| <Link id="m-modifiers" /><code><Link to="/mod/game-api/types/alta-stats-effects/indirectmodifiersavedata">{"IndirectModifierSaveData"}</Link>{"[] modifiers"}</code> | Each indirect modifier's saved state. |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | Timeline time at saving. On load the gap to now is added to each modifier's tick. |

## Used in

Members of other types that take, return or hold a `IndirectStatModifier`:

[`IndirectStatModifier.Load`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-load), [`IndirectStatModifier.Save`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-save), [`StatManagerSaveData.indirectModifiers`](/mod/game-api/types/alta-stats-effects/statmanagersavedata#m-indirectmodifiers).
