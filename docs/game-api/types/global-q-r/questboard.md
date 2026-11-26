---
title: "QuestBoard"
description: "Networked board meant to show a quest's reward items on a trophy display."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuestBoard

A **class** in `Root.Township`, no namespace.

Networked board meant to show a quest's reward items on a trophy display. In this build the reward code only reads the SKU list and does nothing with it.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"QuestBoard()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activequest" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" activeQuest"}</code> | Achievement whose rewards the board shows. |
| <Link id="m-issupporterboard" /><code>{"private bool isSupporterBoard"}</code> | Whether the board shows the supporter-only rewards. |
| <Link id="m-reapplybtn" /><code>{"private bool reapplyBtn"}</code> | Inspector button field that calls `DebugApplyPlayerAndRewards`. |
| <Link id="m-rewardsdisplaytrophy" /><code>{"private "}<Link to="/game-api/types/global-i-l/localplayeradvertisingtrophy">{"LocalPlayerAdvertisingTrophy"}</Link>{" rewardsDisplayTrophy"}</code> | Trophy display meant to show the rewards. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugapplyplayerandrewards" /><code>{"void DebugApplyPlayerAndRewards()"}</code> | Inspector button: runs `ApplyPlayerAndRewards` for the current player, or warns if there is none. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyplayerandrewards" /><code>{"private async void ApplyPlayerAndRewards("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Reads the normal or supporter-only reward SKUs for the quest; nothing else happens in this build. |

</details>
