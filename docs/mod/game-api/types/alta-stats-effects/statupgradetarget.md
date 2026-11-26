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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`OneTimeUpgradeInteraction`](/mod/game-api/types/global-m-o/onetimeupgradeinteraction)
- **Nested types** [`StatIncreaseType`](/mod/game-api/types/alta-stats-effects/statupgradetarget-statincreasetype)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatUpgradeTarget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basestat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" baseStat"}</code> | <span className="api-desc">Second stat changed on upgrade, used when `onUpgradeIncrease` isn't none.</span> |
| <Link id="m-effectorigin" /><code>{"private Transform effectOrigin"}</code> | <span className="api-desc">Where the effect and `onUpgraded` start.</span> |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> | <span className="api-desc">False once used.</span> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | <span className="api-desc">Cap for the target stat's base.</span> |
| <Link id="m-onupgraded" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onUpgraded"}</code> | <span className="api-desc">Event fired with `effectOrigin` on upgrade.</span> |
| <Link id="m-onupgradeincrease" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statupgradetarget-statincreasetype">{"StatUpgradeTarget.StatIncreaseType"}</Link>{" onUpgradeIncrease"}</code> | <span className="api-desc">What happens to `baseStat`: nothing, add the same amount, or fill to maximum.</span> |
| <Link id="m-stateffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" statEffect"}</code> | <span className="api-desc">Pooled `StatUpgradeEffect` played on clients.</span> |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPlayer"}</code> | <span className="api-desc">Network sync that sends the upgraded player's entity id.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | <span className="api-desc">The stat raised.</span> |
| <Link id="m-upgrade" /><code>{"private float upgrade"}</code> | <span className="api-desc">Amount added to the target stat.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the effect sync.</span> |
| <Link id="m-upgradeplayer" /><code>{"void UpgradePlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: upgrades the player once, then marks the item to not be saved.</span> |
| <Link id="m-upgradeplayer-2" /><code>{"void UpgradePlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Server: upgrades the player once, then marks the item to not be saved.</span> |
| <Link id="m-upgradeplayerinternal" /><code>{"protected void UpgradePlayerInternal("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Adds `upgrade` to the target stat, raises or fills `baseStat`, then syncs the effect and fires `onUpgraded`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint playerEntityIdentifier)"}</code> | <span className="api-desc">Network handler: clients fire `onUpgraded` and play the upgrade effect from `effectOrigin` to the player's body.</span> |

</details>
