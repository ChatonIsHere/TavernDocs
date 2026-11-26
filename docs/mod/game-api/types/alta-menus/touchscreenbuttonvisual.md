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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenButtonVisual()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"protected static readonly int _Alpha"}</code> | <span className="api-desc">Shader property ID for `_Alpha`.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allrenderers" /><code>{"private Renderer[] allRenderers"}</code> | <span className="api-desc">All renderers that get the button material.</span> |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | <span className="api-desc">The button this visual follows.</span> |
| <Link id="m-growroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" growRoutine"}</code> | <span className="api-desc">The running grow coroutine, if any.</span> |
| <Link id="m-labelrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" labelRenderer"}</code> | <span className="api-desc">Optional text renderer that shows the button's label.</span> |
| <Link id="m-mainrenderer" /><code>{"private Renderer mainRenderer"}</code> | <span className="api-desc">The main renderer whose material alpha changes.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">This button's own copy of the settings material.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/touchscreenbuttonvisualsettings">{"TouchScreenButtonVisualSettings"}</Link>{" settings"}</code> | <span className="api-desc">The button's current visual settings.</span> |
| <Link id="m-startingscale" /><code>{"private Vector3 startingScale"}</code> | <span className="api-desc">The button's local scale at `Awake`, restored after the grow animation.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setalpha" /><code>{"protected void SetAlpha(bool isPressed)"}</code> | <span className="api-desc">Sets the material's `_Alpha` to the pressed or idle value from the settings.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes a per-button material copy from the settings, applies it to all renderers, sets the label and subscribes to the button's events.</span> |
| <Link id="m-growbutton" /><code>{"private IEnumerator GrowButton() (iterator)"}</code> | <span className="api-desc">Coroutine that scales the button over `GrowDuration` using the settings' `GrowCurve`.</span> |
| <Link id="m-labelchanged" /><code>{"private void LabelChanged("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Copies the button's new label to the label renderer.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the material copy.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Resets the scale and sets the alpha back to idle.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: fills renderers from a `BasicTouchScreenButton` if missing and applies the settings' colour material.</span> |
| <Link id="m-pressed" /><code>{"private void Pressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">On press, sets pressed alpha and starts the grow animation.</span> |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">On release, sets idle alpha and resets the scale.</span> |
| <Link id="m-resetscale" /><code>{"private void ResetScale()"}</code> | <span className="api-desc">Stops the grow animation and restores the starting scale.</span> |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Rebuilds the material from the new settings and keeps the current alpha position between idle and pressed.</span> |
| <Link id="m-startgrow" /><code>{"private void StartGrow()"}</code> | <span className="api-desc">Restarts the grow coroutine if the component is active.</span> |

</details>
