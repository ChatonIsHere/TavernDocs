---
title: "SkillShrine.ApliedSlotTuple"
description: "Pairs a progression slot with the skill orb a shrine spawned for it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrine.ApliedSlotTuple

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Pairs a progression slot with the skill orb a shrine spawned for it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SkillShrine`](/mod/game-api/types/global-s/skillshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApliedSlotTuple("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, "}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb)"}</code> | <span className="api-desc">Creates a `SkillShrine.ApliedSlotTuple` from `slot` and `orb`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orb" /><code><Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" Orb { get; }"}</code> | <span className="api-desc">The spawned skill orb.</span> |
| <Link id="m-slot" /><code><Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; }"}</code> | <span className="api-desc">The progression slot it belongs to.</span> |

## Used in

Members of other types that take, return or hold a `ApliedSlotTuple`:

<div className="api-used-in">

[`SkillShrine.spawnedOrbsMap`](/mod/game-api/types/global-s/skillshrine#m-spawnedorbsmap), [`SkillShrine.ConnectionSyncArgument.ConnectionSyncArgument`](/mod/game-api/types/global-s/skillshrine-connectionsyncargument#m-ctor-2).

</div>
