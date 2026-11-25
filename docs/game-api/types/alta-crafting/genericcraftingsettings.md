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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`GlobalSettings<GenericCraftingSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`GenericCraftingSettings`](/game-api/types/alta-crafting/genericcraftingsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androiddestroyedpieceeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidDestroyedPieceEffect"}</code> |  |
| <Link id="m-androidpiececompletedanimation" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidPieceCompletedAnimation"}</code> |  |
| <Link id="m-completedprojecteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" completedProjectEffect"}</code> |  |
| <Link id="m-destroyedpieceeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyedPieceEffect"}</code> |  |
| <Link id="m-genericnaildefaultdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" genericNailDefaultDefinition"}</code> |  |
| <Link id="m-genericpiecedefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" genericPieceDefinition"}</code> |  |
| <Link id="m-maxdistancetoanimatesquared" /><code>{"private float maxDistanceToAnimateSquared"}</code> |  |
| <Link id="m-nailbadhiteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" nailBadHitEffect"}</code> |  |
| <Link id="m-nailbasehiteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" nailBaseHitEffect"}</code> |  |
| <Link id="m-naildoneeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" nailDoneEffect"}</code> |  |
| <Link id="m-nailgoodhiteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" nailGoodHitEffect"}</code> |  |
| <Link id="m-onpiececompletedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onPieceCompletedEffect"}</code> |  |
| <Link id="m-onpiecedestroyeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onPieceDestroyEffect"}</code> |  |
| <Link id="m-onpiecepopeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onPiecePopEffect"}</code> |  |
| <Link id="m-piececompletedanimation" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pieceCompletedAnimation"}</code> |  |
| <Link id="m-piecematerialdisabled" /><code>{"private Material pieceMaterialDisabled"}</code> |  |
| <Link id="m-piecematerialenabled" /><code>{"private Material pieceMaterialEnabled"}</code> |  |
| <Link id="m-piecematerialhighlight" /><code>{"private Material pieceMaterialHighlight"}</code> |  |
| <Link id="m-timebeforesound" /><code>{"private float timeBeforeSound"}</code> |  |
| <Link id="m-timeendingsound" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" timeEndingSound"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completedprojecteffect-2" /><code>{"static "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" CompletedProjectEffect { get; }"}</code> | Effect played when a whole crafting project is completed. |
| <Link id="m-destroyedpieceeffect-2" /><code>{"static "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestroyedPieceEffect { get; }"}</code> | Pooled effect for a destroyed piece. |
| <Link id="m-genericnaildefaultdefinition-2" /><code>{"static "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" GenericNailDefaultDefinition { get; }"}</code> | Pooled nail prefab used when a piece's nail settings don't name one. |
| <Link id="m-genericpiecedefinition-2" /><code>{"static "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" GenericPieceDefinition { get; }"}</code> | Pooled prefab for a generic crafting piece. |
| <Link id="m-maxdistancetoanimatesquared-2" /><code>{"static float MaxDistanceToAnimateSquared { get; }"}</code> | Squared distance within which pieces animate. |
| <Link id="m-onpiececompletedeffect-2" /><code>{"static "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnPieceCompletedEffect { get; }"}</code> | Effect played at a position when a piece is completed. |
| <Link id="m-onpiecedestroyeffect-2" /><code>{"static "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnPieceDestroyEffect { get; }"}</code> | Effect played at a position when a piece is destroyed. |
| <Link id="m-onpiecepopeffect-2" /><code>{"static "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnPiecePopEffect { get; }"}</code> | Effect played at a position when a piece pops. |
| <Link id="m-piececompletedanimation-2" /><code>{"static "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PieceCompletedAnimation { get; }"}</code> | Pooled animation for a completed piece. |
| <Link id="m-piecematerialdisabled-2" /><code>{"static Material PieceMaterialDisabled { get; }"}</code> | Ghost material for a piece that can't be placed yet. |
| <Link id="m-piecematerialenabled-2" /><code>{"static Material PieceMaterialEnabled { get; }"}</code> | Ghost material for a piece that can be placed. |
| <Link id="m-piecematerialhighlight-2" /><code>{"static Material PieceMaterialHighlight { get; }"}</code> | Highlighted ghost material for a piece. |
| <Link id="m-timebeforesound-2" /><code>{"static float TimeBeforeSound { get; }"}</code> | Seconds left when the time running out sound plays, 5 by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnaileffect" /><code>{"static void GetNailEffect(Transform transform, "}<Link to="/game-api/types/alta-crafting/nailhitquality">{"NailHitquality"}</Link>{" hitquality)"}</code> | Plays the nail effect for a hit quality (base, good, bad or done) at a transform. |
| <Link id="m-getpiecematerial" /><code>{"static Material GetPieceMaterial(bool isEnabled)"}</code> | The ghost material for an enabled or a disabled piece. |
| <Link id="m-playtimeendingsound" /><code>{"static void PlayTimeEndingSound(Vector3 position)"}</code> | Plays the time running out sound at a position. |
