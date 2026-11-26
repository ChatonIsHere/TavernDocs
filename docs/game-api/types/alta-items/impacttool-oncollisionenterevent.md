---
title: "ImpactTool.OnCollisionEnterEvent"
description: "Handler for ImpactTool.OnCollisionEnterCalled, raised when a held tool collides with something on a blockable layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactTool.OnCollisionEnterEvent

A **delegate** in `Root.Township`, `Alta.Impact`.

Handler for `ImpactTool.OnCollisionEnterCalled`, raised when a held tool collides with something on a blockable layer.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`ImpactTool`](/game-api/types/alta-items/impacttool)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OnCollisionEnterEvent(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Collision collision, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Collision collision)"}</code> |

## Used in

Members of other types that take, return or hold a `OnCollisionEnterEvent`:

[`ImpactTool.OnCollisionEnterCalled`](/game-api/types/alta-items/impacttool#m-oncollisionentercalled).
