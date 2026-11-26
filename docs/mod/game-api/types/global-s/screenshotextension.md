---
title: "ScreenShotExtension"
description: "Controller extension that takes a screenshot when the take screenshot action starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScreenShotExtension

A **class** in `Root.Township`, the global namespace.

Controller extension that takes a screenshot when the take screenshot action starts. Client only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScreenShotExtension()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Disables its update and hooks the `TakeScreenShot` controller action.</span> |
| <Link id="m-takescreenshot" /><code>{"private void TakeScreenShot("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Calls `ScreenshotTaker.TakeScreenShot`.</span> |

</details>
