---
title: "ConnectEvent"
description: "Delegate for a joint connection between a joint point and the slot it connects to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectEvent

A **delegate** in `Root.Township`, `Alta.Crafting`.

Delegate for a joint connection between a joint point and the slot it connects to.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectEvent(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" point, "}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" slot, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" point, "}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" slot)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |
