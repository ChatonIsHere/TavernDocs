---
title: "GetSizeTest"
description: "Editor test helper that shows the size of this object's mesh bounds in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetSizeTest

A **class** in `Root.Township`, the global namespace.

Editor test helper that shows the size of this object's mesh bounds in the inspector.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetSizeTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doj" /><code>{"private bool doj"}</code> | <span className="api-desc">Inspector button that runs `GetWidth`.</span> |
| <Link id="m-x" /><code>{"private string x"}</code> | <span className="api-desc">Bounds width, as text.</span> |
| <Link id="m-y" /><code>{"private string y"}</code> | <span className="api-desc">Bounds height, as text.</span> |
| <Link id="m-z" /><code>{"private string z"}</code> | <span className="api-desc">Bounds depth, as text.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getwidth" /><code>{"void GetWidth()"}</code> | <span className="api-desc">Writes the mesh bounds size on each axis into `x`, `y` and `z`.</span> |
