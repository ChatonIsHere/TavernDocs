---
title: "LightHands"
description: "Debug light on a player's hand, toggled by the DebugLight controller action for users with the debug_features permission."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightHands

A **class** in `Root.Township`, the global namespace.

Debug light on a player's hand, toggled by the DebugLight controller action for users with the `debug_features` permission. Cycles off, strong and flickering.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension)
- **Nested types** [`Modes`](/mod/game-api/types/global-i-l/lighthands-modes)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightHands()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentmode" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lighthands-modes">{"LightHands.Modes"}</Link>{" currentMode"}</code> | <span className="api-desc">Off, strong or flickering.</span> |
| <Link id="m-fadetime" /><code>{"private float fadeTime"}</code> | <span className="api-desc">Seconds to fade in or out. 0.5.</span> |
| <Link id="m-flickcolors" /><code>{"private Gradient flickColors"}</code> | <span className="api-desc">Gradient used while flickering.</span> |
| <Link id="m-flickrange" /><code>{"private float flickRange"}</code> | <span className="api-desc">Light range while flickering.</span> |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> | <span className="api-desc">Light intensity while flickering.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">How fast the flicker colour drifts.</span> |
| <Link id="m-lightobject" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" lightObject"}</code> | <span className="api-desc">The hand light.</span> |
| <Link id="m-strongrange" /><code>{"private float strongRange"}</code> | <span className="api-desc">Light range in strong mode.</span> |
| <Link id="m-time" /><code>{"private float time"}</code> | <span className="api-desc">Fade progress in seconds.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isflickering" /><code>{"private bool IsFlickering { get; set; }"}</code> | <span className="api-desc">True in flickering mode, where `Update` changes the colour.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | <span className="api-desc">Moves to the next mode: off fades out, strong is white at long range, flickering is short range with shifting colours.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ampup" /><code>{"private IEnumerator AmpUp() (iterator)"}</code> | <span className="api-desc">Coroutine that turns the light on and fades its intensity up to 1.</span> |
| <Link id="m-buttonpressed" /><code>{"private void ButtonPressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Handles the DebugLight action. Does the same as `Toggle`.</span> |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut() (iterator)"}</code> | <span className="api-desc">Coroutine that fades the light out, then turns it and this component off.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Destroys the light along with this component.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Subscribes to the DebugLight action if the user has `debug_features`.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">While flickering, drifts the colour towards random gradient colours.</span> |

</details>
