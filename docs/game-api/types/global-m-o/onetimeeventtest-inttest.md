---
title: "OneTimeEventTest.IntTest"
description: "Test delegate taking one int, used by OneTimeEventTest to try out OneTimeEvent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeEventTest.IntTest

A **private delegate** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Test delegate taking one int, used by `OneTimeEventTest` to try out `OneTimeEvent`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`OneTimeEventTest`](/game-api/types/global-m-o/onetimeeventtest)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IntTest(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(int number, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(int number)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `IntTest`:

[`OneTimeEventTest.oneTimeEvent`](/game-api/types/global-m-o/onetimeeventtest#m-onetimeevent).
