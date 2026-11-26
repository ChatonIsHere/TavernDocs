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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandTargetHandler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultsave" /><code>{"private TransformSave defaultSave"}</code> | <span className="api-desc">The target's starting transform and parent, reapplied to new targets.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The network entity this hand belongs to.</span> |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> | <span className="api-desc">The target transform set on the prefab.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-targetname" /><code>{"private string targetName"}</code> | <span className="api-desc">Name given to a regenerated target.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handtarget-2" /><code>{"Transform HandTarget { get; private set; }"}</code> | <span className="api-desc">The current IK hand target transform.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assigntarget" /><code>{"private void AssignTarget(Transform newTarget)"}</code> | <span className="api-desc">Makes the transform the hand target, resets it to the default save and watches for it being destroyed.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Saves the target's starting transform and name, then assigns it.</span> |
| <Link id="m-regeneratehandtarget" /><code>{"private void RegenerateHandTarget()"}</code> | <span className="api-desc">Logs an error and makes a new empty target when the old one is destroyed while the entity is still alive.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandTargetHandler`:

<div className="api-used-in">

[`ArmController.ghostHand`](/mod/game-api/types/alta-player/armcontroller#m-ghosthand), [`Hand.ikHandTarget`](/mod/game-api/types/alta-player/hand#m-ikhandtarget), [`CharacterIKController.leftHandTarget`](/mod/game-api/types/global-c-d/characterikcontroller#m-lefthandtarget), [`CharacterIKController.rightHandTarget`](/mod/game-api/types/global-c-d/characterikcontroller#m-righthandtarget).

</div>
