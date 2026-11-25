---
title: "ThrowablePickup"
description: "Base for custom throw behaviour (ThrowAlignHelper)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrowablePickup

An **abstract class** in `Root.Township`, no namespace.

Base for custom throw behaviour (`ThrowAlignHelper`).

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ThrowAlignHelper`](/game-api/types/global-t-x/throwalignhelper)
- **Attributes** `RequireComponent`
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ThrowablePickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> |  |
| <Link id="m-lerpovertime" /><code>{"private AnimationCurve lerpOverTime"}</code> |  |
| <Link id="m-minvelocitysquared" /><code>{"private float minVelocitySquared"}</code> |  |
| <Link id="m-pickup" /><code>{"protected "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-timetofulllerp" /><code>{"private float timeToFullLerp"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkstart" /><code>{"private void CheckStart("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-dockedendalign" /><code>{"private void DockedEndAlign("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-interactendalign" /><code>{"private void InteractEndAlign("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-resetvalues" /><code>{"protected virtual void ResetValues()"}</code> |  |
| <Link id="m-throwbehaviour" /><code>{"protected abstract void ThrowBehaviour(Vector3 velocity, float throwMagnitude)"}</code> |  |
