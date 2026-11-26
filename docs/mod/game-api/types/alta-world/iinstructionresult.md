---
title: "IInstructionResult"
description: "The result of one world generation instruction (such as a spline or river), which the forest generator can undo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInstructionResult

An **interface** in `Root.Township`, `Alta.Static`.

The result of one world generation instruction (such as a spline or river), which the forest generator can undo.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`BezierSpline`](/mod/game-api/types/alta-utilities/bezierspline), [`StaticEnvironmentPieceInstance`](/mod/game-api/types/alta-world/staticenvironmentpieceinstance)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Reverts what the instruction did. |

## Used in

Members of other types that take, return or hold a `IInstructionResult`:

[`ForestGCoreInstruction.Execute`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction#m-execute), [`RiverGCoreInstruction.Execute`](/mod/game-api/types/alta-world-generation/rivergcoreinstruction#m-execute), [`SplineInstruction.Execute`](/mod/game-api/types/alta-world-generation/splineinstruction#m-execute), [`Instruction.execute`](/mod/game-api/types/alta-world/instruction#m-execute), [`Instruction.Execute`](/mod/game-api/types/alta-world/instruction#m-execute-2), [`Instruction.SerializeAndExecute`](/mod/game-api/types/alta-world/instruction#m-serializeandexecute), [`InstructionSet.results`](/mod/game-api/types/alta-world/instructionset#m-results), [`InstructionSet.Results`](/mod/game-api/types/alta-world/instructionset#m-results-2), [`SpawnInstruction.Execute`](/mod/game-api/types/alta-world/spawninstruction#m-execute).
