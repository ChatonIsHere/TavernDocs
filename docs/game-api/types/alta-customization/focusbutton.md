---
title: "FocusButton"
description: "Hand camera button that shows the current focus mode of its FocusPuller as text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FocusButton

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Hand camera button that shows the current focus mode of its `FocusPuller` as text. Client only (does nothing on a headless server).

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CameraButton`](/game-api/types/alta-customization/camerabutton)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FocusButton()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-focuspuller" /><code>{"private "}<Link to="/game-api/types/alta-customization/focuspuller">{"FocusPuller"}</Link>{" focusPuller"}</code> | The focus puller whose mode is shown. |
| <Link id="m-modetext" /><code>{"private string[] modeText"}</code> | Label text for each `FocusPuller.FocusMode`, indexed by the enum value. |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | The text that shows the mode. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Client: subscribes to focus mode changes and shows the current mode. |
| <Link id="m-updatesettings" /><code>{"protected override void UpdateSettings("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera)"}</code> | Empty; the label follows the focus puller, not the camera settings. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfocusmodechanged" /><code>{"private void OnFocusModeChanged("}<Link to="/game-api/types/alta-customization/focuspuller-focusmode">{"FocusPuller.FocusMode"}</Link>{" currentFocus)"}</code> | Sets the label to the text for the new focus mode. |

</details>
