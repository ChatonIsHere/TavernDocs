---
title: "AreaAttackSkill.HitInformation"
description: "Where an area attack hit something and which chunk that point is in, kept by AreaAttackSkill for the hit effects it sends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AreaAttackSkill.HitInformation

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Where an area attack hit something and which chunk that point is in, kept by `AreaAttackSkill` for the hit effects it sends.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested in** [`AreaAttackSkill`](/game-api/types/global-a-b/areaattackskill)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HitInformation()"}</code> |
| <Link id="m-ctor-2" /><code>{"HitInformation(Vector3 position)"}</code> |
| <Link id="m-ctor-3" /><code>{"HitInformation(Vector3 position, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | Chunk of the hit: the health target's chunk, or the best chunk containing the point. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Closest point on the hit collider to the attack's hit point. |

## Used in

Members of other types that take, return or hold a `HitInformation`:

[`AreaAttackSkill.hitObjectPositions`](/game-api/types/global-a-b/areaattackskill#m-hitobjectpositions).
