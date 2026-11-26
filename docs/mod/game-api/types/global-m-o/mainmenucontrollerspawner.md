---
title: "MainMenuControllerSpawner"
description: "Main menu scene component that spawns the menu player controller at a spawn point, initializes it in the scene's LocalNetworkScene and sets up the VR..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuControllerSpawner

A **class** in `Root.Township`, the global namespace.

Main menu scene component that spawns the menu player controller at a spawn point, initializes it in the scene's `LocalNetworkScene` and sets up the VR platform for it. Client.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuControllerSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islocomotiondisabled" /><code>{"private bool isLocomotionDisabled"}</code> | <span className="api-desc">If true, spawns the locomotionless controller instead of the moving one.</span> |
| <Link id="m-menucontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" menuController"}</code> | <span className="api-desc">The spawned controller.</span> |
| <Link id="m-menucontrollerspawnpoint" /><code>{"private Transform menuControllerSpawnPoint"}</code> | <span className="api-desc">Where the controller is placed and which way it faces.</span> |
| <Link id="m-scene" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/localnetworkscene">{"LocalNetworkScene"}</Link>{" scene"}</code> | <span className="api-desc">The local network scene the controller's entity joins.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawnmenucontroller" /><code>{"private IEnumerator SpawnMenuController() (iterator)"}</code> | <span className="api-desc">Coroutine: spawns the locomotionless or normal menu controller, places it, initializes it as server, fades in, sets up the platform and controls, then repositions it.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Starts `SpawnMenuController`.</span> |

</details>
