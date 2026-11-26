---
title: "PickupHolderFilter"
description: "Filter callback that can set isValid to false to reject a pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupHolderFilter

A **delegate** in `Root.Township`, the global namespace.

Filter callback that can set `isValid` to false to reject a pickup.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupHolderFilter(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isValid, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isValid, IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isValid)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `PickupHolderFilter`:

<div className="api-used-in">

[`PickupHolder.HoldFilter`](/mod/game-api/types/global-p/pickupholder#m-holdfilter).

</div>
