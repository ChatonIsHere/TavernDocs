---
title: "CaveLayerStaticObject"
description: "class CaveLayerStaticObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerStaticObject

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerStaticObject()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> |  |
| <Link id="m-streamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-removerenderers" /><code>{"private void RemoveRenderers("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-setupcavelayerstreamer" /><code>{"private void SetupCaveLayerStreamer()"}</code> |  |
| <Link id="m-trygetcavelayerstreamer" /><code>{"private bool TryGetCaveLayerStreamer("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, out "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" outStreamer)"}</code> |  |
