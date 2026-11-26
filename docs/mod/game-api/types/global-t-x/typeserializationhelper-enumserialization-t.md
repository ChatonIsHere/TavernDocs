---
title: "TypeSerializationHelper.EnumSerialization<T>"
description: "Serializer for any enum, sent as its int value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.EnumSerialization&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

Serializer for any enum, sent as its `int` value. Made on demand by `GetSerialization`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnumSerialization()"}</code> | Creates a `TypeSerializationHelper.EnumSerialization` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref T enumValue, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Writes the enum as an int over the full int range, or reads it back and casts it. |
