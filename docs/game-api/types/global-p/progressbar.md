---
title: "ProgressBar"
description: "abstract class ProgressBar in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressBar

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`GaugeProgressBar`](/game-api/types/global-e-h/gaugeprogressbar), [`NamedProgressBar`](/game-api/types/global-m-o/namedprogressbar)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProgressBar()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gaugerenderer" /><code>{"private Renderer gaugeRenderer"}</code> |  |
| <Link id="m-gaugerenderers" /><code>{"private Renderer[] gaugeRenderers"}</code> |  |
| <Link id="m-minimumvaluetorender" /><code>{"private float minimumValueToRender"}</code> |  |
| <Link id="m-progress" /><code>{"private float progress"}</code> |  |
| <Link id="m-propertyblock" /><code>{"protected MaterialPropertyBlock propertyBlock"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> |  |
| <Link id="m-progressvariable" /><code>{"abstract int ProgressVariable { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setpropertyblock" /><code>{"void SetPropertyBlock(MaterialPropertyBlock propertyBlock)"}</code> |  |
| <Link id="m-setrenderersenable" /><code>{"void SetRenderersEnable(bool enabled)"}</code> |  |
| <Link id="m-updateprogressexternal" /><code>{"void UpdateProgressExternal(float newProgress)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-setup" /><code>{"protected virtual void Setup()"}</code> |  |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> |  |
