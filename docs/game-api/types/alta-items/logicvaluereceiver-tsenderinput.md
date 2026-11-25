---
title: "LogicValueReceiver<TSenderInput>"
description: "Base for a logic component that listens to one logic value sender and reacts when the value changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicValueReceiver&lt;TSenderInput&gt;

An **abstract class** in `Root.Township`, `Alta.Logic`.

Base for a logic component that listens to one logic value sender and reacts when the value changes. Server side; subclasses implement `ValueUpdated`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ILogicValueLinkReceiver`](/game-api/types/alta-items/ilogicvaluelinkreceiver), [`ILogicComponent`](/game-api/types/alta-items/ilogiccomponent)
- **Derived types** [`LogicBoolReceiver`](/game-api/types/alta-items/logicboolreceiver), [`LogicFloatRangeReceiver`](/game-api/types/alta-items/logicfloatrangereceiver), [`LogicFloatReceiver`](/game-api/types/alta-items/logicfloatreceiver), [`LogicFloatThresholdReceiver`](/game-api/types/alta-items/logicfloatthresholdreceiver), [`LogicIntRangeReceiver`](/game-api/types/alta-items/logicintrangereceiver), [`LogicIntReceiver`](/game-api/types/alta-items/logicintreceiver), [`LogicIntThresholdReceiver`](/game-api/types/alta-items/logicintthresholdreceiver), [`LogicVector3Receiver`](/game-api/types/alta-items/logicvector3receiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LogicValueReceiver()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sender" /><code>{"protected TSenderInput sender"}</code> | Backing field for `Sender`, set in the inspector. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicmanager" /><code><Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; private set; }"}</code> | The logic manager this receiver belongs to: one in a parent, or the global one. |
| <Link id="m-sender-2" /><code>{"TSenderInput Sender { get; }"}</code> | The sender input this receiver reads from. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorpresave" /><code>{"void EditorPreSave("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | Editor: sets the logic manager and points the sender input at it before saving. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: subscribes to the sender, finds the logic manager (parent or global) and calls `ValueUpdated` once. |
| <Link id="m-attemptlink" /><code>{"private bool Alta.Logic.ILogicValueLinkReceiver.AttemptLink("}<Link to="/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> |  |
| <Link id="m-findlogicmanager" /><code>{"private void FindLogicManager()"}</code> |  |
| <Link id="m-loadcontext" /><code>{"protected void LoadContext()"}</code> | Sets `LogicManager` to `GlobalLogicManager.Current`. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Cleans up the sender input subscription. |
| <Link id="m-ondrawgizmos" /><code>{"protected virtual void OnDrawGizmos()"}</code> | Draws the link to the sender in the editor. |
| <Link id="m-valueupdated" /><code>{"protected abstract void ValueUpdated()"}</code> | Called when the sender's value changes, and once at server start. Implement the reaction here. |
