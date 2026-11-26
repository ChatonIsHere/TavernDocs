---
title: "HitModifierEffect.SyncHitArguments"
description: "Message the server sends to clients so they play a hit modifier effect between the right two entities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HitModifierEffect.SyncHitArguments

A **private struct** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message the server sends to clients so they play a hit modifier effect between the right two entities.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`HitModifierEffect`](/mod/game-api/types/alta-items/hitmodifiereffect)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sourcehash" /><code>{"uint sourceHash"}</code> | <span className="api-desc">Entity identifier where the effect starts. Only sent when the source isn't this object.</span> |
| <Link id="m-targethash" /><code>{"uint targetHash"}</code> | <span className="api-desc">Entity identifier the effect travels to. Only sent when the target isn't this object.</span> |

## Used in

Members of other types that take, return or hold a `SyncHitArguments`:

<div className="api-used-in">

[`HitModifierEffect.syncHit`](/mod/game-api/types/alta-items/hitmodifiereffect#m-synchit), [`HitModifierEffect.SyncHit`](/mod/game-api/types/alta-items/hitmodifiereffect#m-synchit-2).

</div>
