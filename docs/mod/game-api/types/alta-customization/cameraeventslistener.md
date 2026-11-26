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
| <Link id="m-ctor" /><code>{"CameraEventsListener()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpostrender" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onPostRender"}</code> | <span className="api-desc">Event fired after a matching render.</span> |
| <Link id="m-onprerender" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onPreRender"}</code> | <span className="api-desc">Event fired before a matching render.</span> |
| <Link id="m-targetevents" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" targetEvents"}</code> | <span className="api-desc">Which hand camera events trigger it.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Not headless: hooks the static `HandCamera` render events.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the render events.</span> |
| <Link id="m-post" /><code>{"private void Post("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Fires `onPostRender` if the camera event is one of the targets.</span> |
| <Link id="m-pre" /><code>{"private void Pre("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Fires `onPreRender` if the camera event is one of the targets.</span> |

</details>
