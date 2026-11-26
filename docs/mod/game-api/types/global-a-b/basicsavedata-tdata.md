---
title: "BasicSaveData<TData>"
description: "Base for save data types that are also their own savable: applying the data copies it onto the target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSaveData&lt;TData&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base for save data types that are also their own savable: applying the data copies it onto the target.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SaveData`](/mod/game-api/types/alta-world/savedata), [`ISavable<TData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GlobalCommunalStorageValuesData`](/mod/game-api/types/alta-items/globalcommunalstoragevaluesdata), [`LogicSaveData`](/mod/game-api/types/alta-items/logicsavedata), [`PlayerSaveFileData`](/mod/game-api/types/alta-utilities/playersavefiledata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicSaveData()"}</code> | Creates a `BasicSaveData` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger, used when a migration is asked for that this type doesn't provide. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name { get; }"}</code> | The data type's name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override bool Apply(object target, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Copies this data onto the target with `CopyTo`. |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | No migration: logs an error and returns null. |
| <Link id="m-copyto" /><code>{"protected abstract void CopyTo(TData target)"}</code> | Copies this data's values onto the target. |
