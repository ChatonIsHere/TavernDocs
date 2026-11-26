---
title: "FollowCamera"
description: "Debug camera that slowly orbits a group of transforms and zooms to keep them in frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FollowCamera

A **class** in `Root.Township`, the global namespace.

Debug camera that slowly orbits a group of transforms and zooms to keep them in frame. Arrow keys change the focus target.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FollowCamera()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameratilt" /><code>{"private float cameraTilt"}</code> | <span className="api-desc">Camera tilt in degrees.</span> |
| <Link id="m-focus" /><code>{"private int focus"}</code> | <span className="api-desc">Index of the focused transform.</span> |
| <Link id="m-following" /><code>{"private Transform[] following"}</code> | <span className="api-desc">Transforms the camera can frame.</span> |
| <Link id="m-heightbuffer" /><code>{"private float heightBuffer"}</code> | <span className="api-desc">Extra height added around the framed group.</span> |
| <Link id="m-iscontained" /><code>{"private bool[] isContained"}</code> | <span className="api-desc">Per target, whether it is within `maximumDistance` of the focus this frame.</span> |
| <Link id="m-lerprotation" /><code>{"private float lerpRotation"}</code> | <span className="api-desc">Rotation smoothing speed.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Position smoothing speed.</span> |
| <Link id="m-maximumdistance" /><code>{"private float maximumDistance"}</code> | <span className="api-desc">Targets further than this from the focus are left out of the frame.</span> |
| <Link id="m-rotation" /><code>{"private float rotation"}</code> | <span className="api-desc">Current orbit angle in radians.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Orbit speed in radians per second.</span> |
| <Link id="m-topic" /><code>{"private Camera topic"}</code> | <span className="api-desc">The camera on this object.</span> |
| <Link id="m-widthbuffer" /><code>{"private float widthBuffer"}</code> | <span className="api-desc">Extra width added around the framed group.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the camera and sizes the contained array.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Picks targets near the focus, frames them with the buffers and lerps the camera there while orbiting. Logs every frame.</span> |

</details>
