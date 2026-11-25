---
title: "AnalyticsTools"
description: "static class AnalyticsTools in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsTools

A **static class** in `Root.Township`, `Alta.Analytics`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`FieldHandler`](/game-api/types/alta-console/analyticstools-fieldhandler), [`SerializeDelegate`](/game-api/types/alta-console/analyticstools-serializedelegate)
- **Attributes** `Obsolete`

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-compilergeneratedfieldtype" /><code>{"private static readonly Type CompilerGeneratedFieldType"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-serializationhandlers" /><code>{"private static Dictionary<Type, "}<Link to="/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{"> serializationHandlers"}</code> |
| <Link id="m-stringbuilder" /><code>{"private static StringBuilder stringBuilder"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-serialize" /><code>{"static string Serialize(object target, "}<Link to="/game-api/types/alta-console/analyticsoptions">{"AnalyticsOptions"}</Link>{" options = 0)"}</code> |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-createserializationfunction" /><code>{"private static "}<Link to="/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{" CreateSerializationFunction("}<Link to="/game-api/types/alta-console/analyticsoptions">{"AnalyticsOptions"}</Link>{" options, List<"}<Link to="/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{"> serializationSteps)"}</code> |
| <Link id="m-createserializationhandler" /><code>{"private static "}<Link to="/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{" CreateSerializationHandler("}<Link to="/game-api/types/alta-console/analyticsoptions">{"AnalyticsOptions"}</Link>{" options, Type targetType, Type serializeAttributeType)"}</code> |
| <Link id="m-createserializationstep" /><code>{"private static "}<Link to="/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{" CreateSerializationStep(FieldInfo field, "}<Link to="/game-api/types/alta-console/analyticstools-fieldhandler">{"AnalyticsTools.FieldHandler"}</Link>{" howToSerializeThis, string fieldName)"}</code> |
| <Link id="m-createserializationstep-2" /><code>{"private static "}<Link to="/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{" CreateSerializationStep(PropertyInfo property, "}<Link to="/game-api/types/alta-console/analyticstools-fieldhandler">{"AnalyticsTools.FieldHandler"}</Link>{" howToSerializeThis, string fieldName)"}</code> |
| <Link id="m-getlistfieldtype" /><code>{"private static bool GetListFieldType(Type firstElementType, out string typeName)"}</code> |
| <Link id="m-handleenumerablefield" /><code>{"private static void HandleEnumerableField(object fieldValue, StringBuilder logger)"}</code> |
| <Link id="m-handlefield" /><code>{"private static void HandleField(object fieldValue, string fieldName, Type fieldType, StringBuilder logger)"}</code> |
| <Link id="m-serializefields" /><code>{"private static void SerializeFields(Type targetType, Type serializeAttributeType, bool isAddingAllFields, List<"}<Link to="/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{"> serializationSteps)"}</code> |
| <Link id="m-serializeproperties" /><code>{"private static void SerializeProperties(Type targetType, Type serializeAttributeType, bool isAddingAllFields, List<"}<Link to="/game-api/types/alta-console/analyticstools-serializedelegate">{"AnalyticsTools.SerializeDelegate"}</Link>{"> serializationSteps)"}</code> |

</details>
