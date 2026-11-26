---
title: "FollowCamera"
description: "Debug camera that slowly orbits a group of transforms and zooms to keep them in frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FollowCamera

A **class** in `Root.Township`, no namespace.

Debug camera that slowly orbits a group of transforms and zooms to keep them in frame. Arrow keys change the focus target.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FollowCamera()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameratilt" /><code>{"private float cameraTilt"}</code> | Camera tilt in degrees. |
| <Link id="m-focus" /><code>{"private int focus"}</code> | Index of the focused transform. |
| <Link id="m-following" /><code>{"private Transform[] following"}</code> | Transforms the camera can frame. |
| <Link id="m-heightbuffer" /><code>{"private float heightBuffer"}</code> | Extra height added around the framed group. |
| <Link id="m-iscontained" /><code>{"private bool[] isContained"}</code> | Per target, whether it is within `maximumDistance` of the focus this frame. |
| <Link id="m-lerprotation" /><code>{"private float lerpRotation"}</code> | Rotation smoothing speed. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | Position smoothing speed. |
| <Link id="m-maximumdistance" /><code>{"private float maximumDistance"}</code> | Targets further than this from the focus are left out of the frame. |
| <Link id="m-rotation" /><code>{"private float rotation"}</code> | Current orbit angle in radians. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Orbit speed in radians per second. |
| <Link id="m-topic" /><code>{"private Camera topic"}</code> | The camera on this object. |
| <Link id="m-widthbuffer" /><code>{"private float widthBuffer"}</code> | Extra width added around the framed group. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gets the camera and sizes the contained array. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Picks targets near the focus, frames them with the buffers and lerps the camera there while orbiting. Logs every frame. |

</details>
