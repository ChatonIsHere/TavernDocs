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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`BezierSpline`](/game-api/types/alta-utilities/bezierspline), [`StaticEnvironmentPieceInstance`](/game-api/types/alta-world/staticenvironmentpieceinstance)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Reverts what the instruction did. |

## Used in

Members of other types that take, return or hold a `IInstructionResult`:

[`ForestGCoreInstruction.Execute`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-execute), [`RiverGCoreInstruction.Execute`](/game-api/types/alta-world-generation/rivergcoreinstruction#m-execute), [`SplineInstruction.Execute`](/game-api/types/alta-world-generation/splineinstruction#m-execute), [`Instruction.execute`](/game-api/types/alta-world/instruction#m-execute), [`Instruction.Execute`](/game-api/types/alta-world/instruction#m-execute-2), [`Instruction.SerializeAndExecute`](/game-api/types/alta-world/instruction#m-serializeandexecute), [`InstructionSet.results`](/game-api/types/alta-world/instructionset#m-results), [`InstructionSet.Results`](/game-api/types/alta-world/instructionset#m-results-2), [`SpawnInstruction.Execute`](/game-api/types/alta-world/spawninstruction#m-execute).
