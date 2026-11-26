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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Rotator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotatepersecond" /><code>{"private float angleToRotatePerSecond"}</code> | Rotation speed in degrees per second. |
| <Link id="m-axisrotation" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkaxisrotation">{"NetworkAxisRotation"}</Link>{" axisRotation"}</code> | The networked axis rotation that is turned. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setrotationspeed" /><code>{"void SetRotationSpeed(float newRotationSpeed)"}</code> | Sets the rotation speed in degrees per second. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Rotates the axis by the speed times the unscaled fixed delta time. |

</details>

## Used in

Members of other types that take, return or hold a `Rotator`:

[`RespawnShrineSubscriberMarkController.subscriberMarkRotator`](/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller#m-subscribermarkrotator).
