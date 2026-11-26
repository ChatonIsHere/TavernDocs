---
title: "ThresholdStat.ThresholdLevel"
description: "One level of a ThresholdStat: a name, the fraction it starts at, and the stat modifiers that apply while the stat is at that level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThresholdStat.ThresholdLevel

A **class** in `Root.Township`, `Alta.StatSystem`.

One level of a `ThresholdStat`: a name, the fraction it starts at, and the stat modifiers that apply while the stat is at that level. Defaults are `empty` at 0 and `full` at 0.3.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`ThresholdStat`](/mod/game-api/types/alta-stats-effects/thresholdstat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThresholdLevel(string name, float minThreshold)"}</code> | <span className="api-desc">Creates a `ThresholdStat.ThresholdLevel` from `name` and `minThreshold`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-constructors" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmodifierconstructor">{"StatModifierConstructor"}</Link>{"[] constructors"}</code> | <span className="api-desc">Modifier recipes applied while this level is active.</span> |
| <Link id="m-hasnotch" /><code>{"private bool hasNotch"}</code> | <span className="api-desc">Backing field for `HasNotch`. Defaults to true.</span> |
| <Link id="m-minthreshold" /><code>{"private float minThreshold"}</code> | <span className="api-desc">Backing field for `MinThreshold`.</span> |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Backing field for `Name`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasnotch-2" /><code>{"bool HasNotch { get; }"}</code> | <span className="api-desc">Whether the stat bar draws a notch at this level's threshold.</span> |
| <Link id="m-minthreshold-2" /><code>{"float MinThreshold { get; }"}</code> | <span className="api-desc">Lowest stat value, as a fraction, at which this level applies.</span> |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Level name, such as `empty` or `full`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getset" /><code><Link to="/mod/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{" GetSet("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Builds a `ModifierSet` for the given stat manager holding a modifier from each constructor.</span> |

## Used in

Members of other types that take, return or hold a `ThresholdLevel`:

<div className="api-used-in">

[`ThresholdStat.levels`](/mod/game-api/types/alta-stats-effects/thresholdstat#m-levels), [`ThresholdStat.Levels`](/mod/game-api/types/alta-stats-effects/thresholdstat#m-levels-2).

</div>
