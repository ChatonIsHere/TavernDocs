---
title: "TriggerShape"
description: "Turns a trigger collider's enter and exit messages into C# events, so other scripts can listen without their own collider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerShape

A **class** in `Root.Township`, no namespace.

Turns a trigger collider's enter and exit messages into C# events, so other scripts can listen without their own collider.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`TriggerCapsule`](/game-api/types/global-t-x/triggercapsule), [`TriggerShapeEvent`](/game-api/types/global-t-x/triggershapeevent), [`TriggerSphere`](/game-api/types/global-t-x/triggersphere)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TriggerShape()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-thiscollider" /><code>{"private Collider thisCollider"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-thiscollider-2" /><code>{"Collider ThisCollider { get; }"}</code> | The collider on this GameObject, looked up once and cached. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-entered" /><code>{"event "}<Link to="/game-api/types/global-t-x/triggerhandler">{"TriggerHandler"}</Link>{" Entered"}</code> | Raised with the other collider when something enters the trigger. |
| <Link id="m-exited" /><code>{"event "}<Link to="/game-api/types/global-t-x/triggerhandler">{"TriggerHandler"}</Link>{" Exited"}</code> | Raised with the other collider when something leaves the trigger. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes every listener from both events. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TriggerShape`:

[`EditableSlot.addTrigger`](/game-api/types/alta-customization/editableslot#m-addtrigger), [`RiverCollision.prefab`](/game-api/types/alta-world-generation/rivercollision#m-prefab), [`RiverCollision.spawned`](/game-api/types/alta-world-generation/rivercollision#m-spawned), [`Interactor.trigger`](/game-api/types/global-i-l/interactor#m-trigger), [`PaintBrush.dippingShape`](/game-api/types/global-p/paintbrush#m-dippingshape), [`TeleporterPlatform.trigger`](/game-api/types/global-t-x/teleporterplatform#m-trigger).
