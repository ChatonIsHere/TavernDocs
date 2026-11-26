---
title: "StatBarSimple.IsLerping"
description: "Callback for StatBarSimple.Lerping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarSimple.IsLerping

A **delegate** in `Root.Township`, `Alta.StatSystem`.

Callback for `StatBarSimple.Lerping`. Each listener sets the flag to true while it is still animating, and the bar keeps animating until none do.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`StatBarSimple`](/mod/game-api/types/alta-stats-effects/statbarsimple)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IsLerping(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool isLerping, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isLerping, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool isLerping)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `IsLerping`:

[`StatBarSimple.Lerping`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-lerping).
