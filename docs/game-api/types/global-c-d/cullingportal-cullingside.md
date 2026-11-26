---
title: "CullingPortal.CullingSide"
description: "Client: one side of a CullingPortal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingPortal.CullingSide

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client: one side of a `CullingPortal`. Turns on or off the static renderers of a cave layer streamer that fall inside a box on that side.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`CullingPortal`](/game-api/types/global-c-d/cullingportal)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CullingSide(Transform cachedTransform, "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer, Bounds bounds)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private readonly Bounds bounds"}</code> | Box in portal space that picks which renderers belong to this side. |
| <Link id="m-cachedtransform" /><code>{"private readonly Transform cachedTransform"}</code> | The portal's transform. |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> | Whether the side's renderers are on. |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> | Renderers on this side. |
| <Link id="m-streamer" /><code>{"private readonly "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer"}</code> | Cave layer streamer the renderers come from. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cull" /><code>{"void Cull()"}</code> | Disables every renderer on this side. |
| <Link id="m-uncull" /><code>{"void Uncull()"}</code> | Enables every renderer on this side, building the list first if empty. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Forgets the renderer list when the streamer changes its renderers, so it is rebuilt next time. |
| <Link id="m-populaterendererslist" /><code>{"private void PopulateRenderersList()"}</code> | Collects the streamer's static renderers whose positions fall inside `bounds`, relative to the portal. |

</details>

## Used in

Members of other types that take, return or hold a `CullingSide`:

[`CullingPortal.backCulling`](/game-api/types/global-c-d/cullingportal#m-backculling), [`CullingPortal.frontCulling`](/game-api/types/global-c-d/cullingportal#m-frontculling).
