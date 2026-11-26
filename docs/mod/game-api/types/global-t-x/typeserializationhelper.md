---
title: "TypeSerializationHelper"
description: "Picks the network serializer for a field's type, used by ClassSerializationHelper and the Sync attributes to build read and write delegates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper

A **static class** in `Root.Township`, the global namespace.

Picks the network serializer for a field's type, used by `ClassSerializationHelper` and the `Sync` attributes to build read and write delegates. Built-in types are registered up front; enums, hashed values, logic data, save data and other classes get one made on first use.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested types** [`BitSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-bitserialization), [`BoolSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-boolserialization), [`ColorSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-colorserialization), [`DateTimeSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-datetimeserialization), [`EnumSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-enumserialization-t), [`FailedTypeSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization), [`FloatBitsSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-floatbitsserialization), [`FloatPrecisionSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-floatprecisionserialization), [`FloatSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-floatserialization), [`HashedSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-hashedserialization-t), [`IntSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-intserialization), [`ITypeSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-itypeserialization), [`LogicManagerSetSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-logicmanagersetserialization), [`LogicValueDataSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-logicvaluedataserialization-t), [`NetworkPrefabSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-networkprefabserialization), [`ObjectActivator`](/mod/game-api/types/global-t-x/typeserializationhelper-objectactivator), [`QuaternionSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-quaternionserialization), [`SaveDataSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t), [`StringSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-stringserialization), [`SubClassSerialization<T>`](/mod/game-api/types/global-t-x/typeserializationhelper-subclassserialization-t), [`TimeSpanSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-timespanserialization), [`TypeSerialization<TType>`](/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype), [`UintSerialization`](/mod/game-api/types/global-t-x/typeserializationhelper-uintserialization), [`Vector2Serialization`](/mod/game-api/types/global-t-x/typeserializationhelper-vector2serialization), [`Vector3Serialization`](/mod/game-api/types/global-t-x/typeserializationhelper-vector3serialization), [`Vector4Serialization`](/mod/game-api/types/global-t-x/typeserializationhelper-vector4serialization)

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hashedtype" /><code>{"private static Type hashedType"}</code> | `HashedGeneralValue`, for spotting hashed value types. |
| <Link id="m-logicvaluedatatype" /><code>{"private static Type logicValueDataType"}</code> | `ILogicValueData`, for spotting logic data types. |
| <Link id="m-map" /><code>{"private static Dictionary<Type, "}<Link to="/mod/game-api/types/global-t-x/typeserializationhelper-itypeserialization">{"TypeSerializationHelper.ITypeSerialization"}</Link>{"> map"}</code> | Cache of type to serializer. |
| <Link id="m-savedatatype" /><code>{"private static Type saveDataType"}</code> | `SaveData`, for spotting save data types. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getactivator" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/typeserializationhelper-objectactivator">{"TypeSerializationHelper.ObjectActivator"}</Link>{" GetActivator(Type type)"}</code> | Compiles a fast delegate that calls the type's first constructor. Also used by `SavingSystem`. |
| <Link id="m-getserialization" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/typeserializationhelper-itypeserialization">{"TypeSerializationHelper.ITypeSerialization"}</Link>{" GetSerialization(Type type)"}</code> | Returns the cached serializer for a type, making one for enums, hashed values, logic data, save data or classes. Logs an error and returns a do-nothing one otherwise. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private static void Add(Type type, "}<Link to="/mod/game-api/types/global-t-x/typeserializationhelper-itypeserialization">{"TypeSerializationHelper.ITypeSerialization"}</Link>{" serialization)"}</code> | Registers a serializer for a type and calls its `Initialize`. |
| <Link id="m-add-2" /><code>{"private static void Add<T>("}<Link to="/mod/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype">{"TypeSerializationHelper.TypeSerialization"}</Link>{"<T> serialization)"}</code> | Registers a serializer for a type and calls its `Initialize`. |

</details>
