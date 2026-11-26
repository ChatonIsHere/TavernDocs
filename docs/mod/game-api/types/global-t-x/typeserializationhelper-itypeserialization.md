---
title: "TypeSerializationHelper.ITypeSerialization"
description: "A serializer for one field type, used to build the network sync and save read/write delegates for a class's fields."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.ITypeSerialization

An **interface** in `Root.Township`, the global namespace.

A serializer for one field type, used to build the network sync and save read/write delegates for a class's fields. Got from `TypeSerializationHelper.GetSerialization`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Derived types** [`TypeSerializationHelper.TypeSerialization<TType>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handle" /><code>{"void Handle<T>(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead)"}</code> | Adds read and write steps for a single field (given its getter and setter) to the sync delegates. |
| <Link id="m-handlearray" /><code>{"void HandleArray<T>(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead)"}</code> | Adds read and write steps for an array field, writing the length and then each element. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Called once when the serializer is added to the type map. |

## Used in

Members of other types that take, return or hold a `ITypeSerialization`:

[`SyncAttribute.Core`](/mod/game-api/types/global-s/syncattribute#m-core), [`TypeSerializationHelper.Add`](/mod/game-api/types/global-t-x/typeserializationhelper#m-add), [`TypeSerializationHelper.GetSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper#m-getserialization), [`TypeSerializationHelper.map`](/mod/game-api/types/global-t-x/typeserializationhelper#m-map).
