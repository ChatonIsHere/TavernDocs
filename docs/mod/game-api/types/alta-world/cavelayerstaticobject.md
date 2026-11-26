---
title: "CaveLayerStaticObject"
description: "Networked object inside a cave layer that registers its renderers with the cave layer's streamer, so they show and hide with the layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerStaticObject

A **class** in `Root.Township`, `Alta.Chunks`.

Networked object inside a cave layer that registers its renderers with the cave layer's streamer, so they show and hide with the layer. Client only: does nothing on a headless server.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerStaticObject()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | The renderers the cave layer streamer controls. |
| <Link id="m-streamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer"}</code> | The cave layer streamer the renderers were registered with. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | After the base setup, waits half a second and then registers with the cave layer streamer. Skipped when headless. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | At build time, removes null entries from the renderer list. |
| <Link id="m-removerenderers" /><code>{"private void RemoveRenderers("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Deregisters the renderers from the streamer when the entity is destroyed by the scene. |
| <Link id="m-setupcavelayerstreamer" /><code>{"private void SetupCaveLayerStreamer()"}</code> | Finds the chunk at this position and, if its procedural streamer is a cave layer, registers the renderers with it. |
| <Link id="m-trygetcavelayerstreamer" /><code>{"private bool TryGetCaveLayerStreamer("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, out "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" outStreamer)"}</code> | Gets the chunk's procedural streamer if it is a `CaveLayerStreamer`. |

</details>
