---
title: "LogicVector3Receiver"
description: "Logic component that takes one Vector3 sender input and invokes a position handler with the new value whenever it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicVector3Receiver

A **class** in `Root.Township`, `Alta.Logic`.

Logic component that takes one Vector3 sender input and invokes a position handler with the new value whenever it changes. Server side; saves which sender it is linked to.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<Vector3SenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicVector3ReceiverData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicVector3ReceiverData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicVector3ReceiverData`](/game-api/types/alta-items/logicvector3receiverdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicVector3Receiver()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" onValueChanged"}</code> | Position handler event set in the inspector, fired with the sender's Vector3 value. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | Called when the linked sender's value changes; invokes `onValueChanged` with the new Vector3. |
