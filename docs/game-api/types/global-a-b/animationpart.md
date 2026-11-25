---
title: "AnimationPart"
description: "class AnimationPart in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationPart

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimationPart(Transform transform, Vector3 moveDirection, float distance)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> |  |
| <Link id="m-movedirection" /><code>{"private Vector3 moveDirection"}</code> |  |
| <Link id="m-overrideeffectonappear" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideEffectOnAppear"}</code> |  |
| <Link id="m-overrideeffectonposition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideEffectOnPosition"}</code> |  |
| <Link id="m-overridesoundonappear" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideSoundOnAppear"}</code> |  |
| <Link id="m-overridesoundonposition" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" overrideSoundOnPosition"}</code> |  |
| <Link id="m-repairboxscale" /><code>{"private float repairBoxScale"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance-2" /><code>{"float Distance { get; set; }"}</code> |  |
| <Link id="m-finalposition" /><code>{"Vector3 FinalPosition { get; private set; }"}</code> |  |
| <Link id="m-finalrotation" /><code>{"Quaternion FinalRotation { get; private set; }"}</code> |  |
| <Link id="m-finalscale" /><code>{"Vector3 FinalScale { get; private set; }"}</code> |  |
| <Link id="m-movedirection-2" /><code>{"Vector3 MoveDirection { get; set; }"}</code> |  |
| <Link id="m-overrideeffectonappear-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" OverrideEffectOnAppear { get; set; }"}</code> |  |
| <Link id="m-overrideeffectonposition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" OverrideEffectOnPosition { get; set; }"}</code> |  |
| <Link id="m-overridesoundonappear-2" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideSoundOnAppear { get; set; }"}</code> |  |
| <Link id="m-overridesoundonposition-2" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideSoundOnPosition { get; set; }"}</code> |  |
| <Link id="m-repairboxscale-2" /><code>{"float RepairBoxScale { get; set; }"}</code> |  |
| <Link id="m-startposition" /><code>{"Vector3 StartPosition { get; private set; }"}</code> |  |
| <Link id="m-transform-2" /><code>{"Transform Transform { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recalculatepositions" /><code>{"void RecalculatePositions()"}</code> |  |

## Used in

Members of other types that take, return or hold a `AnimationPart`:

[`BuildingAnimation.AnimatePart`](/game-api/types/global-a-b/buildinganimation#m-animatepart), [`BuildingAnimation.movingParts`](/game-api/types/global-a-b/buildinganimation#m-movingparts), [`BuildingAnimation.MovingParts`](/game-api/types/global-a-b/buildinganimation#m-movingparts-2), [`BuildingAnimation.PreInsertAnimation`](/game-api/types/global-a-b/buildinganimation#m-preinsertanimation), [`BuildingAnimation.ShouldKeepAnimationParts`](/game-api/types/global-a-b/buildinganimation#m-shouldkeepanimationparts), [`BuildingAnimationWrapper.PreInsertAnimation`](/game-api/types/global-a-b/buildinganimationwrapper#m-preinsertanimation), [`RepairBox.PreInsertAnimation`](/game-api/types/global-q-r/repairbox#m-preinsertanimation).
