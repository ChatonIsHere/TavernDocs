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
| <Link id="m-ctor" /><code>{"FallbackCamera()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localcamera" /><code>{"private Camera localCamera"}</code> | <span className="api-desc">The camera component this object turns on and off.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/fallbackcamera">{"FallbackCamera"}</Link>{" Create()"}</code> | <span className="api-desc">Returns the existing instance or makes a new `FallbackCamera` GameObject with its camera, kept across scene loads.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createcamera" /><code>{"private static Camera CreateCamera(GameObject gameObject)"}</code> | <span className="api-desc">Adds a disabled camera that renders nothing (culling mask 0), clears to black and sits at depth -100.</span> |
| <Link id="m-oncurrentplayercontrollerchanged" /><code>{"private void OnCurrentPlayerControllerChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Handler for `PlayerController.CurrentPlayerChanged`; calls `UpdateCamera`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Subscribes to `PlayerController.CurrentPlayerChanged`.</span> |
| <Link id="m-updatecamera" /><code>{"private void UpdateCamera()"}</code> | <span className="api-desc">Enables the camera only while `PlayerController.Current` is null, logging when that changes.</span> |

</details>
