---
title: "AltaPxrManagerCameraController"
description: "Client component that points a Pico XR manager's EyeCamera property at Camera.main whenever the local player changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaPxrManagerCameraController

A **class** in `Root.Township`, the global namespace.

Client component that points a Pico XR manager's `EyeCamera` property at `Camera.main` whenever the local player changes. Works by reflection so it doesn't need the Pico SDK types.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaPxrManagerCameraController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eyecamerafieldinfo" /><code>{"private PropertyInfo eyeCameraFieldInfo"}</code> | <span className="api-desc">Cached `PropertyInfo` for the manager's `EyeCamera` property.</span> |
| <Link id="m-eyecamerafieldname" /><code>{"private const string EyeCameraFieldName"}</code> | <span className="api-desc">Name of the property it sets on the manager: `EyeCamera`.</span> |
| <Link id="m-pxrmanager" /><code>{"private MonoBehaviour pxrManager"}</code> | <span className="api-desc">The Pico XR manager component, set in the inspector and typed only as `MonoBehaviour`.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cacheeyecamerafieldinfo" /><code>{"private void CacheEyeCameraFieldInfo()"}</code> | <span className="api-desc">Looks up the `EyeCamera` property on the manager's type by reflection and caches it. Called from `Start`.</span> |
| <Link id="m-onplayercontrollerchanged" /><code>{"private void OnPlayerControllerChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Handler for `PlayerController.CurrentPlayerChanged`: sets the manager's eye camera to `Camera.main`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Caches the property, subscribes to player changes and applies once if a local player already exists.</span> |

</details>
