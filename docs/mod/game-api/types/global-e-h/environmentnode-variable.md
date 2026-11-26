---
title: "EnvironmentNode.Variable"
description: "An optional float setting on an EnvironmentNode (used for reverb)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentNode.Variable

A **class** in `Root.Township`, the global namespace.

An optional float setting on an `EnvironmentNode` (used for reverb). It either overrides the value or falls back to a default node's value.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EnvironmentNode`](/mod/game-api/types/global-e-h/environmentnode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Variable()"}</code> | <span className="api-desc">Creates an `EnvironmentNode.Variable` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isoverriding" /><code>{"private bool isOverriding"}</code> | <span className="api-desc">Whether this node sets its own value instead of using the default.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">The override value, used only when `isOverriding` is on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"float Get("}<Link to="/mod/game-api/types/global-e-h/environmentnode-variable">{"EnvironmentNode.Variable"}</Link>{" defaultValue)"}</code> | <span className="api-desc">Returns `value` when overriding, otherwise the given default variable's value, or 0 if there is none.</span> |

## Used in

Members of other types that take, return or hold a `Variable`:

<div className="api-used-in">

[`EnvironmentNode.reverb`](/mod/game-api/types/global-e-h/environmentnode#m-reverb), [`EnvironmentNode.Reverb`](/mod/game-api/types/global-e-h/environmentnode#m-reverb-2).

</div>
