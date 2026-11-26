---
title: "TrailRendererLerpFollow"
description: "A LerpFollow that also drives a trail renderer, hiding the trail's head when movement is tiny."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrailRendererLerpFollow

A **class** in `Root.Township`, no namespace.

A `LerpFollow` that also drives a trail renderer, hiding the trail's head when movement is tiny.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`LerpFollow`](/game-api/types/global-i-l/lerpfollow)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrailRendererLerpFollow()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basewidth" /><code>{"private float baseWidth"}</code> | Trail width used while moving. |
| <Link id="m-minimumdistance" /><code>{"private float minimumDistance"}</code> | Squared step length below which the trail head is hidden. |
| <Link id="m-trail" /><code>{"private TrailRenderer trail"}</code> | The trail renderer on this object. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"override void Start()"}</code> | Clears the trail and sets both its widths to `baseWidth`. |
| <Link id="m-moving" /><code>{"protected override void Moving(Vector3 from, Vector3 to)"}</code> | Sets the trail start width to zero when the step is shorter than `minimumDistance` (squared), otherwise to `baseWidth`. |
