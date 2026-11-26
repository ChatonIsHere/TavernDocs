---
title: "DayTimeManager.ChangedState"
description: "Delegate taking a bool for a changed on or off state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DayTimeManager.ChangedState

A **delegate** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Delegate taking a bool for a changed on or off state. Declared in `DayTimeManager` but not used in this build.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`DayTimeManager`](/game-api/types/alta-world/daytimemanager)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChangedState(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(bool newValue, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(bool newValue)"}</code> |
