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
| <Link id="m-ctor" /><code>{"protected ProgressBar()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-propertyblock" /><code>{"protected MaterialPropertyBlock propertyBlock"}</code> | <span className="api-desc">Property block used to set the progress on the renderers.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gaugerenderer" /><code>{"private Renderer gaugeRenderer"}</code> | <span className="api-desc">Single renderer, copied into `gaugeRenderers` if that list is empty.</span> |
| <Link id="m-gaugerenderers" /><code>{"private Renderer[] gaugeRenderers"}</code> | <span className="api-desc">Renderers that show the gauge.</span> |
| <Link id="m-minimumvaluetorender" /><code>{"private float minimumValueToRender"}</code> | <span className="api-desc">Progress at or under this hides the renderers (default -1, so always shown).</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Backing field for `Progress`, 0 to 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> | <span className="api-desc">Fill amount from 0 to 1. Setting it updates the renderers.</span> |
| <Link id="m-progressvariable" /><code>{"abstract int ProgressVariable { get; }"}</code> | <span className="api-desc">Shader property id the progress is written to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setpropertyblock" /><code>{"void SetPropertyBlock(MaterialPropertyBlock propertyBlock)"}</code> | <span className="api-desc">Applies a property block to every gauge renderer.</span> |
| <Link id="m-setrenderersenable" /><code>{"void SetRenderersEnable(bool enabled)"}</code> | <span className="api-desc">Turns every gauge renderer on or off.</span> |
| <Link id="m-updateprogressexternal" /><code>{"void UpdateProgressExternal(float newProgress)"}</code> | <span className="api-desc">Sets the progress and updates the renderers, for use from events.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor: fills the renderer list and previews the progress.</span> |
| <Link id="m-setup" /><code>{"protected virtual void Setup()"}</code> | <span className="api-desc">Creates the property block. Skipped on a headless server.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: makes the property block.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that drops null renderers from the list.</span> |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | <span className="api-desc">Client: writes progress to the renderers, or hides them when at or under `minimumValueToRender`.</span> |

</details>
