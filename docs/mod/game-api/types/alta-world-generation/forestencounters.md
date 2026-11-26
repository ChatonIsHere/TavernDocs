---
title: "ForestEncounters"
description: "Forest generation step that places encounter generation cores (GCores) on paths, large clearings, crossroads and dead ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestEncounters

A **class** in `Root.Township`, `Alta.Forests`.

Forest generation step that places encounter generation cores (GCores) on paths, large clearings, crossroads and dead ends.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/mod/game-api/types/alta-world-generation/iforestgeneration)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestEncounters()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-crossroads" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" crossRoads"}</code> | <span className="api-desc">Cores for nodes with more than two paths.</span> |
| <Link id="m-deadends" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" deadEnds"}</code> | <span className="api-desc">Cores for nodes with one path.</span> |
| <Link id="m-edgetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" edgeType"}</code> | <span className="api-desc">Edge types that get path encounters.</span> |
| <Link id="m-largeencounterradiusthreshold" /><code>{"private float largeEncounterRadiusThreshold"}</code> | <span className="api-desc">Nodes larger than this get a large encounter instead.</span> |
| <Link id="m-largeencounters" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" largeEncounters"}</code> | <span className="api-desc">Cores for large nodes.</span> |
| <Link id="m-paths" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" paths"}</code> | <span className="api-desc">Cores placed along edges, facing along them.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Does nothing.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-clearstatic" /><code>{"private void Alta.Forests.IForestGeneration.ClearStatic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-editorpreview" /><code>{"private void EditorPreview()"}</code> | <span className="api-desc">Context menu: spawns every encounter core in a row with labels, to preview them.</span> |
| <Link id="m-generatedynamic" /><code>{"private async Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-generatestatic" /><code>{"private async Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | <span className="api-desc">Adds GCore instructions for matching edges and for nodes by size and number of paths. Entrances and open spaces are skipped.</span> |

</details>
