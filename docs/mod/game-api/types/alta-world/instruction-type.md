---
title: "Instruction.Type"
description: "Kind of static world build instruction (Spawn, Spline, ForestGCore, RiverGCore)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Instruction.Type

An **enum** in `Root.Township`, `Alta.Static`.

Kind of static world build instruction (Spawn, Spline, ForestGCore, RiverGCore). `Instruction` maps each to the class that creates and runs it.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`Instruction`](/mod/game-api/types/alta-world/instruction)

## Values

| Member |
| --- |
| <Link id="m-forestgcore" /><code>{"ForestGCore = 3"}</code> |
| <Link id="m-rivergcore" /><code>{"RiverGCore = 4"}</code> |
| <Link id="m-spawn" /><code>{"Spawn = 1"}</code> |
| <Link id="m-spline" /><code>{"Spline = 2"}</code> |

## Used in

Members of other types that take, return or hold a `Type`:

[`Instruction.create`](/mod/game-api/types/alta-world/instruction#m-create), [`Instruction.execute`](/mod/game-api/types/alta-world/instruction#m-execute), [`Instruction.Instruction`](/mod/game-api/types/alta-world/instruction#m-ctor), [`Instruction.type`](/mod/game-api/types/alta-world/instruction#m-type).
