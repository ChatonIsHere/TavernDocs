---
title: "JointBreakHandler"
description: "Delegate for JointBreakDetector.JointBreak: a joint broke with the given force."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointBreakHandler

A **delegate** in `Root.Township`, the global namespace.

Delegate for `JointBreakDetector.JointBreak`: a joint broke with the given force.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointBreakHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-i-l/jointbreakdetector">{"JointBreakDetector"}</Link>{" detector, float force, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-i-l/jointbreakdetector">{"JointBreakDetector"}</Link>{" detector, float force)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `JointBreakHandler`:

<div className="api-used-in">

[`JointBreakDetector.JointBreak`](/mod/game-api/types/global-i-l/jointbreakdetector#m-jointbreak).

</div>
