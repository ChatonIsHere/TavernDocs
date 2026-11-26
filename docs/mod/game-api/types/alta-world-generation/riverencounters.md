---
title: "RiverEncounters"
description: "A forest generation step that places generation cores along the river per chunk: on paths, river openings, forks, exits and waterfall tops."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverEncounters

A **class** in `Root.Township`, `Alta.Forests`.

A forest generation step that places generation cores along the river per chunk: on paths, river openings, forks, exits and waterfall tops.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/mod/game-api/types/alta-world-generation/iforestgeneration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverEncounters()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exits" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" exits"}</code> | Pipeline for nodes where the river ends. |
| <Link id="m-forks" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" forks"}</code> | Pipeline for nodes where more than two overground paths meet. |
| <Link id="m-openings" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" openings"}</code> | Pipeline for nodes where the river starts (skipped if the node's static volume multiplier is above 1). |
| <Link id="m-paths" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" paths"}</code> | Pipeline for the middle of each overground path that isn't a waterfall. |
| <Link id="m-waterfalltops" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" waterfallTops"}</code> | Pipeline for the top of each waterfall. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Does nothing. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-clearstatic" /><code>{"private void Alta.Forests.IForestGeneration.ClearStatic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-generatedynamic" /><code>{"private async Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Does nothing. |
| <Link id="m-generatestatic" /><code>{"private async Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instruction)"}</code> | For river features inside the chunk, picks a core from the matching pipeline and adds a `RiverGCoreInstruction`, seeded from forest and chunk seeds. |

</details>
