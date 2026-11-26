---
title: "EffectEventHandler<T>"
description: "Callback with an effect of type T."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectEventHandler&lt;T&gt;

A **delegate** in `Root.Township`, `Alta.Alchemy`.

Callback with an effect of type `T`. Used for `DurationEffect<T>.Stopped`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(T effect, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(T effect)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `EffectEventHandler&lt;T>`:

[`DurationEffect<T>.Stopped`](/game-api/types/alta-stats-effects/durationeffect-t#m-stopped).
