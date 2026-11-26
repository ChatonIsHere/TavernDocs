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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WaterfallEffect()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systems" /><code>{"private ParticleSystem[] systems"}</code> | Particle systems resized to the waterfall's width. |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | Height added to the effect's position, once per particle system. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attachto" /><code>{"static "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" AttachTo("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{" waterfall)"}</code> | Takes an effect from the pool at the waterfall bottom, facing downstream, and sizes its particle shapes to the river width. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Shows the effect. Hooked to the chunk's fully loaded event. |
| <Link id="m-unload" /><code>{"void Unload("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Hides the effect. Hooked to the chunk's fully unloaded event. |
