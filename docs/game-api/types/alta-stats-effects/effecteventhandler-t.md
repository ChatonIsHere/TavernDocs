---
title: "EffectEventHandler<T>"
description: "delegate EffectEventHandler<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectEventHandler&lt;T&gt;

A **delegate** in `Root.Township`, `Alta.Alchemy`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectEventHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(T effect, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke(T effect)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EffectEventHandler&lt;T>`:

[`DurationEffect<T>.Stopped`](/game-api/types/alta-stats-effects/durationeffect-t#m-stopped).
