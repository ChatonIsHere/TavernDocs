---
title: "FrequencyLimiter"
description: "Passes an event on at most once per interval."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FrequencyLimiter

A **class** in `Root.Township`, no namespace.

Passes an event on at most once per interval. Call `Invoke` as often as you like.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FrequencyLimiter()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" invoked"}</code> | Event fired when `Invoke` is allowed through. |
| <Link id="m-minimuminterval" /><code>{"private float minimumInterval"}</code> | Seconds before it can fire again. Default 10. |
| <Link id="m-nextinvoke" /><code>{"private float nextInvoke"}</code> | Time after which the next call will fire. |

</details>

## Methods

| Member |
| --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> |
