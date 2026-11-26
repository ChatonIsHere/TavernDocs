---
title: "StatUpgradeTarget"
description: "Networked one use item that permanently raises a player's stat (capped at maxValue), and can top up a related stat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatUpgradeTarget

A **class** in `Root.Township`, `Alta.StatSystem`.

Networked one use item that permanently raises a player's stat (capped at `maxValue`), and can top up a related stat. Used up on the server and no longer saved.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`OneTimeUpgradeInteraction`](/game-api/types/global-m-o/onetimeupgradeinteraction)
- **Nested types** [`StatIncreaseType`](/game-api/types/alta-stats-effects/statupgradetarget-statincreasetype)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatUpgradeTarget()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basestat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" baseStat"}</code> | Second stat changed on upgrade, used when `onUpgradeIncrease` isn't none. |
| <Link id="m-effectorigin" /><code>{"private Transform effectOrigin"}</code> | Where the effect and `onUpgraded` start. |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> | False once used. |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | Cap for the target stat's base. |
| <Link id="m-onupgraded" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onUpgraded"}</code> | Event fired with `effectOrigin` on upgrade. |
| <Link id="m-onupgradeincrease" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statupgradetarget-statincreasetype">{"StatUpgradeTarget.StatIncreaseType"}</Link>{" onUpgradeIncrease"}</code> | What happens to `baseStat`: nothing, add the same amount, or fill to maximum. |
| <Link id="m-stateffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" statEffect"}</code> | Pooled `StatUpgradeEffect` played on clients. |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPlayer"}</code> | Network sync that sends the upgraded player's entity id. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | The stat raised. |
| <Link id="m-upgrade" /><code>{"private float upgrade"}</code> | Amount added to the target stat. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the effect sync. |
| <Link id="m-upgradeplayer" /><code>{"void UpgradePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: upgrades the player once, then marks the item to not be saved. |
| <Link id="m-upgradeplayer-2" /><code>{"void UpgradePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Server: upgrades the player once, then marks the item to not be saved. |
| <Link id="m-upgradeplayerinternal" /><code>{"protected void UpgradePlayerInternal("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Adds `upgrade` to the target stat, raises or fills `baseStat`, then syncs the effect and fires `onUpgraded`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint playerEntityIdentifier)"}</code> | Network handler: clients fire `onUpgraded` and play the upgrade effect from `effectOrigin` to the player's body. |

</details>
