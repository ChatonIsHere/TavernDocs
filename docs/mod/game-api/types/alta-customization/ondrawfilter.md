---
title: "OnDrawFilter"
description: "Base for hand camera filters that change things just before the camera renders and undo them after."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OnDrawFilter

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

Base for hand camera filters that change things just before the camera renders and undo them after. Subclasses implement `PreRender` and `PostRender`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`FilterAction`](/mod/game-api/types/alta-customization/filteraction)
- **Derived types** [`PlayerSwapMaterialFilter`](/mod/game-api/types/alta-customization/playerswapmaterialfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected OnDrawFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isprerendering" /><code>{"private bool isPreRendering"}</code> | <span className="api-desc">True between a matching pre-render and its post-render.</span> |
| <Link id="m-renderingcameras" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{"> renderingCameras"}</code> | <span className="api-desc">Hand cameras that currently use this filter.</span> |
| <Link id="m-targetevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" targetEvent"}</code> | <span className="api-desc">Which `HandCameraEvent` flags the filter applies to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | <span className="api-desc">Adds the camera to the rendering set and hooks the static `HandCamera` render events when the first camera joins.</span> |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | <span className="api-desc">Removes the camera and unhooks the render events when the last camera leaves.</span> |
| <Link id="m-postrender-2" /><code>{"protected abstract void PostRender()"}</code> | <span className="api-desc">The private overload calls the abstract `PostRender` after a matching render. Subclasses undo their pre-render changes there.</span> |
| <Link id="m-prerender-2" /><code>{"protected abstract void PreRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera)"}</code> | <span className="api-desc">The private overload calls the abstract `PreRender` before a matching camera event, or undoes a pending one if the event does not match. Subclasses apply their changes there.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postrender" /><code>{"private void PostRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">The private overload calls the abstract `PostRender` after a matching render. Subclasses undo their pre-render changes there.</span> |
| <Link id="m-prerender" /><code>{"private void PreRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">The private overload calls the abstract `PreRender` before a matching camera event, or undoes a pending one if the event does not match. Subclasses apply their changes there.</span> |

</details>
