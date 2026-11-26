---
title: "ProgressBar"
description: "Base for a shader-driven gauge on one or more renderers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressBar

An **abstract class** in `Root.Township`, the global namespace.

Base for a shader-driven gauge on one or more renderers. Setting `Progress` writes it to a material property, and the renderers hide when it is at or under a minimum. Client only.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`GaugeProgressBar`](/mod/game-api/types/global-e-h/gaugeprogressbar), [`NamedProgressBar`](/mod/game-api/types/global-m-o/namedprogressbar)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProgressBar()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-propertyblock" /><code>{"protected MaterialPropertyBlock propertyBlock"}</code> | Property block used to set the progress on the renderers. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gaugerenderer" /><code>{"private Renderer gaugeRenderer"}</code> | Single renderer, copied into `gaugeRenderers` if that list is empty. |
| <Link id="m-gaugerenderers" /><code>{"private Renderer[] gaugeRenderers"}</code> | Renderers that show the gauge. |
| <Link id="m-minimumvaluetorender" /><code>{"private float minimumValueToRender"}</code> | Progress at or under this hides the renderers (default -1, so always shown). |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Backing field for `Progress`, 0 to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> | Fill amount from 0 to 1. Setting it updates the renderers. |
| <Link id="m-progressvariable" /><code>{"abstract int ProgressVariable { get; }"}</code> | Shader property id the progress is written to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setpropertyblock" /><code>{"void SetPropertyBlock(MaterialPropertyBlock propertyBlock)"}</code> | Applies a property block to every gauge renderer. |
| <Link id="m-setrenderersenable" /><code>{"void SetRenderersEnable(bool enabled)"}</code> | Turns every gauge renderer on or off. |
| <Link id="m-updateprogressexternal" /><code>{"void UpdateProgressExternal(float newProgress)"}</code> | Sets the progress and updates the renderers, for use from events. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: fills the renderer list and previews the progress. |
| <Link id="m-setup" /><code>{"protected virtual void Setup()"}</code> | Creates the property block. Skipped on a headless server. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: makes the property block. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step that drops null renderers from the list. |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | Client: writes progress to the renderers, or hides them when at or under `minimumValueToRender`. |

</details>
