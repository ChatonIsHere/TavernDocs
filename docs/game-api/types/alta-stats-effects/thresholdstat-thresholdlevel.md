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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`ThresholdStat`](/game-api/types/alta-stats-effects/thresholdstat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThresholdLevel(string name, float minThreshold)"}</code> | Creates a `ThresholdStat.ThresholdLevel` from `name` and `minThreshold`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-constructors" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmodifierconstructor">{"StatModifierConstructor"}</Link>{"[] constructors"}</code> | Modifier recipes applied while this level is active. |
| <Link id="m-hasnotch" /><code>{"private bool hasNotch"}</code> | Backing field for `HasNotch`. Defaults to true. |
| <Link id="m-minthreshold" /><code>{"private float minThreshold"}</code> | Backing field for `MinThreshold`. |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasnotch-2" /><code>{"bool HasNotch { get; }"}</code> | Whether the stat bar draws a notch at this level's threshold. |
| <Link id="m-minthreshold-2" /><code>{"float MinThreshold { get; }"}</code> | Lowest stat value, as a fraction, at which this level applies. |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | Level name, such as `empty` or `full`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getset" /><code><Link to="/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{" GetSet("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | Builds a `ModifierSet` for the given stat manager holding a modifier from each constructor. |

## Used in

Members of other types that take, return or hold a `ThresholdLevel`:

[`ThresholdStat.levels`](/game-api/types/alta-stats-effects/thresholdstat#m-levels), [`ThresholdStat.Levels`](/game-api/types/alta-stats-effects/thresholdstat#m-levels-2).
