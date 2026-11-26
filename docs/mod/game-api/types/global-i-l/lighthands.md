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
| <Link id="m-ctor" /><code>{"LightHands()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentmode" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lighthands-modes">{"LightHands.Modes"}</Link>{" currentMode"}</code> | Off, strong or flickering. |
| <Link id="m-fadetime" /><code>{"private float fadeTime"}</code> | Seconds to fade in or out. 0.5. |
| <Link id="m-flickcolors" /><code>{"private Gradient flickColors"}</code> | Gradient used while flickering. |
| <Link id="m-flickrange" /><code>{"private float flickRange"}</code> | Light range while flickering. |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> | Light intensity while flickering. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | How fast the flicker colour drifts. |
| <Link id="m-lightobject" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" lightObject"}</code> | The hand light. |
| <Link id="m-strongrange" /><code>{"private float strongRange"}</code> | Light range in strong mode. |
| <Link id="m-time" /><code>{"private float time"}</code> | Fade progress in seconds. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isflickering" /><code>{"private bool IsFlickering { get; set; }"}</code> | True in flickering mode, where `Update` changes the colour. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | Moves to the next mode: off fades out, strong is white at long range, flickering is short range with shifting colours. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ampup" /><code>{"private IEnumerator AmpUp() (iterator)"}</code> | Coroutine that turns the light on and fades its intensity up to 1. |
| <Link id="m-buttonpressed" /><code>{"private void ButtonPressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Handles the DebugLight action. Does the same as `Toggle`. |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut() (iterator)"}</code> | Coroutine that fades the light out, then turns it and this component off. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Destroys the light along with this component. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Subscribes to the DebugLight action if the user has `debug_features`. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | While flickering, drifts the colour towards random gradient colours. |

</details>
