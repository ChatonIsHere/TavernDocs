---
title: "ThresholdStat"
description: "Has Levels (each a name, a MinThreshold and stat modifiers). Applies the modifier set of the level the value is in, and swaps sets as it moves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThresholdStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Has `Levels` (each a name, a `MinThreshold` and stat modifiers). Applies the modifier set of the level the value is in, and swaps sets as it moves.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`FullnessStat`](/game-api/types/alta-stats-effects/fullnessstat), [`HungerStat`](/game-api/types/alta-stats-effects/hungerstat)
- **Nested types** [`ThresholdLevel`](/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThresholdStat()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-levels" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel">{"ThresholdStat.ThresholdLevel"}</Link>{"[] levels"}</code> |  |
| <Link id="m-notchescount" /><code>{"private int notchesCount"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-levels-2" /><code><Link to="/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel">{"ThresholdStat.ThresholdLevel"}</Link>{"[] Levels { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-getlevel" /><code>{"int GetLevel(float value)"}</code> |  |
| <Link id="m-getnotchescount" /><code>{"override int GetNotchesCount(float statMaximum)"}</code> |  |
| <Link id="m-getnotchesposition" /><code>{"override void GetNotchesPosition(int notchesCount, float statMaximum, out float[] positions, out bool[] isMajor)"}</code> |  |
| <Link id="m-getsets" /><code>{"protected virtual "}<Link to="/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{"[] GetSets("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
