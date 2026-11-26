---
title: "GlobalLogicManager"
description: "Holds the shared data records for logic components (switches, wires and so on), keyed by id, and saves them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalLogicManager

A **class** in `Root.Township`, `Alta.Logic`.

Holds the shared data records for logic components (switches, wires and so on), keyed by id, and saves them. One is the global manager; others can act as a saving context for a group of components.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LogicManagerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicManagerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavingContext`](/mod/game-api/types/global-i-l/isavingcontext)
- **Derived types** [`LogicManagerData`](/mod/game-api/types/alta-items/logicmanagerdata)
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalLogicManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-contextstack" /><code>{"private static Stack<"}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{"> contextStack"}</code> | Static stack of managers pushed as saving contexts. Its top is `Current`, or `Global` when empty. |
| <Link id="m-datamap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-items/ilogicvaluedata">{"ILogicValueData"}</Link>{"> dataMap"}</code> | Logic value data by identifier. Filled by `GetData` and replaced on load, saved in full. |
| <Link id="m-defaultsetdata" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/nonhasheddata">{"NonHashedData"}</Link>{" defaultSetData"}</code> | Saved data loaded into the entity on server start when nothing has been loaded yet. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" instance"}</code> | Backing field for `Global`. |
| <Link id="m-isglobal" /><code>{"private bool isGlobal"}</code> | Whether this manager registers itself as `Global` in `Awake`. Defaults to true. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-nextid" /><code>{"private uint nextId"}</code> | Next identifier `GetData` hands out to data that has none. Saved, and only raised on load. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" Current { get; }"}</code> | The manager on top of the saving context stack, or the global one if the stack is empty. |
| <Link id="m-global" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" Global { get; }"}</code> | The manager marked as global, set when it wakes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdata" /><code>{"TData GetData<TData>(ref uint identifier)"}</code> | Gets a record by id. The generic form assigns a new id if 0 and creates missing records; the plain form returns null. |
| <Link id="m-getdata-2" /><code><Link to="/mod/game-api/types/alta-items/ilogicvaluedata">{"ILogicValueData"}</Link>{" GetData(uint identifier)"}</code> | Gets a record by id. The generic form assigns a new id if 0 and creates missing records; the plain form returns null. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: loads the default data set into its entity if it has no records yet. |
| <Link id="m-restore" /><code>{"void Restore<TData>(ref TData saveData)"}</code> | On load: keeps the existing record for an id if there is one, otherwise stores the loaded one. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Registers this manager as `Global` when `isGlobal` is set. |
| <Link id="m-popcontext" /><code>{"private void ISavingContext.PopContext()"}</code> | Explicit `ISavingContext` method: pops this manager off the context stack, logging an error if it wasn't on top. |
| <Link id="m-pushcontext" /><code>{"private void ISavingContext.PushContext()"}</code> | Explicit `ISavingContext` method: pushes this manager so it becomes `Current` while its children load or save. |

</details>

## Used in

Members of other types that take, return or hold a `GlobalLogicManager`:

[`Chunk.logicManager`](/mod/game-api/types/alta-world/chunk#m-logicmanager), [`Chunk.LogicManager`](/mod/game-api/types/alta-world/chunk#m-logicmanager-2), [`ILogicComponent.EditorPreSave`](/mod/game-api/types/alta-items/ilogiccomponent#m-editorpresave), [`LogicValueReceiver<TSenderInput>.EditorPreSave`](/mod/game-api/types/alta-items/logicvaluereceiver-tsenderinput#m-editorpresave), [`LogicValueReceiver<TSenderInput>.LogicManager`](/mod/game-api/types/alta-items/logicvaluereceiver-tsenderinput#m-logicmanager), [`LogicValueReceiverArray<TSenderInput>.EditorPreSave`](/mod/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput#m-editorpresave), [`LogicValueReceiverArray<TSenderInput>.LogicManager`](/mod/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput#m-logicmanager), [`LogicValueSender.EditorPreSave`](/mod/game-api/types/alta-items/logicvaluesender#m-editorpresave), [`LogicValueSender.LogicManager`](/mod/game-api/types/alta-items/logicvaluesender#m-logicmanager), [`LogicValueSender<TData>.EditorPreSave`](/mod/game-api/types/alta-items/logicvaluesender-tdata#m-editorpresave), [`SenderInput.Manager`](/mod/game-api/types/alta-items/senderinput#m-manager), [`SenderInput<TSender, TData>.Load`](/mod/game-api/types/alta-items/senderinput-tsender-tdata#m-load).
