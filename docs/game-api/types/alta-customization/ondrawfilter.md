---
title: "OnDrawFilter"
description: "abstract class OnDrawFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OnDrawFilter

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`FilterAction`](/game-api/types/alta-customization/filteraction)
- **Derived types** [`PlayerSwapMaterialFilter`](/game-api/types/alta-customization/playerswapmaterialfilter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected OnDrawFilter()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isprerendering" /><code>{"private bool isPreRendering"}</code> |
| <Link id="m-renderingcameras" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{"> renderingCameras"}</code> |
| <Link id="m-targetevent" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" targetEvent"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> |
| <Link id="m-postrender-2" /><code>{"protected abstract void PostRender()"}</code> |
| <Link id="m-prerender-2" /><code>{"protected abstract void PreRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-postrender" /><code>{"private void PostRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |
| <Link id="m-prerender" /><code>{"private void PreRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |

</details>
