---
title: "TriggerShape"
description: "Turns a trigger collider's enter and exit messages into C# events, so other scripts can listen without their own collider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerShape

A **class** in `Root.Township`, the global namespace.

Turns a trigger collider's enter and exit messages into C# events, so other scripts can listen without their own collider.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`TriggerCapsule`](/mod/game-api/types/global-t-x/triggercapsule), [`TriggerShapeEvent`](/mod/game-api/types/global-t-x/triggershapeevent), [`TriggerSphere`](/mod/game-api/types/global-t-x/triggersphere)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerShape()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-thiscollider" /><code>{"private Collider thisCollider"}</code> | Cached collider on this object. Backing field for `ThisCollider`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-thiscollider-2" /><code>{"Collider ThisCollider { get; }"}</code> | The collider on this GameObject, looked up once and cached. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-entered" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/triggerhandler">{"TriggerHandler"}</Link>{" Entered"}</code> | Raised with the other collider when something enters the trigger. |
| <Link id="m-exited" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/triggerhandler">{"TriggerHandler"}</Link>{" Exited"}</code> | Raised with the other collider when something leaves the trigger. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes every listener from both events. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> | Raises `Entered` with the collider that entered. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> | Raises `Exited` with the collider that left. |

</details>

## Used in

Members of other types that take, return or hold a `TriggerShape`:

[`EditableSlot.addTrigger`](/mod/game-api/types/alta-customization/editableslot#m-addtrigger), [`RiverCollision.prefab`](/mod/game-api/types/alta-world-generation/rivercollision#m-prefab), [`RiverCollision.spawned`](/mod/game-api/types/alta-world-generation/rivercollision#m-spawned), [`Interactor.trigger`](/mod/game-api/types/global-i-l/interactor#m-trigger), [`PaintBrush.dippingShape`](/mod/game-api/types/global-p/paintbrush#m-dippingshape), [`TeleporterPlatform.trigger`](/mod/game-api/types/global-t-x/teleporterplatform#m-trigger).
