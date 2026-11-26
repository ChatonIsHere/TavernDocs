---
title: "LiquidTest"
description: "Test component that tilts a liquid transform back toward world up each frame, within a limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidTest

A **class** in `Root.Township`, the global namespace.

Test component that tilts a liquid transform back toward world up each frame, within a limit. Probably a leftover prototype.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-liquidtransform" /><code>{"private Transform liquidTransform"}</code> | <span className="api-desc">Transform of the liquid surface being levelled.</span> |
| <Link id="m-rotationlimit" /><code>{"private float rotationLimit"}</code> | <span className="api-desc">Largest correction in degrees.</span> |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | <span className="api-desc">How much of the tilt is corrected.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Rotates `liquidTransform` toward world up by its tilt times `rotationMultiplier`, capped at `rotationLimit` degrees.</span> |

</details>
