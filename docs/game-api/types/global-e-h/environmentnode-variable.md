---
title: "EnvironmentNode.Variable"
description: "An optional float setting on an EnvironmentNode (used for reverb)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentNode.Variable

A **class** in `Root.Township`, no namespace.

An optional float setting on an `EnvironmentNode` (used for reverb). It either overrides the value or falls back to a default node's value.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`EnvironmentNode`](/game-api/types/global-e-h/environmentnode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Variable()"}</code> | Creates an `EnvironmentNode.Variable` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isoverriding" /><code>{"private bool isOverriding"}</code> | Whether this node sets its own value instead of using the default. |
| <Link id="m-value" /><code>{"private float value"}</code> | The override value, used only when `isOverriding` is on. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"float Get("}<Link to="/game-api/types/global-e-h/environmentnode-variable">{"EnvironmentNode.Variable"}</Link>{" defaultValue)"}</code> | Returns `value` when overriding, otherwise the given default variable's value, or 0 if there is none. |

## Used in

Members of other types that take, return or hold a `Variable`:

[`EnvironmentNode.reverb`](/game-api/types/global-e-h/environmentnode#m-reverb), [`EnvironmentNode.Reverb`](/game-api/types/global-e-h/environmentnode#m-reverb-2).
