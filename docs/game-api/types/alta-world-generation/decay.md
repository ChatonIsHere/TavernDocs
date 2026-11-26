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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GenerationStep`](/game-api/types/alta-world-generation/generationstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Decay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decaylimit" /><code>{"private float decayLimit"}</code> | Threshold above which a cell is removed. |
| <Link id="m-extradecaywithheight" /><code>{"private float extraDecayWithHeight"}</code> | Added to the noise per cell of height. |
| <Link id="m-noisemultiplier" /><code>{"private float noiseMultiplier"}</code> | Scales the noise value. |
| <Link id="m-noisescale" /><code>{"private float noiseScale"}</code> | Scales cell coordinates before sampling noise. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> | Sets every cell whose scaled noise plus height bonus is over `decayLimit` to the air tag, with a fresh random noise seed. |
