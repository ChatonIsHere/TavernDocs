---
title: "FadeInOutBase"
description: "class FadeInOutBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FadeInOutBase

A **class** in `Root.Township`, no namespace.

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
| <Link id="m-progress" /><code>{"protected static readonly int _Progress"}</code> |  |
| <Link id="m-basematerial" /><code>{"protected Material baseMaterial"}</code> |  |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> |  |
| <Link id="m-fadingcoroutine" /><code>{"protected Coroutine fadingCoroutine"}</code> |  |
| <Link id="m-filters" /><code>{"private List<MeshFilter> filters"}</code> |  |
| <Link id="m-material" /><code>{"protected Material material"}</code> |  |
| <Link id="m-meshfaderobject" /><code>{"protected "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshFaderObject"}</code> |  |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fadeduration-2" /><code>{"float FadeDuration { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fadeout" /><code>{"void FadeOut()"}</code> |  |
| <Link id="m-forceinitialize" /><code>{"void ForceInitialize(Material baseMaterial, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshFaderObject)"}</code> |  |
| <Link id="m-postbake" /><code>{"virtual void PostBake()"}</code> |  |
| <Link id="m-copybasematerial" /><code>{"protected void CopyBaseMaterial()"}</code> |  |
| <Link id="m-fade" /><code>{"protected virtual IEnumerator Fade() (iterator)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-startfade" /><code>{"protected void StartFade()"}</code> |  |
