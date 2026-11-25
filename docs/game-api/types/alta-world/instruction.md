---
title: "Instruction"
description: "One cached world-generation step (spawn, spline, forest core or river core) that can be saved to a stream and replayed later."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Instruction

An **abstract class** in `Root.Township`, `Alta.Static`.

One cached world-generation step (spawn, spline, forest core or river core) that can be saved to a stream and replayed later. Subclasses are `SpawnInstruction`, `SplineInstruction`, `ForestGCoreInstruction` and `RiverGCoreInstruction`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`ForestGCoreInstruction`](/game-api/types/alta-world-generation/forestgcoreinstruction), [`RiverGCoreInstruction`](/game-api/types/alta-world-generation/rivergcoreinstruction), [`SplineInstruction`](/game-api/types/alta-world-generation/splineinstruction), [`SpawnInstruction`](/game-api/types/alta-world/spawninstruction)
- **Nested types** [`Type`](/game-api/types/alta-world/instruction-type)
- **Documented in** [Static objects](/game-api/world/static-objects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Instruction("}<Link to="/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{" type)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-create" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{", Func<"}<Link to="/game-api/types/alta-world/instruction">{"Instruction"}</Link>{">> create"}</code> |
| <Link id="m-execute" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{", Func<"}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{", object, "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{">> execute"}</code> |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{" type"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute-2" /><code>{"static "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute("}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream, object context)"}</code> | Runs the instruction. The static overload reads type and data from a stream and runs it without keeping the object. |
| <Link id="m-execute-3" /><code>{"abstract "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | Runs the instruction. The static overload reads type and data from a stream and runs it without keeping the object. |
| <Link id="m-reconstruct" /><code>{"static "}<Link to="/game-api/types/alta-world/instruction">{"Instruction"}</Link>{" Reconstruct("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads a type id from a stream and builds that instruction from the data that follows. |
| <Link id="m-save" /><code>{"void Save("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the instruction's type id, then its own data. |
| <Link id="m-serializeandexecute" /><code><Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" SerializeAndExecute("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, object context)"}</code> | Reads the instruction's fields from a stream and runs it straight away. |
| <Link id="m-serializeinternal" /><code>{"protected abstract void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the instruction's own fields. |

## Used in

Members of other types that take, return or hold a `Instruction`:

[`InstructionSet.Add`](/game-api/types/alta-world/instructionset#m-add), [`InstructionSet.adding`](/game-api/types/alta-world/instructionset#m-adding), [`InstructionSet.GetInstructions`](/game-api/types/alta-world/instructionset#m-getinstructions), [`InstructionSet.instructions`](/game-api/types/alta-world/instructionset#m-instructions).
