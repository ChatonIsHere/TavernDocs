---
title: "LogicIntReceiver"
description: "Logic receiver that listens to an int sender and raises a Unity event with each new value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntReceiver

A **class** in `Root.Township`, `Alta.Logic`.

Logic receiver that listens to an int sender and raises a Unity event with each new value. Saves the link to its sender.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<IntSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicIntReceiverData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntReceiverData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicIntReceiverData`](/game-api/types/alta-items/logicintreceiverdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicIntReceiver()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChanged"}</code> | Unity event called with the new int value. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | Invokes `onValueChanged` with the sender's current value. |

## Used in

Members of other types that take, return or hold a `LogicIntReceiver`:

[`LogicIntToBool.receiver`](/game-api/types/alta-items/logicinttobool#m-receiver).
