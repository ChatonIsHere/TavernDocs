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
| <Link id="m-ctor" /><code>{"ComponentCounter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-componenttype" /><code>{"private Component componentType"}</code> | Any component of the type to count. |
| <Link id="m-found" /><code>{"private Component[] found"}</code> | The components found. |
| <Link id="m-isincludingdisabled" /><code>{"private bool isIncludingDisabled"}</code> | Whether inactive children are included. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Fills `found` with all child components of `componentType`'s type. |

</details>
