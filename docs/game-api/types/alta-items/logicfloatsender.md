---
title: "LogicFloatSender"
description: "class LogicFloatSender in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatSender

A **class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender<LogicFloatSaveData>`](/game-api/types/alta-items/logicvaluesender-tdata)
- **Derived types** [`FloatSenderInput`](/game-api/types/alta-items/floatsenderinput), [`LogicFloatSaveData`](/game-api/types/alta-items/logicfloatsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicFloatSender()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> |
| <Link id="m-readdatavalue" /><code>{"protected override void ReadDataValue()"}</code> |
| <Link id="m-writedatavalue" /><code>{"protected override void WriteDataValue()"}</code> |

## Used in

Members of other types that take, return or hold a `LogicFloatSender`:

[`LogicFloatChangeOnBool.sender`](/game-api/types/alta-items/logicfloatchangeonbool#m-sender), [`LogicFloatReset.sender`](/game-api/types/alta-items/logicfloatreset#m-sender).
