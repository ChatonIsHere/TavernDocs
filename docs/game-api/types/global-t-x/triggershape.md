---
title: "TriggerShape"
description: "class TriggerShape in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerShape

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`TriggerCapsule`](/game-api/types/global-t-x/triggercapsule), [`TriggerShapeEvent`](/game-api/types/global-t-x/triggershapeevent), [`TriggerSphere`](/game-api/types/global-t-x/triggersphere)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerShape()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-thiscollider" /><code>{"private Collider thisCollider"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-thiscollider-2" /><code>{"Collider ThisCollider { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-entered" /><code>{"event "}<Link to="/game-api/types/global-t-x/triggerhandler">{"TriggerHandler"}</Link>{" Entered"}</code> |  |
| <Link id="m-exited" /><code>{"event "}<Link to="/game-api/types/global-t-x/triggerhandler">{"TriggerHandler"}</Link>{" Exited"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TriggerShape`:

[`EditableSlot.addTrigger`](/game-api/types/alta-customization/editableslot#m-addtrigger), [`RiverCollision.prefab`](/game-api/types/alta-world-generation/rivercollision#m-prefab), [`RiverCollision.spawned`](/game-api/types/alta-world-generation/rivercollision#m-spawned), [`Interactor.trigger`](/game-api/types/global-i-l/interactor#m-trigger), [`PaintBrush.dippingShape`](/game-api/types/global-p/paintbrush#m-dippingshape), [`TeleporterPlatform.trigger`](/game-api/types/global-t-x/teleporterplatform#m-trigger).
