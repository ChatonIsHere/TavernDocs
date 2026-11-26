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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `IEnumerable`, `IEnumerable<Modifier>`
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifierSet("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Creates a `ModifierSet` from `manager`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-modifiers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{"> modifiers"}</code> | <span className="api-desc">The modifiers in the set.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" Manager { get; private set; }"}</code> | <span className="api-desc">The stat manager the modifiers act on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{" modifier)"}</code> | <span className="api-desc">Initializes a modifier against the manager and adds it if that succeeds.</span> |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | <span className="api-desc">Applies every modifier in the set.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{"> GetEnumerator()"}</code> | <span className="api-desc">Enumerates the modifiers in the set.</span> |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | <span className="api-desc">Removes every modifier in the set from its stat. The modifiers stay in the set.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the modifiers in the set.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ModifierSet`:

<div className="api-used-in">

[`HungerStat.GetSets`](/mod/game-api/types/alta-stats-effects/hungerstat#m-getsets), [`SetSwitch.active`](/mod/game-api/types/alta-stats-effects/setswitch#m-active), [`SetSwitch.Set`](/mod/game-api/types/alta-stats-effects/setswitch#m-set), [`ThresholdStat.GetSets`](/mod/game-api/types/alta-stats-effects/thresholdstat#m-getsets), [`ThresholdStat.ThresholdLevel.GetSet`](/mod/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel#m-getset).

</div>
