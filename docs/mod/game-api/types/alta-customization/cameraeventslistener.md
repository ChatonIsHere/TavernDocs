---
title: "CameraEventsListener"
description: "Fires inspector events before and after any hand camera renders for the chosen event types (idle and photo by default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraEventsListener

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Fires inspector events before and after any hand camera renders for the chosen event types (idle and photo by default). Not used when headless.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraEventsListener()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpostrender" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onPostRender"}</code> | Event fired after a matching render. |
| <Link id="m-onprerender" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onPreRender"}</code> | Event fired before a matching render. |
| <Link id="m-targetevents" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" targetEvents"}</code> | Which hand camera events trigger it. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Not headless: hooks the static `HandCamera` render events. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the render events. |
| <Link id="m-post" /><code>{"private void Post("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Fires `onPostRender` if the camera event is one of the targets. |
| <Link id="m-pre" /><code>{"private void Pre("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Fires `onPreRender` if the camera event is one of the targets. |

</details>
