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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`JointSlot`](/mod/game-api/types/alta-crafting/jointslot), [`JointSlotGroup`](/mod/game-api/types/alta-crafting/jointslotgroup)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroyed" /><code>{"bool IsDestroyed { get; }"}</code> | <span className="api-desc">True once the slot has been destroyed.</span> |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> | <span className="api-desc">True when a part is connected. For a group, true when any slot in it is used.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/mod/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> | <span className="api-desc">Raised to let listeners veto the slot accepting a part, by clearing the passed flag.</span> |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> | <span className="api-desc">Raised when the slot goes from free to used or back.</span> |

## Used in

Members of other types that take, return or hold a `IJointSlotComponent`:

<div className="api-used-in">

[`JointSlot.UsedChanged`](/mod/game-api/types/alta-crafting/jointslot#m-usedchanged), [`JointSlotGroup.ChildChanged`](/mod/game-api/types/alta-crafting/jointslotgroup#m-childchanged), [`JointSlotGroup.Used`](/mod/game-api/types/alta-crafting/jointslotgroup#m-used), [`JointSlotGroup.UsedChanged`](/mod/game-api/types/alta-crafting/jointslotgroup#m-usedchanged).

</div>
