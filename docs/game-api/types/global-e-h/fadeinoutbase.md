---
title: "FadeInOutBase"
description: "Base for objects that fade out using a _Progress shader value, or by spawning pooled mesh fader effects in their place."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FadeInOutBase

A **class** in `Root.Township`, no namespace.

Base for objects that fade out using a `_Progress` shader value, or by spawning pooled mesh fader effects in their place. Does nothing on a headless server.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PracticeAreaShrinkFader`](/game-api/types/global-p/practiceareashrinkfader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FadeInOutBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"protected static readonly int _Progress"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-basematerial" /><code>{"protected Material baseMaterial"}</code> | The material copied for the fade. |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> |  |
| <Link id="m-fadingcoroutine" /><code>{"protected Coroutine fadingCoroutine"}</code> | The running fade coroutine, or null. |
| <Link id="m-filters" /><code>{"private List<MeshFilter> filters"}</code> |  |
| <Link id="m-material" /><code>{"protected Material material"}</code> | The copied material the renderers use. |
| <Link id="m-meshfaderobject" /><code>{"protected "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshFaderObject"}</code> | Pooled effect spawned per mesh by `FadeOut`. |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fadeduration-2" /><code>{"float FadeDuration { get; }"}</code> | How long the fade takes, in seconds. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fadeout" /><code>{"void FadeOut()"}</code> | Stops any running fade and spawns a pooled mesh fader effect for each mesh. |
| <Link id="m-forceinitialize" /><code>{"void ForceInitialize(Material baseMaterial, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshFaderObject)"}</code> | Finds renderers and mesh filters if none are set, fills in missing material and fader, then copies the material. |
| <Link id="m-postbake" /><code>{"virtual void PostBake()"}</code> | Removes destroyed renderers and filters from the lists after a build bake. |
| <Link id="m-copybasematerial" /><code>{"protected void CopyBaseMaterial()"}</code> | Makes a copy of the base material, puts it on every renderer and sets its progress to 1 (fully shown). |
| <Link id="m-fade" /><code>{"protected virtual IEnumerator Fade() (iterator)"}</code> | Coroutine that lowers `_Progress` from 1 to 0 over `FadeDuration`. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: fills the renderer and mesh filter lists from children, preferring renderers that use the base material. |
| <Link id="m-startfade" /><code>{"protected void StartFade()"}</code> | Starts the fade coroutine if one is not already running. |
