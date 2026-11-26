---
title: "DebugClimbable"
description: "Test Climbable that tints its material by grip pressure and, when it breaks, shrinks and can't be gripped for a few seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugClimbable

A **class** in `Root.Township`, the global namespace.

Test `Climbable` that tints its material by grip pressure and, when it breaks, shrinks and can't be gripped for a few seconds.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`Climbable`](/mod/game-api/types/global-c-d/climbable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebugClimbable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private Color a"}</code> | <span className="api-desc">Colour at no pressure.</span> |
| <Link id="m-b" /><code>{"private Color b"}</code> | <span className="api-desc">Colour at full pressure.</span> |
| <Link id="m-breakduration" /><code>{"private float breakDuration"}</code> | <span className="api-desc">Seconds it stays broken.</span> |
| <Link id="m-isinstanced" /><code>{"private bool isInstanced"}</code> | <span className="api-desc">Meant to track whether the material was copied; never set to true.</span> |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | <span className="api-desc">Renderer that gets tinted.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"override bool ApplyPressure(Vector3 pressure)"}</code> | <span className="api-desc">Applies pressure as normal, tints from `a` to `b` by pressure ratio, and starts the break routine when the grip fails.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlebreak" /><code>{"private IEnumerator HandleBreak() (iterator)"}</code> | <span className="api-desc">Shrinks the object to a tenth and blocks gripping for `breakDuration`, then restores it.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Frees the instanced material if `isInstanced` is set (it never is).</span> |

</details>
