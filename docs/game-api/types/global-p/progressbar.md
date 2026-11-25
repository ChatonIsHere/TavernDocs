---
title: "ProgressBar"
description: "Base for a shader-driven gauge on one or more renderers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressBar

An **abstract class** in `Root.Township`, no namespace.

Base for a shader-driven gauge on one or more renderers. Setting `Progress` writes it to a material property, and the renderers hide when it is at or under a minimum. Client only.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`GaugeProgressBar`](/game-api/types/global-e-h/gaugeprogressbar), [`NamedProgressBar`](/game-api/types/global-m-o/namedprogressbar)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ProgressBar()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-propertyblock" /><code>{"protected MaterialPropertyBlock propertyBlock"}</code> | Property block used to set the progress on the renderers. |

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-gaugerenderer" /><code>{"private Renderer gaugeRenderer"}</code> |
| <Link id="m-gaugerenderers" /><code>{"private Renderer[] gaugeRenderers"}</code> |
| <Link id="m-minimumvaluetorender" /><code>{"private float minimumValueToRender"}</code> |
| <Link id="m-progress" /><code>{"private float progress"}</code> |

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

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> |

</details>
