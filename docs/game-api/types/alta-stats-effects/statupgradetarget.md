---
title: "StatUpgradeTarget"
description: "Adds a fixed upgrade to a stat, with an effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatUpgradeTarget

A **class** in `Root.Township`, `Alta.StatSystem`.

Adds a fixed `upgrade` to a stat, with an effect.

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

| Member |
| --- |
| <Link id="m-basestat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" baseStat"}</code> |
| <Link id="m-effectorigin" /><code>{"private Transform effectOrigin"}</code> |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> |
| <Link id="m-onupgraded" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onUpgraded"}</code> |
| <Link id="m-onupgradeincrease" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statupgradetarget-statincreasetype">{"StatUpgradeTarget.StatIncreaseType"}</Link>{" onUpgradeIncrease"}</code> |
| <Link id="m-stateffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" statEffect"}</code> |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPlayer"}</code> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> |
| <Link id="m-upgrade" /><code>{"private float upgrade"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-upgradeplayer" /><code>{"void UpgradePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-upgradeplayer-2" /><code>{"void UpgradePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |
| <Link id="m-upgradeplayerinternal" /><code>{"protected void UpgradePlayerInternal("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint playerEntityIdentifier)"}</code> |

</details>
