---
title: "AlwaysFacePlayer"
description: "Client component that keeps an object turned towards the local player's head, smoothed, through a shared budgeted late-update module."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AlwaysFacePlayer

A **class** in `Root.Township`, no namespace.

Client component that keeps an object turned towards the local player's head, smoothed, through a shared budgeted late-update module. Skips itself on a headless server.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AlwaysFacePlayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultlocal" /><code>{"private Vector3 defaultLocal"}</code> | Local position captured in `Awake`, restored every update. |
| <Link id="m-interpolation" /><code>{"private float interpolation"}</code> | Lerp factor per update towards the target rotation (0.5 by default). |
| <Link id="m-oldrotation" /><code>{"private Quaternion oldRotation"}</code> | Rotation from the previous update, the start of the next lerp. |
| <Link id="m-rotationoffset" /><code>{"private Quaternion rotationOffset"}</code> | Extra rotation applied after looking at the player. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered update method. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" updateModule"}</code> | Shared budgeted module ("Look At Player", late update) that all instances register on. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores the starting local position and rotation. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Meant to stop the rotation update, but only deregisters when headless, so on a client the update probably keeps running after disable. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Client: snaps to face the current player and registers `UpdateRotation` on the budgeted module. |
| <Link id="m-positionandgetrotation" /><code>{"private Quaternion PositionAndGetRotation("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Resets the local position to its default and returns a rotation looking at the player's `HeadFollow`, with `rotationOffset` applied. |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | Lerps from the last rotation towards facing the current player by `interpolation`. |

</details>
