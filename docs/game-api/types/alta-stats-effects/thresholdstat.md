---
title: "ThresholdStat"
description: "A StatDefinition split into named levels by threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThresholdStat

A **class** in `Root.Township`, `Alta.StatSystem`.

A `StatDefinition` split into named levels by threshold. While the stat's value is above a level's threshold, that level's stat modifiers apply.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`FullnessStat`](/game-api/types/alta-stats-effects/fullnessstat), [`HungerStat`](/game-api/types/alta-stats-effects/hungerstat)
- **Nested types** [`ThresholdLevel`](/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThresholdStat()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-levels" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel">{"ThresholdStat.ThresholdLevel"}</Link>{"[] levels"}</code> | Backing field for `Levels`: each level's name, minimum value, modifiers and whether it shows a notch. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-notchescount" /><code>{"private int notchesCount"}</code> | Number of levels (past the first) that show a notch. Worked out in `OnValidate`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-levels-2" /><code><Link to="/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel">{"ThresholdStat.ThresholdLevel"}</Link>{"[] Levels { get; }"}</code> | The levels, lowest first. Defaults to "empty" at 0 and "full" at 0.3. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Binds to the stat so each value change switches on the modifier set of the highest level it is above, or none while the stat is disabled. |
| <Link id="m-getlevel" /><code>{"int GetLevel(float value)"}</code> | Index of the highest level whose `MinThreshold` the value is strictly above, or 0. |
| <Link id="m-getnotchescount" /><code>{"override int GetNotchesCount(float statMaximum)"}</code> | Number of levels (after the first) marked to show a notch, as counted in `OnValidate`. |
| <Link id="m-getnotchesposition" /><code>{"override void GetNotchesPosition(int notchesCount, float statMaximum, out float[] positions, out bool[] isMajor)"}</code> | One major notch at each notched level's threshold, as a fraction of the stat maximum. |
| <Link id="m-getsets" /><code>{"protected virtual "}<Link to="/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{"[] GetSets("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Builds one `ModifierSet` per level from that level's modifier constructors. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: recounts the notched levels. |
