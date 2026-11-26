---
title: "GenericCraftingSettings"
description: "Global settings for generic crafting (building from ghost pieces and nailing them): piece and nail prefabs, ghost materials and effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingSettings

A **class** in `Root.Township`, `Alta.Crafting`.

Global settings for generic crafting (building from ghost pieces and nailing them): piece and nail prefabs, ghost materials and effects. All members are static shortcuts to `GenericCraftingSettings.Instance`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`GlobalSettings<GenericCraftingSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`GenericCraftingSettings`](/mod/game-api/types/alta-crafting/genericcraftingsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androiddestroyedpieceeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidDestroyedPieceEffect"}</code> | <span className="api-desc">Pooled effect for a destroyed piece on Android.</span> |
| <Link id="m-androidpiececompletedanimation" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidPieceCompletedAnimation"}</code> | <span className="api-desc">Pooled piece-completed animation on Android.</span> |
| <Link id="m-completedprojecteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" completedProjectEffect"}</code> | <span className="api-desc">Effect played at a transform when a crafting project completes.</span> |
| <Link id="m-destroyedpieceeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyedPieceEffect"}</code> | <span className="api-desc">Pooled effect for a destroyed piece.</span> |
| <Link id="m-genericnaildefaultdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" genericNailDefaultDefinition"}</code> | <span className="api-desc">Pooled object used for the default generic nail.</span> |
| <Link id="m-genericpiecedefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" genericPieceDefinition"}</code> | <span className="api-desc">Pooled object used for generic crafting pieces.</span> |
| <Link id="m-maxdistancetoanimatesquared" /><code>{"private float maxDistanceToAnimateSquared"}</code> | <span className="api-desc">Squared distance limit for animating pieces (default 0.25).</span> |
| <Link id="m-nailbadhiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" nailBadHitEffect"}</code> | <span className="api-desc">Effect for a bad nail hit.</span> |
| <Link id="m-nailbasehiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" nailBaseHitEffect"}</code> | <span className="api-desc">Effect for a normal nail hit.</span> |
| <Link id="m-naildoneeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" nailDoneEffect"}</code> | <span className="api-desc">Effect for a nail driven all the way in.</span> |
| <Link id="m-nailgoodhiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" nailGoodHitEffect"}</code> | <span className="api-desc">Effect for a good nail hit.</span> |
| <Link id="m-onpiececompletedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onPieceCompletedEffect"}</code> | <span className="api-desc">Effect played at a position when a piece completes.</span> |
| <Link id="m-onpiecedestroyeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onPieceDestroyEffect"}</code> | <span className="api-desc">Effect played at a position when a piece is destroyed.</span> |
| <Link id="m-onpiecepopeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onPiecePopEffect"}</code> | <span className="api-desc">Effect played at a position when a piece pops.</span> |
| <Link id="m-piececompletedanimation" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pieceCompletedAnimation"}</code> | <span className="api-desc">Pooled piece-completed animation.</span> |
| <Link id="m-piecematerialdisabled" /><code>{"private Material pieceMaterialDisabled"}</code> | <span className="api-desc">Ghost material for a piece that cannot be placed yet.</span> |
| <Link id="m-piecematerialenabled" /><code>{"private Material pieceMaterialEnabled"}</code> | <span className="api-desc">Ghost material for a piece that can be placed.</span> |
| <Link id="m-piecematerialhighlight" /><code>{"private Material pieceMaterialHighlight"}</code> | <span className="api-desc">Highlighted ghost material for a piece.</span> |
| <Link id="m-timebeforesound" /><code>{"private float timeBeforeSound"}</code> | <span className="api-desc">Seconds left when the time-ending sound plays (default 5).</span> |
| <Link id="m-timeendingsound" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" timeEndingSound"}</code> | <span className="api-desc">Sound played at a position as crafting time runs out.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completedprojecteffect-2" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" CompletedProjectEffect { get; }"}</code> | <span className="api-desc">Effect played when a whole crafting project is completed.</span> |
| <Link id="m-destroyedpieceeffect-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestroyedPieceEffect { get; }"}</code> | <span className="api-desc">Pooled effect for a destroyed piece.</span> |
| <Link id="m-genericnaildefaultdefinition-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" GenericNailDefaultDefinition { get; }"}</code> | <span className="api-desc">Pooled nail prefab used when a piece's nail settings don't name one.</span> |
| <Link id="m-genericpiecedefinition-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" GenericPieceDefinition { get; }"}</code> | <span className="api-desc">Pooled prefab for a generic crafting piece.</span> |
| <Link id="m-maxdistancetoanimatesquared-2" /><code>{"static float MaxDistanceToAnimateSquared { get; }"}</code> | <span className="api-desc">Squared distance within which pieces animate.</span> |
| <Link id="m-onpiececompletedeffect-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnPieceCompletedEffect { get; }"}</code> | <span className="api-desc">Effect played at a position when a piece is completed.</span> |
| <Link id="m-onpiecedestroyeffect-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnPieceDestroyEffect { get; }"}</code> | <span className="api-desc">Effect played at a position when a piece is destroyed.</span> |
| <Link id="m-onpiecepopeffect-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnPiecePopEffect { get; }"}</code> | <span className="api-desc">Effect played at a position when a piece pops.</span> |
| <Link id="m-piececompletedanimation-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PieceCompletedAnimation { get; }"}</code> | <span className="api-desc">Pooled animation for a completed piece.</span> |
| <Link id="m-piecematerialdisabled-2" /><code>{"static Material PieceMaterialDisabled { get; }"}</code> | <span className="api-desc">Ghost material for a piece that can't be placed yet.</span> |
| <Link id="m-piecematerialenabled-2" /><code>{"static Material PieceMaterialEnabled { get; }"}</code> | <span className="api-desc">Ghost material for a piece that can be placed.</span> |
| <Link id="m-piecematerialhighlight-2" /><code>{"static Material PieceMaterialHighlight { get; }"}</code> | <span className="api-desc">Highlighted ghost material for a piece.</span> |
| <Link id="m-timebeforesound-2" /><code>{"static float TimeBeforeSound { get; }"}</code> | <span className="api-desc">Seconds left when the time running out sound plays, 5 by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnaileffect" /><code>{"static void GetNailEffect(Transform transform, "}<Link to="/mod/game-api/types/alta-crafting/nailhitquality">{"NailHitquality"}</Link>{" hitquality)"}</code> | <span className="api-desc">Plays the nail effect for a hit quality (base, good, bad or done) at a transform.</span> |
| <Link id="m-getpiecematerial" /><code>{"static Material GetPieceMaterial(bool isEnabled)"}</code> | <span className="api-desc">The ghost material for an enabled or a disabled piece.</span> |
| <Link id="m-playtimeendingsound" /><code>{"static void PlayTimeEndingSound(Vector3 position)"}</code> | <span className="api-desc">Plays the time running out sound at a position.</span> |
