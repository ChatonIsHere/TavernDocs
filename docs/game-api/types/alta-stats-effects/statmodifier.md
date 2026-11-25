---
title: "StatModifier"
description: "Adds Value to Extra (or NonBuffExtra), or multiplies BuffMultiplier (or NonBuffMultiplier)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

Adds `Value` to `Extra` (or `NonBuffExtra`), or multiplies `BuffMultiplier` (or `NonBuffMultiplier`).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Modifier`](/game-api/types/alta-stats-effects/modifier)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatModifier("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float value, bool isMultiplier = false, bool isBuff = true)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"StatModifier("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, float value, bool isMultiplier = false, bool isBuff = true)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isbuff" /><code>{"private bool isBuff"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismultiplier" /><code>{"bool IsMultiplier { get; private set; }"}</code> |  |
| <Link id="m-stat" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-statdefinition" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override bool Initialize("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> |  |
| <Link id="m-internalapply" /><code>{"protected override void InternalApply()"}</code> |  |
| <Link id="m-internalremove" /><code>{"protected override void InternalRemove()"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatModifier`:

[`IndirectStatModifier.appliedModifier`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-appliedmodifier), [`LevelStatModifier.modifier`](/game-api/types/alta-stats-effects/levelstatmodifier#m-modifier), [`StatManager.ApplyTimedModifier`](/game-api/types/alta-stats-effects/statmanager#m-applytimedmodifier), [`StatModifierConstructor.GetModifier`](/game-api/types/alta-stats-effects/statmodifierconstructor#m-getmodifier), [`TimedStatModifier.Modifier`](/game-api/types/alta-stats-effects/timedstatmodifier#m-modifier), [`TimedStatModifier.TimedStatModifier`](/game-api/types/alta-stats-effects/timedstatmodifier#m-ctor), [`DownedStateDebuffManager.ApplyDebuffToPlayer`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-applydebufftoplayer), [`DownedStateSettings.GetRespawnDebuffs`](/game-api/types/game-other-namespaces/downedstatesettings#m-getrespawndebuffs).
