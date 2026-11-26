---
title: "JointInsertType"
description: "Asset naming a kind of joint insert (the part that goes into a joint slot)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointInsertType

A **class** in `Root.Township`, `Alta.Crafting`.

Asset naming a kind of joint insert (the part that goes into a joint slot). A `JointSlotType` lists which insert types it allows.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`JointPointType`](/mod/game-api/types/alta-crafting/jointpointtype)
- **Derived types** [`JointInsertType.Create`](/mod/game-api/types/alta-crafting/jointinserttype-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/jointinserttype-create)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointInsertType()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Used in

Members of other types that take, return or hold a `JointInsertType`:

<div className="api-used-in">

[`CraftingTester.insertMap`](/mod/game-api/types/alta-crafting/craftingtester#m-insertmap), [`JointInsert.type`](/mod/game-api/types/alta-crafting/jointinsert#m-type), [`JointInsert.Type`](/mod/game-api/types/alta-crafting/jointinsert#m-type-2), [`JointSlot.Supports`](/mod/game-api/types/alta-crafting/jointslot#m-supports), [`JointSlotType.allowedInserts`](/mod/game-api/types/alta-crafting/jointslottype#m-allowedinserts), [`JointSlotType.AllowedInserts`](/mod/game-api/types/alta-crafting/jointslottype#m-allowedinserts-2).

</div>
