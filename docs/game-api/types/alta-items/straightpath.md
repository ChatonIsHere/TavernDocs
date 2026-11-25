---
title: "StraightPath"
description: "class StraightPath in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StraightPath

A **class** in `Root.Township`, `Alta.Mechanisms`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Path`](/game-api/types/alta-items/path)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StraightPath()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> |
| <Link id="m-correctedaxis" /><code>{"private Vector3 correctedAxis"}</code> |
| <Link id="m-minposition" /><code>{"private Vector3 minPosition"}</code> |
| <Link id="m-needssetup" /><code>{"private bool needsSetup"}</code> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |
| <Link id="m-width" /><code>{"private float width"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getprogress" /><code>{"override float GetProgress(Transform transform)"}</code> |
| <Link id="m-settransform" /><code>{"override void SetTransform(Transform transform, float lerp)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |

</details>
