---
title: "TimedStatModifier"
description: "A StatModifier removed after a time. Made by ApplyTimedModifier. Cancel() stops the timer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedStatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

A `StatModifier` removed after a time. Made by `ApplyTimedModifier`. `Cancel()` stops the timer.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedStatModifier("}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"TimedStatModifier("}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier, float duration)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onremoved" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{"> OnRemoved"}</code> |  |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modifier" /><code><Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" Modifier { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> |  |
| <Link id="m-load" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" Load("}<Link to="/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier">{"StatManagerSaveData.TimedModifier"}</Link>{" data)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove()"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier">{"StatManagerSaveData.TimedModifier"}</Link>{" Save()"}</code> |  |
| <Link id="m-serialize" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" Serialize("}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" baseValue, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TimedStatModifier`:

[`StatManager.appliedModifiers`](/game-api/types/alta-stats-effects/statmanager#m-appliedmodifiers), [`StatManager.ApplyTimedModifier`](/game-api/types/alta-stats-effects/statmanager#m-applytimedmodifier), [`StatManager.RemoveTimedModifier`](/game-api/types/alta-stats-effects/statmanager#m-removetimedmodifier), [`DownedStateDebuffManager.playerStatModifiers`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-playerstatmodifiers).
