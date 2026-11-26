---
title: "OneTimeUpgradeInteraction"
description: "A StatUpgradeTarget that gives each player its stat upgrade only once, remembering who has had it in the save."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeUpgradeInteraction

A **class** in `Root.Township`, the global namespace.

A `StatUpgradeTarget` that gives each player its stat upgrade only once, remembering who has had it in the save. Server-side; the upgrade only applies on the server.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`StatUpgradeTarget`](/mod/game-api/types/alta-stats-effects/statupgradetarget), [`ISavable<OneTimeUpgradeSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<OneTimeUpgradeSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`OneTimeUpgradeSaveData`](/mod/game-api/types/global-m-o/onetimeupgradesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OneTimeUpgradeInteraction()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-upgradedplayerids" /><code>{"private HashSet<int> upgradedPlayerIDs"}</code> | <span className="api-desc">User IDs of players who already got the upgrade. Saved through `OneTimeUpgradeSaveData`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onetimeupgrade" /><code>{"void OneTimeUpgrade("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Upgrades the player if their user ID isn't in `upgradedPlayerIDs` yet, then records them.</span> |
| <Link id="m-upgradeplayernovalidcheck" /><code>{"void UpgradePlayerNoValidCheck("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: applies the upgrade to the player's controller without checking whether they already had it.</span> |
