---
title: "TypeSerializationHelper.SaveDataSerialization<T>"
description: "Serializer for SaveData objects: writes the save structure hash, the data's bit length, then the data, probably so readers can skip structures they do not know."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.SaveDataSerialization&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

Serializer for `SaveData` objects: writes the save structure hash, the data's bit length, then the data, probably so readers can skip structures they do not know.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SaveDataSerialization()"}</code> | Creates a `TypeSerializationHelper.SaveDataSerialization` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t">{"TypeSerializationHelper.SaveDataSerialization"}</Link>{"<T> Instance { get; }"}</code> | Shared instance, used by `LogicManagerSetSerialization`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializeext" /><code>{"void SerializeExt(ref T data, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Public entry point that calls `Serialize` with no type. |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref T data, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Writes hash, length and data (0 for null), or reads them through `SavingSystem.Load`, calling `SavingSystem.ReadMissing` when that fails. |
