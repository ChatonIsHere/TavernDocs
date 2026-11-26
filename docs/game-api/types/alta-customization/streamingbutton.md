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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CameraButton`](/game-api/types/alta-customization/camerabutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamingButton()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emission" /><code>{"private static readonly int _Emission"}</code> | Shader property ID for `_Emission`. |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | Light colour for the on half of a blink. |
| <Link id="m-idlecolor" /><code>{"private Color idleColor"}</code> | Light colour when not streaming, and for the off half of a blink. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether the light is in its on state. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The light's own material copy. |
| <Link id="m-nextchange" /><code>{"private float nextChange"}</code> | Real time at which the light next flips. |
| <Link id="m-pip" /><code>{"private Renderer pip"}</code> | The renderer of the light. |
| <Link id="m-piptime" /><code>{"private float pipTime"}</code> | Seconds between blinks. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered blink update, or null when not streaming. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Client: makes a material copy for the light and sets it to the idle colour. |
| <Link id="m-updatesettings" /><code>{"protected override void UpdateSettings("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera)"}</code> | Starts the blinking when the camera starts streaming and stops it, back to idle, when it stops. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatepip" /><code>{"private void UpdatePip()"}</code> | Flips the light between active and idle colours every `pipTime` seconds. |

</details>
