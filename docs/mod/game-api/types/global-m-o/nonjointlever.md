---
title: "NonJointLever"
description: "A lever that follows the hands on its handle by rotating a target, with no physics joint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonJointLever

A **class** in `Root.Township`, the global namespace.

A lever that follows the hands on its handle by rotating a target, with no physics joint. Not networked; each machine runs it from the hands it sees and fires on and off events locally.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Buttons and levers](/mod/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonJointLever()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Quaternion center"}</code> | Middle of the allowed rotation range. |
| <Link id="m-handlepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handlePickup"}</code> | The pickup players grab to move the lever. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | True while the lever is in its active angle range. |
| <Link id="m-maxactiveangle" /><code>{"private float maxActiveAngle"}</code> | Upper angle of the active range. |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | Upper limit of the rotation. |
| <Link id="m-maxrange" /><code>{"private float maxRange"}</code> | Half the rotation range, worked out in `Awake`. |
| <Link id="m-minactiveangle" /><code>{"private float minActiveAngle"}</code> | Lower angle of the active range. |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> | Lower limit of the rotation. |
| <Link id="m-mininactiveangle" /><code>{"private float minInactiveAngle"}</code> | Once active, the angle must fall below this before it counts as off again. |
| <Link id="m-neutralposition" /><code>{"private Vector3 neutralPosition"}</code> | Local direction that counts as zero rotation. |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> | Transform the grip point is measured from. |
| <Link id="m-returnspeed" /><code>{"private float returnSpeed"}</code> | How fast it swings back to rest when let go. Zero leaves it where it is. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Local axis the lever turns around. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform that is rotated. |
| <Link id="m-targetrotation" /><code>{"private float targetRotation"}</code> | Starting angle of `target`. |
| <Link id="m-turnedoff" /><code>{"private UnityEvent turnedOff"}</code> | Event raised when the lever leaves the active range. |
| <Link id="m-turnedon" /><code>{"private UnityEvent turnedOn"}</code> | Event raised when the lever enters the active range. |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | Per-frame update registration. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the handle's grab, sets the starting rotation and works out the allowed range. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the update. |
| <Link id="m-startedinteracting" /><code>{"private void StartedInteracting("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Starts the per-frame update when the handle is grabbed. |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | Rotates toward the average grip point within range, or back to rest by `returnSpeed`, and fires `turnedOn` or `turnedOff` as the angle crosses the thresholds. |

</details>
