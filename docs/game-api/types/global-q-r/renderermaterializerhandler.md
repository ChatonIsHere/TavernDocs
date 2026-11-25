---
title: "RendererMaterializerHandler"
description: "class RendererMaterializerHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererMaterializerHandler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererMaterializerHandler(Shader shader, Texture dissolveTexture)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allrenderers" /><code>{"private List<Renderer> allRenderers"}</code> |  |
| <Link id="m-colorshadervariable" /><code>{"private static readonly int ColorShaderVariable"}</code> |  |
| <Link id="m-coroutinebehaviour" /><code>{"private MonoBehaviour coroutineBehaviour"}</code> |  |
| <Link id="m-dissolveshadervariable" /><code>{"private static readonly int DissolveShaderVariable"}</code> |  |
| <Link id="m-emissioncolorshadervariable" /><code>{"private static readonly int EmissionColorShaderVariable"}</code> |  |
| <Link id="m-emissionshadervariable" /><code>{"private static readonly int EmissionShaderVariable"}</code> |  |
| <Link id="m-maintexture" /><code>{"private static readonly int MainTexture"}</code> |  |
| <Link id="m-materializationanimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" materializationAnimation"}</code> |  |
| <Link id="m-materialstoanimate" /><code>{"private List<Material> materialsToAnimate"}</code> |  |
| <Link id="m-originalmaterials" /><code>{"private Dictionary<Renderer, Material> originalMaterials"}</code> |  |
| <Link id="m-particlesystemrenderer" /><code>{"private static Type particleSystemRenderer"}</code> |  |
| <Link id="m-progressshadervariable" /><code>{"private static readonly int ProgressShaderVariable"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dissolvetexture" /><code>{"Texture DissolveTexture { get; set; }"}</code> |  |
| <Link id="m-shader" /><code>{"Shader Shader { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-demateralizerenderers" /><code>{"void DemateralizeRenderers(float duration, Action animationFinishedCallback = null)"}</code> |  |
| <Link id="m-materializerenderers" /><code>{"void MaterializeRenderers(float duration, Action animationFinishedCallback = null)"}</code> |  |
| <Link id="m-settargetobject" /><code>{"void SetTargetObject(Transform rendererParent, MonoBehaviour coroutineBehaviour)"}</code> |  |
| <Link id="m-settargets" /><code>{"void SetTargets(IEnumerable<Renderer> renderers, MonoBehaviour coroutineBehaviour)"}</code> |  |
| <Link id="m-changeallmaterialstodissolve" /><code>{"private void ChangeAllMaterialsToDissolve()"}</code> |  |
| <Link id="m-dematerializeanimation" /><code>{"private IEnumerator DematerializeAnimation(float duration, Action animationFinishedCallback) (iterator)"}</code> |  |
| <Link id="m-instanceallmaterials" /><code>{"private void InstanceAllMaterials()"}</code> |  |
| <Link id="m-materializeanimation" /><code>{"private IEnumerator MaterializeAnimation(float duration, Action animationFinishedCallback) (iterator)"}</code> |  |
| <Link id="m-resetallmaterials" /><code>{"private void ResetAllMaterials()"}</code> |  |
| <Link id="m-resetallmaterialsinstanced" /><code>{"private void ResetAllMaterialsInstanced()"}</code> |  |
| <Link id="m-setmaterialsemission" /><code>{"private void SetMaterialsEmission(float emission)"}</code> |  |
| <Link id="m-setmaterialsprogress" /><code>{"private void SetMaterialsProgress(float progress)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RendererMaterializerHandler`:

[`RendererMaterializer.Handler`](/game-api/types/global-q-r/renderermaterializer#m-handler).
