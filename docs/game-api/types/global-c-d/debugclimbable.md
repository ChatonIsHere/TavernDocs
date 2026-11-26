---
title: "DebugClimbable"
description: "Test Climbable that tints its material by grip pressure and, when it breaks, shrinks and can't be gripped for a few seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugClimbable

A **class** in `Root.Township`, no namespace.

Test `Climbable` that tints its material by grip pressure and, when it breaks, shrinks and can't be gripped for a few seconds.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`Climbable`](/game-api/types/global-c-d/climbable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DebugClimbable()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private Color a"}</code> | Colour at no pressure. |
| <Link id="m-b" /><code>{"private Color b"}</code> | Colour at full pressure. |
| <Link id="m-breakduration" /><code>{"private float breakDuration"}</code> | Seconds it stays broken. |
| <Link id="m-isinstanced" /><code>{"private bool isInstanced"}</code> | Meant to track whether the material was copied; never set to true. |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | Renderer that gets tinted. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"override bool ApplyPressure(Vector3 pressure)"}</code> | Applies pressure as normal, tints from `a` to `b` by pressure ratio, and starts the break routine when the grip fails. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlebreak" /><code>{"private IEnumerator HandleBreak() (iterator)"}</code> | Shrinks the object to a tenth and blocks gripping for `breakDuration`, then restores it. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Frees the instanced material if `isInstanced` is set (it never is). |

</details>
