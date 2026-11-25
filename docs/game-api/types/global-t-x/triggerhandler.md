---
title: "TriggerHandler"
description: "delegate TriggerHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TriggerHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Collider collider, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Collider collider)"}</code> |

## Used in

Members of other types that take, return or hold a `TriggerHandler`:

[`TriggerShape.Entered`](/game-api/types/global-t-x/triggershape#m-entered), [`TriggerShape.Exited`](/game-api/types/global-t-x/triggershape#m-exited).
