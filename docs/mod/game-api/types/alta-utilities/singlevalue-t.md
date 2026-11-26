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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`BiomeSingleValue`](/mod/game-api/types/alta-world-generation/biomesinglevalue), [`ElementSingleValue`](/mod/game-api/types/alta-world-generation/elementsinglevalue), [`DoubleValue<T>`](/mod/game-api/types/alta-utilities/doublevalue-t), [`OriginSingleValue`](/mod/game-api/types/alta-world-generation/originsinglevalue), [`AttributeSingleValue`](/mod/game-api/types/global-a-b/attributesinglevalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SingleValue()"}</code> | <span className="api-desc">Creates a `SingleValue` from `topic` and `value`.</span> |
| <Link id="m-ctor-2" /><code>{"SingleValue(T topic, float value)"}</code> | <span className="api-desc">Creates a `SingleValue` from `topic` and `value`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-topic" /><code>{"private T topic"}</code> | <span className="api-desc">Backing field for `Topic`.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Backing field for `Value`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-topic-2" /><code>{"T Topic { get; }"}</code> | <span className="api-desc">The object the value is for.</span> |
| <Link id="m-value-2" /><code>{"float Value { get; }"}</code> | <span className="api-desc">The value.</span> |
