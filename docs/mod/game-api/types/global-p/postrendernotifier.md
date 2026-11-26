---
title: "PostRenderNotifier"
description: "Client: on cameras."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostRenderNotifier

A **class** in `Root.Township`, the global namespace.

Client: on cameras. Raises a static event once every active camera with this component has finished rendering for the frame.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostRenderNotifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameracount" /><code>{"private static int cameraCount"}</code> | Static count of cameras still to render this frame. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"Camera Camera { get; private set; }"}</code> | The camera on this object. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-renderfinished" /><code>{"static event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" RenderFinished"}</code> | Static event raised after the last counted camera renders. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores the camera on this object. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Counts this camera if it is active. |
| <Link id="m-onpostrender" /><code>{"private void OnPostRender()"}</code> | Counts this camera as done, and raises `RenderFinished` when all are done. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Resets the camera count for the frame. |

</details>
