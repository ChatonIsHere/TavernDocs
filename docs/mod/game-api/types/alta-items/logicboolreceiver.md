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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<BoolSenderInput>`](/mod/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicBoolReceiverData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicBoolReceiverData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicBoolReceiverData`](/mod/game-api/types/alta-items/logicboolreceiverdata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicBoolReceiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onactivate" /><code>{"private UnityEvent onActivate"}</code> | <span className="api-desc">Unity event invoked when the value turns true.</span> |
| <Link id="m-ondeactivate" /><code>{"private UnityEvent onDeactivate"}</code> | <span className="api-desc">Unity event invoked when the value turns false.</span> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Unity event invoked with the new value on every change.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | <span className="api-desc">Current bool value from the sender.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"event UnityAction Activated"}</code> | <span className="api-desc">Event raised when the value turns true.</span> |
| <Link id="m-changed" /><code>{"event UnityAction<bool> Changed"}</code> | <span className="api-desc">Event raised with the new value on every change.</span> |
| <Link id="m-deactivated" /><code>{"event UnityAction Deactivated"}</code> | <span className="api-desc">Meant for when the value turns false, but it subscribes to the activate event, so handlers run on activation instead.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | <span className="api-desc">Invokes the changed event, then the activate or deactivate event.</span> |

## Used in

Members of other types that take, return or hold a `LogicBoolReceiver`:

<div className="api-used-in">

[`LogicDisplay.receiver`](/mod/game-api/types/global-i-l/logicdisplay#m-receiver), [`Phase.markComplete`](/mod/game-api/types/global-p/phase#m-markcomplete).

</div>
