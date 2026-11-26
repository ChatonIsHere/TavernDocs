---
title: "HandCameraStreamer"
description: "Client: shows the hand camera's live view on a plane through its own camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCameraStreamer

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Client: shows the hand camera's live view on a plane through its own camera. `HandyCameraManager.StartStreaming` spawns one from a prefab on first use.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandCameraStreamer()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-plane" /><code>{"private Renderer plane"}</code> | Renderer whose material shows the streamed texture. |
| <Link id="m-streamercamera" /><code>{"private Camera streamerCamera"}</code> | Camera enabled only while streaming. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startstreaming" /><code>{"void StartStreaming(RenderTexture renderTexture)"}</code> | Puts the given render texture on the plane's material and turns the streamer camera on. |
| <Link id="m-stopstreaming" /><code>{"void StopStreaming()"}</code> | Clears the plane's texture and turns the streamer camera off. |

## Used in

Members of other types that take, return or hold a `HandCameraStreamer`:

[`HandyCameraManager.streamer`](/game-api/types/alta-customization/handycameramanager#m-streamer), [`HandyCameraManager.streamerPrefab`](/game-api/types/alta-customization/handycameramanager#m-streamerprefab).
