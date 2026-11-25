---
title: "IsJointAvailable"
description: "delegate IsJointAvailable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IsJointAvailable

A **delegate** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IsJointAvailable(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool isAvailable, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isAvailable, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool isAvailable)"}</code> |

## Used in

Members of other types that take, return or hold a `IsJointAvailable`:

[`IJointSlotComponent.isAvailable`](/game-api/types/alta-crafting/ijointslotcomponent#m-isavailable), [`JointPoint.isAvailable`](/game-api/types/alta-crafting/jointpoint#m-isavailable), [`JointSlotGroup.isAvailable`](/game-api/types/alta-crafting/jointslotgroup#m-isavailable).
