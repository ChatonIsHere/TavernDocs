---
title: "IsJointAvailable"
description: "Event handler on joint points and slot groups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IsJointAvailable

A **delegate** in `Root.Township`, `Alta.Crafting`.

Event handler on joint points and slot groups. Handlers can set the `ref bool` to false to mark the joint as unavailable.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IsJointAvailable(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool isAvailable, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isAvailable, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool isAvailable)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `IsJointAvailable`:

[`IJointSlotComponent.isAvailable`](/mod/game-api/types/alta-crafting/ijointslotcomponent#m-isavailable), [`JointPoint.isAvailable`](/mod/game-api/types/alta-crafting/jointpoint#m-isavailable), [`JointSlotGroup.isAvailable`](/mod/game-api/types/alta-crafting/jointslotgroup#m-isavailable).
