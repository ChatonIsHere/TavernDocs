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
| <Link id="m-ctor" /><code>{"RotatePickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxrotatepersecondperhand" /><code>{"private float maxRotatePerSecondPerHand"}</code> | <span className="api-desc">Degrees per second one hand can contribute.</span> |
| <Link id="m-maxrotatepersecondtotal" /><code>{"private float maxRotatePerSecondTotal"}</code> | <span className="api-desc">Degrees per second all hands together can turn it.</span> |
| <Link id="m-pickups" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups"}</code> | <span className="api-desc">The pickups players grab to turn the object.</span> |
| <Link id="m-relativegrabs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> relativeGrabs"}</code> | <span className="api-desc">Each holding hand's grab point in the rotating object's local space.</span> |
| <Link id="m-rotatingobject" /><code>{"private Transform rotatingObject"}</code> | <span className="api-desc">The transform that turns; defaults to this one.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Local axis to turn around; defaults to up.</span> |
| <Link id="m-wheelgrab" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/wheelgrab">{"WheelGrab"}</Link>{" wheelGrab"}</code> | <span className="api-desc">Optional wheel whose `Progress` limits turning at 0 and 1.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Defaults the rotating object to this transform and the axis to up, and hooks the pickups' interaction events.</span> |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Forgets the releasing hand and disables updates once no hand is holding.</span> |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Remembers where the hand grabbed in the object's local space and enables updates.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Turns the object by the summed signed angle each hand has moved, clamped by the per-hand and total caps and by the wheel's progress limits.</span> |

</details>
