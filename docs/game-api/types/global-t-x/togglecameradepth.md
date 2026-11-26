---
title: "ToggleCameraDepth"
description: "A debug component on a camera that swaps its depth and render texture to alternate values when a key is pressed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleCameraDepth

A **class** in `Root.Township`, no namespace.

A debug component on a camera that swaps its depth and render texture to alternate values when a key is pressed. The last one to wake is `Instance`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleCameraDepth()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alternatedepth" /><code>{"private float alternateDepth"}</code> | Camera depth used while toggled. |
| <Link id="m-alternatetexture" /><code>{"private RenderTexture alternateTexture"}</code> | Render texture used while toggled. |
| <Link id="m-cameratotoggle" /><code>{"private Camera cameraToToggle"}</code> | The camera on this object. |
| <Link id="m-initialdepth" /><code>{"private float initialDepth"}</code> | Camera depth at `Awake`, restored when toggled back. |
| <Link id="m-initialtexture" /><code>{"private RenderTexture initialTexture"}</code> | Target texture at `Awake`, restored when toggled back. |
| <Link id="m-istoggled" /><code>{"private bool isToggled"}</code> | Whether the alternate settings are in use. |
| <Link id="m-togglekey" /><code>{"private KeyCode toggleKey"}</code> | Keyboard key that calls `Toggle`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-t-x/togglecameradepth">{"ToggleCameraDepth"}</Link>{" Instance { get; private set; }"}</code> | The most recently woken `ToggleCameraDepth`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | Swaps the camera between its starting depth and texture and the alternate ones. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance` and records the camera's starting depth and target texture. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Calls `Toggle` when `toggleKey` is pressed. |

</details>
