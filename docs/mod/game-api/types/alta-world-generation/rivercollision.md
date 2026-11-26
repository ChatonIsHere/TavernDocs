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
| <Link id="m-ctor" /><code>{"RiverCollision()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnregenerate" /><code>{"private bool btnRegenerate"}</code> | <span className="api-desc">Inspector button that calls `Regenerate`.</span> |
| <Link id="m-endcapscale" /><code>{"private float endCapScale"}</code> | <span className="api-desc">Length scale for a box end where the river starts or finishes.</span> |
| <Link id="m-endscale" /><code>{"private float endScale"}</code> | <span className="api-desc">Length scale for a box end that joins another river path.</span> |
| <Link id="m-forest" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | <span className="api-desc">The forest generator used by `Regenerate`.</span> |
| <Link id="m-horizontalscale" /><code>{"private float horizontalScale"}</code> | <span className="api-desc">Box width as a multiple of river width.</span> |
| <Link id="m-isshowingboxes" /><code>{"private bool isShowingBoxes"}</code> | <span className="api-desc">When on, the trigger prefab is a visible cube, for debugging.</span> |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainertrigger">{"LiquidContainerTrigger"}</Link>{" liquidContainer"}</code> | <span className="api-desc">The liquid trigger that river enters and exits are forwarded to.</span> |
| <Link id="m-locomotionmodifier" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotionmodifier">{"LocomotionModifier"}</Link>{" locomotionModifier"}</code> | <span className="api-desc">The locomotion modifier that river enters and exits are forwarded to.</span> |
| <Link id="m-normaloffset" /><code>{"private float normalOffset"}</code> | <span className="api-desc">Offset along each box's up direction.</span> |
| <Link id="m-prefab" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" prefab"}</code> | <span className="api-desc">Shared, inactive trigger box prefab, built once in `Initialize`.</span> |
| <Link id="m-spawned" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{"> spawned"}</code> | <span className="api-desc">The trigger boxes spawned so far.</span> |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | <span className="api-desc">Extra world-up offset for each box.</span> |
| <Link id="m-verticalscale" /><code>{"private float verticalScale"}</code> | <span className="api-desc">Box height as a multiple of river width.</span> |

</details>

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleardynamic" /><code>{"private void Alta.Forests.IForestGeneration.ClearDynamic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-clearstatic" /><code>{"private void Alta.Forests.IForestGeneration.ClearStatic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-entered" /><code>{"private void Entered(Collider collider)"}</code> | <span className="api-desc">Passes a collider entering any river trigger to the locomotion modifier and liquid container.</span> |
| <Link id="m-exited" /><code>{"private void Exited(Collider collider)"}</code> | <span className="api-desc">Passes a collider leaving any river trigger to the locomotion modifier and liquid container.</span> |
| <Link id="m-generatedynamic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateDynamic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-generateglobal" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateGlobal("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Spawns a box trigger for each overground river path, plus one at each river end, sized from the river width.</span> |
| <Link id="m-generatestatic" /><code>{"private Task Alta.Forests.IForestGeneration.GenerateStatic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instruction)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-initialize" /><code>{"private void Alta.Forests.IForestGeneration.Initialize()"}</code> | <span className="api-desc">Builds the shared trigger box prefab once (a visible cube if `isShowingBoxes`).</span> |
| <Link id="m-regenerate" /><code>{"private void Regenerate()"}</code> | <span className="api-desc">Destroys the spawned triggers and runs `GenerateGlobal` again. Wired to an inspector button.</span> |

</details>
