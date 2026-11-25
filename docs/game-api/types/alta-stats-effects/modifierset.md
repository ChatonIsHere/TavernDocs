---
title: "ModifierSet"
description: "A group applied and removed together (one per threshold level)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifierSet

A **class** in `Root.Township`, `Alta.StatSystem`.

A group applied and removed together (one per threshold level).

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

| Member |
| --- |
| <Link id="m-modifiers" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{"> modifiers"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" Manager { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{" modifier)"}</code> |
| <Link id="m-apply" /><code>{"void Apply()"}</code> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/alta-stats-effects/modifier">{"Modifier"}</Link>{"> GetEnumerator()"}</code> |
| <Link id="m-remove" /><code>{"void Remove()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ModifierSet`:

[`HungerStat.GetSets`](/game-api/types/alta-stats-effects/hungerstat#m-getsets), [`SetSwitch.active`](/game-api/types/alta-stats-effects/setswitch#m-active), [`SetSwitch.Set`](/game-api/types/alta-stats-effects/setswitch#m-set), [`ThresholdStat.GetSets`](/game-api/types/alta-stats-effects/thresholdstat#m-getsets), [`ThresholdStat.ThresholdLevel.GetSet`](/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel#m-getset).
