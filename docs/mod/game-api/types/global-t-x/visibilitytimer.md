---
title: "VisibilityTimer"
description: "Editor test tool that times the new TriangleVisibilityUtility occluded-triangle pass against OldVisibilityTest on its child meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisibilityTimer

A **class** in `Root.Township`, the global namespace.

Editor test tool that times the new `TriangleVisibilityUtility` occluded-triangle pass against `OldVisibilityTest` on its child meshes.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VisibilityTimer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-test" /><code>{"private bool test"}</code> | <span className="api-desc">Inspector button that runs `Test`.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-test-2" /><code>{"private void Test()"}</code> | <span className="api-desc">Runs both passes on every child mesh (skipping impostor shaders) and logs both times in milliseconds as an error.</span> |

</details>
