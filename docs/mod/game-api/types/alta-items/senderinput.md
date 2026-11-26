---
title: "SenderInput"
description: "Base for a receiver's link to one logic sender: holds the manager and lets the receiver subscribe to value changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenderInput

An **abstract class** in `Root.Township`, `Alta.Logic`.

Base for a receiver's link to one logic sender: holds the manager and lets the receiver subscribe to value changes. Serialized inside receiver components.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ILogicValueLinkReceiver`](/mod/game-api/types/alta-items/ilogicvaluelinkreceiver)
- **Derived types** [`SenderInput<TSender, TData>`](/mod/game-api/types/alta-items/senderinput-tsender-tdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SenderInput()"}</code> | Creates a `SenderInput` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" Manager { get; set; }"}</code> | The `GlobalLogicManager` this input's sender data lives in. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlink" /><code>{"abstract bool AttemptLink("}<Link to="/mod/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> | Links this input to the given sender if it is the right type and uses the same logic manager. Returns whether it linked. |
| <Link id="m-destroy" /><code>{"abstract void Destroy()"}</code> | Removes this input's listener from the sender's data. Called from the receiver's `OnDestroy`. |
| <Link id="m-drawgizmos" /><code>{"abstract void DrawGizmos(Component receiver)"}</code> | Editor gizmo hook for showing the link from a receiver. Empty in the generic version. |
| <Link id="m-subscribe" /><code>{"abstract void Subscribe(Action listener, bool isCalling = true)"}</code> | Adds a listener for value changes and, if `isCalling` is true and data is linked, calls it once now. |
