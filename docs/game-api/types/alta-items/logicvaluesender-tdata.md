---
title: "LogicValueSender<TData>"
description: "abstract class LogicValueSender<TData> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicValueSender&lt;TData&gt;

An **abstract class** in `Root.Township`, `Alta.Logic`.

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
| <Link id="m-data-2" /><code>{"TData Data { get; }"}</code> |  |
| <Link id="m-datatype" /><code>{"sealed override Type DataType { get; }"}</code> |  |
| <Link id="m-identifier" /><code>{"override uint Identifier { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override void Clear()"}</code> |  |
| <Link id="m-editorpresave" /><code>{"override void EditorPreSave("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-readdatavalue" /><code>{"protected abstract void ReadDataValue()"}</code> |  |
| <Link id="m-setupdata" /><code>{"private void SetupData()"}</code> |  |
| <Link id="m-unsubscribe" /><code>{"private void Unsubscribe("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-updatedatavalue" /><code>{"protected void UpdateDataValue()"}</code> |  |
| <Link id="m-writedatavalue" /><code>{"protected abstract void WriteDataValue()"}</code> |  |
