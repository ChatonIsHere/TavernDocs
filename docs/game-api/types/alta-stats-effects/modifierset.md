---
title: "ModifierSet"
description: "A group of stat modifiers for one StatManager, applied or removed together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifierSet

A **class** in `Root.Township`, `Alta.StatSystem`.

A group of stat modifiers for one `StatManager`, applied or removed together. Threshold stats use one set per level and switch sets as the value crosses levels.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `IEnumerable`, `IEnumerable<Modifier>`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModifierSet("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-modifiers" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{"> modifiers"}</code> | The modifiers in the set. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" Manager { get; private set; }"}</code> | The stat manager the modifiers act on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{" modifier)"}</code> | Initializes a modifier against the manager and adds it if that succeeds. |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | Applies every modifier in the set. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{"> GetEnumerator()"}</code> | Enumerates the modifiers in the set. |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | Removes every modifier in the set from its stat. The modifiers stay in the set. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the modifiers in the set. |

</details>

## Used in

Members of other types that take, return or hold a `ModifierSet`:

[`HungerStat.GetSets`](/game-api/types/alta-stats-effects/hungerstat#m-getsets), [`SetSwitch.active`](/game-api/types/alta-stats-effects/setswitch#m-active), [`SetSwitch.Set`](/game-api/types/alta-stats-effects/setswitch#m-set), [`ThresholdStat.GetSets`](/game-api/types/alta-stats-effects/thresholdstat#m-getsets), [`ThresholdStat.ThresholdLevel.GetSet`](/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel#m-getset).
