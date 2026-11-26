---
title: "RendererMaterializerHandler"
description: "Helper that fades a set of renderers in or out with a dissolve shader, then puts the original materials back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererMaterializerHandler

A **class** in `Root.Township`, no namespace.

Helper that fades a set of renderers in or out with a dissolve shader, then puts the original materials back. Used by `RendererMaterializer`, `DockedDissolver` and `StewManager`; client visuals.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererMaterializerHandler(Shader shader, Texture dissolveTexture)"}</code> | Creates a `RendererMaterializerHandler` from `shader` and `dissolveTexture`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allrenderers" /><code>{"private List<Renderer> allRenderers"}</code> | The renderers being animated. |
| <Link id="m-colorshadervariable" /><code>{"private static readonly int ColorShaderVariable"}</code> | Shader id of `_Color`. |
| <Link id="m-coroutinebehaviour" /><code>{"private MonoBehaviour coroutineBehaviour"}</code> | Behaviour the animation coroutines run on. |
| <Link id="m-dissolveshadervariable" /><code>{"private static readonly int DissolveShaderVariable"}</code> | Shader id of `_Dissolve`, the dissolve noise texture. |
| <Link id="m-emissioncolorshadervariable" /><code>{"private static readonly int EmissionColorShaderVariable"}</code> | Shader id of `_EmissionColor`. |
| <Link id="m-emissionshadervariable" /><code>{"private static readonly int EmissionShaderVariable"}</code> | Shader id of `_Emission`. |
| <Link id="m-maintexture" /><code>{"private static readonly int MainTexture"}</code> | Shader id of `_MainTex`. |
| <Link id="m-materializationanimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" materializationAnimation"}</code> | The running materialise coroutine, so dematerialise can stop it. |
| <Link id="m-materialstoanimate" /><code>{"private List<Material> materialsToAnimate"}</code> | Dissolve materials made so far. It is never cleared, so it grows with each run. |
| <Link id="m-originalmaterials" /><code>{"private Dictionary<Renderer, Material> originalMaterials"}</code> | Each renderer's material from before the first dissolve. |
| <Link id="m-particlesystemrenderer" /><code>{"private static Type particleSystemRenderer"}</code> | Cached `ParticleSystemRenderer` type, skipped by `SetTargetObject`. |
| <Link id="m-progressshadervariable" /><code>{"private static readonly int ProgressShaderVariable"}</code> | Shader id of `_Progress`, the dissolve amount. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dissolvetexture" /><code>{"Texture DissolveTexture { get; set; }"}</code> | Noise texture set on every dissolve material. |
| <Link id="m-shader" /><code>{"Shader Shader { get; set; }"}</code> | The dissolve shader used for the temporary materials. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-demateralizerenderers" /><code>{"void DemateralizeRenderers(float duration, Action animationFinishedCallback = null)"}</code> | Stops any materialise run, then glows the renderers up and dissolves them away over `duration`. |
| <Link id="m-materializerenderers" /><code>{"void MaterializeRenderers(float duration, Action animationFinishedCallback = null)"}</code> | Hides the renderers, then dissolves them in over `duration` and calls the callback when done. |
| <Link id="m-settargetobject" /><code>{"void SetTargetObject(Transform rendererParent, MonoBehaviour coroutineBehaviour)"}</code> | Targets every renderer under a transform except particle renderers, and sets the behaviour that runs the coroutines. |
| <Link id="m-settargets" /><code>{"void SetTargets(IEnumerable<Renderer> renderers, MonoBehaviour coroutineBehaviour)"}</code> | Targets the given renderers and sets the behaviour that runs the coroutines. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeallmaterialstodissolve" /><code>{"private void ChangeAllMaterialsToDissolve()"}</code> | Gives each renderer a new dissolve material copying its texture or colour, and remembers the original. Multi-material renderers end up with one material. |
| <Link id="m-dematerializeanimation" /><code>{"private IEnumerator DematerializeAnimation(float duration, Action animationFinishedCallback) (iterator)"}</code> | Coroutine: raises emission, swaps to dissolve materials, then runs progress 0 to 1, then calls the callback. |
| <Link id="m-instanceallmaterials" /><code>{"private void InstanceAllMaterials()"}</code> | Gives each renderer its own material instance so emission changes don't touch shared materials. |
| <Link id="m-materializeanimation" /><code>{"private IEnumerator MaterializeAnimation(float duration, Action animationFinishedCallback) (iterator)"}</code> | Coroutine: waits two frames, dissolves in from 1 to 0, fades emission out, restores originals, then calls the callback. |
| <Link id="m-resetallmaterials" /><code>{"private void ResetAllMaterials()"}</code> | Puts each renderer's original material back. |
| <Link id="m-resetallmaterialsinstanced" /><code>{"private void ResetAllMaterialsInstanced()"}</code> | Gives each renderer a fresh copy of its original material, so emission can fade without changing the shared one. |
| <Link id="m-setmaterialsemission" /><code>{"private void SetMaterialsEmission(float emission)"}</code> | Sets emission colour (and `_Emission` if present) on every renderer's material. |
| <Link id="m-setmaterialsprogress" /><code>{"private void SetMaterialsProgress(float progress)"}</code> | Sets `_Progress` on every dissolve material. |

</details>

## Used in

Members of other types that take, return or hold a `RendererMaterializerHandler`:

[`RendererMaterializer.Handler`](/game-api/types/global-q-r/renderermaterializer#m-handler).
