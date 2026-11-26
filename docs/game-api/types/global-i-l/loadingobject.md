---
title: "LoadingObject"
description: "Client VR loading screen object: keeps an overlay at floor height under the headset and turns it slowly to face where the player looks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoadingObject

A **class** in `Root.Township`, no namespace.

Client VR loading screen object: keeps an overlay at floor height under the headset and turns it slowly to face where the player looks.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`TempSceneObject`](/game-api/types/global-t-x/tempsceneobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoadingObject()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Transform moved down by the headset height. |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | Transform that follows the headset. |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> | True until the overlay has caught up with the view direction. |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | Current eased rotation of `rotatingTransform`. |
| <Link id="m-ovroverlay" /><code>{"private MonoBehaviour ovrOverlay"}</code> | Overlay component, enabled on the first update. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Reused local position for `cachedTransform`. |
| <Link id="m-rotatingtransform" /><code>{"private Transform rotatingTransform"}</code> | Transform turned to face the view direction. |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> | Headset tracking handle from `VRTrackedDevice.AddTracking`. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts tracking the headset onto `cameraTransform`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Disposes the headset tracking. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Offsets the object by the headset height, snaps the overlay to the view direction the first frame, then eases toward it until within 5 degrees. |

</details>
