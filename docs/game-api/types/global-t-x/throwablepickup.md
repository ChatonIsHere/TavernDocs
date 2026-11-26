---
title: "ThrowablePickup"
description: "Base for pickups that act on themselves in flight after being thrown, such as turning to face their direction of travel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrowablePickup

An **abstract class** in `Root.Township`, no namespace.

Base for pickups that act on themselves in flight after being thrown, such as turning to face their direction of travel. Subclasses implement `ThrowBehaviour`, which runs each physics step until the pickup hits something, is grabbed or is docked.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ThrowAlignHelper`](/game-api/types/global-t-x/throwalignhelper)
- **Attributes** `RequireComponent`
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ThrowablePickup()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code>{"protected "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on this object. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | Normalised time since the throw, 0 to 1. |
| <Link id="m-lerpovertime" /><code>{"private AnimationCurve lerpOverTime"}</code> | Curve giving the behaviour's strength over normalised flight time. |
| <Link id="m-minvelocitysquared" /><code>{"private float minVelocitySquared"}</code> | Squared speed below which the behaviour doesn't run. |
| <Link id="m-timetofulllerp" /><code>{"private float timeToFullLerp"}</code> | Seconds for `currentTime` to reach 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetvalues" /><code>{"protected virtual void ResetValues()"}</code> | Resets the lerp time to 0; subclasses can reset their own state too. |
| <Link id="m-throwbehaviour" /><code>{"protected abstract void ThrowBehaviour(Vector3 velocity, float throwMagnitude)"}</code> | What the subclass does each physics step in flight, given the velocity and a 0 to 1 strength from `lerpOverTime`. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks release, grab and dock events and starts disabled. |
| <Link id="m-checkstart" /><code>{"private void CheckStart("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Enables the flight behaviour once nobody is holding the pickup. |
| <Link id="m-dockedendalign" /><code>{"private void DockedEndAlign("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Stops the flight behaviour when the pickup is docked. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Advances the lerp time and calls `ThrowBehaviour` with the velocity and curve weight while moving fast enough. |
| <Link id="m-interactendalign" /><code>{"private void InteractEndAlign("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops the flight behaviour when the pickup is grabbed. |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | Stops the flight behaviour on any collision. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Resets the values when the flight starts. |

</details>
