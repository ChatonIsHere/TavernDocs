---
title: "ForestBridges"
description: "class ForestBridges in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestBridges

A **class** in `Root.Township`, `Alta.Forests`.

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

| Member |
| --- |
| <Link id="m-btnmigrate" /><code>{"private bool btnMigrate"}</code> |
| <Link id="m-options" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestbridges-option">{"ForestBridges.Option"}</Link>{"[] options"}</code> |
| <Link id="m-riverwidthmultiplier" /><code>{"private float riverWidthMultiplier"}</code> |
| <Link id="m-totalweights" /><code>{"private float totalWeights"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-clearstatic" /><code>{"void ClearStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-generatedynamic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |
| <Link id="m-generatestatic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> |
| <Link id="m-getoverlap" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{" GetOverlap("}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge, float pathProgress, Vector2 start, Vector2 end, out float progress)"}</code> |
| <Link id="m-migrate" /><code>{"private void Migrate()"}</code> |

</details>
