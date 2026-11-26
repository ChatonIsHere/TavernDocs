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
| <Link id="m-ctor" /><code>{"IndirectStatModifier()"}</code> | <span className="api-desc">Creates a `StatManagerSaveData.IndirectStatModifier` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The stat the modifiers apply to.</span> |
| <Link id="m-modifiers" /><code><Link to="/mod/game-api/types/alta-stats-effects/indirectmodifiersavedata">{"IndirectModifierSaveData"}</Link>{"[] modifiers"}</code> | <span className="api-desc">Each indirect modifier's saved state.</span> |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | <span className="api-desc">Timeline time at saving. On load the gap to now is added to each modifier's tick.</span> |

## Used in

Members of other types that take, return or hold a `IndirectStatModifier`:

<div className="api-used-in">

[`IndirectStatModifier.Load`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-load), [`IndirectStatModifier.Save`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-save), [`StatManagerSaveData.indirectModifiers`](/mod/game-api/types/alta-stats-effects/statmanagersavedata#m-indirectmodifiers).

</div>
