---
title: "CollisionHaptic"
description: "Client: on a pickup, buzzes the holding controllers when it hits another pickup fast enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CollisionHaptic

A **class** in `Root.Township`, the global namespace.

Client: on a pickup, buzzes the holding controllers when it hits another pickup fast enough. Removed on headless servers.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CollisionHaptic()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hapticamount" /><code>{"private float hapticAmount"}</code> | Haptic strength. |
| <Link id="m-hapticduration" /><code>{"private float hapticDuration"}</code> | Haptic length in seconds. |
| <Link id="m-minimumspeedforhapticssquared" /><code>{"private float minimumSpeedForHapticsSquared"}</code> | Squared speed both pickups together must pass. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on this object. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-haptics" /><code>{"void Haptics()"}</code> | Plays a flat haptic pulse on every controller holding this pickup. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys itself on a headless build. |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | If it hit a pickup (or the root of a crafted one) and their summed squared speeds pass the minimum, runs `Haptics`. |

</details>
