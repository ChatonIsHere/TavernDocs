---
title: "ToggleCameraDepth"
description: "A debug component on a camera that swaps its depth and render texture to alternate values when a key is pressed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleCameraDepth

A **class** in `Root.Township`, the global namespace.

A debug component on a camera that swaps its depth and render texture to alternate values when a key is pressed. The last one to wake is `Instance`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleCameraDepth()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alternatedepth" /><code>{"private float alternateDepth"}</code> | <span className="api-desc">Camera depth used while toggled.</span> |
| <Link id="m-alternatetexture" /><code>{"private RenderTexture alternateTexture"}</code> | <span className="api-desc">Render texture used while toggled.</span> |
| <Link id="m-cameratotoggle" /><code>{"private Camera cameraToToggle"}</code> | <span className="api-desc">The camera on this object.</span> |
| <Link id="m-initialdepth" /><code>{"private float initialDepth"}</code> | <span className="api-desc">Camera depth at `Awake`, restored when toggled back.</span> |
| <Link id="m-initialtexture" /><code>{"private RenderTexture initialTexture"}</code> | <span className="api-desc">Target texture at `Awake`, restored when toggled back.</span> |
| <Link id="m-istoggled" /><code>{"private bool isToggled"}</code> | <span className="api-desc">Whether the alternate settings are in use.</span> |
| <Link id="m-togglekey" /><code>{"private KeyCode toggleKey"}</code> | <span className="api-desc">Keyboard key that calls `Toggle`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/togglecameradepth">{"ToggleCameraDepth"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The most recently woken `ToggleCameraDepth`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | <span className="api-desc">Swaps the camera between its starting depth and texture and the alternate ones.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance` and records the camera's starting depth and target texture.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Calls `Toggle` when `toggleKey` is pressed.</span> |

</details>
