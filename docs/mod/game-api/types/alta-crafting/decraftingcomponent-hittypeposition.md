---
title: "DecraftingComponent.HitTypePosition"
description: "Message the server sends to clients when a decrafting component is hit, so they play the effective or ineffective hit effect at that spot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DecraftingComponent.HitTypePosition

A **private struct** in `Root.Township`, `Alta.Crafting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message the server sends to clients when a decrafting component is hit, so they play the effective or ineffective hit effect at that spot.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`DecraftingComponent`](/mod/game-api/types/alta-crafting/decraftingcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HitTypePosition(Vector3 position, bool isEffective)"}</code> | <span className="api-desc">Creates a `DecraftingComponent.HitTypePosition` from `position` and `isEffective`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-iseffective" /><code>{"bool isEffective"}</code> | <span className="api-desc">Whether the hit counted towards decrafting.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Where the hit landed.</span> |

## Used in

Members of other types that take, return or hold a `HitTypePosition`:

<div className="api-used-in">

[`DecraftingComponent.syncDecraftingHit`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-syncdecraftinghit), [`DecraftingComponent.SyncDecraftingHit`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-syncdecraftinghit-2).

</div>
