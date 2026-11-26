---
title: "JointPointType"
description: "Base asset type for joint kinds used in crafting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointPointType

A **class** in `Root.Township`, `Alta.Crafting`.

Base asset type for joint kinds used in crafting. `JointInsertType` and `JointSlotType` derive from it, and `JointPoint.GeneralTypes` lists them.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`JointInsertType`](/mod/game-api/types/alta-crafting/jointinserttype), [`JointSlotType`](/mod/game-api/types/alta-crafting/jointslottype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointPointType()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Used in

Members of other types that take, return or hold a `JointPointType`:

<div className="api-used-in">

[`JointInsert.GeneralTypes`](/mod/game-api/types/alta-crafting/jointinsert#m-generaltypes), [`JointPoint.GeneralTypes`](/mod/game-api/types/alta-crafting/jointpoint#m-generaltypes), [`JointSlot.GeneralTypes`](/mod/game-api/types/alta-crafting/jointslot#m-generaltypes).

</div>
