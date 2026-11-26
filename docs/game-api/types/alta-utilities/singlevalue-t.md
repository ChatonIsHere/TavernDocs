---
title: "SingleValue<T>"
description: "A serializable pair of an object and a float, for inspector lists of weighted or scored things."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SingleValue&lt;T&gt;

A **class** in `Root.Township`, `Alta`.

A serializable pair of an object and a float, for inspector lists of weighted or scored things.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`BiomeSingleValue`](/game-api/types/alta-world-generation/biomesinglevalue), [`ElementSingleValue`](/game-api/types/alta-world-generation/elementsinglevalue), [`DoubleValue<T>`](/game-api/types/alta-utilities/doublevalue-t), [`OriginSingleValue`](/game-api/types/alta-world-generation/originsinglevalue), [`AttributeSingleValue`](/game-api/types/global-a-b/attributesinglevalue)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SingleValue()"}</code> |
| <Link id="m-ctor-2" /><code>{"SingleValue(T topic, float value)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-topic" /><code>{"private T topic"}</code> | Backing field for `Topic`. |
| <Link id="m-value" /><code>{"private float value"}</code> | Backing field for `Value`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-topic-2" /><code>{"T Topic { get; }"}</code> | The object the value is for. |
| <Link id="m-value-2" /><code>{"float Value { get; }"}</code> | The value. |
