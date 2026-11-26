---
title: "WaterfallEffect"
description: "Pooled particle effect at the bottom of a waterfall, sized to the river width and shown only while its chunk is fully loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WaterfallEffect

A **class** in `Root.Township`, `Alta.Forests`.

Pooled particle effect at the bottom of a waterfall, sized to the river width and shown only while its chunk is fully loaded.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WaterfallEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systems" /><code>{"private ParticleSystem[] systems"}</code> | <span className="api-desc">Particle systems resized to the waterfall's width.</span> |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | <span className="api-desc">Height added to the effect's position, once per particle system.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attachto" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" AttachTo("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition, "}<Link to="/mod/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{" waterfall)"}</code> | <span className="api-desc">Takes an effect from the pool at the waterfall bottom, facing downstream, and sizes its particle shapes to the river width.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Shows the effect. Hooked to the chunk's fully loaded event.</span> |
| <Link id="m-unload" /><code>{"void Unload("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Hides the effect. Hooked to the chunk's fully unloaded event.</span> |
