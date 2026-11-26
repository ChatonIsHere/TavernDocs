---
title: "MainMenuControllerSpawner"
description: "Main menu scene component that spawns the menu player controller at a spawn point, initializes it in the scene's LocalNetworkScene and sets up the VR..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuControllerSpawner

A **class** in `Root.Township`, no namespace.

Main menu scene component that spawns the menu player controller at a spawn point, initializes it in the scene's `LocalNetworkScene` and sets up the VR platform for it. Client.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuControllerSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islocomotiondisabled" /><code>{"private bool isLocomotionDisabled"}</code> | If true, spawns the locomotionless controller instead of the moving one. |
| <Link id="m-menucontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" menuController"}</code> | The spawned controller. |
| <Link id="m-menucontrollerspawnpoint" /><code>{"private Transform menuControllerSpawnPoint"}</code> | Where the controller is placed and which way it faces. |
| <Link id="m-scene" /><code>{"private "}<Link to="/game-api/types/global-i-l/localnetworkscene">{"LocalNetworkScene"}</Link>{" scene"}</code> | The local network scene the controller's entity joins. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawnmenucontroller" /><code>{"private IEnumerator SpawnMenuController() (iterator)"}</code> | Coroutine: spawns the locomotionless or normal menu controller, places it, initializes it as server, fades in, sets up the platform and controls, then repositions it. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Starts `SpawnMenuController`. |

</details>
