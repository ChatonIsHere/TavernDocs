---
title: "AltaContractResolver"
description: "Json.NET contract resolver that lets a JsonPropertyFilterAttribute on a member change how its value is read and written."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaContractResolver

A **class** in `Root.Township`, `Alta.Utilities`.

Json.NET contract resolver that lets a `JsonPropertyFilterAttribute` on a member change how its value is read and written.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `DefaultContractResolver`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaContractResolver()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"static JsonSerializerSettings settings"}</code> | Ready-made serializer settings: indented output with this resolver. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createproperty" /><code>{"protected override JsonProperty CreateProperty(MemberInfo member, MemberSerialization memberSerialization)"}</code> | Builds the property as usual, then wraps its value provider with the member's filter attribute, if any. |
