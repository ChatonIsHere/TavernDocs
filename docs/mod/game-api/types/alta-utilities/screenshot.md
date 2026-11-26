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
| <Link id="m-ctor" /><code>{"Screenshot("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, int width = 1920, int height = 1080)"}</code> | Creates a `Screenshot` from `camera`, `width` and `height`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code><Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" Camera { get; }"}</code> | The hand camera the photo is taken through. |
| <Link id="m-height" /><code>{"int Height { get; }"}</code> | Photo height in pixels (1080 by default). |
| <Link id="m-istransparent" /><code>{"bool IsTransparent { get; set; }"}</code> | Meant to pick a transparent texture format, but the texture is made in the constructor, so setting it later has no effect. |
| <Link id="m-lastphoto" /><code>{"Texture2D LastPhoto { get; }"}</code> | Texture holding the last photo taken. |
| <Link id="m-width" /><code>{"int Width { get; }"}</code> | Photo width in pixels (1920 by default). |
| <Link id="m-windowspath" /><code>{"string WindowsPath { get; }"}</code> | Folder photos are saved to: the launcher's camera photos path, or a Screenshots folder in storage if that is empty or missing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-take" /><code>{"bool Take()"}</code> | Renders the camera into a temporary texture, reads it into `LastPhoto` and saves it. A blocked camera reads its current texture and skips saving. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-savephoto" /><code>{"private bool SavePhoto()"}</code> | Saves `LastPhoto` the right way for the platform. Logs an error on other platforms. |
| <Link id="m-savephotoandroid" /><code>{"private bool SavePhotoAndroid()"}</code> | Saves the photo to the Android gallery, or to the Windows path in the editor. |
| <Link id="m-savephotowindows" /><code>{"private bool SavePhotoWindows()"}</code> | Writes the photo as a PNG to `WindowsPath`, making the folder if needed. |
| <Link id="m-screenshotname" /><code>{"private string ScreenShotName()"}</code> | File name with size and local date and time, like `screenshot_1920x1080_2024-01-01_12-00-00.png`. |
| <Link id="m-windowspathwithscreenshotname" /><code>{"private string WindowsPathWithScreenShotName()"}</code> | Full file path for a new photo. |

</details>

## Used in

Members of other types that take, return or hold a `Screenshot`:

[`HandCamera.screenshot`](/mod/game-api/types/alta-customization/handcamera#m-screenshot).
