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
| <Link id="m-ctor" /><code>{"SpectralMaterialTransition()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animators" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spectralmaterialtransition-animator">{"SpectralMaterialTransition.Animator"}</Link>{"[] animators"}</code> | One material animator per distinct original material. |
| <Link id="m-crackduration" /><code>{"private float crackDuration"}</code> | Seconds the crack animation takes. |
| <Link id="m-crackprogress" /><code>{"private float crackProgress"}</code> | Current crack progress, 0 to 1. |
| <Link id="m-cracksupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" cracksUpdate"}</code> | Handle of the crack update. |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | Seconds a fade takes. |
| <Link id="m-fadeprogress" /><code>{"private float fadeProgress"}</code> | Current fade-out progress, 0 to 1. |
| <Link id="m-fadeupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fadeUpdate"}</code> | Handle of the fade update. |
| <Link id="m-isfading" /><code>{"private bool isFading"}</code> | Set by `FadeOut`; stops further materialize changes. |
| <Link id="m-isfadinginonstart" /><code>{"private bool isFadingInOnStart"}</code> | Fades in when the object wakes. |
| <Link id="m-ismaterialized" /><code>{"private bool isMaterialized"}</code> | Whether the object is, or is heading to, its solid look. Also the starting state. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Backing field for `MaterializationProgress`. |
| <Link id="m-spectralmaterial" /><code>{"private Material spectralMaterial"}</code> | Base ghost material, copied per original with its texture as cutout. |
| <Link id="m-targetrenderers" /><code>{"private Renderer[] targetRenderers"}</code> | Renderers whose materials are swapped. |
| <Link id="m-transitionduration" /><code>{"private float transitionDuration"}</code> | Seconds a materialize or dematerialize takes. |
| <Link id="m-transitionmaterial" /><code>{"private Material transitionMaterial"}</code> | Base material used while animating, copied per original. |
| <Link id="m-transitionupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" transitionUpdate"}</code> | Handle of the materialize update. |

</details>

## Properties

<details>
<summary>8 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpmap" /><code>{"private static int _BumpMap { get; }"}</code> | Shader ID of `_BumpMap`. |
| <Link id="m-cracksprogress" /><code>{"private static int _CracksProgress { get; }"}</code> | Shader ID of `_CracksProgress`. |
| <Link id="m-cutout" /><code>{"private static int _Cutout { get; }"}</code> | Shader ID of `_Cutout`. |
| <Link id="m-fadeoutprogress" /><code>{"private static int _FadeOutProgress { get; }"}</code> | Shader ID of `_FadeOutProgress`. |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> | Shader ID of `_MainTex`. |
| <Link id="m-materializationprogress" /><code>{"private static int _MaterializationProgress { get; }"}</code> | Shader ID of `_MaterializationProgress`. |
| <Link id="m-normalmap" /><code>{"private static int _NormalMap { get; }"}</code> | Shader ID of `_NormalMap`. |
| <Link id="m-materializationprogress-2" /><code>{"private float MaterializationProgress { get; set; }"}</code> | 0 (spectral) to 1 (solid) progress; setting it pushes `_MaterializationProgress` to every transition material. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animatecracks" /><code>{"void AnimateCracks(bool isCrackingIn)"}</code> | Animates the cracks effect in or out. Cracking out ends on the spectral look. |
| <Link id="m-fadeout" /><code>{"void FadeOut()"}</code> | Client: starts fading the object out. Blocks `SetMaterialized` from then on. |
| <Link id="m-setmaterialized" /><code>{"void SetMaterialized(bool isMaterialized)"}</code> | Client: animates towards the solid or spectral look, unless already there or fading out. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: groups renderers by material, builds a spectral and transition copy for each, and snaps to the starting state. |
| <Link id="m-crackinupdate" /><code>{"private void CrackInUpdate()"}</code> | Raises `_CracksProgress` to 1 over `crackDuration`. |
| <Link id="m-crackoutupdate" /><code>{"private void CrackOutUpdate()"}</code> | Lowers `_CracksProgress` to 0 then snaps renderers to spectral. |
| <Link id="m-fadein" /><code>{"private void FadeIn()"}</code> | Starts fading the object in from fully faded out. |
| <Link id="m-fadeinupdate" /><code>{"private void FadeInUpdate()"}</code> | Lowers `_FadeOutProgress` to 0 then snaps to the current state. |
| <Link id="m-fadeoutupdate" /><code>{"private void FadeOutUpdate()"}</code> | Raises `_FadeOutProgress` towards 1 over `fadeDuration`. |
| <Link id="m-finishtransition" /><code>{"private void FinishTransition()"}</code> | Stops the transition update and snaps renderers to the original or spectral material. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes all running updates. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: removes null entries from `targetRenderers`. |
| <Link id="m-transitionupdate-2" /><code>{"private void TransitionUpdate()"}</code> | Moves materialization progress towards the target each frame and finishes at the end. |

</details>
