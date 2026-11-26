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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedStatModifier("}<Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier)"}</code> | <span className="api-desc">Creates a `TimedStatModifier` from `modifier` and `duration`.</span> |
| <Link id="m-ctor-2" /><code>{"TimedStatModifier("}<Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier, float duration)"}</code> | <span className="api-desc">Creates a `TimedStatModifier` from `modifier` and `duration`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onremoved" /><code>{"Action<"}<Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{"> OnRemoved"}</code> | <span className="api-desc">Called when `Remove` runs. Not called when a loaded or received modifier expires, since those call the modifier's own remove.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">Timeline entry that removes the modifier when its time runs out. Saved and synced so the timer carries over.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modifier" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" Modifier { get; private set; }"}</code> | <span className="api-desc">The stat modifier being timed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | <span className="api-desc">Cancels the timed removal. The modifier stays applied.</span> |
| <Link id="m-load" /><code>{"static "}<Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" Load("}<Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier">{"StatManagerSaveData.TimedModifier"}</Link>{" data)"}</code> | <span className="api-desc">Rebuilds a timed modifier from save data. Returns null if its time has already run out.</span> |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | <span className="api-desc">Removes the modifier from its stat and calls `OnRemoved`.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier">{"StatManagerSaveData.TimedModifier"}</Link>{" Save()"}</code> | <span className="api-desc">Returns save data with the stat, value, multiplier flag and remaining time.</span> |
| <Link id="m-serialize" /><code>{"static "}<Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" Serialize("}<Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" baseValue, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes a timed modifier on a network stream. Returns null when read with no time left.</span> |

## Used in

Members of other types that take, return or hold a `TimedStatModifier`:

<div className="api-used-in">

[`StatManager.appliedModifiers`](/mod/game-api/types/alta-stats-effects/statmanager#m-appliedmodifiers), [`StatManager.ApplyTimedModifier`](/mod/game-api/types/alta-stats-effects/statmanager#m-applytimedmodifier), [`StatManager.RemoveTimedModifier`](/mod/game-api/types/alta-stats-effects/statmanager#m-removetimedmodifier), [`DownedStateDebuffManager.playerStatModifiers`](/mod/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-playerstatmodifiers).

</div>
