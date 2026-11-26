---
title: "VisibilityTimer"
description: "Editor test tool that times the new TriangleVisibilityUtility occluded-triangle pass against OldVisibilityTest on its child meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisibilityTimer

A **class** in `Root.Township`, no namespace.

Editor test tool that times the new `TriangleVisibilityUtility` occluded-triangle pass against `OldVisibilityTest` on its child meshes.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VisibilityTimer()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-test" /><code>{"private bool test"}</code> | Inspector button that runs `Test`. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-test-2" /><code>{"private void Test()"}</code> | Runs both passes on every child mesh (skipping impostor shaders) and logs both times in milliseconds as an error. |

</details>
