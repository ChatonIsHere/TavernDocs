---
title: "IForestGeneration"
description: "One step of forest world generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IForestGeneration

An **interface** in `Root.Township`, `Alta.Forests`.

One step of forest world generation. Runs once for the whole world, then per location chunk for static (cached) and dynamic content.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`ForestBridges`](/game-api/types/alta-world-generation/forestbridges), [`ForestEncounters`](/game-api/types/alta-world-generation/forestencounters), [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore), [`RiverCollision`](/game-api/types/alta-world-generation/rivercollision), [`RiverEncounters`](/game-api/types/alta-world-generation/riverencounters)
- **Documented in** [Forest](/game-api/world/forest)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"void ClearDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Removes the step's dynamic content from a chunk. |
| <Link id="m-clearstatic" /><code>{"void ClearStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Removes the step's static content from a chunk. |
| <Link id="m-generatedynamic" /><code>{"Task GenerateDynamic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Generates dynamic content for a chunk. |
| <Link id="m-generateglobal" /><code>{"Task GenerateGlobal("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Generates anything that spans the whole forest. |
| <Link id="m-generatestatic" /><code>{"Task GenerateStatic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | Generates static content for a chunk into an instruction set that can be cached. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Prepares the step before generating. |

## Used in

Members of other types that take, return or hold a `IForestGeneration`:

[`ForestGenerator.forestGeneration`](/game-api/types/alta-world-generation/forestgenerator#m-forestgeneration).
