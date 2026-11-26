---
title: "FadeInOutBase"
description: "Base for objects that fade out using a _Progress shader value, or by spawning pooled mesh fader effects in their place."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FadeInOutBase

A **class** in `Root.Township`, the global namespace.

Base for objects that fade out using a `_Progress` shader value, or by spawning pooled mesh fader effects in their place. Does nothing on a headless server.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PracticeAreaShrinkFader`](/mod/game-api/types/global-p/practiceareashrinkfader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FadeInOutBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"protected static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for `_Progress`.</span> |
| <Link id="m-basematerial" /><code>{"protected Material baseMaterial"}</code> | <span className="api-desc">The material copied for the fade.</span> |
| <Link id="m-fadingcoroutine" /><code>{"protected Coroutine fadingCoroutine"}</code> | <span className="api-desc">The running fade coroutine, or null.</span> |
| <Link id="m-material" /><code>{"protected Material material"}</code> | <span className="api-desc">The copied material the renderers use.</span> |
| <Link id="m-meshfaderobject" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshFaderObject"}</code> | <span className="api-desc">Pooled effect spawned per mesh by `FadeOut`.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | <span className="api-desc">Seconds the `_Progress` shader value takes to go from 1 to 0 in `Fade`. Read through `FadeDuration`.</span> |
| <Link id="m-filters" /><code>{"private List<MeshFilter> filters"}</code> | <span className="api-desc">Mesh filters that get a pooled `ProgressMaterialEffect` copy of their mesh on `FadeOut`. Filled from `renderers` if empty.</span> |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> | <span className="api-desc">Renderers given the copied fade material. Filled from child renderers in `OnValidate` or `ForceInitialize` if empty.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fadeduration-2" /><code>{"float FadeDuration { get; }"}</code> | <span className="api-desc">How long the fade takes, in seconds.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fadeout" /><code>{"void FadeOut()"}</code> | <span className="api-desc">Stops any running fade and spawns a pooled mesh fader effect for each mesh.</span> |
| <Link id="m-forceinitialize" /><code>{"void ForceInitialize(Material baseMaterial, "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshFaderObject)"}</code> | <span className="api-desc">Finds renderers and mesh filters if none are set, fills in missing material and fader, then copies the material.</span> |
| <Link id="m-postbake" /><code>{"virtual void PostBake()"}</code> | <span className="api-desc">Removes destroyed renderers and filters from the lists after a build bake.</span> |
| <Link id="m-copybasematerial" /><code>{"protected void CopyBaseMaterial()"}</code> | <span className="api-desc">Makes a copy of the base material, puts it on every renderer and sets its progress to 1 (fully shown).</span> |
| <Link id="m-fade" /><code>{"protected virtual IEnumerator Fade() (iterator)"}</code> | <span className="api-desc">Coroutine that lowers `_Progress` from 1 to 0 over `FadeDuration`.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor: fills the renderer and mesh filter lists from children, preferring renderers that use the base material.</span> |
| <Link id="m-startfade" /><code>{"protected void StartFade()"}</code> | <span className="api-desc">Starts the fade coroutine if one is not already running.</span> |
