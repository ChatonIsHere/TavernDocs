---
title: "FallbackCamera"
description: "Black, lowest-depth camera that switches on whenever there is no current PlayerController, so the screen is not left without a camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FallbackCamera

A **class** in `Root.Township`, the global namespace.

Black, lowest-depth camera that switches on whenever there is no current `PlayerController`, so the screen is not left without a camera. A `DontDestroyOnLoad` singleton made by `PlayerController`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`SingletonBehaviour<FallbackCamera>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`FallbackCamera`](/mod/game-api/types/global-e-h/fallbackcamera)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FallbackCamera()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localcamera" /><code>{"private Camera localCamera"}</code> | The camera component this object turns on and off. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/fallbackcamera">{"FallbackCamera"}</Link>{" Create()"}</code> | Returns the existing instance or makes a new `FallbackCamera` GameObject with its camera, kept across scene loads. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createcamera" /><code>{"private static Camera CreateCamera(GameObject gameObject)"}</code> | Adds a disabled camera that renders nothing (culling mask 0), clears to black and sits at depth -100. |
| <Link id="m-oncurrentplayercontrollerchanged" /><code>{"private void OnCurrentPlayerControllerChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Handler for `PlayerController.CurrentPlayerChanged`; calls `UpdateCamera`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Subscribes to `PlayerController.CurrentPlayerChanged`. |
| <Link id="m-updatecamera" /><code>{"private void UpdateCamera()"}</code> | Enables the camera only while `PlayerController.Current` is null, logging when that changes. |

</details>
