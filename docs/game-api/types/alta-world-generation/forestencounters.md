---
title: "ForestEncounters"
description: "Places encounters along the paths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestEncounters

A **class** in `Root.Township`, `Alta.Forests`.

Places encounters along the paths.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/game-api/types/alta-world-generation/iforestgeneration)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestEncounters()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-crossroads" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" crossRoads"}</code> |
| <Link id="m-deadends" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" deadEnds"}</code> |
| <Link id="m-edgetype" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" edgeType"}</code> |
| <Link id="m-largeencounterradiusthreshold" /><code>{"private float largeEncounterRadiusThreshold"}</code> |
| <Link id="m-largeencounters" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" largeEncounters"}</code> |
| <Link id="m-paths" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" paths"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-clearstatic" /><code>{"private void Alta.Forests.IForestGeneration.ClearStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-editorpreview" /><code>{"private void EditorPreview()"}</code> |
| <Link id="m-generatedynamic" /><code>{"private async Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |
| <Link id="m-generatestatic" /><code>{"private async Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> |

</details>
