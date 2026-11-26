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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender`](/mod/game-api/types/alta-items/logicvaluesender), [`ISavable<TData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicBoolSender`](/mod/game-api/types/alta-items/logicboolsender), [`LogicFloatSender`](/mod/game-api/types/alta-items/logicfloatsender), [`LogicIntSender`](/mod/game-api/types/alta-items/logicintsender), [`LogicVector3Sender`](/mod/game-api/types/alta-items/logicvector3sender)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LogicValueSender()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private TData data"}</code> | <span className="api-desc">Backing field for `Data`; filled from the logic manager on first access or from the save on load.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code>{"TData Data { get; }"}</code> | <span className="api-desc">The shared data record, fetched from the logic manager on first use.</span> |
| <Link id="m-datatype" /><code>{"sealed override Type DataType { get; }"}</code> | <span className="api-desc">The save data type this sender uses.</span> |
| <Link id="m-identifier" /><code>{"override uint Identifier { get; }"}</code> | <span className="api-desc">Id of the shared data record in the logic manager. 0 means none.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override void Clear()"}</code> | <span className="api-desc">Drops the link to the data record.</span> |
| <Link id="m-editorpresave" /><code>{"override void EditorPreSave("}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | <span className="api-desc">Editor hook before saving. Empty here.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: finds the logic manager (parent or global) and reads the current value if data exists.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor: links prefab instances to a data record, or clears the id on prefab assets.</span> |
| <Link id="m-readdatavalue" /><code>{"protected abstract void ReadDataValue()"}</code> | <span className="api-desc">Subclass: applies the record's value to the component. Also called when the record changes from elsewhere.</span> |
| <Link id="m-updatedatavalue" /><code>{"protected void UpdateDataValue()"}</code> | <span className="api-desc">Writes the component's value into the record and notifies listeners.</span> |
| <Link id="m-writedatavalue" /><code>{"protected abstract void WriteDataValue()"}</code> | <span className="api-desc">Subclass: copies the component's value into the record.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupdata" /><code>{"private void SetupData()"}</code> | <span className="api-desc">Hooks `ReadDataValue` to the data's `ChangedExternally` event and `Unsubscribe` to the entity's scene destroy. Called on load.</span> |
| <Link id="m-unsubscribe" /><code>{"private void Unsubscribe("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Removes the `ChangedExternally` listener when the entity is destroyed by the scene.</span> |

</details>
