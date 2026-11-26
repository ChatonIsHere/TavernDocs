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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectEvent(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" point, "}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" slot, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" point, "}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" slot)"}</code> | Calls every method on this delegate with these arguments. |
