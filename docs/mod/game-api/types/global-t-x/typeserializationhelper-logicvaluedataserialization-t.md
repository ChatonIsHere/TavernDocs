---
title: "TypeSerializationHelper.LogicValueDataSerialization<T>"
description: "Serializer for logic value data, sent as its logic identifier and looked up in the current GlobalLogicManager on read."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.LogicValueDataSerialization&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

Serializer for logic value data, sent as its logic identifier and looked up in the current `GlobalLogicManager` on read.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicValueDataSerialization()"}</code> | Creates a `TypeSerializationHelper.LogicValueDataSerialization` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref T data, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Writes the data's logic identifier, or reads one and fetches the data from `GlobalLogicManager.Current`, logging an error if missing. |
