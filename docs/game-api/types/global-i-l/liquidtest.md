---
title: "LiquidTest"
description: "Test component that tilts a liquid transform back toward world up each frame, within a limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidTest

A **class** in `Root.Township`, no namespace.

Test component that tilts a liquid transform back toward world up each frame, within a limit. Probably a leftover prototype.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidTest()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-liquidtransform" /><code>{"private Transform liquidTransform"}</code> | Transform of the liquid surface being levelled. |
| <Link id="m-rotationlimit" /><code>{"private float rotationLimit"}</code> | Largest correction in degrees. |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | How much of the tilt is corrected. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Rotates `liquidTransform` toward world up by its tilt times `rotationMultiplier`, capped at `rotationLimit` degrees. |

</details>
