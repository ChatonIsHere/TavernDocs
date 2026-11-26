---
title: "NetworkStarer.ChangedState"
description: "Handler for NetworkStarer.ChangedTurning: true when the body starts turning to face the target, false when it stops."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.ChangedState

A **delegate** in `Root.Township`, no namespace.

Handler for `NetworkStarer.ChangedTurning`: true when the body starts turning to face the target, false when it stops.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/game-api/types/global-m-o/networkstarer)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChangedState(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(bool newState, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(bool newState)"}</code> |

## Used in

Members of other types that take, return or hold a `ChangedState`:

[`NetworkStarer.ChangedTurning`](/game-api/types/global-m-o/networkstarer#m-changedturning).
