---
title: "StatModifier"
description: "A modifier that adds to or multiplies one stat while it's applied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

A modifier that adds to or multiplies one stat while it's applied. Buff and non-buff modifiers change separate parts of the stat.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Modifier`](/mod/game-api/types/alta-stats-effects/modifier)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatModifier("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float value, bool isMultiplier = false, bool isBuff = true)"}</code> | <span className="api-desc">Creates a `StatModifier` from `stat`, `value`, `isMultiplier` and `isBuff`.</span> |
| <Link id="m-ctor-2" /><code>{"StatModifier("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, float value, bool isMultiplier = false, bool isBuff = true)"}</code> | <span className="api-desc">Creates a `StatModifier` from `stat`, `value`, `isMultiplier` and `isBuff`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isbuff" /><code>{"private bool isBuff"}</code> | <span className="api-desc">Whether the modifier applies to the stat's buff values or its non-buff values. `UpdateValue` always changes the buff values.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismultiplier" /><code>{"bool IsMultiplier { get; private set; }"}</code> | <span className="api-desc">Whether the value multiplies the stat instead of adding to it.</span> |
| <Link id="m-stat" /><code><Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The stat being changed.</span> |
| <Link id="m-statdefinition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Which stat this modifier is for.</span> |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | <span className="api-desc">The amount added, or the multiplier.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override bool Initialize("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Finds the stat in the manager if it wasn't given one. False if the stat doesn't exist.</span> |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> | <span className="api-desc">Changes the value while applied. It always changes the buff parts, even for a non-buff modifier.</span> |
| <Link id="m-internalapply" /><code>{"protected override void InternalApply()"}</code> | <span className="api-desc">Adds the value to the stat's extra, or multiplies its multiplier, buff or non-buff.</span> |
| <Link id="m-internalremove" /><code>{"protected override void InternalRemove()"}</code> | <span className="api-desc">Undoes `InternalApply`.</span> |

## Used in

Members of other types that take, return or hold a `StatModifier`:

<div className="api-used-in">

[`IndirectStatModifier.appliedModifier`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-appliedmodifier), [`LevelStatModifier.modifier`](/mod/game-api/types/alta-stats-effects/levelstatmodifier#m-modifier), [`StatManager.ApplyTimedModifier`](/mod/game-api/types/alta-stats-effects/statmanager#m-applytimedmodifier), [`StatModifierConstructor.GetModifier`](/mod/game-api/types/alta-stats-effects/statmodifierconstructor#m-getmodifier), [`TimedStatModifier.Modifier`](/mod/game-api/types/alta-stats-effects/timedstatmodifier#m-modifier), [`TimedStatModifier.TimedStatModifier`](/mod/game-api/types/alta-stats-effects/timedstatmodifier#m-ctor), [`DownedStateDebuffManager.ApplyDebuffToPlayer`](/mod/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-applydebufftoplayer), [`DownedStateSettings.GetRespawnDebuffs`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-getrespawndebuffs).

</div>
