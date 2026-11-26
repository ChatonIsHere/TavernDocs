---
title: "TrailRendererLerpFollow"
description: "A LerpFollow that also drives a trail renderer, hiding the trail's head when movement is tiny."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrailRendererLerpFollow

A **class** in `Root.Township`, the global namespace.

A `LerpFollow` that also drives a trail renderer, hiding the trail's head when movement is tiny.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`LerpFollow`](/mod/game-api/types/global-i-l/lerpfollow)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrailRendererLerpFollow()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basewidth" /><code>{"private float baseWidth"}</code> | <span className="api-desc">Trail width used while moving.</span> |
| <Link id="m-minimumdistance" /><code>{"private float minimumDistance"}</code> | <span className="api-desc">Squared step length below which the trail head is hidden.</span> |
| <Link id="m-trail" /><code>{"private TrailRenderer trail"}</code> | <span className="api-desc">The trail renderer on this object.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"override void Start()"}</code> | <span className="api-desc">Clears the trail and sets both its widths to `baseWidth`.</span> |
| <Link id="m-moving" /><code>{"protected override void Moving(Vector3 from, Vector3 to)"}</code> | <span className="api-desc">Sets the trail start width to zero when the step is shorter than `minimumDistance` (squared), otherwise to `baseWidth`.</span> |
