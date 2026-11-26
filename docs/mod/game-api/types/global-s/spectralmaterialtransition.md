---
title: "SpectralMaterialTransition"
description: "Client visual that swaps a set of renderers between their normal materials and a spectral (ghost) look, with materialize, fade and crack shader animations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpectralMaterialTransition

A **class** in `Root.Township`, the global namespace.

Client visual that swaps a set of renderers between their normal materials and a spectral (ghost) look, with materialize, fade and crack shader animations. Does nothing on headless servers.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`Animator`](/mod/game-api/types/global-s/spectralmaterialtransition-animator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpectralMaterialTransition()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animators" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spectralmaterialtransition-animator">{"SpectralMaterialTransition.Animator"}</Link>{"[] animators"}</code> | <span className="api-desc">One material animator per distinct original material.</span> |
| <Link id="m-crackduration" /><code>{"private float crackDuration"}</code> | <span className="api-desc">Seconds the crack animation takes.</span> |
| <Link id="m-crackprogress" /><code>{"private float crackProgress"}</code> | <span className="api-desc">Current crack progress, 0 to 1.</span> |
| <Link id="m-cracksupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" cracksUpdate"}</code> | <span className="api-desc">Handle of the crack update.</span> |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | <span className="api-desc">Seconds a fade takes.</span> |
| <Link id="m-fadeprogress" /><code>{"private float fadeProgress"}</code> | <span className="api-desc">Current fade-out progress, 0 to 1.</span> |
| <Link id="m-fadeupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fadeUpdate"}</code> | <span className="api-desc">Handle of the fade update.</span> |
| <Link id="m-isfading" /><code>{"private bool isFading"}</code> | <span className="api-desc">Set by `FadeOut`; stops further materialize changes.</span> |
| <Link id="m-isfadinginonstart" /><code>{"private bool isFadingInOnStart"}</code> | <span className="api-desc">Fades in when the object wakes.</span> |
| <Link id="m-ismaterialized" /><code>{"private bool isMaterialized"}</code> | <span className="api-desc">Whether the object is, or is heading to, its solid look. Also the starting state.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Backing field for `MaterializationProgress`.</span> |
| <Link id="m-spectralmaterial" /><code>{"private Material spectralMaterial"}</code> | <span className="api-desc">Base ghost material, copied per original with its texture as cutout.</span> |
| <Link id="m-targetrenderers" /><code>{"private Renderer[] targetRenderers"}</code> | <span className="api-desc">Renderers whose materials are swapped.</span> |
| <Link id="m-transitionduration" /><code>{"private float transitionDuration"}</code> | <span className="api-desc">Seconds a materialize or dematerialize takes.</span> |
| <Link id="m-transitionmaterial" /><code>{"private Material transitionMaterial"}</code> | <span className="api-desc">Base material used while animating, copied per original.</span> |
| <Link id="m-transitionupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" transitionUpdate"}</code> | <span className="api-desc">Handle of the materialize update.</span> |

</details>

## Properties

<details className="api-private">
<summary>8 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpmap" /><code>{"private static int _BumpMap { get; }"}</code> | <span className="api-desc">Shader ID of `_BumpMap`.</span> |
| <Link id="m-cracksprogress" /><code>{"private static int _CracksProgress { get; }"}</code> | <span className="api-desc">Shader ID of `_CracksProgress`.</span> |
| <Link id="m-cutout" /><code>{"private static int _Cutout { get; }"}</code> | <span className="api-desc">Shader ID of `_Cutout`.</span> |
| <Link id="m-fadeoutprogress" /><code>{"private static int _FadeOutProgress { get; }"}</code> | <span className="api-desc">Shader ID of `_FadeOutProgress`.</span> |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> | <span className="api-desc">Shader ID of `_MainTex`.</span> |
| <Link id="m-materializationprogress" /><code>{"private static int _MaterializationProgress { get; }"}</code> | <span className="api-desc">Shader ID of `_MaterializationProgress`.</span> |
| <Link id="m-normalmap" /><code>{"private static int _NormalMap { get; }"}</code> | <span className="api-desc">Shader ID of `_NormalMap`.</span> |
| <Link id="m-materializationprogress-2" /><code>{"private float MaterializationProgress { get; set; }"}</code> | <span className="api-desc">0 (spectral) to 1 (solid) progress; setting it pushes `_MaterializationProgress` to every transition material.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animatecracks" /><code>{"void AnimateCracks(bool isCrackingIn)"}</code> | <span className="api-desc">Animates the cracks effect in or out. Cracking out ends on the spectral look.</span> |
| <Link id="m-fadeout" /><code>{"void FadeOut()"}</code> | <span className="api-desc">Client: starts fading the object out. Blocks `SetMaterialized` from then on.</span> |
| <Link id="m-setmaterialized" /><code>{"void SetMaterialized(bool isMaterialized)"}</code> | <span className="api-desc">Client: animates towards the solid or spectral look, unless already there or fading out.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: groups renderers by material, builds a spectral and transition copy for each, and snaps to the starting state.</span> |
| <Link id="m-crackinupdate" /><code>{"private void CrackInUpdate()"}</code> | <span className="api-desc">Raises `_CracksProgress` to 1 over `crackDuration`.</span> |
| <Link id="m-crackoutupdate" /><code>{"private void CrackOutUpdate()"}</code> | <span className="api-desc">Lowers `_CracksProgress` to 0 then snaps renderers to spectral.</span> |
| <Link id="m-fadein" /><code>{"private void FadeIn()"}</code> | <span className="api-desc">Starts fading the object in from fully faded out.</span> |
| <Link id="m-fadeinupdate" /><code>{"private void FadeInUpdate()"}</code> | <span className="api-desc">Lowers `_FadeOutProgress` to 0 then snaps to the current state.</span> |
| <Link id="m-fadeoutupdate" /><code>{"private void FadeOutUpdate()"}</code> | <span className="api-desc">Raises `_FadeOutProgress` towards 1 over `fadeDuration`.</span> |
| <Link id="m-finishtransition" /><code>{"private void FinishTransition()"}</code> | <span className="api-desc">Stops the transition update and snaps renderers to the original or spectral material.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes all running updates.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: removes null entries from `targetRenderers`.</span> |
| <Link id="m-transitionupdate-2" /><code>{"private void TransitionUpdate()"}</code> | <span className="api-desc">Moves materialization progress towards the target each frame and finishes at the end.</span> |

</details>
