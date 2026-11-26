---
title: "LoadingObject"
description: "Client VR loading screen object: keeps an overlay at floor height under the headset and turns it slowly to face where the player looks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoadingObject

A **class** in `Root.Township`, the global namespace.

Client VR loading screen object: keeps an overlay at floor height under the headset and turns it slowly to face where the player looks.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`TempSceneObject`](/mod/game-api/types/global-t-x/tempsceneobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoadingObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Transform moved down by the headset height.</span> |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | <span className="api-desc">Transform that follows the headset.</span> |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> | <span className="api-desc">True until the overlay has caught up with the view direction.</span> |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | <span className="api-desc">Current eased rotation of `rotatingTransform`.</span> |
| <Link id="m-ovroverlay" /><code>{"private MonoBehaviour ovrOverlay"}</code> | <span className="api-desc">Overlay component, enabled on the first update.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Reused local position for `cachedTransform`.</span> |
| <Link id="m-rotatingtransform" /><code>{"private Transform rotatingTransform"}</code> | <span className="api-desc">Transform turned to face the view direction.</span> |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> | <span className="api-desc">Headset tracking handle from `VRTrackedDevice.AddTracking`.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts tracking the headset onto `cameraTransform`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Disposes the headset tracking.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Offsets the object by the headset height, snaps the overlay to the view direction the first frame, then eases toward it until within 5 degrees.</span> |

</details>
