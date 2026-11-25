---
title: "LiquidStencilShaderController"
description: "class LiquidStencilShaderController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidStencilShaderController

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidStencilShaderController()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> |
| <Link id="m-isstencilassigned" /><code>{"private bool isStencilAssigned"}</code> |
| <Link id="m-stencilnumber" /><code>{"private int stencilNumber"}</code> |
| <Link id="m-surfacerenderer" /><code>{"private Renderer surfaceRenderer"}</code> |
| <Link id="m-surfacerendererpropertyblock" /><code>{"private MaterialPropertyBlock surfaceRendererPropertyBlock"}</code> |
| <Link id="m-volumerenderer" /><code>{"private Renderer volumeRenderer"}</code> |
| <Link id="m-volumerendererpropertyblock" /><code>{"private MaterialPropertyBlock volumeRendererPropertyBlock"}</code> |
| <Link id="m-volumevisibilitydetector" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" volumeVisibilityDetector"}</code> |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkforstencil" /><code>{"private void CheckForStencil()"}</code> |
| <Link id="m-handleliquidlevelchanged" /><code>{"private void HandleLiquidLevelChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-releasestencilbuffernumber" /><code>{"private void ReleaseStencilBufferNumber()"}</code> |
| <Link id="m-setrenderersstencilbuffernumber" /><code>{"private void SetRenderersStencilBufferNumber(bool isForced)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updatestencilonnewmaterial" /><code>{"private void UpdateStencilOnNewMaterial()"}</code> |

</details>
