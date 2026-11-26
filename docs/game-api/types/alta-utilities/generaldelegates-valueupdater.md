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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Nested in** [`GeneralDelegates`](/game-api/types/alta-utilities/generaldelegates)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ValueUpdater(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref float value, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref float value, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref float value)"}</code> |

## Used in

Members of other types that take, return or hold a `ValueUpdater`:

[`SmoothLocomotion.GetFrictionMultiplier`](/game-api/types/global-s/smoothlocomotion#m-getfrictionmultiplier), [`SmoothLocomotion.GetHeight`](/game-api/types/global-s/smoothlocomotion#m-getheight), [`SmoothLocomotion.GetUpwardGrip`](/game-api/types/global-s/smoothlocomotion#m-getupwardgrip).
