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
| <Link id="m-ctor" /><code>{"RiverEncounters()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exits" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" exits"}</code> | <span className="api-desc">Pipeline for nodes where the river ends.</span> |
| <Link id="m-forks" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" forks"}</code> | <span className="api-desc">Pipeline for nodes where more than two overground paths meet.</span> |
| <Link id="m-openings" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" openings"}</code> | <span className="api-desc">Pipeline for nodes where the river starts (skipped if the node's static volume multiplier is above 1).</span> |
| <Link id="m-paths" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" paths"}</code> | <span className="api-desc">Pipeline for the middle of each overground path that isn't a waterfall.</span> |
| <Link id="m-waterfalltops" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" waterfallTops"}</code> | <span className="api-desc">Pipeline for the top of each waterfall.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Does nothing.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-clearstatic" /><code>{"private void Alta.Forests.IForestGeneration.ClearStatic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-generatedynamic" /><code>{"private async Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-generatestatic" /><code>{"private async Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instruction)"}</code> | <span className="api-desc">For river features inside the chunk, picks a core from the matching pipeline and adds a `RiverGCoreInstruction`, seeded from forest and chunk seeds.</span> |

</details>
