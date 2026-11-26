---
title: "CapsuleBlockableCamera"
description: "A BlockableCamera that counts as blocked when a capsule in front of the lens overlaps the block layers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CapsuleBlockableCamera

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

A `BlockableCamera` that counts as blocked when a capsule in front of the lens overlaps the block layers.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`BlockableCamera`](/mod/game-api/types/alta-customization/blockablecamera)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CapsuleBlockableCamera()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-height" /><code>{"private float height"}</code> | <span className="api-desc">Length of the check capsule along the camera's forward axis.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius of the check capsule.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateblockinternal" /><code>{"protected override bool UpdateBlockInternal()"}</code> | <span className="api-desc">Checks a capsule from the camera forward by `height` with `radius` against the settings' block layer mask.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor only: draws the check capsule.</span> |

</details>
