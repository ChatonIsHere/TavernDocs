---
title: "RotatePickup"
description: "Rotates an object around one axis as players drag its pickups, like turning a wheel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotatePickup

A **class** in `Root.Township`, the global namespace.

Rotates an object around one axis as players drag its pickups, like turning a wheel. The turn speed is capped per hand and in total, and an optional `WheelGrab` stops it at either end. The speed caps are saved.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RotatePickupSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RotatePickupSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RotatePickupSaveData`](/mod/game-api/types/global-q-r/rotatepickupsavedata)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotatePickup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxrotatepersecondperhand" /><code>{"private float maxRotatePerSecondPerHand"}</code> | Degrees per second one hand can contribute. |
| <Link id="m-maxrotatepersecondtotal" /><code>{"private float maxRotatePerSecondTotal"}</code> | Degrees per second all hands together can turn it. |
| <Link id="m-pickups" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups"}</code> | The pickups players grab to turn the object. |
| <Link id="m-relativegrabs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> relativeGrabs"}</code> | Each holding hand's grab point in the rotating object's local space. |
| <Link id="m-rotatingobject" /><code>{"private Transform rotatingObject"}</code> | The transform that turns; defaults to this one. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Local axis to turn around; defaults to up. |
| <Link id="m-wheelgrab" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/wheelgrab">{"WheelGrab"}</Link>{" wheelGrab"}</code> | Optional wheel whose `Progress` limits turning at 0 and 1. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Defaults the rotating object to this transform and the axis to up, and hooks the pickups' interaction events. |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Forgets the releasing hand and disables updates once no hand is holding. |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Remembers where the hand grabbed in the object's local space and enables updates. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Turns the object by the summed signed angle each hand has moved, clamped by the per-hand and total caps and by the wheel's progress limits. |

</details>
