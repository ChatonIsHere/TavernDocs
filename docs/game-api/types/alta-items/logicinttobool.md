---
title: "LogicIntToBool"
description: "class LogicIntToBool in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntToBool

A **class** in `Root.Township`, `Alta.Logic`.

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

| Member |
| --- |
| <Link id="m-correctvalues" /><code>{"private int[] correctValues"}</code> |
| <Link id="m-oncorrect" /><code>{"private UnityEvent onCorrect"}</code> |
| <Link id="m-onincorrect" /><code>{"private UnityEvent onIncorrect"}</code> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueChanged"}</code> |
| <Link id="m-receiver" /><code>{"private "}<Link to="/game-api/types/alta-items/logicintreceiver">{"LogicIntReceiver"}</Link>{" receiver"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-inttobool" /><code>{"bool IntToBool(int i)"}</code> |
| <Link id="m-valuechanged" /><code>{"void ValueChanged()"}</code> |
