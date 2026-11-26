---
title: "LogicFloatReceiver"
description: "Logic component that takes one float sender input and fires a Unity event with the new value whenever it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatReceiver

A **class** in `Root.Township`, `Alta.Logic`.

Logic component that takes one float sender input and fires a Unity event with the new value whenever it changes. Server side; saves which sender it is linked to.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<FloatSenderInput>`](/mod/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicFloatReceiverData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicFloatReceiverData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicFloatReceiverData`](/mod/game-api/types/alta-items/logicfloatreceiverdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatReceiver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" onValueChanged"}</code> | Unity event set in the inspector, fired with the sender's float value. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | Called when the linked sender's value changes; invokes `onValueChanged` with the new float. |
