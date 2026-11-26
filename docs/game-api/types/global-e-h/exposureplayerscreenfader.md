---
title: "ExposurePlayerScreenFader"
description: "Client screen fader that fades to black by lowering post-process exposure, and shortens the camera far plane while fully dark."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExposurePlayerScreenFader

A **class** in `Root.Township`, no namespace.

Client screen fader that fades to black by lowering post-process exposure, and shortens the camera far plane while fully dark. Also does camera-flash effects.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PlayerScreenFader`](/game-api/types/global-p/playerscreenfader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExposurePlayerScreenFader()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blackfadeexposure" /><code>{"private const float BlackFadeExposure"}</code> | Exposure used for full black, -50. |
| <Link id="m-fadedfardistance" /><code>{"private const float FadedFarDistance"}</code> | Far clip distance while fully faded, 1. |
| <Link id="m-fullfardistance" /><code>{"private float fullFarDistance"}</code> | Normal far clip distance. |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> | Post-process controller that owns exposure. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-flashfadeout" /><code>{"void FlashFadeOut(float flashDuration, float flashFadeoutDuration, float flashExposure)"}</code> | Cancels the current fade and plays a flash: jump to an exposure, hold, then fade back to normal. |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController postProcessController)"}</code> | Receives the post-process controller from VContainer. |
| <Link id="m-lerpfadescreen" /><code>{"protected override IEnumerator LerpFadeScreen(float duration, float alphaStart, float alphaEnd) (iterator)"}</code> | Fades by lerping exposure towards -50 times the end alpha. |
| <Link id="m-set" /><code>{"protected override void Set(float alpha)"}</code> | Sets the fade at once as exposure `alpha` times -50. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Remembers the camera's normal far clip distance. |
| <Link id="m-delayflash" /><code>{"private IEnumerator DelayFlash(float flashDuration, float flashFadeoutDuration, float flashExposure) (iterator)"}</code> | Sets the flash exposure, holds it, then fades back. |
| <Link id="m-lerpexposure" /><code>{"private IEnumerator LerpExposure(float duration, float alphaStart, float alphaEnd, float exposure) (iterator)"}</code> | Coroutine that moves exposure between fade levels over a duration. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unsubscribes from the post-process controller's `ValuesChanged`, though it subscribed to `ValuesReset`. |
| <Link id="m-ondestroybyscene" /><code>{"private void OnDestroyByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Unsubscribes and stops the current fade. |
| <Link id="m-onpostprocessvaluesreset" /><code>{"private void OnPostProcessValuesReset()"}</code> | Reapplies a locked fade and sets the far clip to match the current exposure. |
| <Link id="m-setexposure" /><code>{"private void SetExposure(float targetExposure)"}</code> | Sets exposure, switching the far clip plane when crossing full dark. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Off headless servers, hooks the destroy and post-process reset events and applies the current state. |

</details>
