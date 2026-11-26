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
| <Link id="m-ctor" /><code>{"StatModifierConstructor()"}</code> | <span className="api-desc">Creates a `StatModifierConstructor` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasbuffeffects" /><code>{"private bool hasBuffEffects"}</code> | <span className="api-desc">Whether the modifier shows buff effects.</span> |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> | <span className="api-desc">Whether `value` multiplies the stat rather than adding to it.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | <span className="api-desc">The stat the modifier changes.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Amount added to, or multiplied into, the target stat.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmodifier" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" GetModifier()"}</code> | <span className="api-desc">Builds a new `StatModifier` from the serialized settings.</span> |

## Used in

Members of other types that take, return or hold a `StatModifierConstructor`:

<div className="api-used-in">

[`ThresholdStat.ThresholdLevel.constructors`](/mod/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel#m-constructors), [`DownedStateSettings.respawnDebuffs`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-respawndebuffs).

</div>
