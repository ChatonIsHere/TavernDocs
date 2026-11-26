---
title: "ComponentCounter"
description: "Editor tool that lists every component of a chosen type under this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentCounter

A **class** in `Root.Township`, the global namespace.

Editor tool that lists every component of a chosen type under this object.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentCounter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-componenttype" /><code>{"private Component componentType"}</code> | <span className="api-desc">Any component of the type to count.</span> |
| <Link id="m-found" /><code>{"private Component[] found"}</code> | <span className="api-desc">The components found.</span> |
| <Link id="m-isincludingdisabled" /><code>{"private bool isIncludingDisabled"}</code> | <span className="api-desc">Whether inactive children are included.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Fills `found` with all child components of `componentType`'s type.</span> |

</details>
