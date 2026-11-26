---
title: "TypeSerializationHelper.TypeSerialization<TType>"
description: "Base for a serializer of one value type (float, vector, prefab, save data and so on) used to build read and write delegates for synced save fields."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.TypeSerialization&lt;TType&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base for a serializer of one value type (float, vector, prefab, save data and so on) used to build read and write delegates for synced save fields.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** [`TypeSerializationHelper.ITypeSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-itypeserialization)
- **Derived types** [`TypeSerializationHelper.BitSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-bitserialization), [`TypeSerializationHelper.BoolSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-boolserialization), [`TypeSerializationHelper.ColorSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-colorserialization), [`TypeSerializationHelper.DateTimeSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-datetimeserialization), [`TypeSerializationHelper.EnumSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-enumserialization-t), [`TypeSerializationHelper.FailedTypeSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization), [`TypeSerializationHelper.FloatBitsSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-floatbitsserialization), [`TypeSerializationHelper.FloatPrecisionSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-floatprecisionserialization), [`TypeSerializationHelper.FloatSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-floatserialization), [`TypeSerializationHelper.HashedSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-hashedserialization-t), [`TypeSerializationHelper.IntSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-intserialization), [`TypeSerializationHelper.LogicManagerSetSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-logicmanagersetserialization), [`TypeSerializationHelper.LogicValueDataSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-logicvaluedataserialization-t), [`TypeSerializationHelper.NetworkPrefabSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-networkprefabserialization), [`TypeSerializationHelper.QuaternionSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-quaternionserialization), [`TypeSerializationHelper.SaveDataSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t), [`TypeSerializationHelper.StringSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-stringserialization), [`TypeSerializationHelper.SubClassSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-subclassserialization-t), [`TypeSerializationHelper.TimeSpanSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-timespanserialization), [`TypeSerializationHelper.UintSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-uintserialization), [`TypeSerializationHelper.Vector2Serialization`](/mod/game-api/types/global-t-x/typeserializationhelper-vector2serialization), [`TypeSerializationHelper.Vector3Serialization`](/mod/game-api/types/global-t-x/typeserializationhelper-vector3serialization), [`TypeSerializationHelper.Vector4Serialization`](/mod/game-api/types/global-t-x/typeserializationhelper-vector4serialization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TypeSerialization()"}</code> | Creates a `TypeSerializationHelper.TypeSerialization` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handle" /><code>{"virtual void Handle<T>(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead)"}</code> | Adds read and write steps for a single field of this type, given its getter and setter. Logs an error on a type mismatch. |
| <Link id="m-handlearray" /><code>{"virtual void HandleArray<T>(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead)"}</code> | Same as `Handle` for an array field: writes the length, then each element. |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | Optional setup hook. Empty by default. |
| <Link id="m-serialize" /><code>{"protected abstract void Serialize(Type type, ref TType value, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Subclasses read or write one value of the type to the stream here. |

## Used in

Members of other types that take, return or hold a `TypeSerialization&lt;TType>`:

[`TypeSerializationHelper.Add`](/mod/game-api/types/global-t-x/typeserializationhelper#m-add-2).
