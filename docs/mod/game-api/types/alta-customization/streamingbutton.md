---
title: "StreamingButton"
description: "Hand camera button whose light blinks while the camera is streaming."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamingButton

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Hand camera button whose light blinks while the camera is streaming. Client only.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CameraButton`](/mod/game-api/types/alta-customization/camerabutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamingButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emission" /><code>{"private static readonly int _Emission"}</code> | <span className="api-desc">Shader property ID for `_Emission`.</span> |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | <span className="api-desc">Light colour for the on half of a blink.</span> |
| <Link id="m-idlecolor" /><code>{"private Color idleColor"}</code> | <span className="api-desc">Light colour when not streaming, and for the off half of a blink.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the light is in its on state.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The light's own material copy.</span> |
| <Link id="m-nextchange" /><code>{"private float nextChange"}</code> | <span className="api-desc">Real time at which the light next flips.</span> |
| <Link id="m-pip" /><code>{"private Renderer pip"}</code> | <span className="api-desc">The renderer of the light.</span> |
| <Link id="m-piptime" /><code>{"private float pipTime"}</code> | <span className="api-desc">Seconds between blinks.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The registered blink update, or null when not streaming.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Client: makes a material copy for the light and sets it to the idle colour.</span> |
| <Link id="m-updatesettings" /><code>{"protected override void UpdateSettings("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera)"}</code> | <span className="api-desc">Starts the blinking when the camera starts streaming and stops it, back to idle, when it stops.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatepip" /><code>{"private void UpdatePip()"}</code> | <span className="api-desc">Flips the light between active and idle colours every `pipTime` seconds.</span> |

</details>
