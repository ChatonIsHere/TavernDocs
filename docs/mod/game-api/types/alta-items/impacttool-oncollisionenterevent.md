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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`ImpactTool`](/mod/game-api/types/alta-items/impacttool)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnCollisionEnterEvent(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Collision collision, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Collision collision)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `OnCollisionEnterEvent`:

<div className="api-used-in">

[`ImpactTool.OnCollisionEnterCalled`](/mod/game-api/types/alta-items/impacttool#m-oncollisionentercalled).

</div>
