---
title: "LogicIntToBool"
description: "Turns an int logic input into a bool: true when the value is in a list of correct values, as used for combination puzzles."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntToBool

A **class** in `Root.Township`, `Alta.Logic`.

Turns an int logic input into a bool: true when the value is in a list of correct values, as used for combination puzzles. Saves the list.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<LogicIntToBoolData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntToBoolData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicIntToBoolData`](/game-api/types/alta-items/logicinttobooldata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicIntToBool()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-correctvalues" /><code>{"private int[] correctValues"}</code> | Values that count as correct. |
| <Link id="m-oncorrect" /><code>{"private UnityEvent onCorrect"}</code> | Unity event fired when the value is correct. |
| <Link id="m-onincorrect" /><code>{"private UnityEvent onIncorrect"}</code> | Unity event fired when the value is not correct. |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueChanged"}</code> | Unity event fired with whether the value is correct. |
| <Link id="m-receiver" /><code>{"private "}<Link to="/game-api/types/alta-items/logicintreceiver">{"LogicIntReceiver"}</Link>{" receiver"}</code> | Int receiver whose value is checked. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inttobool" /><code>{"bool IntToBool(int i)"}</code> | True when the value is one of `correctValues`. |
| <Link id="m-valuechanged" /><code>{"void ValueChanged()"}</code> | Checks the receiver's current value and fires `onValueChanged`, then `onCorrect` or `onIncorrect`. |
