---
title: "ExposurePlayerScreenFader"
description: "Client screen fader that fades to black by lowering post-process exposure, and shortens the camera far plane while fully dark."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExposurePlayerScreenFader

A **class** in `Root.Township`, the global namespace.

Client screen fader that fades to black by lowering post-process exposure, and shortens the camera far plane while fully dark. Also does camera-flash effects.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PlayerScreenFader`](/mod/game-api/types/global-p/playerscreenfader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExposurePlayerScreenFader()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blackfadeexposure" /><code>{"private const float BlackFadeExposure"}</code> | <span className="api-desc">Exposure used for full black, -50.</span> |
| <Link id="m-fadedfardistance" /><code>{"private const float FadedFarDistance"}</code> | <span className="api-desc">Far clip distance while fully faded, 1.</span> |
| <Link id="m-fullfardistance" /><code>{"private float fullFarDistance"}</code> | <span className="api-desc">Normal far clip distance.</span> |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> | <span className="api-desc">Post-process controller that owns exposure.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-flashfadeout" /><code>{"void FlashFadeOut(float flashDuration, float flashFadeoutDuration, float flashExposure)"}</code> | <span className="api-desc">Cancels the current fade and plays a flash: jump to an exposure, hold, then fade back to normal.</span> |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController postProcessController)"}</code> | <span className="api-desc">Receives the post-process controller from VContainer.</span> |
| <Link id="m-lerpfadescreen" /><code>{"protected override IEnumerator LerpFadeScreen(float duration, float alphaStart, float alphaEnd) (iterator)"}</code> | <span className="api-desc">Fades by lerping exposure towards -50 times the end alpha.</span> |
| <Link id="m-set" /><code>{"protected override void Set(float alpha)"}</code> | <span className="api-desc">Sets the fade at once as exposure `alpha` times -50.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Remembers the camera's normal far clip distance.</span> |
| <Link id="m-delayflash" /><code>{"private IEnumerator DelayFlash(float flashDuration, float flashFadeoutDuration, float flashExposure) (iterator)"}</code> | <span className="api-desc">Sets the flash exposure, holds it, then fades back.</span> |
| <Link id="m-lerpexposure" /><code>{"private IEnumerator LerpExposure(float duration, float alphaStart, float alphaEnd, float exposure) (iterator)"}</code> | <span className="api-desc">Coroutine that moves exposure between fade levels over a duration.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from the post-process controller's `ValuesChanged`, though it subscribed to `ValuesReset`.</span> |
| <Link id="m-ondestroybyscene" /><code>{"private void OnDestroyByScene("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Unsubscribes and stops the current fade.</span> |
| <Link id="m-onpostprocessvaluesreset" /><code>{"private void OnPostProcessValuesReset()"}</code> | <span className="api-desc">Reapplies a locked fade and sets the far clip to match the current exposure.</span> |
| <Link id="m-setexposure" /><code>{"private void SetExposure(float targetExposure)"}</code> | <span className="api-desc">Sets exposure, switching the far clip plane when crossing full dark.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Off headless servers, hooks the destroy and post-process reset events and applies the current state.</span> |

</details>
