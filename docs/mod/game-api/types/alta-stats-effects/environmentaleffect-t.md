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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`DurationEffect<T>`](/mod/game-api/types/alta-stats-effects/durationeffect-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnvironmentalEffect()"}</code> | <span className="api-desc">Creates an `EnvironmentalEffect` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applying" /><code>{"private List<T> applying"}</code> | <span className="api-desc">Copies of this effect currently applied to the same handler.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Stores the handler and adds this effect to its applying list.</span> |
| <Link id="m-checkstackallowed" /><code>{"override bool CheckStackAllowed(T newEffect)"}</code> | <span className="api-desc">Adds the new copy to the applying list and refuses to stack it as its own effect.</span> |
| <Link id="m-stop" /><code>{"override void Stop()"}</code> | <span className="api-desc">Hands the list over to the next copy if there is one, otherwise calls `Finished`.</span> |
| <Link id="m-finished" /><code>{"protected virtual void Finished()"}</code> | <span className="api-desc">Called when the last copy stops. Empty here; subclasses put clean-up in it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyingstopped" /><code>{"private void ApplyingStopped(T effect)"}</code> | <span className="api-desc">Removes a stopped copy from the applying list.</span> |

</details>
