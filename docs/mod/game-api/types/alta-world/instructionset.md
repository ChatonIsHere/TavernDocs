---
title: "InstructionSet"
description: "A cacheable list of world-generation instructions for one chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstructionSet

A **class** in `Root.Township`, `Alta.Static`.

A cacheable list of world-generation instructions for one chunk. Forest generation fills it, it saves to the cache, and later replays the instructions a few per frame.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`ICacheable`](/mod/game-api/types/alta-world/icacheable)
- **Documented in** [Static objects](/mod/game-api/world/static-objects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstructionSet()"}</code> | Creates an `InstructionSet` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adding" /><code>{"private ConcurrentQueue<"}<Link to="/mod/game-api/types/alta-world/instruction">{"Instruction"}</Link>{"> adding"}</code> | Thread-safe queue of instructions added (possibly from generation threads) that are not yet in `instructions`. |
| <Link id="m-instructions" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world/instruction">{"Instruction"}</Link>{"> instructions"}</code> | Instructions held in memory. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-reader" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" reader"}</code> | Cache stream the set was loaded from. Instructions are read from it lazily on execute or `GetInstructions`. |
| <Link id="m-readeroffset" /><code>{"private uint readerOffset"}</code> | Bit position in `reader` where this set's data starts. |
| <Link id="m-results" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{"> results"}</code> | Backing field for `Results`: what each executed instruction made, so `Undo` can remove it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-results-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{"> Results { get; }"}</code> | Results of the instructions run so far, kept so they can be undone. |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> | Cache format version, always 1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/alta-world/instruction">{"Instruction"}</Link>{" instruction)"}</code> | Queues an instruction. Safe to call from other threads. |
| <Link id="m-execute" /><code>{"Task Execute(object context, int instructionsPerFrame = 10)"}</code> | Runs all instructions over several frames (10 per frame by default), also running ones still being added until the given task finishes. |
| <Link id="m-execute-2" /><code>{"Task Execute(object context, Task addingFinished, int instructionsPerFrame = 10)"}</code> | Runs all instructions over several frames (10 per frame by default), also running ones still being added until the given task finishes. |
| <Link id="m-getinstructions" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/instruction">{"Instruction"}</Link>{"> GetInstructions()"}</code> | Returns all instructions, decoding any still only in the loaded cache stream. |
| <Link id="m-serializeasync" /><code>{"Task SerializeAsync(uint version, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the instructions, or on read just remembers the stream so they're decoded when needed. |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Undoes every result and clears the list. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-executeinternal" /><code>{"private IEnumerator ExecuteInternal(object context, Task addingFinished, int instructionsPerFrame) (iterator)"}</code> | Coroutine that runs the stored instructions in batches per frame, then any added later, then any still in a loaded stream. |

</details>

## Used in

Members of other types that take, return or hold a `InstructionSet`:

[`CliffFill.GenerateInternal`](/mod/game-api/types/alta-world-generation/clifffill#m-generateinternal), [`CutoutPathEdgeFill.GenerateInternal`](/mod/game-api/types/alta-world-generation/cutoutpathedgefill#m-generateinternal), [`ForestBridges.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestbridges#m-generatestatic), [`ForestEncounters.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestencounters#m-generatestatic), [`ForestFill.GenerateInternal`](/mod/game-api/types/alta-world-generation/forestfill#m-generateinternal), [`ForestFillCore.AddInstructions`](/mod/game-api/types/alta-world-generation/forestfillcore#m-addinstructions), [`ForestFillCore.GenerateInternal`](/mod/game-api/types/alta-world-generation/forestfillcore#m-generateinternal), [`ForestFillCore.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestfillcore#m-generatestatic), [`ForestGenerator.GetChunkInstructionsAsync`](/mod/game-api/types/alta-world-generation/forestgenerator#m-getchunkinstructionsasync), [`ForestGenerator.instructions`](/mod/game-api/types/alta-world-generation/forestgenerator#m-instructions), [`IForestGeneration.GenerateStatic`](/mod/game-api/types/alta-world-generation/iforestgeneration#m-generatestatic), [`RiverCenterFill.GenerateInternal`](/mod/game-api/types/alta-world-generation/rivercenterfill#m-generateinternal), [`RiverCollision.GenerateStatic`](/mod/game-api/types/alta-world-generation/rivercollision#m-generatestatic), [`RiverEdgeFill.GenerateInternal`](/mod/game-api/types/alta-world-generation/riveredgefill#m-generateinternal), [`RiverEncounters.GenerateStatic`](/mod/game-api/types/alta-world-generation/riverencounters#m-generatestatic).
