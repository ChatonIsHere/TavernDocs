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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StatBarSimple`](/game-api/types/alta-stats-effects/statbarsimple)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IsLerping(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool isLerping, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isLerping, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool isLerping)"}</code> |

## Used in

Members of other types that take, return or hold a `IsLerping`:

[`StatBarSimple.Lerping`](/game-api/types/alta-stats-effects/statbarsimple#m-lerping).
