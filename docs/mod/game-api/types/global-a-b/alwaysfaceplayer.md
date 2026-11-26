---
title: "AlwaysFacePlayer"
description: "Client component that keeps an object turned towards the local player's head, smoothed, through a shared budgeted late-update module."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AlwaysFacePlayer

A **class** in `Root.Township`, the global namespace.

Client component that keeps an object turned towards the local player's head, smoothed, through a shared budgeted late-update module. Skips itself on a headless server.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AlwaysFacePlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultlocal" /><code>{"private Vector3 defaultLocal"}</code> | <span className="api-desc">Local position captured in `Awake`, restored every update.</span> |
| <Link id="m-interpolation" /><code>{"private float interpolation"}</code> | <span className="api-desc">Lerp factor per update towards the target rotation (0.5 by default).</span> |
| <Link id="m-oldrotation" /><code>{"private Quaternion oldRotation"}</code> | <span className="api-desc">Rotation from the previous update, the start of the next lerp.</span> |
| <Link id="m-rotationoffset" /><code>{"private Quaternion rotationOffset"}</code> | <span className="api-desc">Extra rotation applied after looking at the player.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered update method.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared budgeted module ("Look At Player", late update) that all instances register on.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores the starting local position and rotation.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Meant to stop the rotation update, but only deregisters when headless, so on a client the update probably keeps running after disable.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Client: snaps to face the current player and registers `UpdateRotation` on the budgeted module.</span> |
| <Link id="m-positionandgetrotation" /><code>{"private Quaternion PositionAndGetRotation("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Resets the local position to its default and returns a rotation looking at the player's `HeadFollow`, with `rotationOffset` applied.</span> |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | <span className="api-desc">Lerps from the last rotation towards facing the current player by `interpolation`.</span> |

</details>
