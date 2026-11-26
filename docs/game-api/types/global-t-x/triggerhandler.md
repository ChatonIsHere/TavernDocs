---
title: "TriggerHandler"
description: "Handler for TriggerShape.Entered and TriggerShape.Exited, given the collider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerHandler

A **delegate** in `Root.Township`, no namespace.

Handler for `TriggerShape.Entered` and `TriggerShape.Exited`, given the collider.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Collider collider, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Collider collider)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `TriggerHandler`:

[`TriggerShape.Entered`](/game-api/types/global-t-x/triggershape#m-entered), [`TriggerShape.Exited`](/game-api/types/global-t-x/triggershape#m-exited).
