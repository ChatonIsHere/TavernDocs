---
title: "ExposurePlayerScreenFader"
description: "class ExposurePlayerScreenFader in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExposurePlayerScreenFader

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PlayerScreenFader`](/game-api/types/global-p/playerscreenfader)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ExposurePlayerScreenFader()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-blackfadeexposure" /><code>{"private const float BlackFadeExposure"}</code> |
| <Link id="m-fadedfardistance" /><code>{"private const float FadedFarDistance"}</code> |
| <Link id="m-fullfardistance" /><code>{"private float fullFarDistance"}</code> |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-flashfadeout" /><code>{"void FlashFadeOut(float flashDuration, float flashFadeoutDuration, float flashExposure)"}</code> |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController postProcessController)"}</code> |
| <Link id="m-lerpfadescreen" /><code>{"protected override IEnumerator LerpFadeScreen(float duration, float alphaStart, float alphaEnd) (iterator)"}</code> |
| <Link id="m-set" /><code>{"protected override void Set(float alpha)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-delayflash" /><code>{"private IEnumerator DelayFlash(float flashDuration, float flashFadeoutDuration, float flashExposure) (iterator)"}</code> |
| <Link id="m-lerpexposure" /><code>{"private IEnumerator LerpExposure(float duration, float alphaStart, float alphaEnd, float exposure) (iterator)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondestroybyscene" /><code>{"private void OnDestroyByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-onpostprocessvaluesreset" /><code>{"private void OnPostProcessValuesReset()"}</code> |
| <Link id="m-setexposure" /><code>{"private void SetExposure(float targetExposure)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>
