---
title: "HandTargetHandler"
description: "class HandTargetHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandTargetHandler

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandTargetHandler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultsave" /><code>{"private TransformSave defaultSave"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-targetname" /><code>{"private string targetName"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handtarget-2" /><code>{"Transform HandTarget { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assigntarget" /><code>{"private void AssignTarget(Transform newTarget)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-regeneratehandtarget" /><code>{"private void RegenerateHandTarget()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandTargetHandler`:

[`ArmController.ghostHand`](/game-api/types/alta-player/armcontroller#m-ghosthand), [`Hand.ikHandTarget`](/game-api/types/alta-player/hand#m-ikhandtarget), [`CharacterIKController.leftHandTarget`](/game-api/types/global-c-d/characterikcontroller#m-lefthandtarget), [`CharacterIKController.rightHandTarget`](/game-api/types/global-c-d/characterikcontroller#m-righthandtarget).
