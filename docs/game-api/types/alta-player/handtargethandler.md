---
title: "HandTargetHandler"
description: "Holds the IK hand target transform for a hand and rebuilds it if something destroys it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandTargetHandler

A **class** in `Root.Township`, `Alta.Character`.

Holds the IK hand target transform for a hand and rebuilds it if something destroys it.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandTargetHandler()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultsave" /><code>{"private TransformSave defaultSave"}</code> | The target's starting transform and parent, reapplied to new targets. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The network entity this hand belongs to. |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> | The target transform set on the prefab. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-targetname" /><code>{"private string targetName"}</code> | Name given to a regenerated target. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handtarget-2" /><code>{"Transform HandTarget { get; private set; }"}</code> | The current IK hand target transform. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assigntarget" /><code>{"private void AssignTarget(Transform newTarget)"}</code> | Makes the transform the hand target, resets it to the default save and watches for it being destroyed. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Saves the target's starting transform and name, then assigns it. |
| <Link id="m-regeneratehandtarget" /><code>{"private void RegenerateHandTarget()"}</code> | Logs an error and makes a new empty target when the old one is destroyed while the entity is still alive. |

</details>

## Used in

Members of other types that take, return or hold a `HandTargetHandler`:

[`ArmController.ghostHand`](/game-api/types/alta-player/armcontroller#m-ghosthand), [`Hand.ikHandTarget`](/game-api/types/alta-player/hand#m-ikhandtarget), [`CharacterIKController.leftHandTarget`](/game-api/types/global-c-d/characterikcontroller#m-lefthandtarget), [`CharacterIKController.rightHandTarget`](/game-api/types/global-c-d/characterikcontroller#m-righthandtarget).
