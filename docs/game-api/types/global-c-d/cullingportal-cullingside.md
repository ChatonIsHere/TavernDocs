---
title: "CullingPortal.CullingSide"
description: "class CullingPortal.CullingSide in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingPortal.CullingSide

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`CullingPortal`](/game-api/types/global-c-d/cullingportal)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CullingSide(Transform cachedTransform, "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer, Bounds bounds)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bounds" /><code>{"private readonly Bounds bounds"}</code> |
| <Link id="m-cachedtransform" /><code>{"private readonly Transform cachedTransform"}</code> |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> |
| <Link id="m-streamer" /><code>{"private readonly "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-cull" /><code>{"void Cull()"}</code> |
| <Link id="m-uncull" /><code>{"void Uncull()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |
| <Link id="m-populaterendererslist" /><code>{"private void PopulateRenderersList()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CullingSide`:

[`CullingPortal.backCulling`](/game-api/types/global-c-d/cullingportal#m-backculling), [`CullingPortal.frontCulling`](/game-api/types/global-c-d/cullingportal#m-frontculling).
