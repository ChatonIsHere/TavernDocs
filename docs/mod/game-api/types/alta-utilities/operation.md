---
title: "Operation"
description: "A function that combines two floats into one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Operation

A **delegate** in `Root.Township`, `Alta`.

A function that combines two floats into one. `MathfOperation.GetOperation` returns one for the cave generator parts.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Operation(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(float a, float b, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual float EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual float Invoke(float a, float b)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `Operation`:

[`MathfOperation.GetOperation`](/mod/game-api/types/alta-utilities/mathfoperation#m-getoperation).
