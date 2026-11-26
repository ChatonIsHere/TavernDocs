---
title: "Screenshot"
description: "Takes a photo through a hand camera into a texture and saves it as a PNG (Windows) or to the gallery (Android)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Screenshot

A **class** in `Root.Township`, `Alta.Utilities`.

Takes a photo through a hand camera into a texture and saves it as a PNG (Windows) or to the gallery (Android). Client only.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Screenshot("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, int width = 1920, int height = 1080)"}</code> | <span className="api-desc">Creates a `Screenshot` from `camera`, `width` and `height`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code><Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" Camera { get; }"}</code> | <span className="api-desc">The hand camera the photo is taken through.</span> |
| <Link id="m-height" /><code>{"int Height { get; }"}</code> | <span className="api-desc">Photo height in pixels (1080 by default).</span> |
| <Link id="m-istransparent" /><code>{"bool IsTransparent { get; set; }"}</code> | <span className="api-desc">Meant to pick a transparent texture format, but the texture is made in the constructor, so setting it later has no effect.</span> |
| <Link id="m-lastphoto" /><code>{"Texture2D LastPhoto { get; }"}</code> | <span className="api-desc">Texture holding the last photo taken.</span> |
| <Link id="m-width" /><code>{"int Width { get; }"}</code> | <span className="api-desc">Photo width in pixels (1920 by default).</span> |
| <Link id="m-windowspath" /><code>{"string WindowsPath { get; }"}</code> | <span className="api-desc">Folder photos are saved to: the launcher's camera photos path, or a Screenshots folder in storage if that is empty or missing.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-take" /><code>{"bool Take()"}</code> | <span className="api-desc">Renders the camera into a temporary texture, reads it into `LastPhoto` and saves it. A blocked camera reads its current texture and skips saving.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-savephoto" /><code>{"private bool SavePhoto()"}</code> | <span className="api-desc">Saves `LastPhoto` the right way for the platform. Logs an error on other platforms.</span> |
| <Link id="m-savephotoandroid" /><code>{"private bool SavePhotoAndroid()"}</code> | <span className="api-desc">Saves the photo to the Android gallery, or to the Windows path in the editor.</span> |
| <Link id="m-savephotowindows" /><code>{"private bool SavePhotoWindows()"}</code> | <span className="api-desc">Writes the photo as a PNG to `WindowsPath`, making the folder if needed.</span> |
| <Link id="m-screenshotname" /><code>{"private string ScreenShotName()"}</code> | <span className="api-desc">File name with size and local date and time, like `screenshot_1920x1080_2024-01-01_12-00-00.png`.</span> |
| <Link id="m-windowspathwithscreenshotname" /><code>{"private string WindowsPathWithScreenShotName()"}</code> | <span className="api-desc">Full file path for a new photo.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Screenshot`:

<div className="api-used-in">

[`HandCamera.screenshot`](/mod/game-api/types/alta-customization/handcamera#m-screenshot).

</div>
