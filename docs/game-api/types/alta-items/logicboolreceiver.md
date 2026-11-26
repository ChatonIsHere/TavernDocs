---
title: "LogicBoolReceiver"
description: "A logic receiver for a bool signal (for example a lever or button)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicBoolReceiver

A **class** in `Root.Township`, `Alta.Logic`.

A logic receiver for a bool signal (for example a lever or button). Invokes events when the value changes and saves the sender's last value.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<BoolSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicBoolReceiverData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicBoolReceiverData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicBoolReceiverData`](/game-api/types/alta-items/logicboolreceiverdata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicBoolReceiver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onactivate" /><code>{"private UnityEvent onActivate"}</code> | Unity event invoked when the value turns true. |
| <Link id="m-ondeactivate" /><code>{"private UnityEvent onDeactivate"}</code> | Unity event invoked when the value turns false. |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueChanged"}</code> | Unity event invoked with the new value on every change. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | Current bool value from the sender. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"event UnityAction Activated"}</code> | Event raised when the value turns true. |
| <Link id="m-changed" /><code>{"event UnityAction<bool> Changed"}</code> | Event raised with the new value on every change. |
| <Link id="m-deactivated" /><code>{"event UnityAction Deactivated"}</code> | Meant for when the value turns false, but it subscribes to the activate event, so handlers run on activation instead. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | Invokes the changed event, then the activate or deactivate event. |

## Used in

Members of other types that take, return or hold a `LogicBoolReceiver`:

[`LogicDisplay.receiver`](/game-api/types/global-i-l/logicdisplay#m-receiver), [`Phase.markComplete`](/game-api/types/global-p/phase#m-markcomplete).
