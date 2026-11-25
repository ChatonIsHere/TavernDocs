---
title: "GenerationBase"
description: "class GenerationBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationBase

A **class** in `Root.Township`, `Alta.PAGaC`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air"}</code> |  |
| <Link id="m-generated" /><code>{"private GameObject generated"}</code> |  |
| <Link id="m-isregenerating" /><code>{"private bool isRegenerating"}</code> |  |
| <Link id="m-isregeneratingwithnewseed" /><code>{"private bool isRegeneratingWithNewSeed"}</code> |  |
| <Link id="m-optionset" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> |  |
| <Link id="m-sizey" /><code>{"private int sizeY"}</code> |  |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" Air { get; }"}</code> |  |
| <Link id="m-generator" /><code><Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> |  |
| <Link id="m-sizex-2" /><code>{"int SizeX { get; }"}</code> |  |
| <Link id="m-sizey-2" /><code>{"int SizeY { get; }"}</code> |  |
| <Link id="m-sizez-2" /><code>{"int SizeZ { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void Generate()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenerationBase`:

[`ApplyGenerationRule.Run`](/game-api/types/alta-world-generation/applygenerationrule#m-run), [`BuildingRooms.generationBase`](/game-api/types/alta-world-generation/buildingrooms#m-generationbase), [`BuildingRooms.Run`](/game-api/types/alta-world-generation/buildingrooms#m-run), [`Decay.Run`](/game-api/types/alta-world-generation/decay#m-run), [`GenerationStep.Run`](/game-api/types/alta-world-generation/generationstep#m-run).
