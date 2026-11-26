---
title: "SkillOrbMovement"
description: "Moves a skill orb from its origin up to a midpoint, then out to its target slot, when a skill shrine spawns it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbMovement

A **class** in `Root.Township`, the global namespace.

Moves a skill orb from its origin up to a midpoint, then out to its target slot, when a skill shrine spawns it. Reached through `SkillOrb.Movement`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbMovement()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvelocity" /><code>{"private float currentVelocity"}</code> | <span className="api-desc">Unused field.</span> |
| <Link id="m-expansionspeedovertime" /><code>{"private AnimationCurve expansionSpeedOverTime"}</code> | <span className="api-desc">Speed by time for the leg from midpoint to target.</span> |
| <Link id="m-movementcoroutine" /><code>{"private Coroutine movementCoroutine"}</code> | <span className="api-desc">Running movement coroutine, or null.</span> |
| <Link id="m-risingspeedoverdistance" /><code>{"private AnimationCurve risingSpeedOverDistance"}</code> | <span className="api-desc">Speed by fraction of distance covered for the leg from origin to midpoint.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasarrived" /><code>{"bool HasArrived { get; private set; }"}</code> | <span className="api-desc">True once the orb has reached `Target`.</span> |
| <Link id="m-midpoint" /><code>{"Vector3 MidPoint { get; private set; }"}</code> | <span className="api-desc">Point the orb rises to before heading to its target.</span> |
| <Link id="m-origin" /><code>{"Vector3 Origin { get; private set; }"}</code> | <span className="api-desc">Where the orb starts.</span> |
| <Link id="m-target" /><code>{"Vector3 Target { get; private set; }"}</code> | <span className="api-desc">Where the orb ends up.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Syncs origin, midpoint and target; on reading (except in local test) starts the movement.</span> |
| <Link id="m-setmovement" /><code>{"void SetMovement(Vector3 origin, Vector3 midPoint, Vector3 target)"}</code> | <span className="api-desc">Sets the path and starts moving. On a headless server the orb jumps straight to the target.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-movetowards" /><code>{"private IEnumerator MoveTowards() (iterator)"}</code> | <span className="api-desc">Coroutine that moves the orb through the midpoint to the target using the two speed curves.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbMovement`:

<div className="api-used-in">

[`SkillOrb.movement`](/mod/game-api/types/global-s/skillorb#m-movement), [`SkillOrb.Movement`](/mod/game-api/types/global-s/skillorb#m-movement-2).

</div>
