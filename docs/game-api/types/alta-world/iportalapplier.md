---
title: "IPortalApplier"
description: "Something that owns static renderers that portal culling can show or hide, such as CaveLayerStreamer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPortalApplier

An **interface** in `Root.Township`, `Alta.Chunks`.

Something that owns static renderers that portal culling can show or hide, such as `CaveLayerStreamer`. A `LocationChunk` holds one in `PortalApplier`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`CaveLayerStreamer`](/game-api/types/alta-world/cavelayerstreamer), [`ICaveLayer`](/game-api/types/alta-world/icavelayer), [`StaticCaveChunk`](/game-api/types/alta-world/staticcavechunk)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allstaticrenderers" /><code>{"Dictionary<Renderer, Vector3> AllStaticRenderers { get; }"}</code> | Every static renderer this applier manages, each with a stored position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggleterrain" /><code>{"void ToggleTerrain(bool isVisible)"}</code> | Shows or hides the terrain renderers this applier owns. |

## Used in

Members of other types that take, return or hold a `IPortalApplier`:

[`LocationChunk.PortalApplier`](/game-api/types/alta-world/locationchunk#m-portalapplier).
