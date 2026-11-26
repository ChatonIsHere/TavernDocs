---
title: "Effect"
description: "Base of the legacy effect classes (DurationEffect, EnvironmentalEffect)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Effect

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

Base of the legacy effect classes (`DurationEffect`, `EnvironmentalEffect`). It only remembers the handler it was applied to; current effects use `EffectDefinition` instead.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`DurationEffect<T>`](/game-api/types/alta-stats-effects/durationeffect-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Effect()"}</code> | Creates an `Effect` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cooldown" /><code>{"virtual float Cooldown { get; }"}</code> | Cooldown in seconds; -1 (none) unless a subclass overrides it. |
| <Link id="m-handler" /><code><Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" Handler { get; private set; }"}</code> | The `EffectHandler` this effect was last applied to. |
| <Link id="m-isduration" /><code>{"virtual bool IsDuration { get; }"}</code> | False here; true for `DurationEffect` subclasses. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"virtual void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Stores the `EffectHandler` the effect was applied to. Subclasses add behaviour. |
