---
title: "SkillOrbMovement"
description: "class SkillOrbMovement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbMovement

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbMovement()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvelocity" /><code>{"private float currentVelocity"}</code> |  |
| <Link id="m-expansionspeedovertime" /><code>{"private AnimationCurve expansionSpeedOverTime"}</code> |  |
| <Link id="m-movementcoroutine" /><code>{"private Coroutine movementCoroutine"}</code> |  |
| <Link id="m-risingspeedoverdistance" /><code>{"private AnimationCurve risingSpeedOverDistance"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasarrived" /><code>{"bool HasArrived { get; private set; }"}</code> |  |
| <Link id="m-midpoint" /><code>{"Vector3 MidPoint { get; private set; }"}</code> |  |
| <Link id="m-origin" /><code>{"Vector3 Origin { get; private set; }"}</code> |  |
| <Link id="m-target" /><code>{"Vector3 Target { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-setmovement" /><code>{"void SetMovement(Vector3 origin, Vector3 midPoint, Vector3 target)"}</code> |  |
| <Link id="m-movetowards" /><code>{"private IEnumerator MoveTowards() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SkillOrbMovement`:

[`SkillOrb.movement`](/game-api/types/global-s/skillorb#m-movement), [`SkillOrb.Movement`](/game-api/types/global-s/skillorb#m-movement-2).
