---
title: "RiverCollision"
description: "A forest generation step that spawns box trigger colliders along the overground river, which pass enters and exits to a locomotion modifier and a liquid..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverCollision

A **class** in `Root.Township`, `Alta.Forests`.

A forest generation step that spawns box trigger colliders along the overground river, which pass enters and exits to a locomotion modifier and a liquid container (wading and filling from the river).

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/mod/game-api/types/alta-world-generation/iforestgeneration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverCollision()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnregenerate" /><code>{"private bool btnRegenerate"}</code> | Inspector button that calls `Regenerate`. |
| <Link id="m-endcapscale" /><code>{"private float endCapScale"}</code> | Length scale for a box end where the river starts or finishes. |
| <Link id="m-endscale" /><code>{"private float endScale"}</code> | Length scale for a box end that joins another river path. |
| <Link id="m-forest" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | The forest generator used by `Regenerate`. |
| <Link id="m-horizontalscale" /><code>{"private float horizontalScale"}</code> | Box width as a multiple of river width. |
| <Link id="m-isshowingboxes" /><code>{"private bool isShowingBoxes"}</code> | When on, the trigger prefab is a visible cube, for debugging. |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainertrigger">{"LiquidContainerTrigger"}</Link>{" liquidContainer"}</code> | The liquid trigger that river enters and exits are forwarded to. |
| <Link id="m-locomotionmodifier" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotionmodifier">{"LocomotionModifier"}</Link>{" locomotionModifier"}</code> | The locomotion modifier that river enters and exits are forwarded to. |
| <Link id="m-normaloffset" /><code>{"private float normalOffset"}</code> | Offset along each box's up direction. |
| <Link id="m-prefab" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" prefab"}</code> | Shared, inactive trigger box prefab, built once in `Initialize`. |
| <Link id="m-spawned" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{"> spawned"}</code> | The trigger boxes spawned so far. |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | Extra world-up offset for each box. |
| <Link id="m-verticalscale" /><code>{"private float verticalScale"}</code> | Box height as a multiple of river width. |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-clearstatic" /><code>{"private void Alta.Forests.IForestGeneration.ClearStatic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-entered" /><code>{"private void Entered(Collider collider)"}</code> | Passes a collider entering any river trigger to the locomotion modifier and liquid container. |
| <Link id="m-exited" /><code>{"private void Exited(Collider collider)"}</code> | Passes a collider leaving any river trigger to the locomotion modifier and liquid container. |
| <Link id="m-generatedynamic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Does nothing. |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Spawns a box trigger for each overground river path, plus one at each river end, sized from the river width. |
| <Link id="m-generatestatic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instruction)"}</code> | Does nothing. |
| <Link id="m-initialize" /><code>{"private void Alta.Forests.IForestGeneration.Initialize()"}</code> | Builds the shared trigger box prefab once (a visible cube if `isShowingBoxes`). |
| <Link id="m-regenerate" /><code>{"private void Regenerate()"}</code> | Destroys the spawned triggers and runs `GenerateGlobal` again. Wired to an inspector button. |

</details>
