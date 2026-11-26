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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ILogicComponent`](/mod/game-api/types/alta-items/ilogiccomponent)
- **Derived types** [`LogicValueSender<TData>`](/mod/game-api/types/alta-items/logicvaluesender-tdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LogicValueSender()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"protected uint identifier"}</code> | <span className="api-desc">Backing id of the data.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datatype" /><code>{"abstract Type DataType { get; }"}</code> | <span className="api-desc">The type of data this component keeps.</span> |
| <Link id="m-identifier-2" /><code>{"abstract uint Identifier { get; }"}</code> | <span className="api-desc">Id of this component's data in the logic manager. 0 when none.</span> |
| <Link id="m-logicmanager" /><code><Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; protected set; }"}</code> | <span className="api-desc">The `GlobalLogicManager` holding the data. Found in a parent, or the global one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"abstract void Clear()"}</code> | <span className="api-desc">Forgets the identifier and data.</span> |
| <Link id="m-editorpresave" /><code>{"abstract void EditorPreSave("}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | <span className="api-desc">Editor hook before saving. Does nothing in the generic version.</span> |

## Used in

Members of other types that take, return or hold a `LogicValueSender`:

<div className="api-used-in">

[`ILogicValueLinkReceiver.AttemptLink`](/mod/game-api/types/alta-items/ilogicvaluelinkreceiver#m-attemptlink), [`LogicValueReceiver<TSenderInput>.AttemptLink`](/mod/game-api/types/alta-items/logicvaluereceiver-tsenderinput#m-attemptlink), [`LogicValueReceiverArray<TSenderInput>.AttemptLink`](/mod/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput#m-attemptlink), [`SenderInput.AttemptLink`](/mod/game-api/types/alta-items/senderinput#m-attemptlink), [`SenderInput<TSender, TData>.AttemptLink`](/mod/game-api/types/alta-items/senderinput-tsender-tdata#m-attemptlink).

</div>
