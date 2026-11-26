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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Effect`](/game-api/types/alta-stats-effects/effect)
- **Derived types** [`DamageOverTime`](/game-api/types/alta-stats-effects/damageovertime), [`EnvironmentalEffect<T>`](/game-api/types/alta-stats-effects/environmentaleffect-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected DurationEffect()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isduration" /><code>{"override bool IsDuration { get; }"}</code> | Always true for duration effects. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stopped" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/effecteventhandler-t">{"EffectEventHandler"}</Link>{"<T> Stopped"}</code> | Raised when the effect stops. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkstackallowed" /><code>{"virtual bool CheckStackAllowed(T newEffect)"}</code> | Called with a new effect of the same type; return false to stop it stacking. Default allows it. |
| <Link id="m-stop" /><code>{"virtual void Stop()"}</code> | Raises `Stopped` with this effect. Subclasses add their own clean-up. |
| <Link id="m-update" /><code>{"abstract void Update()"}</code> | Per-tick work for the effect, written by each subclass. |
