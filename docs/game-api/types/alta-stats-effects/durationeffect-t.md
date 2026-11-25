---
title: "DurationEffect<T>"
description: "abstract class DurationEffect<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurationEffect&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Effect`](/game-api/types/alta-stats-effects/effect)
- **Derived types** [`DamageOverTime`](/game-api/types/alta-stats-effects/damageovertime), [`EnvironmentalEffect<T>`](/game-api/types/alta-stats-effects/environmentaleffect-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected DurationEffect()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-isduration" /><code>{"override bool IsDuration { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-stopped" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/effecteventhandler-t">{"EffectEventHandler"}</Link>{"<T> Stopped"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-checkstackallowed" /><code>{"virtual bool CheckStackAllowed(T newEffect)"}</code> |
| <Link id="m-stop" /><code>{"virtual void Stop()"}</code> |
| <Link id="m-update" /><code>{"abstract void Update()"}</code> |
