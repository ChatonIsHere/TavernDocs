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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`FullnessStat`](/mod/game-api/types/alta-stats-effects/fullnessstat), [`HungerStat`](/mod/game-api/types/alta-stats-effects/hungerstat)
- **Nested types** [`ThresholdLevel`](/mod/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThresholdStat()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-levels" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel">{"ThresholdStat.ThresholdLevel"}</Link>{"[] levels"}</code> | <span className="api-desc">Backing field for `Levels`: each level's name, minimum value, modifiers and whether it shows a notch.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-notchescount" /><code>{"private int notchesCount"}</code> | <span className="api-desc">Number of levels (past the first) that show a notch. Worked out in `OnValidate`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-levels-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel">{"ThresholdStat.ThresholdLevel"}</Link>{"[] Levels { get; }"}</code> | <span className="api-desc">The levels, lowest first. Defaults to "empty" at 0 and "full" at 0.3.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Binds to the stat so each value change switches on the modifier set of the highest level it is above, or none while the stat is disabled.</span> |
| <Link id="m-getlevel" /><code>{"int GetLevel(float value)"}</code> | <span className="api-desc">Index of the highest level whose `MinThreshold` the value is strictly above, or 0.</span> |
| <Link id="m-getnotchescount" /><code>{"override int GetNotchesCount(float statMaximum)"}</code> | <span className="api-desc">Number of levels (after the first) marked to show a notch, as counted in `OnValidate`.</span> |
| <Link id="m-getnotchesposition" /><code>{"override void GetNotchesPosition(int notchesCount, float statMaximum, out float[] positions, out bool[] isMajor)"}</code> | <span className="api-desc">One major notch at each notched level's threshold, as a fraction of the stat maximum.</span> |
| <Link id="m-getsets" /><code>{"protected virtual "}<Link to="/mod/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{"[] GetSets("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Builds one `ModifierSet` per level from that level's modifier constructors.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: recounts the notched levels.</span> |
