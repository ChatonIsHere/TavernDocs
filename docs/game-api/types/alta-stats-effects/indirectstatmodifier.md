---
title: "IndirectStatModifier"
description: "Combines timed IndirectModifiers on one stat into a single StatModifier, by summing their values and passing the sum through the stat's indirect..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndirectStatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

Combines timed `IndirectModifier`s on one stat into a single `StatModifier`, by summing their values and passing the sum through the stat's indirect modification curve. Owned by a `StatManager`; saved with it.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndirectStatModifier("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" targetStat, "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | Creates an `IndirectStatModifier` from `targetStat` and `manager`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-appliedmodifier" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" appliedModifier"}</code> | The single stat modifier applied for the combined value, or null. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager"}</code> | The stat manager that owns the stat. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" targetStat"}</code> | The stat being changed. |
| <Link id="m-trackedmodifiers" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{"> trackedModifiers"}</code> | The indirect modifiers in effect. |
| <Link id="m-value" /><code>{"private float value"}</code> | Sum of the tracked modifiers' values, before the curve. |

</details>

## Events

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updated" /><code>{"private event Action Updated"}</code> | Private event that calls each tracked modifier's `Update`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier">{"StatManagerSaveData.IndirectStatModifier"}</Link>{" data)"}</code> | Re-registers saved modifiers, advanced by the time since saving, skipping those that ran out. |
| <Link id="m-registermodifier" /><code>{"void RegisterModifier("}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | Starts tracking an indirect modifier and adds its value to the sum. |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier">{"StatManagerSaveData.IndirectStatModifier"}</Link>{" Save()"}</code> | Saves the stat, the current time and each tracked modifier. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private void Changed()"}</code> | Updates or creates the applied modifier from the curve when there are tracked modifiers, or removes it when there are none. |
| <Link id="m-changedmodifier" /><code>{"private void ChangedModifier("}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | Adds a tracked modifier's change in value to the sum. |
| <Link id="m-clean" /><code>{"private void Clean("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | On stat manager reset, drops all tracked modifiers and removes the applied one. |
| <Link id="m-finishedmodifier" /><code>{"private void FinishedModifier("}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | Removes a finished modifier and its value from the sum. |
| <Link id="m-update" /><code>{"private void Update("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | On each stat manager update, updates every tracked modifier. |

</details>

## Used in

Members of other types that take, return or hold a `IndirectStatModifier`:

[`StatManager.indirectModifiers`](/game-api/types/alta-stats-effects/statmanager#m-indirectmodifiers).
