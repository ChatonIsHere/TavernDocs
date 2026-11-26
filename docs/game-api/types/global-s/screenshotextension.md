---
title: "ScreenShotExtension"
description: "Controller extension that takes a screenshot when the take screenshot action starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScreenShotExtension

A **class** in `Root.Township`, no namespace.

Controller extension that takes a screenshot when the take screenshot action starts. Client only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScreenShotExtension()"}</code> |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Disables its update and hooks the `TakeScreenShot` controller action. |
| <Link id="m-takescreenshot" /><code>{"private void TakeScreenShot("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Calls `ScreenshotTaker.TakeScreenShot`. |

</details>
