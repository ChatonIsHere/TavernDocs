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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<IntSenderInput>`](/mod/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicIntReceiverData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntReceiverData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicIntReceiverData`](/mod/game-api/types/alta-items/logicintreceiverdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntReceiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Unity event called with the new int value.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | <span className="api-desc">Invokes `onValueChanged` with the sender's current value.</span> |

## Used in

Members of other types that take, return or hold a `LogicIntReceiver`:

<div className="api-used-in">

[`LogicIntToBool.receiver`](/mod/game-api/types/alta-items/logicinttobool#m-receiver).

</div>
