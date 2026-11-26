---
title: "AnalyticsTools"
description: "Obsolete reflection serializer that turned records into the old DynamoDB-style JSON for Analytics.SendRecord."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsTools

A **static class** in `Root.Township`, `Alta.Analytics`.

Obsolete reflection serializer that turned records into the old DynamoDB-style JSON for `Analytics.SendRecord`. Builds and caches one serializer per type.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`FieldHandler`](/mod/game-api/types/alta-console/analyticstools-fieldhandler), [`SerializeDelegate`](/mod/game-api/types/alta-console/analyticstools-serializedelegate)
- **Attributes** `Obsolete`

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-compilergeneratedfieldtype" /><code>{"private static readonly Type CompilerGeneratedFieldType"}</code> | The `CompilerGeneratedAttribute` type, used to skip backing fields. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-serializationhandlers" /><code>{"private static Dictionary<Type, "}<Link to="/mod/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{"> serializationHandlers"}</code> | Cache of built serializers by type. |
| <Link id="m-stringbuilder" /><code>{"private static StringBuilder stringBuilder"}</code> | Shared builder reused by every `Serialize` call, so it is not thread safe. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static string Serialize(object target, "}<Link to="/mod/game-api/types/alta-console/analyticsoptions">{"AnalyticsOptions"}</Link>{" options = 0)"}</code> | Serializes an object to the old analytics JSON body, using the cached serializer for its type. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createserializationfunction" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{" CreateSerializationFunction("}<Link to="/mod/game-api/types/alta-console/analyticsoptions">{"AnalyticsOptions"}</Link>{" options, List<"}<Link to="/mod/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{"> serializationSteps)"}</code> | Builds the delegate that runs every field step and then adds timestamp, user ID and game time as the options say. |
| <Link id="m-createserializationhandler" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{" CreateSerializationHandler("}<Link to="/mod/game-api/types/alta-console/analyticsoptions">{"AnalyticsOptions"}</Link>{" options, Type targetType, Type serializeAttributeType)"}</code> | Builds and caches the serializer for a type, reading `AnalyticsRecordForAll` for its options. |
| <Link id="m-createserializationstep" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{" CreateSerializationStep(FieldInfo field, "}<Link to="/mod/game-api/types/alta-console/analyticstools-fieldhandler">{"AnalyticsTools.FieldHandler"}</Link>{" howToSerializeThis, string fieldName)"}</code> | Builds the step that reads one field or property and writes it. |
| <Link id="m-createserializationstep-2" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{" CreateSerializationStep(PropertyInfo property, "}<Link to="/mod/game-api/types/alta-console/analyticstools-fieldhandler">{"AnalyticsTools.FieldHandler"}</Link>{" howToSerializeThis, string fieldName)"}</code> | Builds the step that reads one field or property and writes it. |
| <Link id="m-getlistfieldtype" /><code>{"private static bool GetListFieldType(Type firstElementType, out string typeName)"}</code> | Gives the type code for a list (`NS` for numbers, `SS` for strings) or logs an error for other types. |
| <Link id="m-handleenumerablefield" /><code>{"private static void HandleEnumerableField(object fieldValue, StringBuilder logger)"}</code> | Writes a list field as a typed array. |
| <Link id="m-handlefield" /><code>{"private static void HandleField(object fieldValue, string fieldName, Type fieldType, StringBuilder logger)"}</code> | Writes one value with a type code: `N` for numbers, `S` for strings, vectors and Unity objects, `BOOL` for bools. |
| <Link id="m-serializefields" /><code>{"private static void SerializeFields(Type targetType, Type serializeAttributeType, bool isAddingAllFields, List<"}<Link to="/mod/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{"> serializationSteps)"}</code> | Adds steps for the type's fields: all of them with `AnalyticsRecordForAll`, otherwise only marked ones. |
| <Link id="m-serializeproperties" /><code>{"private static void SerializeProperties(Type targetType, Type serializeAttributeType, bool isAddingAllFields, List<"}<Link to="/mod/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{"> serializationSteps)"}</code> | Adds steps for the type's properties: all of them with `AnalyticsRecordForAll`, otherwise only marked ones. |

</details>
