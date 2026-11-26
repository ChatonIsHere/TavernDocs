---
title: "SwordTrail"
description: "Drives a TrailRenderer's width curve from how fast the object moves along chosen axes, so a weapon trail only shows on fast swings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwordTrail

A **class** in `Root.Township`, no namespace.

Drives a `TrailRenderer`'s width curve from how fast the object moves along chosen axes, so a weapon trail only shows on fast swings. Runs in edit mode too.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`, `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SwordTrail()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axissize" /><code>{"private Vector3 axisSize"}</code> | Weights per axis for how movement direction turns into width. |
| <Link id="m-keys" /><code>{"private List<Keyframe> keys"}</code> | The width curve keyframes. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | Position at the previous physics step. |
| <Link id="m-minspeed" /><code>{"private float minSpeed"}</code> | Squared distance per step below which the trail width is 0. |
| <Link id="m-numberkeyframes" /><code>{"private int numberKeyFrames"}</code> | Number of keys in the width curve. |
| <Link id="m-trail" /><code>{"private TrailRenderer trail"}</code> | The `TrailRenderer` on this object. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Pushes a new width from the movement since last step, or 0 if it moved less than `minSpeed`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Caches the trail and builds the starting width curve. Integer division makes all keyframe times 0. |
| <Link id="m-updatelist" /><code>{"private void UpdateList(float newValue)"}</code> | Shifts the width keys along by one, puts the new width first and applies the curve. |

</details>
