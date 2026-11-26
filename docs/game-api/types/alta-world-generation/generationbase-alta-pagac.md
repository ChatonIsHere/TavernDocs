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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GenerationBase()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air"}</code> | Backing field for `Air`. |
| <Link id="m-generated" /><code>{"private GameObject generated"}</code> | The object built from the last generation. |
| <Link id="m-isregenerating" /><code>{"private bool isRegenerating"}</code> | Inspector button that regenerates with the same seed. |
| <Link id="m-isregeneratingwithnewseed" /><code>{"private bool isRegeneratingWithNewSeed"}</code> | Inspector button that regenerates with a random seed. |
| <Link id="m-optionset" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> | Options used to build the generated grid into objects. |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Backing field for `Seed`. |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> | Backing field for `SizeX`. |
| <Link id="m-sizey" /><code>{"private int sizeY"}</code> | Backing field for `SizeY`. |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> | Backing field for `SizeZ`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" Air { get; }"}</code> | The tag for empty cells. |
| <Link id="m-generator" /><code><Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" { get; private set; }"}</code> | The grid from the last generation. |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | Random seed for generation. |
| <Link id="m-sizex-2" /><code>{"int SizeX { get; }"}</code> | Grid width in cells. |
| <Link id="m-sizey-2" /><code>{"int SizeY { get; }"}</code> | Grid height in cells. |
| <Link id="m-sizez-2" /><code>{"int SizeZ { get; }"}</code> | Grid depth in cells. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void Generate()"}</code> | Seeds the random state, runs each active child `GenerationStep`, then builds the object from `optionSet` as a child. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws a small cube in each tagged cell, coloured by its tag. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Runs `Generate` when one of the regenerate buttons is pressed in the inspector, picking a new seed if asked. |

</details>

## Used in

Members of other types that take, return or hold a `GenerationBase`:

[`ApplyGenerationRule.Run`](/game-api/types/alta-world-generation/applygenerationrule#m-run), [`BuildingRooms.generationBase`](/game-api/types/alta-world-generation/buildingrooms#m-generationbase), [`BuildingRooms.Run`](/game-api/types/alta-world-generation/buildingrooms#m-run), [`Decay.Run`](/game-api/types/alta-world-generation/decay#m-run), [`GenerationStep.Run`](/game-api/types/alta-world-generation/generationstep#m-run).
