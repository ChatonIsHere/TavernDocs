---
title: "JsonSerializerSettingsExtensions"
description: "Adds Nullable versions of struct JSON converters to a serializer settings object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonSerializerSettingsExtensions

A **static class** in `Root.Township`, `Alta.Console`.

Adds `Nullable` versions of struct JSON converters to a serializer settings object. Used by the websocket console's JSON settings.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addnullableconverters" /><code>{"static void AddNullableConverters(JsonSerializerSettings settings)"}</code> | <span className="api-desc">For each converter of a struct type already in the settings, adds a `NullableStructSerializer` for that struct.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createnullablewrapper" /><code>{"private static JsonConverter CreateNullableWrapper(Type type)"}</code> | <span className="api-desc">Creates a `NullableStructSerializer` for the given struct type.</span> |
| <Link id="m-isjsonconverteroft" /><code>{"private static bool IsJsonConverterOfT(Type type)"}</code> | <span className="api-desc">True if the type is the generic `JsonConverter<T>`.</span> |
| <Link id="m-trygetjsonconverterstruct" /><code>{"private static bool TryGetJsonConverterStruct(Type type, out Type structType)"}</code> | <span className="api-desc">Gets the struct type a converter handles, if its base is `JsonConverter<T>` with a value type.</span> |

</details>
