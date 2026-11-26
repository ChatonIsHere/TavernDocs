---
title: "StatModifierConstructor"
description: "Serialized recipe for one stat modifier, set up in the inspector on a ThresholdStat level and turned into a StatModifier when that level applies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatModifierConstructor

A **internal class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Serialized recipe for one stat modifier, set up in the inspector on a `ThresholdStat` level and turned into a `StatModifier` when that level applies.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatModifierConstructor()"}</code> | Creates a `StatModifierConstructor` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasbuffeffects" /><code>{"private bool hasBuffEffects"}</code> | Whether the modifier shows buff effects. |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> | Whether `value` multiplies the stat rather than adding to it. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | The stat the modifier changes. |
| <Link id="m-value" /><code>{"private float value"}</code> | Amount added to, or multiplied into, the target stat. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmodifier" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" GetModifier()"}</code> | Builds a new `StatModifier` from the serialized settings. |

## Used in

Members of other types that take, return or hold a `StatModifierConstructor`:

[`ThresholdStat.ThresholdLevel.constructors`](/mod/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel#m-constructors), [`DownedStateSettings.respawnDebuffs`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-respawndebuffs).
