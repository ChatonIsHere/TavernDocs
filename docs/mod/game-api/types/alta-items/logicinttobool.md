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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<LogicIntToBoolData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntToBoolData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicIntToBoolData`](/mod/game-api/types/alta-items/logicinttobooldata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntToBool()"}</code> | <span className="api-desc">Creates a `LogicIntToBool` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-correctvalues" /><code>{"private int[] correctValues"}</code> | <span className="api-desc">Values that count as correct.</span> |
| <Link id="m-oncorrect" /><code>{"private UnityEvent onCorrect"}</code> | <span className="api-desc">Unity event fired when the value is correct.</span> |
| <Link id="m-onincorrect" /><code>{"private UnityEvent onIncorrect"}</code> | <span className="api-desc">Unity event fired when the value is not correct.</span> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Unity event fired with whether the value is correct.</span> |
| <Link id="m-receiver" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicintreceiver">{"LogicIntReceiver"}</Link>{" receiver"}</code> | <span className="api-desc">Int receiver whose value is checked.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inttobool" /><code>{"bool IntToBool(int i)"}</code> | <span className="api-desc">True when the value is one of `correctValues`.</span> |
| <Link id="m-valuechanged" /><code>{"void ValueChanged()"}</code> | <span className="api-desc">Checks the receiver's current value and fires `onValueChanged`, then `onCorrect` or `onIncorrect`.</span> |
