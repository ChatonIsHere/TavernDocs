---
title: "LogicValueReceiver<TSenderInput>"
description: "abstract class LogicValueReceiver<TSenderInput> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicValueReceiver&lt;TSenderInput&gt;

An **abstract class** in `Root.Township`, `Alta.Logic`.

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
| <Link id="m-sender" /><code>{"protected TSenderInput sender"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicmanager" /><code><Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; private set; }"}</code> |  |
| <Link id="m-sender-2" /><code>{"TSenderInput Sender { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorpresave" /><code>{"void EditorPreSave("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-attemptlink" /><code>{"private bool Alta.Logic.ILogicValueLinkReceiver.AttemptLink("}<Link to="/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> |  |
| <Link id="m-findlogicmanager" /><code>{"private void FindLogicManager()"}</code> |  |
| <Link id="m-loadcontext" /><code>{"protected void LoadContext()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"protected virtual void OnDrawGizmos()"}</code> |  |
| <Link id="m-valueupdated" /><code>{"protected abstract void ValueUpdated()"}</code> |  |
