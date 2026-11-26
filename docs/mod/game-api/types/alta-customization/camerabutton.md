---
title: "CameraButton"
description: "Base for hand camera buttons that refresh when the camera's settings change."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraButton

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

Base for hand camera buttons that refresh when the camera's settings change. Does nothing on a headless server.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FocusButton`](/mod/game-api/types/alta-customization/focusbutton), [`StreamingButton`](/mod/game-api/types/alta-customization/streamingbutton), [`TimerButton`](/mod/game-api/types/alta-customization/timerbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CameraButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | <span className="api-desc">The hand camera this button controls.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Not headless: hooks the camera's settings event and refreshes once.</span> |
| <Link id="m-updatesettings" /><code>{"protected abstract void UpdateSettings("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera)"}</code> | <span className="api-desc">Subclasses refresh the button from the camera's settings.</span> |
