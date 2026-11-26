---
title: "CameraRenderEvents"
description: "Component added to a Unity camera to forward its pre-cull and post-render callbacks to actions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraRenderEvents

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Component added to a Unity camera to forward its pre-cull and post-render callbacks to actions.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraRenderEvents()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Events

<details>
<summary>2 private and internal events</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpostrender" /><code>{"private event Action onPostRender"}</code> | Actions run after the camera renders. |
| <Link id="m-onprecull" /><code>{"private event Action onPreCull"}</code> | Actions run before the camera culls. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcamera" /><code>{"static void AddCamera(Camera camera, Action onPreCull, Action onPostRender)"}</code> | Adds or gets the component on a camera and subscribes the two actions. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpostrender-2" /><code>{"private void OnPostRender()"}</code> | Unity callback; raises `onPostRender`. |
| <Link id="m-onprecull-2" /><code>{"private void OnPreCull()"}</code> | Unity callback; raises `onPreCull`. |

</details>
