---
title: "AnimationPart"
description: "One moving piece in a building animation: it slides in from an offset to its final transform, with optional sound and effect overrides."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationPart

A **class** in `Root.Township`, the global namespace.

One moving piece in a building animation: it slides in from an offset to its final transform, with optional sound and effect overrides.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimationPart(Transform transform, Vector3 moveDirection, float distance)"}</code> | Creates an `AnimationPart` from `transform`, `moveDirection` and `distance`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | How far from its final position the part starts. Exposed as `Distance`. |
| <Link id="m-movedirection" /><code>{"private Vector3 moveDirection"}</code> | Local direction the part moves in from, scaled by `distance`. Exposed as `MoveDirection`. |
| <Link id="m-overrideeffectonappear" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideEffectOnAppear"}</code> | Pooled effect spawned when this part appears, instead of the building animation's default. |
| <Link id="m-overrideeffectonposition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideEffectOnPosition"}</code> | Pooled effect spawned when this part reaches its final position. |
| <Link id="m-overridesoundonappear" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideSoundOnAppear"}</code> | Sound played when this part appears, instead of the default. |
| <Link id="m-overridesoundonposition" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideSoundOnPosition"}</code> | Sound played when this part reaches its final position. |
| <Link id="m-repairboxscale" /><code>{"private float repairBoxScale"}</code> | Multiplier on the part's final scale used by `RepairBox`. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | The transform being animated. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance-2" /><code>{"float Distance { get; set; }"}</code> | How far away the piece starts. |
| <Link id="m-finalposition" /><code>{"Vector3 FinalPosition { get; private set; }"}</code> | World position the piece ends at. |
| <Link id="m-finalrotation" /><code>{"Quaternion FinalRotation { get; private set; }"}</code> | World rotation the piece ends at. |
| <Link id="m-finalscale" /><code>{"Vector3 FinalScale { get; private set; }"}</code> | Local scale the piece ends at. |
| <Link id="m-movedirection-2" /><code>{"Vector3 MoveDirection { get; set; }"}</code> | Local direction the piece comes in from. |
| <Link id="m-overrideeffectonappear-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" OverrideEffectOnAppear { get; set; }"}</code> | Effect to spawn when the piece appears instead of the default. |
| <Link id="m-overrideeffectonposition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" OverrideEffectOnPosition { get; set; }"}</code> | Effect to spawn when the piece reaches its place instead of the default. |
| <Link id="m-overridesoundonappear-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideSoundOnAppear { get; set; }"}</code> | Sound to play when the piece appears instead of the default. |
| <Link id="m-overridesoundonposition-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideSoundOnPosition { get; set; }"}</code> | Sound to play when the piece reaches its place instead of the default. |
| <Link id="m-repairboxscale-2" /><code>{"float RepairBoxScale { get; set; }"}</code> | Scale of the piece shown in a repair box, as a fraction of its final scale. |
| <Link id="m-startposition" /><code>{"Vector3 StartPosition { get; private set; }"}</code> | Where the piece starts: final position plus the move direction times the distance. |
| <Link id="m-transform-2" /><code>{"Transform Transform { get; }"}</code> | The piece being animated. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recalculatepositions" /><code>{"void RecalculatePositions()"}</code> | Takes the transform's current pose as final and works out the start position. |

## Used in

Members of other types that take, return or hold a `AnimationPart`:

[`BuildingAnimation.AnimatePart`](/mod/game-api/types/global-a-b/buildinganimation#m-animatepart), [`BuildingAnimation.movingParts`](/mod/game-api/types/global-a-b/buildinganimation#m-movingparts), [`BuildingAnimation.MovingParts`](/mod/game-api/types/global-a-b/buildinganimation#m-movingparts-2), [`BuildingAnimation.PreInsertAnimation`](/mod/game-api/types/global-a-b/buildinganimation#m-preinsertanimation), [`BuildingAnimation.ShouldKeepAnimationParts`](/mod/game-api/types/global-a-b/buildinganimation#m-shouldkeepanimationparts), [`BuildingAnimationWrapper.PreInsertAnimation`](/mod/game-api/types/global-a-b/buildinganimationwrapper#m-preinsertanimation), [`RepairBox.PreInsertAnimation`](/mod/game-api/types/global-q-r/repairbox#m-preinsertanimation).
