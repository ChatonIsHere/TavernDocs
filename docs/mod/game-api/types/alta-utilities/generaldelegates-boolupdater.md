---
title: "GeneralDelegates.BoolUpdater"
description: "Handler that can change a bool passed by reference."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneralDelegates.BoolUpdater

A **delegate** in `Root.Township`, `Alta.Utilities`.

Handler that can change a bool passed by reference. Used for block checks such as `Interactor.GetGrabAssistBlock` and the teleport block in `SmoothLocomotion`, where any handler can set the flag.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`GeneralDelegates`](/mod/game-api/types/alta-utilities/generaldelegates)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoolUpdater(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool value, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool value, IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool value)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `BoolUpdater`:

<div className="api-used-in">

[`Interactor.GetGrabAssistBlock`](/mod/game-api/types/global-i-l/interactor#m-getgrabassistblock), [`SmoothLocomotion.GetTeleportationBlock`](/mod/game-api/types/global-s/smoothlocomotion#m-getteleportationblock).

</div>
