---
title: "JointSlotType"
description: "A crafting joint slot type, listing which insert types can fit into it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointSlotType

A **class** in `Root.Township`, `Alta.Crafting`.

A crafting joint slot type, listing which insert types can fit into it.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`JointPointType`](/mod/game-api/types/alta-crafting/jointpointtype)
- **Derived types** [`JointSlotType.Create`](/mod/game-api/types/alta-crafting/jointslottype-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/jointslottype-create)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointSlotType()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowedinserts" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{"> allowedInserts"}</code> | Backing field for `AllowedInserts`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowedinserts-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{"> AllowedInserts { get; }"}</code> | The `JointInsertType`s that fit this slot. `JointSlot` checks against it. |

## Used in

Members of other types that take, return or hold a `JointSlotType`:

[`JointSlot.types`](/mod/game-api/types/alta-crafting/jointslot#m-types), [`JointSlot.Types`](/mod/game-api/types/alta-crafting/jointslot#m-types-2).
