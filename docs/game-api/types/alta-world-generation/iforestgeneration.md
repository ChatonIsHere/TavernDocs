---
title: "IForestGeneration"
description: "A forest part: GenerateGlobal, GenerateStatic (adds instructions), GenerateDynamic, ClearStatic, ClearDynamic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IForestGeneration

An **interface** in `Root.Township`, `Alta.Forests`.

A forest part: `GenerateGlobal`, `GenerateStatic` (adds instructions), `GenerateDynamic`, `ClearStatic`, `ClearDynamic`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`ForestBridges`](/game-api/types/alta-world-generation/forestbridges), [`ForestEncounters`](/game-api/types/alta-world-generation/forestencounters), [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore), [`RiverCollision`](/game-api/types/alta-world-generation/rivercollision), [`RiverEncounters`](/game-api/types/alta-world-generation/riverencounters)
- **Documented in** [Forest](/game-api/world/forest)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"void ClearDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-clearstatic" /><code>{"void ClearStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-generatedynamic" /><code>{"Task GenerateDynamic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-generateglobal" /><code>{"Task GenerateGlobal("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-generatestatic" /><code>{"Task GenerateStatic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IForestGeneration`:

[`ForestGenerator.forestGeneration`](/game-api/types/alta-world-generation/forestgenerator#m-forestgeneration).
