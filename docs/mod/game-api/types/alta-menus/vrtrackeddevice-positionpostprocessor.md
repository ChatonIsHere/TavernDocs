---
title: "VRTrackedDevice.PositionPostProcessor"
description: "Callback that can change a tracked position, passed by ref, before VRTrackedDevice applies it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VRTrackedDevice.PositionPostProcessor

A **delegate** in `Root.Township`, `Alta.XR`.

Callback that can change a tracked position, passed by ref, before `VRTrackedDevice` applies it.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Nested in** [`VRTrackedDevice`](/mod/game-api/types/alta-menus/vrtrackeddevice)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionPostProcessor(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref Vector3 position, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref Vector3 position, IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref Vector3 position)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `PositionPostProcessor`:

<div className="api-used-in">

[`VRTrackedDevice.AddTracking`](/mod/game-api/types/alta-menus/vrtrackeddevice#m-addtracking), [`VRTrackedDevice.positionPostProcessor`](/mod/game-api/types/alta-menus/vrtrackeddevice#m-positionpostprocessor), [`VRTrackedDevice.VRTrackedDevice`](/mod/game-api/types/alta-menus/vrtrackeddevice#m-ctor).

</div>
