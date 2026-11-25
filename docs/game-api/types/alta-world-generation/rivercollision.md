---
title: "RiverCollision"
description: "class RiverCollision in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverCollision

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/game-api/types/alta-world-generation/iforestgeneration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverCollision()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-btnregenerate" /><code>{"private bool btnRegenerate"}</code> |  |
| <Link id="m-endcapscale" /><code>{"private float endCapScale"}</code> |  |
| <Link id="m-endscale" /><code>{"private float endScale"}</code> |  |
| <Link id="m-forest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> |  |
| <Link id="m-horizontalscale" /><code>{"private float horizontalScale"}</code> |  |
| <Link id="m-isshowingboxes" /><code>{"private bool isShowingBoxes"}</code> |  |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainertrigger">{"LiquidContainerTrigger"}</Link>{" liquidContainer"}</code> |  |
| <Link id="m-locomotionmodifier" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotionmodifier">{"LocomotionModifier"}</Link>{" locomotionModifier"}</code> |  |
| <Link id="m-normaloffset" /><code>{"private float normalOffset"}</code> |  |
| <Link id="m-prefab" /><code>{"private static "}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" prefab"}</code> |  |
| <Link id="m-spawned" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{"> spawned"}</code> |  |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> |  |
| <Link id="m-verticalscale" /><code>{"private float verticalScale"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-clearstatic" /><code>{"private void Alta.Forests.IForestGeneration.ClearStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-entered" /><code>{"private void Entered(Collider collider)"}</code> |  |
| <Link id="m-exited" /><code>{"private void Exited(Collider collider)"}</code> |  |
| <Link id="m-generatedynamic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-generatestatic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instruction)"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Alta.Forests.IForestGeneration.Initialize()"}</code> |  |
| <Link id="m-regenerate" /><code>{"private void Regenerate()"}</code> |  |
