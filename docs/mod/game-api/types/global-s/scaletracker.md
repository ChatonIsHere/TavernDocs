---
title: "ScaleTracker"
description: "Debug component that logs its object's X scale on start and whenever it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleTracker

A **class** in `Root.Township`, the global namespace.

Debug component that logs its object's X scale on start and whenever it changes.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleTracker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localscale" /><code>{"private float localscale"}</code> | <span className="api-desc">Last logged X scale.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Records the starting X scale and logs it.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Logs the X scale when the transform changed or the scale differs from the last value.</span> |

</details>
