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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`ForestGCoreInstruction`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction), [`RiverGCoreInstruction`](/mod/game-api/types/alta-world-generation/rivergcoreinstruction), [`SplineInstruction`](/mod/game-api/types/alta-world-generation/splineinstruction), [`SpawnInstruction`](/mod/game-api/types/alta-world/spawninstruction)
- **Nested types** [`Type`](/mod/game-api/types/alta-world/instruction-type)
- **Documented in** [Static objects](/mod/game-api/world/static-objects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Instruction("}<Link to="/mod/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{" type)"}</code> | Creates an `Instruction` from `type`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger shared by instructions. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{", Func<"}<Link to="/mod/game-api/types/alta-world/instruction">{"Instruction"}</Link>{">> create"}</code> | Factory per instruction type, used by `Reconstruct` to make an empty instruction before reading it. |
| <Link id="m-execute" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{", Func<"}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{", object, "}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{">> execute"}</code> | Read-and-run function per instruction type, used by the static `Execute`. |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/instruction-type">{"Instruction.Type"}</Link>{" type"}</code> | This instruction's type, written as the first 8 bits by `Save`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute("}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream, object context)"}</code> | Runs the instruction. The static overload reads type and data from a stream and runs it without keeping the object. |
| <Link id="m-execute-3" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | Runs the instruction. The static overload reads type and data from a stream and runs it without keeping the object. |
| <Link id="m-reconstruct" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/instruction">{"Instruction"}</Link>{" Reconstruct("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads a type id from a stream and builds that instruction from the data that follows. |
| <Link id="m-save" /><code>{"void Save("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the instruction's type id, then its own data. |
| <Link id="m-serializeandexecute" /><code><Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" SerializeAndExecute("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, object context)"}</code> | Reads the instruction's fields from a stream and runs it straight away. |
| <Link id="m-serializeinternal" /><code>{"protected abstract void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the instruction's own fields. |

## Used in

Members of other types that take, return or hold a `Instruction`:

[`InstructionSet.Add`](/mod/game-api/types/alta-world/instructionset#m-add), [`InstructionSet.adding`](/mod/game-api/types/alta-world/instructionset#m-adding), [`InstructionSet.GetInstructions`](/mod/game-api/types/alta-world/instructionset#m-getinstructions), [`InstructionSet.instructions`](/mod/game-api/types/alta-world/instructionset#m-instructions).
