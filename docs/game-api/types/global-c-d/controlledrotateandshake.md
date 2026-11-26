---
title: "ControlledRotateAndShake"
description: "Client: rotates a transform around X by a progress value and can shake it back and forth around Z for a random time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControlledRotateAndShake

A **class** in `Root.Township`, no namespace.

Client: rotates a transform around X by a progress value and can shake it back and forth around Z for a random time.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControlledRotateAndShake()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | The transform rotated. |
| <Link id="m-currentrotation" /><code>{"private float currentRotation"}</code> | Current X rotation progress. |
| <Link id="m-currentshake" /><code>{"private float currentShake"}</code> | Current shake value, 0 to 1. |
| <Link id="m-currentshakespeed" /><code>{"private float currentShakeSpeed"}</code> | Seconds per swing for the current shake. |
| <Link id="m-rotation" /><code>{"private "}<Link to="/game-api/types/global-m-o/minmaxvalue">{"MinMaxValue"}</Link>{" rotation"}</code> | X angle range mapped from progress. |
| <Link id="m-shake" /><code>{"private "}<Link to="/game-api/types/global-m-o/minmaxvalue">{"MinMaxValue"}</Link>{" shake"}</code> | Z angle range mapped from the shake value. |
| <Link id="m-shakedirection" /><code>{"private int shakeDirection"}</code> | 1 or -1, the way the shake is swinging. |
| <Link id="m-shakeduration" /><code>{"private "}<Link to="/game-api/types/global-m-o/minmaxvalue">{"MinMaxValue"}</Link>{" shakeDuration"}</code> | Range for how long a shake lasts. |
| <Link id="m-shakefinishtime" /><code>{"private float shakeFinishTime"}</code> | Real time when the shake stops. |
| <Link id="m-shakespeed" /><code>{"private "}<Link to="/game-api/types/global-m-o/minmaxvalue">{"MinMaxValue"}</Link>{" shakeSpeed"}</code> | Range for seconds per swing. |
| <Link id="m-shakeupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" shakeUpdate"}</code> | Handle for the registered shake update. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animateshake" /><code>{"void AnimateShake()"}</code> | Starts or extends a shake for a random duration with a random speed. Does nothing headless. |
| <Link id="m-setrotation" /><code>{"void SetRotation(float progress)"}</code> | Public overload sets the X rotation progress (0 to 1); the private one applies both rotations. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the shake update. |
| <Link id="m-setrotation-2" /><code>{"private void SetRotation()"}</code> | Public overload sets the X rotation progress (0 to 1); the private one applies both rotations. |
| <Link id="m-shakeupdate-2" /><code>{"private void ShakeUpdate()"}</code> | Per-frame update that swings the shake value between 0 and 1 until the shake ends. |

</details>
