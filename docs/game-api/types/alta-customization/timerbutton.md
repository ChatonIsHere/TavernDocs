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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CameraButton`](/game-api/types/alta-customization/camerabutton)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimerButton()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptywhenzero" /><code>{"private bool emptyWhenZero"}</code> | Hide the number when the timer is 0. |
| <Link id="m-textui" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textUI"}</code> | The text that shows the timer. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatesettings" /><code>{"protected override void UpdateSettings("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera)"}</code> | Shows the camera's current timer as two digits, or nothing when it is 0 and `emptyWhenZero` is set. |
