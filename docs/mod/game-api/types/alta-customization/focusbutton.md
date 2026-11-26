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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CameraButton`](/mod/game-api/types/alta-customization/camerabutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FocusButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-focuspuller" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/focuspuller">{"FocusPuller"}</Link>{" focusPuller"}</code> | <span className="api-desc">The focus puller whose mode is shown.</span> |
| <Link id="m-modetext" /><code>{"private string[] modeText"}</code> | <span className="api-desc">Label text for each `FocusPuller.FocusMode`, indexed by the enum value.</span> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">The text that shows the mode.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Client: subscribes to focus mode changes and shows the current mode.</span> |
| <Link id="m-updatesettings" /><code>{"protected override void UpdateSettings("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera)"}</code> | <span className="api-desc">Empty; the label follows the focus puller, not the camera settings.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfocusmodechanged" /><code>{"private void OnFocusModeChanged("}<Link to="/mod/game-api/types/alta-customization/focuspuller-focusmode">{"FocusPuller.FocusMode"}</Link>{" currentFocus)"}</code> | <span className="api-desc">Sets the label to the text for the new focus mode.</span> |

</details>
