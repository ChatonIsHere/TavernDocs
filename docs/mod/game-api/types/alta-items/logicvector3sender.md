---
title: "LogicVector3Sender"
description: "Logic sender that outputs a Vector3 to linked receivers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicVector3Sender

A **class** in `Root.Township`, `Alta.Logic`.

Logic sender that outputs a `Vector3` to linked receivers.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender<LogicVector3SaveData>`](/mod/game-api/types/alta-items/logicvaluesender-tdata)
- **Derived types** [`LogicVector3SaveData`](/mod/game-api/types/alta-items/logicvector3savedata), [`Vector3SenderInput`](/mod/game-api/types/alta-items/vector3senderinput)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicVector3Sender()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private Vector3 currentValue"}</code> | <span className="api-desc">The vector currently being output.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(Vector3 value)"}</code> | <span className="api-desc">Sets and sends a new value if it differs from the current one.</span> |
| <Link id="m-readdatavalue" /><code>{"protected override void ReadDataValue()"}</code> | <span className="api-desc">Copies the saved data value into `currentValue`.</span> |
| <Link id="m-writedatavalue" /><code>{"protected override void WriteDataValue()"}</code> | <span className="api-desc">Copies `currentValue` into the data that is sent and saved.</span> |
