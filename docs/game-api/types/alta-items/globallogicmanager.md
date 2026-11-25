---
title: "GlobalLogicManager"
description: "Holds every logic value (GetData<TData>(ref uint identifier)). Saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalLogicManager

A **class** in `Root.Township`, `Alta.Logic`.

Holds every logic value (`GetData<TData>(ref uint identifier)`). Saved.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LogicManagerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicManagerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavingContext`](/game-api/types/global-i-l/isavingcontext)
- **Derived types** [`LogicManagerData`](/game-api/types/alta-items/logicmanagerdata)
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalLogicManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-contextstack" /><code>{"private static Stack<"}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{"> contextStack"}</code> |  |
| <Link id="m-datamap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-items/ilogicvaluedata">{"ILogicValueData"}</Link>{"> dataMap"}</code> |  |
| <Link id="m-defaultsetdata" /><code>{"private "}<Link to="/game-api/types/global-m-o/nonhasheddata">{"NonHashedData"}</Link>{" defaultSetData"}</code> |  |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" instance"}</code> |  |
| <Link id="m-isglobal" /><code>{"private bool isGlobal"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-nextid" /><code>{"private uint nextId"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" Current { get; }"}</code> |  |
| <Link id="m-global" /><code>{"static "}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" Global { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdata" /><code>{"TData GetData<TData>(ref uint identifier)"}</code> |  |
| <Link id="m-getdata-2" /><code><Link to="/game-api/types/alta-items/ilogicvaluedata">{"ILogicValueData"}</Link>{" GetData(uint identifier)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-restore" /><code>{"void Restore<TData>(ref TData saveData)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-popcontext" /><code>{"private void ISavingContext.PopContext()"}</code> |  |
| <Link id="m-pushcontext" /><code>{"private void ISavingContext.PushContext()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GlobalLogicManager`:

[`Chunk.logicManager`](/game-api/types/alta-world/chunk#m-logicmanager), [`Chunk.LogicManager`](/game-api/types/alta-world/chunk#m-logicmanager-2), [`ILogicComponent.EditorPreSave`](/game-api/types/alta-items/ilogiccomponent#m-editorpresave), [`LogicValueReceiver<TSenderInput>.EditorPreSave`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput#m-editorpresave), [`LogicValueReceiver<TSenderInput>.LogicManager`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput#m-logicmanager), [`LogicValueReceiverArray<TSenderInput>.EditorPreSave`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput#m-editorpresave), [`LogicValueReceiverArray<TSenderInput>.LogicManager`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput#m-logicmanager), [`LogicValueSender.EditorPreSave`](/game-api/types/alta-items/logicvaluesender#m-editorpresave), [`LogicValueSender.LogicManager`](/game-api/types/alta-items/logicvaluesender#m-logicmanager), [`LogicValueSender<TData>.EditorPreSave`](/game-api/types/alta-items/logicvaluesender-tdata#m-editorpresave), [`SenderInput.Manager`](/game-api/types/alta-items/senderinput#m-manager), [`SenderInput<TSender, TData>.Load`](/game-api/types/alta-items/senderinput-tsender-tdata#m-load).
