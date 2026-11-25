---
title: "InstructionSet"
description: "A list of Instructions and the results of running them. Cached on disk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstructionSet

A **class** in `Root.Township`, `Alta.Static`.

A list of `Instruction`s and the results of running them. Cached on disk.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ICacheable`](/game-api/types/alta-world/icacheable)
- **Documented in** [Static objects](/game-api/world/static-objects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstructionSet()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-adding" /><code>{"private ConcurrentQueue<"}<Link to="/game-api/types/alta-world/instruction">{"Instruction"}</Link>{"> adding"}</code> |  |
| <Link id="m-instructions" /><code>{"private List<"}<Link to="/game-api/types/alta-world/instruction">{"Instruction"}</Link>{"> instructions"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-reader" /><code>{"private "}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" reader"}</code> |  |
| <Link id="m-readeroffset" /><code>{"private uint readerOffset"}</code> |  |
| <Link id="m-results" /><code>{"private List<"}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{"> results"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-results-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{"> Results { get; }"}</code> |  |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-world/instruction">{"Instruction"}</Link>{" instruction)"}</code> |  |
| <Link id="m-execute" /><code>{"Task Execute(object context, int instructionsPerFrame = 10)"}</code> |  |
| <Link id="m-execute-2" /><code>{"Task Execute(object context, Task addingFinished, int instructionsPerFrame = 10)"}</code> |  |
| <Link id="m-getinstructions" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/instruction">{"Instruction"}</Link>{"> GetInstructions()"}</code> |  |
| <Link id="m-serializeasync" /><code>{"Task SerializeAsync(uint version, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-undo" /><code>{"void Undo()"}</code> |  |
| <Link id="m-executeinternal" /><code>{"private IEnumerator ExecuteInternal(object context, Task addingFinished, int instructionsPerFrame) (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `InstructionSet`:

[`CliffFill.GenerateInternal`](/game-api/types/alta-world-generation/clifffill#m-generateinternal), [`CutoutPathEdgeFill.GenerateInternal`](/game-api/types/alta-world-generation/cutoutpathedgefill#m-generateinternal), [`ForestBridges.GenerateStatic`](/game-api/types/alta-world-generation/forestbridges#m-generatestatic), [`ForestEncounters.GenerateStatic`](/game-api/types/alta-world-generation/forestencounters#m-generatestatic), [`ForestFill.GenerateInternal`](/game-api/types/alta-world-generation/forestfill#m-generateinternal), [`ForestFillCore.AddInstructions`](/game-api/types/alta-world-generation/forestfillcore#m-addinstructions), [`ForestFillCore.GenerateInternal`](/game-api/types/alta-world-generation/forestfillcore#m-generateinternal), [`ForestFillCore.GenerateStatic`](/game-api/types/alta-world-generation/forestfillcore#m-generatestatic), [`ForestGenerator.GetChunkInstructionsAsync`](/game-api/types/alta-world-generation/forestgenerator#m-getchunkinstructionsasync), [`ForestGenerator.instructions`](/game-api/types/alta-world-generation/forestgenerator#m-instructions), [`IForestGeneration.GenerateStatic`](/game-api/types/alta-world-generation/iforestgeneration#m-generatestatic), [`RiverCenterFill.GenerateInternal`](/game-api/types/alta-world-generation/rivercenterfill#m-generateinternal), [`RiverCollision.GenerateStatic`](/game-api/types/alta-world-generation/rivercollision#m-generatestatic), [`RiverEdgeFill.GenerateInternal`](/game-api/types/alta-world-generation/riveredgefill#m-generateinternal), [`RiverEncounters.GenerateStatic`](/game-api/types/alta-world-generation/riverencounters#m-generatestatic).
