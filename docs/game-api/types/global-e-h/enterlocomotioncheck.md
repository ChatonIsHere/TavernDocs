---
title: "EnterLocomotionCheck"
description: "Locomotion modifier check that runs a list of actions when a smooth-locomotion player enters or leaves its area, and can block teleporting in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnterLocomotionCheck

A **class** in `Root.Township`, no namespace.

Locomotion modifier check that runs a list of actions when a smooth-locomotion player enters or leaves its area, and can block teleporting in.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`LocomotionModifierCheck`](/game-api/types/global-i-l/locomotionmodifiercheck)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EnterLocomotionCheck()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotionmodifieraction">{"LocomotionModifierAction"}</Link>{"[] actions"}</code> | Actions to begin on enter and finish on leave. |
| <Link id="m-canteleportin" /><code>{"private bool canTeleportIn"}</code> | Whether players may teleport into the area. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enter" /><code>{"override void Enter("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, Bounds bounds)"}</code> | Begins every action on the player. |
| <Link id="m-isvalidteleportationposition" /><code>{"override bool IsValidTeleportationPosition(Vector3 position, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Bounds bounds)"}</code> | Returns `canTeleportIn`. |
| <Link id="m-leave" /><code>{"override void Leave("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, Bounds bounds)"}</code> | Finishes every action on the player. |
