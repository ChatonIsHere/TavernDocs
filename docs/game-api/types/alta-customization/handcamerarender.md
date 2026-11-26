---
title: "HandCameraRender"
description: "Handler for the static HandCamera.onPreRender and HandCamera.onPostRender events, given the camera that is rendering and the camera event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCameraRender

A **delegate** in `Root.Township`, `Alta.ScreenshotCamera`.

Handler for the static `HandCamera.onPreRender` and `HandCamera.onPostRender` events, given the camera that is rendering and the camera event.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCameraRender(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `HandCameraRender`:

[`HandCamera.onPostRender`](/game-api/types/alta-customization/handcamera#m-onpostrender), [`HandCamera.onPreRender`](/game-api/types/alta-customization/handcamera#m-onprerender).
