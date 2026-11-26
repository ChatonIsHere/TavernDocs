---
title: "ActionSettingsUsedHandler"
description: "Event handler for an AI action being used, passing the running action."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionSettingsUsedHandler

A **delegate** in `Root.Township`, `Alta.Intelligence`.

Event handler for an AI action being used, passing the running action. Used by `IActionSettings.Used`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionSettingsUsedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |

## Used in

Members of other types that take, return or hold a `ActionSettingsUsedHandler`:

[`ActionComponent.Used`](/game-api/types/alta-intelligence/actioncomponent#m-used), [`IActionSettings.Used`](/game-api/types/alta-intelligence/iactionsettings#m-used).
