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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCameraStreamer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-plane" /><code>{"private Renderer plane"}</code> | <span className="api-desc">Renderer whose material shows the streamed texture.</span> |
| <Link id="m-streamercamera" /><code>{"private Camera streamerCamera"}</code> | <span className="api-desc">Camera enabled only while streaming.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startstreaming" /><code>{"void StartStreaming(RenderTexture renderTexture)"}</code> | <span className="api-desc">Puts the given render texture on the plane's material and turns the streamer camera on.</span> |
| <Link id="m-stopstreaming" /><code>{"void StopStreaming()"}</code> | <span className="api-desc">Clears the plane's texture and turns the streamer camera off.</span> |

## Used in

Members of other types that take, return or hold a `HandCameraStreamer`:

<div className="api-used-in">

[`HandyCameraManager.streamer`](/mod/game-api/types/alta-customization/handycameramanager#m-streamer), [`HandyCameraManager.streamerPrefab`](/mod/game-api/types/alta-customization/handycameramanager#m-streamerprefab).

</div>
