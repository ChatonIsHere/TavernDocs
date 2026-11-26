---
title: "LogicFloatSender"
description: "A logic sender that sends a float value to its linked receivers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatSender

A **class** in `Root.Township`, `Alta.Logic`.

A logic sender that sends a float value to its linked receivers.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender<LogicFloatSaveData>`](/mod/game-api/types/alta-items/logicvaluesender-tdata)
- **Derived types** [`FloatSenderInput`](/mod/game-api/types/alta-items/floatsenderinput), [`LogicFloatSaveData`](/mod/game-api/types/alta-items/logicfloatsavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatSender()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | <span className="api-desc">The float value being sent.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> | <span className="api-desc">Sets a new value and sends it if it differs from the current one.</span> |
| <Link id="m-readdatavalue" /><code>{"protected override void ReadDataValue()"}</code> | <span className="api-desc">Copies the saved data value into `currentValue`.</span> |
| <Link id="m-writedatavalue" /><code>{"protected override void WriteDataValue()"}</code> | <span className="api-desc">Copies `currentValue` into the data sent to receivers.</span> |

## Used in

Members of other types that take, return or hold a `LogicFloatSender`:

<div className="api-used-in">

[`LogicFloatChangeOnBool.sender`](/mod/game-api/types/alta-items/logicfloatchangeonbool#m-sender), [`LogicFloatReset.sender`](/mod/game-api/types/alta-items/logicfloatreset#m-sender).

</div>
