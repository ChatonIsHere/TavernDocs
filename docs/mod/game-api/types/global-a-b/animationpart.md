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
| <Link id="m-ctor" /><code>{"AnimationPart(Transform transform, Vector3 moveDirection, float distance)"}</code> | <span className="api-desc">Creates an `AnimationPart` from `transform`, `moveDirection` and `distance`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">How far from its final position the part starts. Exposed as `Distance`.</span> |
| <Link id="m-movedirection" /><code>{"private Vector3 moveDirection"}</code> | <span className="api-desc">Local direction the part moves in from, scaled by `distance`. Exposed as `MoveDirection`.</span> |
| <Link id="m-overrideeffectonappear" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideEffectOnAppear"}</code> | <span className="api-desc">Pooled effect spawned when this part appears, instead of the building animation's default.</span> |
| <Link id="m-overrideeffectonposition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideEffectOnPosition"}</code> | <span className="api-desc">Pooled effect spawned when this part reaches its final position.</span> |
| <Link id="m-overridesoundonappear" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideSoundOnAppear"}</code> | <span className="api-desc">Sound played when this part appears, instead of the default.</span> |
| <Link id="m-overridesoundonposition" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideSoundOnPosition"}</code> | <span className="api-desc">Sound played when this part reaches its final position.</span> |
| <Link id="m-repairboxscale" /><code>{"private float repairBoxScale"}</code> | <span className="api-desc">Multiplier on the part's final scale used by `RepairBox`.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">The transform being animated.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance-2" /><code>{"float Distance { get; set; }"}</code> | <span className="api-desc">How far away the piece starts.</span> |
| <Link id="m-finalposition" /><code>{"Vector3 FinalPosition { get; private set; }"}</code> | <span className="api-desc">World position the piece ends at.</span> |
| <Link id="m-finalrotation" /><code>{"Quaternion FinalRotation { get; private set; }"}</code> | <span className="api-desc">World rotation the piece ends at.</span> |
| <Link id="m-finalscale" /><code>{"Vector3 FinalScale { get; private set; }"}</code> | <span className="api-desc">Local scale the piece ends at.</span> |
| <Link id="m-movedirection-2" /><code>{"Vector3 MoveDirection { get; set; }"}</code> | <span className="api-desc">Local direction the piece comes in from.</span> |
| <Link id="m-overrideeffectonappear-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" OverrideEffectOnAppear { get; set; }"}</code> | <span className="api-desc">Effect to spawn when the piece appears instead of the default.</span> |
| <Link id="m-overrideeffectonposition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" OverrideEffectOnPosition { get; set; }"}</code> | <span className="api-desc">Effect to spawn when the piece reaches its place instead of the default.</span> |
| <Link id="m-overridesoundonappear-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideSoundOnAppear { get; set; }"}</code> | <span className="api-desc">Sound to play when the piece appears instead of the default.</span> |
| <Link id="m-overridesoundonposition-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideSoundOnPosition { get; set; }"}</code> | <span className="api-desc">Sound to play when the piece reaches its place instead of the default.</span> |
| <Link id="m-repairboxscale-2" /><code>{"float RepairBoxScale { get; set; }"}</code> | <span className="api-desc">Scale of the piece shown in a repair box, as a fraction of its final scale.</span> |
| <Link id="m-startposition" /><code>{"Vector3 StartPosition { get; private set; }"}</code> | <span className="api-desc">Where the piece starts: final position plus the move direction times the distance.</span> |
| <Link id="m-transform-2" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The piece being animated.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recalculatepositions" /><code>{"void RecalculatePositions()"}</code> | <span className="api-desc">Takes the transform's current pose as final and works out the start position.</span> |

## Used in

Members of other types that take, return or hold a `AnimationPart`:

<div className="api-used-in">

[`BuildingAnimation.AnimatePart`](/mod/game-api/types/global-a-b/buildinganimation#m-animatepart), [`BuildingAnimation.movingParts`](/mod/game-api/types/global-a-b/buildinganimation#m-movingparts), [`BuildingAnimation.MovingParts`](/mod/game-api/types/global-a-b/buildinganimation#m-movingparts-2), [`BuildingAnimation.PreInsertAnimation`](/mod/game-api/types/global-a-b/buildinganimation#m-preinsertanimation), [`BuildingAnimation.ShouldKeepAnimationParts`](/mod/game-api/types/global-a-b/buildinganimation#m-shouldkeepanimationparts), [`BuildingAnimationWrapper.PreInsertAnimation`](/mod/game-api/types/global-a-b/buildinganimationwrapper#m-preinsertanimation), [`RepairBox.PreInsertAnimation`](/mod/game-api/types/global-q-r/repairbox#m-preinsertanimation).

</div>
