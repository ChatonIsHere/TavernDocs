---
title: "CullingPortal.CullingSide"
description: "Client: one side of a CullingPortal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingPortal.CullingSide

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client: one side of a `CullingPortal`. Turns on or off the static renderers of a cave layer streamer that fall inside a box on that side.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`CullingPortal`](/mod/game-api/types/global-c-d/cullingportal)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CullingSide(Transform cachedTransform, "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer, Bounds bounds)"}</code> | <span className="api-desc">Creates a `CullingPortal.CullingSide` from `cachedTransform`, `streamer` and `bounds`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private readonly Bounds bounds"}</code> | <span className="api-desc">Box in portal space that picks which renderers belong to this side.</span> |
| <Link id="m-cachedtransform" /><code>{"private readonly Transform cachedTransform"}</code> | <span className="api-desc">The portal's transform.</span> |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> | <span className="api-desc">Whether the side's renderers are on.</span> |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> | <span className="api-desc">Renderers on this side.</span> |
| <Link id="m-streamer" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer"}</code> | <span className="api-desc">Cave layer streamer the renderers come from.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cull" /><code>{"void Cull()"}</code> | <span className="api-desc">Disables every renderer on this side.</span> |
| <Link id="m-uncull" /><code>{"void Uncull()"}</code> | <span className="api-desc">Enables every renderer on this side, building the list first if empty.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Forgets the renderer list when the streamer changes its renderers, so it is rebuilt next time.</span> |
| <Link id="m-populaterendererslist" /><code>{"private void PopulateRenderersList()"}</code> | <span className="api-desc">Collects the streamer's static renderers whose positions fall inside `bounds`, relative to the portal.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CullingSide`:

<div className="api-used-in">

[`CullingPortal.backCulling`](/mod/game-api/types/global-c-d/cullingportal#m-backculling), [`CullingPortal.frontCulling`](/mod/game-api/types/global-c-d/cullingportal#m-frontculling).

</div>
