---
title: "StartupLoader"
description: "Startup scene component that sets up logging, runs the platform loaders, quits if any fail, then starts the scene loaders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StartupLoader

A **class** in `Root.Township`, the global namespace.

Startup scene component that sets up logging, runs the platform loaders, quits if any fail, then starts the scene loaders.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StartupLoader()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-platformloaders" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/platformloader">{"PlatformLoader"}</Link>{"> platformLoaders"}</code> | Platform setup steps that must all succeed. |
| <Link id="m-sceneloaders" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/loadscenes">{"LoadScenes"}</Link>{"[] sceneLoaders"}</code> | Scene loaders run after the platform loaders. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | Sets up logging, saves the game config, awaits all platform loaders (quitting on failure) and loads the scenes. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: removes null scene loaders. |

</details>
