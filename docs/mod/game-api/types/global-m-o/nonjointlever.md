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
| <Link id="m-ctor" /><code>{"NonJointLever()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Quaternion center"}</code> | <span className="api-desc">Middle of the allowed rotation range.</span> |
| <Link id="m-handlepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handlePickup"}</code> | <span className="api-desc">The pickup players grab to move the lever.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">True while the lever is in its active angle range.</span> |
| <Link id="m-maxactiveangle" /><code>{"private float maxActiveAngle"}</code> | <span className="api-desc">Upper angle of the active range.</span> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | <span className="api-desc">Upper limit of the rotation.</span> |
| <Link id="m-maxrange" /><code>{"private float maxRange"}</code> | <span className="api-desc">Half the rotation range, worked out in `Awake`.</span> |
| <Link id="m-minactiveangle" /><code>{"private float minActiveAngle"}</code> | <span className="api-desc">Lower angle of the active range.</span> |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> | <span className="api-desc">Lower limit of the rotation.</span> |
| <Link id="m-mininactiveangle" /><code>{"private float minInactiveAngle"}</code> | <span className="api-desc">Once active, the angle must fall below this before it counts as off again.</span> |
| <Link id="m-neutralposition" /><code>{"private Vector3 neutralPosition"}</code> | <span className="api-desc">Local direction that counts as zero rotation.</span> |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> | <span className="api-desc">Transform the grip point is measured from.</span> |
| <Link id="m-returnspeed" /><code>{"private float returnSpeed"}</code> | <span className="api-desc">How fast it swings back to rest when let go. Zero leaves it where it is.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Local axis the lever turns around.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform that is rotated.</span> |
| <Link id="m-targetrotation" /><code>{"private float targetRotation"}</code> | <span className="api-desc">Starting angle of `target`.</span> |
| <Link id="m-turnedoff" /><code>{"private UnityEvent turnedOff"}</code> | <span className="api-desc">Event raised when the lever leaves the active range.</span> |
| <Link id="m-turnedon" /><code>{"private UnityEvent turnedOn"}</code> | <span className="api-desc">Event raised when the lever enters the active range.</span> |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | <span className="api-desc">Per-frame update registration.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the handle's grab, sets the starting rotation and works out the allowed range.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the update.</span> |
| <Link id="m-startedinteracting" /><code>{"private void StartedInteracting("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Starts the per-frame update when the handle is grabbed.</span> |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Rotates toward the average grip point within range, or back to rest by `returnSpeed`, and fires `turnedOn` or `turnedOff` as the angle crosses the thresholds.</span> |

</details>
