---
title: "DurationEffect<T>"
description: "Base for old-style effects that last over time, with a Stopped event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurationEffect&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

Base for old-style effects that last over time, with a `Stopped` event. Part of the legacy `Effect` classes, which the current `EffectDefinition` system does not use.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Effect`](/mod/game-api/types/alta-stats-effects/effect)
- **Derived types** [`DamageOverTime`](/mod/game-api/types/alta-stats-effects/damageovertime), [`EnvironmentalEffect<T>`](/mod/game-api/types/alta-stats-effects/environmentaleffect-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DurationEffect()"}</code> | <span className="api-desc">Creates a `DurationEffect` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isduration" /><code>{"override bool IsDuration { get; }"}</code> | <span className="api-desc">Always true for duration effects.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stopped" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/effecteventhandler-t">{"EffectEventHandler"}</Link>{"<T> Stopped"}</code> | <span className="api-desc">Raised when the effect stops.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkstackallowed" /><code>{"virtual bool CheckStackAllowed(T newEffect)"}</code> | <span className="api-desc">Called with a new effect of the same type; return false to stop it stacking. Default allows it.</span> |
| <Link id="m-stop" /><code>{"virtual void Stop()"}</code> | <span className="api-desc">Raises `Stopped` with this effect. Subclasses add their own clean-up.</span> |
| <Link id="m-update" /><code>{"abstract void Update()"}</code> | <span className="api-desc">Per-tick work for the effect, written by each subclass.</span> |
