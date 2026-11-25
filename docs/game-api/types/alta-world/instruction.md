---
title: "Instruction"
description: "Subclasses include SpawnInstruction (place a StaticEnvironmentPiece at a position, rotation and scale) and the forest's own instructions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Instruction

An **abstract class** in `Root.Township`, `Alta.Static`.

Subclasses include `SpawnInstruction` (place a `StaticEnvironmentPiece` at a position, rotation and scale) and the forest's own instructions.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`ForestGCoreInstruction`](/game-api/types/alta-world-generation/forestgcoreinstruction), [`RiverGCoreInstruction`](/game-api/types/alta-world-generation/rivergcoreinstruction), [`SplineInstruction`](/game-api/types/alta-world-generation/splineinstruction), [`SpawnInstruction`](/game-api/types/alta-world/spawninstruction)
- **Nested types** [`Type`](/game-api/types/alta-world/instruction-type)
- **Documented in** [Static objects](/game-api/world/static-objects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Instruction("}<Link to="/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{" type)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{", Func<"}<Link to="/game-api/types/alta-world/instruction">{"Instruction"}</Link>{">> create"}</code> |  |
| <Link id="m-execute" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{", Func<"}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{", object, "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{">> execute"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{" type"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute-2" /><code>{"static "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute("}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream, object context)"}</code> |  |
| <Link id="m-execute-3" /><code>{"abstract "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> |  |
| <Link id="m-reconstruct" /><code>{"static "}<Link to="/game-api/types/alta-world/instruction">{"Instruction"}</Link>{" Reconstruct("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-save" /><code>{"void Save("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializeandexecute" /><code><Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" SerializeAndExecute("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, object context)"}</code> |  |
| <Link id="m-serializeinternal" /><code>{"protected abstract void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Instruction`:

[`InstructionSet.Add`](/game-api/types/alta-world/instructionset#m-add), [`InstructionSet.adding`](/game-api/types/alta-world/instructionset#m-adding), [`InstructionSet.GetInstructions`](/game-api/types/alta-world/instructionset#m-getinstructions), [`InstructionSet.instructions`](/game-api/types/alta-world/instructionset#m-instructions).
