---
title: "TypeSerializationHelper"
description: "Picks the network serializer for a field's type, used by ClassSerializationHelper and the Sync attributes to build read and write delegates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper

A **static class** in `Root.Township`, no namespace.

Picks the network serializer for a field's type, used by `ClassSerializationHelper` and the `Sync` attributes to build read and write delegates. Built-in types are registered up front; enums, hashed values, logic data, save data and other classes get one made on first use.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested types** [`BitSerialization`](/game-api/types/global-t-x/typeserializationhelper-bitserialization), [`BoolSerialization`](/game-api/types/global-t-x/typeserializationhelper-boolserialization), [`ColorSerialization`](/game-api/types/global-t-x/typeserializationhelper-colorserialization), [`DateTimeSerialization`](/game-api/types/global-t-x/typeserializationhelper-datetimeserialization), [`EnumSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-enumserialization-t), [`FailedTypeSerialization`](/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization), [`FloatBitsSerialization`](/game-api/types/global-t-x/typeserializationhelper-floatbitsserialization), [`FloatPrecisionSerialization`](/game-api/types/global-t-x/typeserializationhelper-floatprecisionserialization), [`FloatSerialization`](/game-api/types/global-t-x/typeserializationhelper-floatserialization), [`HashedSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-hashedserialization-t), [`IntSerialization`](/game-api/types/global-t-x/typeserializationhelper-intserialization), [`ITypeSerialization`](/game-api/types/global-t-x/typeserializationhelper-itypeserialization), [`LogicManagerSetSerialization`](/game-api/types/global-t-x/typeserializationhelper-logicmanagersetserialization), [`LogicValueDataSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-logicvaluedataserialization-t), [`NetworkPrefabSerialization`](/game-api/types/global-t-x/typeserializationhelper-networkprefabserialization), [`ObjectActivator`](/game-api/types/global-t-x/typeserializationhelper-objectactivator), [`QuaternionSerialization`](/game-api/types/global-t-x/typeserializationhelper-quaternionserialization), [`SaveDataSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t), [`StringSerialization`](/game-api/types/global-t-x/typeserializationhelper-stringserialization), [`SubClassSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-subclassserialization-t), [`TimeSpanSerialization`](/game-api/types/global-t-x/typeserializationhelper-timespanserialization), [`TypeSerialization<TType>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype), [`UintSerialization`](/game-api/types/global-t-x/typeserializationhelper-uintserialization), [`Vector2Serialization`](/game-api/types/global-t-x/typeserializationhelper-vector2serialization), [`Vector3Serialization`](/game-api/types/global-t-x/typeserializationhelper-vector3serialization), [`Vector4Serialization`](/game-api/types/global-t-x/typeserializationhelper-vector4serialization)

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hashedtype" /><code>{"private static Type hashedType"}</code> | `HashedGeneralValue`, for spotting hashed value types. |
| <Link id="m-logicvaluedatatype" /><code>{"private static Type logicValueDataType"}</code> | `ILogicValueData`, for spotting logic data types. |
| <Link id="m-map" /><code>{"private static Dictionary<Type, "}<Link to="/game-api/types/global-t-x/typeserializationhelper-itypeserialization">{"TypeSerializationHelper.ITypeSerialization"}</Link>{"> map"}</code> | Cache of type to serializer. |
| <Link id="m-savedatatype" /><code>{"private static Type saveDataType"}</code> | `SaveData`, for spotting save data types. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getactivator" /><code>{"static "}<Link to="/game-api/types/global-t-x/typeserializationhelper-objectactivator">{"TypeSerializationHelper.ObjectActivator"}</Link>{" GetActivator(Type type)"}</code> | Compiles a fast delegate that calls the type's first constructor. Also used by `SavingSystem`. |
| <Link id="m-getserialization" /><code>{"static "}<Link to="/game-api/types/global-t-x/typeserializationhelper-itypeserialization">{"TypeSerializationHelper.ITypeSerialization"}</Link>{" GetSerialization(Type type)"}</code> | Returns the cached serializer for a type, making one for enums, hashed values, logic data, save data or classes. Logs an error and returns a do-nothing one otherwise. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private static void Add(Type type, "}<Link to="/game-api/types/global-t-x/typeserializationhelper-itypeserialization">{"TypeSerializationHelper.ITypeSerialization"}</Link>{" serialization)"}</code> | Registers a serializer for a type and calls its `Initialize`. |
| <Link id="m-add-2" /><code>{"private static void Add<T>("}<Link to="/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype">{"TypeSerializationHelper.TypeSerialization"}</Link>{"<T> serialization)"}</code> | Registers a serializer for a type and calls its `Initialize`. |

</details>
