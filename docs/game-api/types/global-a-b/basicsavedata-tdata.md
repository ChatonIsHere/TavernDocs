---
title: "BasicSaveData<TData>"
description: "abstract class BasicSaveData<TData> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSaveData&lt;TData&gt;

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SaveData`](/game-api/types/alta-world/savedata), [`ISavable<TData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GlobalCommunalStorageValuesData`](/game-api/types/alta-items/globalcommunalstoragevaluesdata), [`LogicSaveData`](/game-api/types/alta-items/logicsavedata), [`PlayerSaveFileData`](/game-api/types/alta-utilities/playersavefiledata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override bool Apply(object target, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> |  |
| <Link id="m-copyto" /><code>{"protected abstract void CopyTo(TData target)"}</code> |  |
