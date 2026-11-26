---
title: "TimerButton"
description: "Hand camera button that shows the self-timer value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimerButton

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Hand camera button that shows the self-timer value.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CameraButton`](/mod/game-api/types/alta-customization/camerabutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptywhenzero" /><code>{"private bool emptyWhenZero"}</code> | <span className="api-desc">Hide the number when the timer is 0.</span> |
| <Link id="m-textui" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textUI"}</code> | <span className="api-desc">The text that shows the timer.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatesettings" /><code>{"protected override void UpdateSettings("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera)"}</code> | <span className="api-desc">Shows the camera's current timer as two digits, or nothing when it is 0 and `emptyWhenZero` is set.</span> |
