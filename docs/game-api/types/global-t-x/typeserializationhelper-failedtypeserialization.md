---
title: "TypeSerializationHelper.FailedTypeSerialization"
description: "Do-nothing serializer returned when no serializer fits a type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.FailedTypeSerialization

A **class** in `Root.Township`, no namespace.

Do-nothing serializer returned when no serializer fits a type. Fields using it are simply not synced.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.TypeSerialization<bool>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FailedTypeSerialization()"}</code> | Creates a `TypeSerializationHelper.FailedTypeSerialization` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handle" /><code>{"override void Handle<T>(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead)"}</code> | Does nothing, so no read or write delegate is added. |
| <Link id="m-handlearray" /><code>{"override void HandleArray<T>(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead)"}</code> | Does nothing, so no read or write delegate is added. |
| <Link id="m-serialize" /><code>{"protected override void Serialize(Type type, ref bool value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Does nothing. |
