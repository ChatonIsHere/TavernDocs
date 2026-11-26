---
title: "SphereBlockableCamera"
description: "A BlockableCamera that counts as blocked when a sphere around the lens overlaps the block layers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphereBlockableCamera

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

A `BlockableCamera` that counts as blocked when a sphere around the lens overlaps the block layers.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`BlockableCamera`](/game-api/types/alta-customization/blockablecamera)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SphereBlockableCamera()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Radius of the check sphere. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateblockinternal" /><code>{"protected override bool UpdateBlockInternal()"}</code> | Checks a sphere of `radius` at the camera position against the settings' block layer mask. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor only: draws the check sphere. |

</details>
