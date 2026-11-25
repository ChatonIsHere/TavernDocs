---
title: "EnvironmentalEffect<T>"
description: "abstract class EnvironmentalEffect<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentalEffect&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`DurationEffect<T>`](/game-api/types/alta-stats-effects/durationeffect-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EnvironmentalEffect()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-applying" /><code>{"private List<T> applying"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-apply" /><code>{"override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> |
| <Link id="m-checkstackallowed" /><code>{"override bool CheckStackAllowed(T newEffect)"}</code> |
| <Link id="m-stop" /><code>{"override void Stop()"}</code> |
| <Link id="m-finished" /><code>{"protected virtual void Finished()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-applyingstopped" /><code>{"private void ApplyingStopped(T effect)"}</code> |

</details>
