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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidStencilShaderController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">The liquid container on this object.</span> |
| <Link id="m-isstencilassigned" /><code>{"private bool isStencilAssigned"}</code> | <span className="api-desc">Whether a stencil number is held.</span> |
| <Link id="m-stencilnumber" /><code>{"private int stencilNumber"}</code> | <span className="api-desc">The held stencil number.</span> |
| <Link id="m-surfacerenderer" /><code>{"private Renderer surfaceRenderer"}</code> | <span className="api-desc">Liquid surface renderer.</span> |
| <Link id="m-surfacerendererpropertyblock" /><code>{"private MaterialPropertyBlock surfaceRendererPropertyBlock"}</code> | <span className="api-desc">The surface visual's property block.</span> |
| <Link id="m-volumerenderer" /><code>{"private Renderer volumeRenderer"}</code> | <span className="api-desc">Liquid volume renderer.</span> |
| <Link id="m-volumerendererpropertyblock" /><code>{"private MaterialPropertyBlock volumeRendererPropertyBlock"}</code> | <span className="api-desc">Property block for the volume renderer.</span> |
| <Link id="m-volumevisibilitydetector" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" volumeVisibilityDetector"}</code> | <span className="api-desc">Tells when the volume becomes visible or not.</span> |

</details>

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the container and listens for its surface material changing.</span> |
| <Link id="m-checkforstencil" /><code>{"private void CheckForStencil()"}</code> | <span className="api-desc">Takes a stencil number when visible with liquid, otherwise releases it.</span> |
| <Link id="m-handleliquidlevelchanged" /><code>{"private void HandleLiquidLevelChanged("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> | <span className="api-desc">Rechecks the stencil when the shown amount changes.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the liquid level and visibility events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the liquid level and visibility events.</span> |
| <Link id="m-releasestencilbuffernumber" /><code>{"private void ReleaseStencilBufferNumber()"}</code> | <span className="api-desc">Gives the stencil number back to the pool.</span> |
| <Link id="m-setrenderersstencilbuffernumber" /><code>{"private void SetRenderersStencilBufferNumber(bool isForced)"}</code> | <span className="api-desc">Takes a stencil number (if none or forced) and sets it on both materials.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Checks the stencil and sets up property blocks.</span> |
| <Link id="m-updatestencilonnewmaterial" /><code>{"private void UpdateStencilOnNewMaterial()"}</code> | <span className="api-desc">Assigns a fresh stencil number when the surface material is replaced.</span> |

</details>
