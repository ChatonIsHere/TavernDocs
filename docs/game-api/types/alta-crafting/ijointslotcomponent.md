---
title: "IJointSlotComponent"
description: "A crafting joint slot or a group of slots, implemented by JointSlot and JointSlotGroup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IJointSlotComponent

An **interface** in `Root.Township`, `Alta.Crafting`.

A crafting joint slot or a group of slots, implemented by `JointSlot` and `JointSlotGroup`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`JointSlot`](/game-api/types/alta-crafting/jointslot), [`JointSlotGroup`](/game-api/types/alta-crafting/jointslotgroup)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroyed" /><code>{"bool IsDestroyed { get; }"}</code> | True once the slot has been destroyed. |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> | True when a part is connected. For a group, true when any slot in it is used. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> | Raised to let listeners veto the slot accepting a part, by clearing the passed flag. |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> | Raised when the slot goes from free to used or back. |

## Used in

Members of other types that take, return or hold a `IJointSlotComponent`:

[`JointSlot.UsedChanged`](/game-api/types/alta-crafting/jointslot#m-usedchanged), [`JointSlotGroup.ChildChanged`](/game-api/types/alta-crafting/jointslotgroup#m-childchanged), [`JointSlotGroup.Used`](/game-api/types/alta-crafting/jointslotgroup#m-used), [`JointSlotGroup.UsedChanged`](/game-api/types/alta-crafting/jointslotgroup#m-usedchanged).
