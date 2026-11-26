---
title: "ScaleTracker"
description: "Debug component that logs its object's X scale on start and whenever it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleTracker

A **class** in `Root.Township`, no namespace.

Debug component that logs its object's X scale on start and whenever it changes.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScaleTracker()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localscale" /><code>{"private float localscale"}</code> | Last logged X scale. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Records the starting X scale and logs it. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Logs the X scale when the transform changed or the scale differs from the last value. |

</details>
