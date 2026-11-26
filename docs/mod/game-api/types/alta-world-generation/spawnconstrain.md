---
title: "SpawnConstrain"
description: "Base asset for a rule that limits what a ConstrainedSpawnerDisplay spawns in a cave chunk, such as EveryXLayersConstrain."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnConstrain

An **abstract class** in `Root.Township`, `Alta.Caves`.

Base asset for a rule that limits what a `ConstrainedSpawnerDisplay` spawns in a cave chunk, such as `EveryXLayersConstrain`. Checked on the server before spawning.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`EveryXLayersConstrain`](/mod/game-api/types/alta-world-generation/everyxlayersconstrain)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpawnConstrain()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnparameters" /><code>{"abstract bool SpawnParameters("}<Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" generation, ref int quantity)"}</code> | <span className="api-desc">Returns false to stop the spawn for this chunk's generator. Can also change the quantity to spawn.</span> |

## Used in

Members of other types that take, return or hold a `SpawnConstrain`:

<div className="api-used-in">

[`ConstrainedSpawnerDisplay.constrains`](/mod/game-api/types/alta-world-generation/constrainedspawnerdisplay#m-constrains).

</div>
