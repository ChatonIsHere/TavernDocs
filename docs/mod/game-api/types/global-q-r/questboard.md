---
title: "QuestBoard"
description: "Networked board meant to show a quest's reward items on a trophy display."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuestBoard

A **class** in `Root.Township`, the global namespace.

Networked board meant to show a quest's reward items on a trophy display. In this build the reward code only reads the SKU list and does nothing with it.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuestBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activequest" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" activeQuest"}</code> | <span className="api-desc">Achievement whose rewards the board shows.</span> |
| <Link id="m-issupporterboard" /><code>{"private bool isSupporterBoard"}</code> | <span className="api-desc">Whether the board shows the supporter-only rewards.</span> |
| <Link id="m-reapplybtn" /><code>{"private bool reapplyBtn"}</code> | <span className="api-desc">Inspector button field that calls `DebugApplyPlayerAndRewards`.</span> |
| <Link id="m-rewardsdisplaytrophy" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/localplayeradvertisingtrophy">{"LocalPlayerAdvertisingTrophy"}</Link>{" rewardsDisplayTrophy"}</code> | <span className="api-desc">Trophy display meant to show the rewards.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugapplyplayerandrewards" /><code>{"void DebugApplyPlayerAndRewards()"}</code> | <span className="api-desc">Inspector button: runs `ApplyPlayerAndRewards` for the current player, or warns if there is none.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyplayerandrewards" /><code>{"private async void ApplyPlayerAndRewards("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Reads the normal or supporter-only reward SKUs for the quest; nothing else happens in this build.</span> |

</details>
