---
title: "LogicValueSender"
description: "Base for logic circuit components that hold a value in the global logic manager's data, saved with the entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicValueSender

An **abstract class** in `Root.Township`, `Alta.Logic`.

Base for logic circuit components that hold a value in the global logic manager's data, saved with the entity. `LogicValueSender<TData>` does the work for one data type.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ILogicComponent`](/game-api/types/alta-items/ilogiccomponent)
- **Derived types** [`LogicValueSender<TData>`](/game-api/types/alta-items/logicvaluesender-tdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LogicValueSender()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"protected uint identifier"}</code> | Backing id of the data. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datatype" /><code>{"abstract Type DataType { get; }"}</code> | The type of data this component keeps. |
| <Link id="m-identifier-2" /><code>{"abstract uint Identifier { get; }"}</code> | Id of this component's data in the logic manager. 0 when none. |
| <Link id="m-logicmanager" /><code><Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; protected set; }"}</code> | The `GlobalLogicManager` holding the data. Found in a parent, or the global one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"abstract void Clear()"}</code> | Forgets the identifier and data. |
| <Link id="m-editorpresave" /><code>{"abstract void EditorPreSave("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | Editor hook before saving. Does nothing in the generic version. |

## Used in

Members of other types that take, return or hold a `LogicValueSender`:

[`ILogicValueLinkReceiver.AttemptLink`](/game-api/types/alta-items/ilogicvaluelinkreceiver#m-attemptlink), [`LogicValueReceiver<TSenderInput>.AttemptLink`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput#m-attemptlink), [`LogicValueReceiverArray<TSenderInput>.AttemptLink`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput#m-attemptlink), [`SenderInput.AttemptLink`](/game-api/types/alta-items/senderinput#m-attemptlink), [`SenderInput<TSender, TData>.AttemptLink`](/game-api/types/alta-items/senderinput-tsender-tdata#m-attemptlink).
