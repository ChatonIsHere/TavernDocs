---
title: "LiquidStencilShaderController"
description: "Client: gives a liquid container's volume and surface renderers a stencil number from a shared pool while it's visible and has liquid, and releases it..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidStencilShaderController

A **class** in `Root.Township`, `Alta.Liquid`.

Client: gives a liquid container's volume and surface renderers a stencil number from a shared pool while it's visible and has liquid, and releases it otherwise.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidStencilShaderController()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | The liquid container on this object. |
| <Link id="m-isstencilassigned" /><code>{"private bool isStencilAssigned"}</code> | Whether a stencil number is held. |
| <Link id="m-stencilnumber" /><code>{"private int stencilNumber"}</code> | The held stencil number. |
| <Link id="m-surfacerenderer" /><code>{"private Renderer surfaceRenderer"}</code> | Liquid surface renderer. |
| <Link id="m-surfacerendererpropertyblock" /><code>{"private MaterialPropertyBlock surfaceRendererPropertyBlock"}</code> | The surface visual's property block. |
| <Link id="m-volumerenderer" /><code>{"private Renderer volumeRenderer"}</code> | Liquid volume renderer. |
| <Link id="m-volumerendererpropertyblock" /><code>{"private MaterialPropertyBlock volumeRendererPropertyBlock"}</code> | Property block for the volume renderer. |
| <Link id="m-volumevisibilitydetector" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" volumeVisibilityDetector"}</code> | Tells when the volume becomes visible or not. |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gets the container and listens for its surface material changing. |
| <Link id="m-checkforstencil" /><code>{"private void CheckForStencil()"}</code> | Takes a stencil number when visible with liquid, otherwise releases it. |
| <Link id="m-handleliquidlevelchanged" /><code>{"private void HandleLiquidLevelChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> | Rechecks the stencil when the shown amount changes. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the liquid level and visibility events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the liquid level and visibility events. |
| <Link id="m-releasestencilbuffernumber" /><code>{"private void ReleaseStencilBufferNumber()"}</code> | Gives the stencil number back to the pool. |
| <Link id="m-setrenderersstencilbuffernumber" /><code>{"private void SetRenderersStencilBufferNumber(bool isForced)"}</code> | Takes a stencil number (if none or forced) and sets it on both materials. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Checks the stencil and sets up property blocks. |
| <Link id="m-updatestencilonnewmaterial" /><code>{"private void UpdateStencilOnNewMaterial()"}</code> | Assigns a fresh stencil number when the surface material is replaced. |

</details>
