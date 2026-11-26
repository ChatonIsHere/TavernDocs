---
title: "JointBreakHandler"
description: "Delegate for JointBreakDetector.JointBreak: a joint broke with the given force."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointBreakHandler

A **delegate** in `Root.Township`, no namespace.

Delegate for `JointBreakDetector.JointBreak`: a joint broke with the given force.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"JointBreakHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/jointbreakdetector">{"JointBreakDetector"}</Link>{" detector, float force, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/jointbreakdetector">{"JointBreakDetector"}</Link>{" detector, float force)"}</code> |

## Used in

Members of other types that take, return or hold a `JointBreakHandler`:

[`JointBreakDetector.JointBreak`](/game-api/types/global-i-l/jointbreakdetector#m-jointbreak).
