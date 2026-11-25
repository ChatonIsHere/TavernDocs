---
title: "RotatePickup"
description: "class RotatePickup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotatePickup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RotatePickupSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RotatePickupSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RotatePickupSaveData`](/game-api/types/global-q-r/rotatepickupsavedata)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RotatePickup()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maxrotatepersecondperhand" /><code>{"private float maxRotatePerSecondPerHand"}</code> |
| <Link id="m-maxrotatepersecondtotal" /><code>{"private float maxRotatePerSecondTotal"}</code> |
| <Link id="m-pickups" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups"}</code> |
| <Link id="m-relativegrabs" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> relativeGrabs"}</code> |
| <Link id="m-rotatingobject" /><code>{"private Transform rotatingObject"}</code> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> |
| <Link id="m-wheelgrab" /><code>{"private "}<Link to="/game-api/types/global-t-x/wheelgrab">{"WheelGrab"}</Link>{" wheelGrab"}</code> |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>
