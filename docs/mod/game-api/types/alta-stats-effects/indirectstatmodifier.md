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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndirectStatModifier("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" targetStat, "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Creates an `IndirectStatModifier` from `targetStat` and `manager`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-appliedmodifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" appliedModifier"}</code> | <span className="api-desc">The single stat modifier applied for the combined value, or null.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager"}</code> | <span className="api-desc">The stat manager that owns the stat.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" targetStat"}</code> | <span className="api-desc">The stat being changed.</span> |
| <Link id="m-trackedmodifiers" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{"> trackedModifiers"}</code> | <span className="api-desc">The indirect modifiers in effect.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Sum of the tracked modifiers' values, before the curve.</span> |

</details>

## Events

<details className="api-private">
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updated" /><code>{"private event Action Updated"}</code> | <span className="api-desc">Private event that calls each tracked modifier's `Update`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier">{"StatManagerSaveData.IndirectStatModifier"}</Link>{" data)"}</code> | <span className="api-desc">Re-registers saved modifiers, advanced by the time since saving, skipping those that ran out.</span> |
| <Link id="m-registermodifier" /><code>{"void RegisterModifier("}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | <span className="api-desc">Starts tracking an indirect modifier and adds its value to the sum.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier">{"StatManagerSaveData.IndirectStatModifier"}</Link>{" Save()"}</code> | <span className="api-desc">Saves the stat, the current time and each tracked modifier.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private void Changed()"}</code> | <span className="api-desc">Updates or creates the applied modifier from the curve when there are tracked modifiers, or removes it when there are none.</span> |
| <Link id="m-changedmodifier" /><code>{"private void ChangedModifier("}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | <span className="api-desc">Adds a tracked modifier's change in value to the sum.</span> |
| <Link id="m-clean" /><code>{"private void Clean("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">On stat manager reset, drops all tracked modifiers and removes the applied one.</span> |
| <Link id="m-finishedmodifier" /><code>{"private void FinishedModifier("}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | <span className="api-desc">Removes a finished modifier and its value from the sum.</span> |
| <Link id="m-update" /><code>{"private void Update("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">On each stat manager update, updates every tracked modifier.</span> |

</details>

## Used in

Members of other types that take, return or hold a `IndirectStatModifier`:

<div className="api-used-in">

[`StatManager.indirectModifiers`](/mod/game-api/types/alta-stats-effects/statmanager#m-indirectmodifiers).

</div>
