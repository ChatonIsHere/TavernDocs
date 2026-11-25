---
title: "Screenshot"
description: "class Screenshot in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Screenshot

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Screenshot("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, int width = 1920, int height = 1080)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code><Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" Camera { get; }"}</code> |  |
| <Link id="m-height" /><code>{"int Height { get; }"}</code> |  |
| <Link id="m-istransparent" /><code>{"bool IsTransparent { get; set; }"}</code> |  |
| <Link id="m-lastphoto" /><code>{"Texture2D LastPhoto { get; }"}</code> |  |
| <Link id="m-width" /><code>{"int Width { get; }"}</code> |  |
| <Link id="m-windowspath" /><code>{"string WindowsPath { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-take" /><code>{"bool Take()"}</code> |  |
| <Link id="m-savephoto" /><code>{"private bool SavePhoto()"}</code> |  |
| <Link id="m-savephotoandroid" /><code>{"private bool SavePhotoAndroid()"}</code> |  |
| <Link id="m-savephotowindows" /><code>{"private bool SavePhotoWindows()"}</code> |  |
| <Link id="m-screenshotname" /><code>{"private string ScreenShotName()"}</code> |  |
| <Link id="m-windowspathwithscreenshotname" /><code>{"private string WindowsPathWithScreenShotName()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Screenshot`:

[`HandCamera.screenshot`](/game-api/types/alta-customization/handcamera#m-screenshot).
