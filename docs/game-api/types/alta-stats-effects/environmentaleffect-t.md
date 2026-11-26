---
title: "EnvironmentalEffect<T>"
description: "Legacy duration effect that does not stack: extra copies join a shared list and the effect only finishes when the last copy stops."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentalEffect&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

Legacy duration effect that does not stack: extra copies join a shared list and the effect only finishes when the last copy stops. Not used by the current effect system.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`DurationEffect<T>`](/game-api/types/alta-stats-effects/durationeffect-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnvironmentalEffect()"}</code> | Creates an `EnvironmentalEffect` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applying" /><code>{"private List<T> applying"}</code> | Copies of this effect currently applied to the same handler. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Stores the handler and adds this effect to its applying list. |
| <Link id="m-checkstackallowed" /><code>{"override bool CheckStackAllowed(T newEffect)"}</code> | Adds the new copy to the applying list and refuses to stack it as its own effect. |
| <Link id="m-stop" /><code>{"override void Stop()"}</code> | Hands the list over to the next copy if there is one, otherwise calls `Finished`. |
| <Link id="m-finished" /><code>{"protected virtual void Finished()"}</code> | Called when the last copy stops. Empty here; subclasses put clean-up in it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyingstopped" /><code>{"private void ApplyingStopped(T effect)"}</code> | Removes a stopped copy from the applying list. |

</details>
