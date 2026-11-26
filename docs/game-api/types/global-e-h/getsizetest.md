---
title: "GetSizeTest"
description: "Editor test helper that shows the size of this object's mesh bounds in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetSizeTest

A **class** in `Root.Township`, no namespace.

Editor test helper that shows the size of this object's mesh bounds in the inspector.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GetSizeTest()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doj" /><code>{"private bool doj"}</code> | Inspector button that runs `GetWidth`. |
| <Link id="m-x" /><code>{"private string x"}</code> | Bounds width, as text. |
| <Link id="m-y" /><code>{"private string y"}</code> | Bounds height, as text. |
| <Link id="m-z" /><code>{"private string z"}</code> | Bounds depth, as text. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getwidth" /><code>{"void GetWidth()"}</code> | Writes the mesh bounds size on each axis into `x`, `y` and `z`. |
