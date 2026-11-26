---
title: "ForestBridges"
description: "Forest generation step that places bridges, as spline instructions, where paths cross rivers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestBridges

A **class** in `Root.Township`, `Alta.Forests`.

Forest generation step that places bridges, as spline instructions, where paths cross rivers.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/game-api/types/alta-world-generation/iforestgeneration)
- **Nested types** [`Option`](/game-api/types/alta-world-generation/forestbridges-option)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestBridges()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnmigrate" /><code>{"private bool btnMigrate"}</code> | Inspector button for `Migrate`. |
| <Link id="m-options" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestbridges-option">{"ForestBridges.Option"}</Link>{"[] options"}</code> | Bridge styles with offsets, handle lengths, heights and pick weights. |
| <Link id="m-riverwidthmultiplier" /><code>{"private float riverWidthMultiplier"}</code> | Scales river radius to place the bank lines. |
| <Link id="m-totalweights" /><code>{"private float totalWeights"}</code> | Sum of option weights, worked out on first use. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearstatic" /><code>{"void ClearStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Does nothing. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-generatedynamic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Does nothing. |
| <Link id="m-generatestatic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | For each river crossing in the chunk, finds the path on both banks, picks a weighted bridge option and adds a spline between the banks. |
| <Link id="m-getoverlap" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{" GetOverlap("}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge, float pathProgress, Vector2 start, Vector2 end, out float progress)"}</code> | Finds the path (the edge or one leaving its nearer node) that crosses the given bank line, and where. |
| <Link id="m-migrate" /><code>{"private void Migrate()"}</code> | Editor button: makes a `StaticEnvironmentPieceInstance` on each option's display object. |

</details>
