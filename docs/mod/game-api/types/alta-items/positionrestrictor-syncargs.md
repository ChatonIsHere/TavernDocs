---
title: "PositionRestrictor.SyncArgs"
description: "Message data for PositionRestrictor syncs (reset location, haptics, item registration): an entity, an on or off flag and a position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRestrictor.SyncArgs

A **private struct** in `Root.Township`, `Alta.Pages`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message data for `PositionRestrictor` syncs (reset location, haptics, item registration): an entity, an on or off flag and a position.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`PositionRestrictor`](/mod/game-api/types/alta-items/positionrestrictor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SyncArgs("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isEnabled)"}</code> | <span className="api-desc">Creates a `PositionRestrictor.SyncArgs` from `entity`, `isEnabled` and `position`.</span> |
| <Link id="m-ctor-2" /><code>{"SyncArgs("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isEnabled, Vector3 position)"}</code> | <span className="api-desc">Creates a `PositionRestrictor.SyncArgs` from `entity`, `isEnabled` and `position`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The item the message is about.</span> |
| <Link id="m-isenabled" /><code>{"bool isEnabled"}</code> | <span className="api-desc">On or off for the message, such as whether the item is now restricted.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Position to reset to, zero when unused.</span> |

## Used in

Members of other types that take, return or hold a `SyncArgs`:

<div className="api-used-in">

[`PositionRestrictor.resetLocation`](/mod/game-api/types/alta-items/positionrestrictor#m-resetlocation), [`PositionRestrictor.ResetSync`](/mod/game-api/types/alta-items/positionrestrictor#m-resetsync), [`PositionRestrictor.setHaptic`](/mod/game-api/types/alta-items/positionrestrictor#m-sethaptic), [`PositionRestrictor.SetHaptic`](/mod/game-api/types/alta-items/positionrestrictor#m-sethaptic-2), [`PositionRestrictor.syncItem`](/mod/game-api/types/alta-items/positionrestrictor#m-syncitem), [`PositionRestrictor.SyncItem`](/mod/game-api/types/alta-items/positionrestrictor#m-syncitem-2).

</div>
