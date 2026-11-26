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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Nested in** [`GeneralDelegates`](/game-api/types/alta-utilities/generaldelegates)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BoolUpdater(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool value, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool value, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool value)"}</code> |

## Used in

Members of other types that take, return or hold a `BoolUpdater`:

[`Interactor.GetGrabAssistBlock`](/game-api/types/global-i-l/interactor#m-getgrabassistblock), [`SmoothLocomotion.GetTeleportationBlock`](/game-api/types/global-s/smoothlocomotion#m-getteleportationblock).
