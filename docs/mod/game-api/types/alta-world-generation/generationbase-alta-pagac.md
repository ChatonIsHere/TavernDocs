---
title: "GenerationBase"
description: "Editor test component for the PAGaC grid generator: runs the generation steps on its children and builds the result from an option set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationBase

A **class** in `Root.Township`, `Alta.PAGaC`.

Editor test component for the PAGaC grid generator: runs the generation steps on its children and builds the result from an option set.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air"}</code> | <span className="api-desc">Backing field for `Air`.</span> |
| <Link id="m-generated" /><code>{"private GameObject generated"}</code> | <span className="api-desc">The object built from the last generation.</span> |
| <Link id="m-isregenerating" /><code>{"private bool isRegenerating"}</code> | <span className="api-desc">Inspector button that regenerates with the same seed.</span> |
| <Link id="m-isregeneratingwithnewseed" /><code>{"private bool isRegeneratingWithNewSeed"}</code> | <span className="api-desc">Inspector button that regenerates with a random seed.</span> |
| <Link id="m-optionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> | <span className="api-desc">Options used to build the generated grid into objects.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Backing field for `Seed`.</span> |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> | <span className="api-desc">Backing field for `SizeX`.</span> |
| <Link id="m-sizey" /><code>{"private int sizeY"}</code> | <span className="api-desc">Backing field for `SizeY`.</span> |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> | <span className="api-desc">Backing field for `SizeZ`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" Air { get; }"}</code> | <span className="api-desc">The tag for empty cells.</span> |
| <Link id="m-generator" /><code><Link to="/mod/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The grid from the last generation.</span> |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | <span className="api-desc">Random seed for generation.</span> |
| <Link id="m-sizex-2" /><code>{"int SizeX { get; }"}</code> | <span className="api-desc">Grid width in cells.</span> |
| <Link id="m-sizey-2" /><code>{"int SizeY { get; }"}</code> | <span className="api-desc">Grid height in cells.</span> |
| <Link id="m-sizez-2" /><code>{"int SizeZ { get; }"}</code> | <span className="api-desc">Grid depth in cells.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void Generate()"}</code> | <span className="api-desc">Seeds the random state, runs each active child `GenerationStep`, then builds the object from `optionSet` as a child.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws a small cube in each tagged cell, coloured by its tag.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Runs `Generate` when one of the regenerate buttons is pressed in the inspector, picking a new seed if asked.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenerationBase`:

<div className="api-used-in">

[`ApplyGenerationRule.Run`](/mod/game-api/types/alta-world-generation/applygenerationrule#m-run), [`BuildingRooms.generationBase`](/mod/game-api/types/alta-world-generation/buildingrooms#m-generationbase), [`BuildingRooms.Run`](/mod/game-api/types/alta-world-generation/buildingrooms#m-run), [`Decay.Run`](/mod/game-api/types/alta-world-generation/decay#m-run), [`GenerationStep.Run`](/mod/game-api/types/alta-world-generation/generationstep#m-run).

</div>
