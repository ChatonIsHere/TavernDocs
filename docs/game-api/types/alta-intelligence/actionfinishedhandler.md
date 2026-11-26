---
title: "ActionFinishedHandler"
description: "Callback for an AI action that finished or was cancelled, used by BasicActiveAction.Finished and Cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionFinishedHandler

A **delegate** in `Root.Township`, `Alta.Intelligence`.

Callback for an AI action that finished or was cancelled, used by `BasicActiveAction.Finished` and `Cancelled`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionFinishedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |

## Used in

Members of other types that take, return or hold a `ActionFinishedHandler`:

[`BasicActiveAction<TAgent>.Cancelled`](/game-api/types/alta-intelligence/basicactiveaction-tagent#m-cancelled), [`BasicActiveAction<TAgent>.Finished`](/game-api/types/alta-intelligence/basicactiveaction-tagent#m-finished), [`IActiveAction.Cancelled`](/game-api/types/alta-intelligence/iactiveaction#m-cancelled), [`IActiveAction.Finished`](/game-api/types/alta-intelligence/iactiveaction#m-finished).
