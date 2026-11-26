---
title: "ThrowablePickup"
description: "Base for pickups that act on themselves in flight after being thrown, such as turning to face their direction of travel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrowablePickup

An **abstract class** in `Root.Township`, the global namespace.

Base for pickups that act on themselves in flight after being thrown, such as turning to face their direction of travel. Subclasses implement `ThrowBehaviour`, which runs each physics step until the pickup hits something, is grabbed or is docked.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ThrowAlignHelper`](/mod/game-api/types/global-t-x/throwalignhelper)
- **Attributes** `RequireComponent`
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ThrowablePickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup on this object.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | <span className="api-desc">Normalised time since the throw, 0 to 1.</span> |
| <Link id="m-lerpovertime" /><code>{"private AnimationCurve lerpOverTime"}</code> | <span className="api-desc">Curve giving the behaviour's strength over normalised flight time.</span> |
| <Link id="m-minvelocitysquared" /><code>{"private float minVelocitySquared"}</code> | <span className="api-desc">Squared speed below which the behaviour doesn't run.</span> |
| <Link id="m-timetofulllerp" /><code>{"private float timeToFullLerp"}</code> | <span className="api-desc">Seconds for `currentTime` to reach 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetvalues" /><code>{"protected virtual void ResetValues()"}</code> | <span className="api-desc">Resets the lerp time to 0; subclasses can reset their own state too.</span> |
| <Link id="m-throwbehaviour" /><code>{"protected abstract void ThrowBehaviour(Vector3 velocity, float throwMagnitude)"}</code> | <span className="api-desc">What the subclass does each physics step in flight, given the velocity and a 0 to 1 strength from `lerpOverTime`.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks release, grab and dock events and starts disabled.</span> |
| <Link id="m-checkstart" /><code>{"private void CheckStart("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Enables the flight behaviour once nobody is holding the pickup.</span> |
| <Link id="m-dockedendalign" /><code>{"private void DockedEndAlign("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Stops the flight behaviour when the pickup is docked.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Advances the lerp time and calls `ThrowBehaviour` with the velocity and curve weight while moving fast enough.</span> |
| <Link id="m-interactendalign" /><code>{"private void InteractEndAlign("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops the flight behaviour when the pickup is grabbed.</span> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Stops the flight behaviour on any collision.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Resets the values when the flight starts.</span> |

</details>
