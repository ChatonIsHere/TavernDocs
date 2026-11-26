---
title: "TimedStatModifier"
description: "A stat modifier that removes itself after a duration, using the Timeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedStatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

A stat modifier that removes itself after a duration, using the `Timeline`. Can be sent over the network and saved.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedStatModifier("}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier)"}</code> | Creates a `TimedStatModifier` from `modifier` and `duration`. |
| <Link id="m-ctor-2" /><code>{"TimedStatModifier("}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier, float duration)"}</code> | Creates a `TimedStatModifier` from `modifier` and `duration`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onremoved" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{"> OnRemoved"}</code> | Called when `Remove` runs. Not called when a loaded or received modifier expires, since those call the modifier's own remove. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | Timeline entry that removes the modifier when its time runs out. Saved and synced so the timer carries over. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modifier" /><code><Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" Modifier { get; private set; }"}</code> | The stat modifier being timed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | Cancels the timed removal. The modifier stays applied. |
| <Link id="m-load" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" Load("}<Link to="/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier">{"StatManagerSaveData.TimedModifier"}</Link>{" data)"}</code> | Rebuilds a timed modifier from save data. Returns null if its time has already run out. |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | Removes the modifier from its stat and calls `OnRemoved`. |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier">{"StatManagerSaveData.TimedModifier"}</Link>{" Save()"}</code> | Returns save data with the stat, value, multiplier flag and remaining time. |
| <Link id="m-serialize" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" Serialize("}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" baseValue, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes a timed modifier on a network stream. Returns null when read with no time left. |

## Used in

Members of other types that take, return or hold a `TimedStatModifier`:

[`StatManager.appliedModifiers`](/game-api/types/alta-stats-effects/statmanager#m-appliedmodifiers), [`StatManager.ApplyTimedModifier`](/game-api/types/alta-stats-effects/statmanager#m-applytimedmodifier), [`StatManager.RemoveTimedModifier`](/game-api/types/alta-stats-effects/statmanager#m-removetimedmodifier), [`DownedStateDebuffManager.playerStatModifiers`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-playerstatmodifiers).
