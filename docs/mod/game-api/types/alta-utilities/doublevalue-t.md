---
title: "DoubleValue<T>"
description: "A SingleValue<T> with a second float value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DoubleValue&lt;T&gt;

A **class** in `Root.Township`, `Alta`.

A `SingleValue<T>` with a second float value.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`SingleValue<T>`](/mod/game-api/types/alta-utilities/singlevalue-t)
- **Derived types** [`BiomeDoubleValue`](/mod/game-api/types/alta-world-generation/biomedoublevalue), [`ElementDoubleValue`](/mod/game-api/types/alta-world-generation/elementdoublevalue), [`CurveRange<T>`](/mod/game-api/types/alta-utilities/curverange-t), [`AttributeDoubleValue`](/mod/game-api/types/global-a-b/attributedoublevalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DoubleValue()"}</code> | <span className="api-desc">Creates a `DoubleValue` from `topic`, `value` and `value2`.</span> |
| <Link id="m-ctor-2" /><code>{"DoubleValue(T topic, float value, float value2)"}</code> | <span className="api-desc">Creates a `DoubleValue` from `topic`, `value` and `value2`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-value2" /><code>{"private float value2"}</code> | <span className="api-desc">Backing field for `Value2`, the second number paired with the topic.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value2-2" /><code>{"float Value2 { get; }"}</code> | <span className="api-desc">The second value.</span> |
