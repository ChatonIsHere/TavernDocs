---
title: "LightHands"
description: "class LightHands in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightHands

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)
- **Nested types** [`Modes`](/game-api/types/global-i-l/lighthands-modes)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LightHands()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentmode" /><code>{"private "}<Link to="/game-api/types/global-i-l/lighthands-modes">{"LightHands.Modes"}</Link>{" currentMode"}</code> |
| <Link id="m-fadetime" /><code>{"private float fadeTime"}</code> |
| <Link id="m-flickcolors" /><code>{"private Gradient flickColors"}</code> |
| <Link id="m-flickrange" /><code>{"private float flickRange"}</code> |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |
| <Link id="m-lightobject" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" lightObject"}</code> |
| <Link id="m-strongrange" /><code>{"private float strongRange"}</code> |
| <Link id="m-time" /><code>{"private float time"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-isflickering" /><code>{"private bool IsFlickering { get; set; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ampup" /><code>{"private IEnumerator AmpUp() (iterator)"}</code> |
| <Link id="m-buttonpressed" /><code>{"private void ButtonPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut() (iterator)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>
