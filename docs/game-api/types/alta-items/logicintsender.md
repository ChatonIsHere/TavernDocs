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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender<LogicIntSaveData>`](/game-api/types/alta-items/logicvaluesender-tdata)
- **Derived types** [`IntSenderInput`](/game-api/types/alta-items/intsenderinput), [`LogicIntSaveData`](/game-api/types/alta-items/logicintsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicIntSender()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"int currentValue"}</code> | The current int value. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(int value)"}</code> | Sets the value and notifies linked receivers if it changed. |
| <Link id="m-readdatavalue" /><code>{"protected override void ReadDataValue()"}</code> | Copies the value from the shared logic data. |
| <Link id="m-writedatavalue" /><code>{"protected override void WriteDataValue()"}</code> | Copies the value into the shared logic data. |

## Used in

Members of other types that take, return or hold a `LogicIntSender`:

[`AreaOfInfluenceReceiver.RemoveFromList`](/game-api/types/global-a-b/areaofinfluencereceiver#m-removefromlist), [`AreaOfInfluenceReceiver.sendersInCollider`](/game-api/types/global-a-b/areaofinfluencereceiver#m-sendersincollider).
