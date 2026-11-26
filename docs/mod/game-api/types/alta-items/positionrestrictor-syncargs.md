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
| <Link id="m-ctor" /><code>{"SyncArgs("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isEnabled)"}</code> | Creates a `PositionRestrictor.SyncArgs` from `entity`, `isEnabled` and `position`. |
| <Link id="m-ctor-2" /><code>{"SyncArgs("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isEnabled, Vector3 position)"}</code> | Creates a `PositionRestrictor.SyncArgs` from `entity`, `isEnabled` and `position`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The item the message is about. |
| <Link id="m-isenabled" /><code>{"bool isEnabled"}</code> | On or off for the message, such as whether the item is now restricted. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Position to reset to, zero when unused. |

## Used in

Members of other types that take, return or hold a `SyncArgs`:

[`PositionRestrictor.resetLocation`](/mod/game-api/types/alta-items/positionrestrictor#m-resetlocation), [`PositionRestrictor.ResetSync`](/mod/game-api/types/alta-items/positionrestrictor#m-resetsync), [`PositionRestrictor.setHaptic`](/mod/game-api/types/alta-items/positionrestrictor#m-sethaptic), [`PositionRestrictor.SetHaptic`](/mod/game-api/types/alta-items/positionrestrictor#m-sethaptic-2), [`PositionRestrictor.syncItem`](/mod/game-api/types/alta-items/positionrestrictor#m-syncitem), [`PositionRestrictor.SyncItem`](/mod/game-api/types/alta-items/positionrestrictor#m-syncitem-2).
