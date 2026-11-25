---
title: "RiverGCoreInstruction"
description: "class RiverGCoreInstruction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverGCoreInstruction

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Instruction`](/game-api/types/alta-world/instruction)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RiverGCoreInstruction()"}</code> |
| <Link id="m-ctor-2" /><code>{"RiverGCoreInstruction("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, uint seed, Vector3 position, Quaternion rotation, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" node, "}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> |
| <Link id="m-node" /><code>{"private int node"}</code> |
| <Link id="m-patha" /><code>{"private int pathA"}</code> |
| <Link id="m-pathb" /><code>{"private int pathB"}</code> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |
| <Link id="m-seed" /><code>{"private uint seed"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
