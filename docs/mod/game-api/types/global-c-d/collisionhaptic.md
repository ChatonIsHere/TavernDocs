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
| <Link id="m-ctor" /><code>{"CollisionHaptic()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hapticamount" /><code>{"private float hapticAmount"}</code> | <span className="api-desc">Haptic strength.</span> |
| <Link id="m-hapticduration" /><code>{"private float hapticDuration"}</code> | <span className="api-desc">Haptic length in seconds.</span> |
| <Link id="m-minimumspeedforhapticssquared" /><code>{"private float minimumSpeedForHapticsSquared"}</code> | <span className="api-desc">Squared speed both pickups together must pass.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup on this object.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-haptics" /><code>{"void Haptics()"}</code> | <span className="api-desc">Plays a flat haptic pulse on every controller holding this pickup.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys itself on a headless build.</span> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">If it hit a pickup (or the root of a crafted one) and their summed squared speeds pass the minimum, runs `Haptics`.</span> |

</details>
