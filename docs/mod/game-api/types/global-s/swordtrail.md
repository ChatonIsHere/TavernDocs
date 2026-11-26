---
title: "SwordTrail"
description: "Drives a TrailRenderer's width curve from how fast the object moves along chosen axes, so a weapon trail only shows on fast swings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwordTrail

A **class** in `Root.Township`, the global namespace.

Drives a `TrailRenderer`'s width curve from how fast the object moves along chosen axes, so a weapon trail only shows on fast swings. Runs in edit mode too.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`, `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SwordTrail()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axissize" /><code>{"private Vector3 axisSize"}</code> | <span className="api-desc">Weights per axis for how movement direction turns into width.</span> |
| <Link id="m-keys" /><code>{"private List<Keyframe> keys"}</code> | <span className="api-desc">The width curve keyframes.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Position at the previous physics step.</span> |
| <Link id="m-minspeed" /><code>{"private float minSpeed"}</code> | <span className="api-desc">Squared distance per step below which the trail width is 0.</span> |
| <Link id="m-numberkeyframes" /><code>{"private int numberKeyFrames"}</code> | <span className="api-desc">Number of keys in the width curve.</span> |
| <Link id="m-trail" /><code>{"private TrailRenderer trail"}</code> | <span className="api-desc">The `TrailRenderer` on this object.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Pushes a new width from the movement since last step, or 0 if it moved less than `minSpeed`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Caches the trail and builds the starting width curve. Integer division makes all keyframe times 0.</span> |
| <Link id="m-updatelist" /><code>{"private void UpdateList(float newValue)"}</code> | <span className="api-desc">Shifts the width keys along by one, puts the new width first and applies the curve.</span> |

</details>
