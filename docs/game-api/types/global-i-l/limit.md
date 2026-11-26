---
title: "Limit"
description: "Splits a float signal by a threshold: values above it go to one event, the rest to another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Limit

A **class** in `Root.Township`, no namespace.

Splits a float signal by a threshold: values above it go to one event, the rest to another.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Limit()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-limit" /><code>{"private float limit"}</code> | The threshold. |
| <Link id="m-over" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" over"}</code> | Invoked with values above the limit. |
| <Link id="m-under" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" under"}</code> | Invoked with values at or below the limit. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"void Input(float value)"}</code> | Invokes `over` when the value is above `limit`, otherwise `under`. |
