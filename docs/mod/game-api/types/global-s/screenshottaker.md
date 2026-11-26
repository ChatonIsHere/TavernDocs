---
title: "ScreenshotTaker"
description: "Static helper that renders the local player's camera at 4x screen size and saves it as an image in the Screenshots storage folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScreenshotTaker

A **class** in `Root.Township`, the global namespace.

Static helper that renders the local player's camera at 4x screen size and saves it as an image in the Screenshots storage folder. Client only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested types** [`ImageFormat`](/mod/game-api/types/global-s/screenshottaker-imageformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScreenshotTaker()"}</code> | <span className="api-desc">Creates a `ScreenshotTaker` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-imageformat" /><code>{"static "}<Link to="/mod/game-api/types/global-s/screenshottaker-imageformat">{"ScreenshotTaker.ImageFormat"}</Link>{" imageFormat"}</code> | <span className="api-desc">Image format to save in. Reset to PNG by `TakeScreenShot`.</span> |
| <Link id="m-lastscreenshot" /><code>{"static string lastScreenshot"}</code> | <span className="api-desc">Path of the last screenshot file.</span> |
| <Link id="m-mycamera" /><code>{"static Camera myCamera"}</code> | <span className="api-desc">Camera to render. Set to the local player's camera on each shot.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istransparent" /><code>{"private static bool isTransparent"}</code> | <span className="api-desc">Captures with an alpha channel. Always false here.</span> |
| <Link id="m-lasttime" /><code>{"private static float lastTime"}</code> | <span className="api-desc">Real time of the last screenshot, for the 10 second cooldown.</span> |
| <Link id="m-overridename" /><code>{"private static string overrideName"}</code> | <span className="api-desc">Text put into the file name. Empty by default.</span> |
| <Link id="m-path" /><code>{"private static string path"}</code> | <span className="api-desc">Folder screenshots are saved to.</span> |
| <Link id="m-resheight" /><code>{"private static int resHeight"}</code> | <span className="api-desc">Capture height: screen height times 4.</span> |
| <Link id="m-reswidth" /><code>{"private static int resWidth"}</code> | <span className="api-desc">Capture width: screen width times 4.</span> |
| <Link id="m-scale" /><code>{"private static int scale"}</code> | <span className="api-desc">Extra multiplier on the capture size. Always 1.</span> |
| <Link id="m-takehiresshot" /><code>{"private static bool takeHiResShot"}</code> | <span className="api-desc">Flag set by `TakeHiResShot` and cleared after a shot.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-screenshotname" /><code>{"static string ScreenShotName(int width, int height)"}</code> | <span className="api-desc">Builds the file path from folder, override name, size, date and format, and stores it in `lastScreenshot`.</span> |
| <Link id="m-takehiresshot-2" /><code>{"static void TakeHiResShot()"}</code> | <span className="api-desc">Sets the `takeHiResShot` flag. Nothing in this class reads it.</span> |
| <Link id="m-takescreenshot" /><code>{"static void TakeScreenShot()"}</code> | <span className="api-desc">Takes a screenshot from the local player's camera, at most once every 10 seconds.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-carryoutshot" /><code>{"private static void CarryOutShot()"}</code> | <span className="api-desc">Renders the camera into a texture, encodes it as PNG, JPG or TGA, writes the file and opens it.</span> |

</details>
