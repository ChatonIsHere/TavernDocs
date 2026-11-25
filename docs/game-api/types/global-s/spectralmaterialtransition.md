---
title: "SpectralMaterialTransition"
description: "class SpectralMaterialTransition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpectralMaterialTransition

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`Animator`](/game-api/types/global-s/spectralmaterialtransition-animator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpectralMaterialTransition()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animators" /><code>{"private "}<Link to="/game-api/types/global-s/spectralmaterialtransition-animator">{"SpectralMaterialTransition.Animator"}</Link>{"[] animators"}</code> |
| <Link id="m-crackduration" /><code>{"private float crackDuration"}</code> |
| <Link id="m-crackprogress" /><code>{"private float crackProgress"}</code> |
| <Link id="m-cracksupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" cracksUpdate"}</code> |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> |
| <Link id="m-fadeprogress" /><code>{"private float fadeProgress"}</code> |
| <Link id="m-fadeupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fadeUpdate"}</code> |
| <Link id="m-isfading" /><code>{"private bool isFading"}</code> |
| <Link id="m-isfadinginonstart" /><code>{"private bool isFadingInOnStart"}</code> |
| <Link id="m-ismaterialized" /><code>{"private bool isMaterialized"}</code> |
| <Link id="m-progress" /><code>{"private float progress"}</code> |
| <Link id="m-spectralmaterial" /><code>{"private Material spectralMaterial"}</code> |
| <Link id="m-targetrenderers" /><code>{"private Renderer[] targetRenderers"}</code> |
| <Link id="m-transitionduration" /><code>{"private float transitionDuration"}</code> |
| <Link id="m-transitionmaterial" /><code>{"private Material transitionMaterial"}</code> |
| <Link id="m-transitionupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" transitionUpdate"}</code> |

</details>

## Properties

<details>
<summary>8 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-bumpmap" /><code>{"private static int _BumpMap { get; }"}</code> |
| <Link id="m-cracksprogress" /><code>{"private static int _CracksProgress { get; }"}</code> |
| <Link id="m-cutout" /><code>{"private static int _Cutout { get; }"}</code> |
| <Link id="m-fadeoutprogress" /><code>{"private static int _FadeOutProgress { get; }"}</code> |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> |
| <Link id="m-materializationprogress" /><code>{"private static int _MaterializationProgress { get; }"}</code> |
| <Link id="m-normalmap" /><code>{"private static int _NormalMap { get; }"}</code> |
| <Link id="m-materializationprogress-2" /><code>{"private float MaterializationProgress { get; set; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-animatecracks" /><code>{"void AnimateCracks(bool isCrackingIn)"}</code> |
| <Link id="m-fadeout" /><code>{"void FadeOut()"}</code> |
| <Link id="m-setmaterialized" /><code>{"void SetMaterialized(bool isMaterialized)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-crackinupdate" /><code>{"private void CrackInUpdate()"}</code> |
| <Link id="m-crackoutupdate" /><code>{"private void CrackOutUpdate()"}</code> |
| <Link id="m-fadein" /><code>{"private void FadeIn()"}</code> |
| <Link id="m-fadeinupdate" /><code>{"private void FadeInUpdate()"}</code> |
| <Link id="m-fadeoutupdate" /><code>{"private void FadeOutUpdate()"}</code> |
| <Link id="m-finishtransition" /><code>{"private void FinishTransition()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |
| <Link id="m-transitionupdate-2" /><code>{"private void TransitionUpdate()"}</code> |

</details>
