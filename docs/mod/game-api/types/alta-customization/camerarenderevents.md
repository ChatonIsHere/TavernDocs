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
| <Link id="m-ctor" /><code>{"CameraRenderEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Events

<details className="api-private">
<summary>2 private and internal events</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpostrender" /><code>{"private event Action onPostRender"}</code> | <span className="api-desc">Actions run after the camera renders.</span> |
| <Link id="m-onprecull" /><code>{"private event Action onPreCull"}</code> | <span className="api-desc">Actions run before the camera culls.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcamera" /><code>{"static void AddCamera(Camera camera, Action onPreCull, Action onPostRender)"}</code> | <span className="api-desc">Adds or gets the component on a camera and subscribes the two actions.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpostrender-2" /><code>{"private void OnPostRender()"}</code> | <span className="api-desc">Unity callback; raises `onPostRender`.</span> |
| <Link id="m-onprecull-2" /><code>{"private void OnPreCull()"}</code> | <span className="api-desc">Unity callback; raises `onPreCull`.</span> |

</details>
