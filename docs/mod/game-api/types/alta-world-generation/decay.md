---
title: "Decay"
description: "PAGaC generation step that turns cells to air using 3D simplex noise, with more decay higher up, to make structures look ruined."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Decay

A **class** in `Root.Township`, `Alta.PAGaC`.

PAGaC generation step that turns cells to air using 3D simplex noise, with more decay higher up, to make structures look ruined.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GenerationStep`](/mod/game-api/types/alta-world-generation/generationstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Decay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decaylimit" /><code>{"private float decayLimit"}</code> | <span className="api-desc">Threshold above which a cell is removed.</span> |
| <Link id="m-extradecaywithheight" /><code>{"private float extraDecayWithHeight"}</code> | <span className="api-desc">Added to the noise per cell of height.</span> |
| <Link id="m-noisemultiplier" /><code>{"private float noiseMultiplier"}</code> | <span className="api-desc">Scales the noise value.</span> |
| <Link id="m-noisescale" /><code>{"private float noiseScale"}</code> | <span className="api-desc">Scales cell coordinates before sampling noise.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> | <span className="api-desc">Sets every cell whose scaled noise plus height bonus is over `decayLimit` to the air tag, with a fresh random noise seed.</span> |
