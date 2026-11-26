---
title: "Rotator"
description: "Spins a NetworkAxisRotation at a set speed every physics step, using unscaled time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Rotator

A **class** in `Root.Township`, `ATT.Utilities`.

Spins a `NetworkAxisRotation` at a set speed every physics step, using unscaled time.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Rotator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotatepersecond" /><code>{"private float angleToRotatePerSecond"}</code> | <span className="api-desc">Rotation speed in degrees per second.</span> |
| <Link id="m-axisrotation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkaxisrotation">{"NetworkAxisRotation"}</Link>{" axisRotation"}</code> | <span className="api-desc">The networked axis rotation that is turned.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setrotationspeed" /><code>{"void SetRotationSpeed(float newRotationSpeed)"}</code> | <span className="api-desc">Sets the rotation speed in degrees per second.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Rotates the axis by the speed times the unscaled fixed delta time.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Rotator`:

<div className="api-used-in">

[`RespawnShrineSubscriberMarkController.subscriberMarkRotator`](/mod/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller#m-subscribermarkrotator).

</div>
