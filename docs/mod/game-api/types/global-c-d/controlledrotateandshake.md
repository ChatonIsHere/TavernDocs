---
title: "ControlledRotateAndShake"
description: "Client: rotates a transform around X by a progress value and can shake it back and forth around Z for a random time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControlledRotateAndShake

A **class** in `Root.Township`, the global namespace.

Client: rotates a transform around X by a progress value and can shake it back and forth around Z for a random time.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControlledRotateAndShake()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">The transform rotated.</span> |
| <Link id="m-currentrotation" /><code>{"private float currentRotation"}</code> | <span className="api-desc">Current X rotation progress.</span> |
| <Link id="m-currentshake" /><code>{"private float currentShake"}</code> | <span className="api-desc">Current shake value, 0 to 1.</span> |
| <Link id="m-currentshakespeed" /><code>{"private float currentShakeSpeed"}</code> | <span className="api-desc">Seconds per swing for the current shake.</span> |
| <Link id="m-rotation" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/minmaxvalue">{"MinMaxValue"}</Link>{" rotation"}</code> | <span className="api-desc">X angle range mapped from progress.</span> |
| <Link id="m-shake" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/minmaxvalue">{"MinMaxValue"}</Link>{" shake"}</code> | <span className="api-desc">Z angle range mapped from the shake value.</span> |
| <Link id="m-shakedirection" /><code>{"private int shakeDirection"}</code> | <span className="api-desc">1 or -1, the way the shake is swinging.</span> |
| <Link id="m-shakeduration" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/minmaxvalue">{"MinMaxValue"}</Link>{" shakeDuration"}</code> | <span className="api-desc">Range for how long a shake lasts.</span> |
| <Link id="m-shakefinishtime" /><code>{"private float shakeFinishTime"}</code> | <span className="api-desc">Real time when the shake stops.</span> |
| <Link id="m-shakespeed" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/minmaxvalue">{"MinMaxValue"}</Link>{" shakeSpeed"}</code> | <span className="api-desc">Range for seconds per swing.</span> |
| <Link id="m-shakeupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" shakeUpdate"}</code> | <span className="api-desc">Handle for the registered shake update.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animateshake" /><code>{"void AnimateShake()"}</code> | <span className="api-desc">Starts or extends a shake for a random duration with a random speed. Does nothing headless.</span> |
| <Link id="m-setrotation" /><code>{"void SetRotation(float progress)"}</code> | <span className="api-desc">Public overload sets the X rotation progress (0 to 1); the private one applies both rotations.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the shake update.</span> |
| <Link id="m-setrotation-2" /><code>{"private void SetRotation()"}</code> | <span className="api-desc">Public overload sets the X rotation progress (0 to 1); the private one applies both rotations.</span> |
| <Link id="m-shakeupdate-2" /><code>{"private void ShakeUpdate()"}</code> | <span className="api-desc">Per-frame update that swings the shake value between 0 and 1 until the shake ends.</span> |

</details>
