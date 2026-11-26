---
title: "LogicIntToBoolData"
description: "Save data for LogicIntToBool, which turns an int input into a bool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntToBoolData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicIntToBool`, which turns an int input into a bool.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntToBool, LogicIntToBoolData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicIntToBool`](/game-api/types/alta-items/logicinttobool), [`LogicIntToBoolData`](/game-api/types/alta-items/logicinttobooldata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicIntToBoolData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-correctvalues" /><code>{"int[] correctValues"}</code> | The int values that make the output true; any other value gives false. |
