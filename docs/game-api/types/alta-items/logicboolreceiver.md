---
title: "LogicBoolReceiver"
description: "Reacts to a bool sender: IsActive, event UnityAction<bool> Changed, Activated, Deactivated."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicBoolReceiver

A **class** in `Root.Township`, `Alta.Logic`.

Reacts to a bool sender: `IsActive`, `event UnityAction<bool> Changed`, `Activated`, `Deactivated`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<BoolSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicBoolReceiverData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicBoolReceiverData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicBoolReceiverData`](/game-api/types/alta-items/logicboolreceiverdata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicBoolReceiver()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-onactivate" /><code>{"private UnityEvent onActivate"}</code> |
| <Link id="m-ondeactivate" /><code>{"private UnityEvent onDeactivate"}</code> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueChanged"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-activated" /><code>{"event UnityAction Activated"}</code> |
| <Link id="m-changed" /><code>{"event UnityAction<bool> Changed"}</code> |
| <Link id="m-deactivated" /><code>{"event UnityAction Deactivated"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> |

## Used in

Members of other types that take, return or hold a `LogicBoolReceiver`:

[`LogicDisplay.receiver`](/game-api/types/global-i-l/logicdisplay#m-receiver), [`Phase.markComplete`](/game-api/types/global-p/phase#m-markcomplete).
