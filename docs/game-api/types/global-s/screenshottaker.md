---
title: "ScreenshotTaker"
description: "Static helper that renders the local player's camera at 4x screen size and saves it as an image in the Screenshots storage folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScreenshotTaker

A **class** in `Root.Township`, no namespace.

Static helper that renders the local player's camera at 4x screen size and saves it as an image in the Screenshots storage folder. Client only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested types** [`ImageFormat`](/game-api/types/global-s/screenshottaker-imageformat)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScreenshotTaker()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-imageformat" /><code>{"static "}<Link to="/game-api/types/global-s/screenshottaker-imageformat">{"ScreenshotTaker.ImageFormat"}</Link>{" imageFormat"}</code> | Image format to save in. Reset to PNG by `TakeScreenShot`. |
| <Link id="m-lastscreenshot" /><code>{"static string lastScreenshot"}</code> | Path of the last screenshot file. |
| <Link id="m-mycamera" /><code>{"static Camera myCamera"}</code> | Camera to render. Set to the local player's camera on each shot. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istransparent" /><code>{"private static bool isTransparent"}</code> | Captures with an alpha channel. Always false here. |
| <Link id="m-lasttime" /><code>{"private static float lastTime"}</code> | Real time of the last screenshot, for the 10 second cooldown. |
| <Link id="m-overridename" /><code>{"private static string overrideName"}</code> | Text put into the file name. Empty by default. |
| <Link id="m-path" /><code>{"private static string path"}</code> | Folder screenshots are saved to. |
| <Link id="m-resheight" /><code>{"private static int resHeight"}</code> | Capture height: screen height times 4. |
| <Link id="m-reswidth" /><code>{"private static int resWidth"}</code> | Capture width: screen width times 4. |
| <Link id="m-scale" /><code>{"private static int scale"}</code> | Extra multiplier on the capture size. Always 1. |
| <Link id="m-takehiresshot" /><code>{"private static bool takeHiResShot"}</code> | Flag set by `TakeHiResShot` and cleared after a shot. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-screenshotname" /><code>{"static string ScreenShotName(int width, int height)"}</code> | Builds the file path from folder, override name, size, date and format, and stores it in `lastScreenshot`. |
| <Link id="m-takehiresshot-2" /><code>{"static void TakeHiResShot()"}</code> | Sets the `takeHiResShot` flag. Nothing in this class reads it. |
| <Link id="m-takescreenshot" /><code>{"static void TakeScreenShot()"}</code> | Takes a screenshot from the local player's camera, at most once every 10 seconds. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-carryoutshot" /><code>{"private static void CarryOutShot()"}</code> | Renders the camera into a texture, encodes it as PNG, JPG or TGA, writes the file and opens it. |

</details>
