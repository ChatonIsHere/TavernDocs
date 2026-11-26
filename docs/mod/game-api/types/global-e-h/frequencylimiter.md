---
title: "FrequencyLimiter"
description: "Passes an event on at most once per interval."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FrequencyLimiter

A **class** in `Root.Township`, the global namespace.

Passes an event on at most once per interval. Call `Invoke` as often as you like.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FrequencyLimiter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" invoked"}</code> | <span className="api-desc">Event fired when `Invoke` is allowed through.</span> |
| <Link id="m-minimuminterval" /><code>{"private float minimumInterval"}</code> | <span className="api-desc">Seconds before it can fire again. Default 10.</span> |
| <Link id="m-nextinvoke" /><code>{"private float nextInvoke"}</code> | <span className="api-desc">Time after which the next call will fire.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> | <span className="api-desc">Fires `invoked` unless it already fired within the last `minimumInterval` seconds.</span> |
