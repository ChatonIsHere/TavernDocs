---
title: "AreaAttackSkill.HitInformation"
description: "Where an area attack hit something and which chunk that point is in, kept by AreaAttackSkill for the hit effects it sends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AreaAttackSkill.HitInformation

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Where an area attack hit something and which chunk that point is in, kept by `AreaAttackSkill` for the hit effects it sends.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`AreaAttackSkill`](/mod/game-api/types/global-a-b/areaattackskill)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HitInformation()"}</code> | <span className="api-desc">Creates an `AreaAttackSkill.HitInformation` from `position` and `chunk`.</span> |
| <Link id="m-ctor-2" /><code>{"HitInformation(Vector3 position)"}</code> | <span className="api-desc">Creates an `AreaAttackSkill.HitInformation` from `position` and `chunk`.</span> |
| <Link id="m-ctor-3" /><code>{"HitInformation(Vector3 position, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates an `AreaAttackSkill.HitInformation` from `position` and `chunk`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">Chunk of the hit: the health target's chunk, or the best chunk containing the point.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Closest point on the hit collider to the attack's hit point.</span> |

## Used in

Members of other types that take, return or hold a `HitInformation`:

<div className="api-used-in">

[`AreaAttackSkill.hitObjectPositions`](/mod/game-api/types/global-a-b/areaattackskill#m-hitobjectpositions).

</div>
