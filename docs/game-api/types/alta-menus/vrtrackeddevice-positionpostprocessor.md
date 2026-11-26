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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Nested in** [`VRTrackedDevice`](/game-api/types/alta-menus/vrtrackeddevice)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PositionPostProcessor(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref Vector3 position, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref Vector3 position, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref Vector3 position)"}</code> |

## Used in

Members of other types that take, return or hold a `PositionPostProcessor`:

[`VRTrackedDevice.AddTracking`](/game-api/types/alta-menus/vrtrackeddevice#m-addtracking), [`VRTrackedDevice.positionPostProcessor`](/game-api/types/alta-menus/vrtrackeddevice#m-positionpostprocessor), [`VRTrackedDevice.VRTrackedDevice`](/game-api/types/alta-menus/vrtrackeddevice#m-ctor).
