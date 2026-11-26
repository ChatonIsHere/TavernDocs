---
title: "Limit"
description: "Splits a float signal by a threshold: values above it go to one event, the rest to another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Limit

A **class** in `Root.Township`, the global namespace.

Splits a float signal by a threshold: values above it go to one event, the rest to another.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Limit()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-limit" /><code>{"private float limit"}</code> | <span className="api-desc">The threshold.</span> |
| <Link id="m-over" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" over"}</code> | <span className="api-desc">Invoked with values above the limit.</span> |
| <Link id="m-under" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" under"}</code> | <span className="api-desc">Invoked with values at or below the limit.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"void Input(float value)"}</code> | <span className="api-desc">Invokes `over` when the value is above `limit`, otherwise `under`.</span> |
