---
title: "GeneralDelegates.ValueUpdater"
description: "Callback that can change a float passed by ref."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneralDelegates.ValueUpdater

A **delegate** in `Root.Township`, `Alta.Utilities`.

Callback that can change a float passed by `ref`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`GeneralDelegates`](/mod/game-api/types/alta-utilities/generaldelegates)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValueUpdater(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref float value, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref float value, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref float value)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ValueUpdater`:

[`SmoothLocomotion.GetFrictionMultiplier`](/mod/game-api/types/global-s/smoothlocomotion#m-getfrictionmultiplier), [`SmoothLocomotion.GetHeight`](/mod/game-api/types/global-s/smoothlocomotion#m-getheight), [`SmoothLocomotion.GetUpwardGrip`](/mod/game-api/types/global-s/smoothlocomotion#m-getupwardgrip).
