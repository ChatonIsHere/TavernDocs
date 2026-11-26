---
title: "TouchScreenButtonVisual"
description: "Visual feedback for a touch screen button: sets its material and label from the button's TouchScreenButtonVisualSettings, changes alpha when pressed and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenButtonVisual

A **class** in `Root.Township`, `Alta.Meta.UI`.

Visual feedback for a touch screen button: sets its material and label from the button's `TouchScreenButtonVisualSettings`, changes alpha when pressed and plays a grow animation. Client UI.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TouchScreenButtonVisual()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"protected static readonly int _Alpha"}</code> | Shader property ID for `_Alpha`. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allrenderers" /><code>{"private Renderer[] allRenderers"}</code> | All renderers that get the button material. |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | The button this visual follows. |
| <Link id="m-growroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" growRoutine"}</code> | The running grow coroutine, if any. |
| <Link id="m-labelrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" labelRenderer"}</code> | Optional text renderer that shows the button's label. |
| <Link id="m-mainrenderer" /><code>{"private Renderer mainRenderer"}</code> | The main renderer whose material alpha changes. |
| <Link id="m-material" /><code>{"private Material material"}</code> | This button's own copy of the settings material. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-menus/touchscreenbuttonvisualsettings">{"TouchScreenButtonVisualSettings"}</Link>{" settings"}</code> | The button's current visual settings. |
| <Link id="m-startingscale" /><code>{"private Vector3 startingScale"}</code> | The button's local scale at `Awake`, restored after the grow animation. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setalpha" /><code>{"protected void SetAlpha(bool isPressed)"}</code> | Sets the material's `_Alpha` to the pressed or idle value from the settings. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes a per-button material copy from the settings, applies it to all renderers, sets the label and subscribes to the button's events. |
| <Link id="m-growbutton" /><code>{"private IEnumerator GrowButton() (iterator)"}</code> | Coroutine that scales the button over `GrowDuration` using the settings' `GrowCurve`. |
| <Link id="m-labelchanged" /><code>{"private void LabelChanged("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Copies the button's new label to the label renderer. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the material copy. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Resets the scale and sets the alpha back to idle. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills renderers from a `BasicTouchScreenButton` if missing and applies the settings' colour material. |
| <Link id="m-pressed" /><code>{"private void Pressed("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | On press, sets pressed alpha and starts the grow animation. |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | On release, sets idle alpha and resets the scale. |
| <Link id="m-resetscale" /><code>{"private void ResetScale()"}</code> | Stops the grow animation and restores the starting scale. |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Rebuilds the material from the new settings and keeps the current alpha position between idle and pressed. |
| <Link id="m-startgrow" /><code>{"private void StartGrow()"}</code> | Restarts the grow coroutine if the component is active. |

</details>
