---
title: "IJointSlotComponent"
description: "interface IJointSlotComponent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IJointSlotComponent

An **interface** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`JointSlot`](/game-api/types/alta-crafting/jointslot), [`JointSlotGroup`](/game-api/types/alta-crafting/jointslotgroup)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroyed" /><code>{"bool IsDestroyed { get; }"}</code> |  |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> |  |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> |  |

## Used in

Members of other types that take, return or hold a `IJointSlotComponent`:

[`JointSlot.UsedChanged`](/game-api/types/alta-crafting/jointslot#m-usedchanged), [`JointSlotGroup.ChildChanged`](/game-api/types/alta-crafting/jointslotgroup#m-childchanged), [`JointSlotGroup.Used`](/game-api/types/alta-crafting/jointslotgroup#m-used), [`JointSlotGroup.UsedChanged`](/game-api/types/alta-crafting/jointslotgroup#m-usedchanged).
