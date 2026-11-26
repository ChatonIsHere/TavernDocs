---
title: "AltaPxrManagerCameraController"
description: "Client component that points a Pico XR manager's EyeCamera property at Camera.main whenever the local player changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaPxrManagerCameraController

A **class** in `Root.Township`, no namespace.

Client component that points a Pico XR manager's `EyeCamera` property at `Camera.main` whenever the local player changes. Works by reflection so it doesn't need the Pico SDK types.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaPxrManagerCameraController()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eyecamerafieldinfo" /><code>{"private PropertyInfo eyeCameraFieldInfo"}</code> | Cached `PropertyInfo` for the manager's `EyeCamera` property. |
| <Link id="m-eyecamerafieldname" /><code>{"private const string EyeCameraFieldName"}</code> | Name of the property it sets on the manager: `EyeCamera`. |
| <Link id="m-pxrmanager" /><code>{"private MonoBehaviour pxrManager"}</code> | The Pico XR manager component, set in the inspector and typed only as `MonoBehaviour`. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cacheeyecamerafieldinfo" /><code>{"private void CacheEyeCameraFieldInfo()"}</code> | Looks up the `EyeCamera` property on the manager's type by reflection and caches it. Called from `Start`. |
| <Link id="m-onplayercontrollerchanged" /><code>{"private void OnPlayerControllerChanged("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Handler for `PlayerController.CurrentPlayerChanged`: sets the manager's eye camera to `Camera.main`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Caches the property, subscribes to player changes and applies once if a local player already exists. |

</details>
