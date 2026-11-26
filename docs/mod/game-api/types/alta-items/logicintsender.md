---
title: "LogicIntSender"
description: "Logic sender that holds an int and passes changes to linked receivers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntSender

A **class** in `Root.Township`, `Alta.Logic`.

Logic sender that holds an int and passes changes to linked receivers.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender<LogicIntSaveData>`](/mod/game-api/types/alta-items/logicvaluesender-tdata)
- **Derived types** [`IntSenderInput`](/mod/game-api/types/alta-items/intsenderinput), [`LogicIntSaveData`](/mod/game-api/types/alta-items/logicintsavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntSender()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"int currentValue"}</code> | <span className="api-desc">The current int value.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(int value)"}</code> | <span className="api-desc">Sets the value and notifies linked receivers if it changed.</span> |
| <Link id="m-readdatavalue" /><code>{"protected override void ReadDataValue()"}</code> | <span className="api-desc">Copies the value from the shared logic data.</span> |
| <Link id="m-writedatavalue" /><code>{"protected override void WriteDataValue()"}</code> | <span className="api-desc">Copies the value into the shared logic data.</span> |

## Used in

Members of other types that take, return or hold a `LogicIntSender`:

<div className="api-used-in">

[`AreaOfInfluenceReceiver.RemoveFromList`](/mod/game-api/types/global-a-b/areaofinfluencereceiver#m-removefromlist), [`AreaOfInfluenceReceiver.sendersInCollider`](/mod/game-api/types/global-a-b/areaofinfluencereceiver#m-sendersincollider).

</div>
