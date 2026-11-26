---
title: "TriggerHandler"
description: "Handler for TriggerShape.Entered and TriggerShape.Exited, given the collider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerHandler

A **delegate** in `Root.Township`, the global namespace.

Handler for `TriggerShape.Entered` and `TriggerShape.Exited`, given the collider.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Collider collider, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Collider collider)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `TriggerHandler`:

<div className="api-used-in">

[`TriggerShape.Entered`](/mod/game-api/types/global-t-x/triggershape#m-entered), [`TriggerShape.Exited`](/mod/game-api/types/global-t-x/triggershape#m-exited).

</div>
