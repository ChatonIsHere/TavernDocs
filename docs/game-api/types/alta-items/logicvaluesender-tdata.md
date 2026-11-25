---
title: "LogicValueSender<TData>"
description: "Base for logic components (switches, wires and similar) whose value lives in a shared logic data record held by a GlobalLogicManager, so linked parts see..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicValueSender&lt;TData&gt;

An **abstract class** in `Root.Township`, `Alta.Logic`.

Base for logic components (switches, wires and similar) whose value lives in a shared logic data record held by a `GlobalLogicManager`, so linked parts see the same value. Server-side; saved through the record.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender`](/game-api/types/alta-items/logicvaluesender), [`ISavable<TData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicBoolSender`](/game-api/types/alta-items/logicboolsender), [`LogicFloatSender`](/game-api/types/alta-items/logicfloatsender), [`LogicIntSender`](/game-api/types/alta-items/logicintsender), [`LogicVector3Sender`](/game-api/types/alta-items/logicvector3sender)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LogicValueSender()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private TData data"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code>{"TData Data { get; }"}</code> | The shared data record, fetched from the logic manager on first use. |
| <Link id="m-datatype" /><code>{"sealed override Type DataType { get; }"}</code> | The save data type this sender uses. |
| <Link id="m-identifier" /><code>{"override uint Identifier { get; }"}</code> | Id of the shared data record in the logic manager. 0 means none. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override void Clear()"}</code> | Drops the link to the data record. |
| <Link id="m-editorpresave" /><code>{"override void EditorPreSave("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | Editor hook before saving. Empty here. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: finds the logic manager (parent or global) and reads the current value if data exists. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: links prefab instances to a data record, or clears the id on prefab assets. |
| <Link id="m-readdatavalue" /><code>{"protected abstract void ReadDataValue()"}</code> | Subclass: applies the record's value to the component. Also called when the record changes from elsewhere. |
| <Link id="m-setupdata" /><code>{"private void SetupData()"}</code> |  |
| <Link id="m-unsubscribe" /><code>{"private void Unsubscribe("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-updatedatavalue" /><code>{"protected void UpdateDataValue()"}</code> | Writes the component's value into the record and notifies listeners. |
| <Link id="m-writedatavalue" /><code>{"protected abstract void WriteDataValue()"}</code> | Subclass: copies the component's value into the record. |
