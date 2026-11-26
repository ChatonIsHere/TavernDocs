---
title: "StatReachedAchievement"
description: "Game achievement asset that completes for a player once a game action's tracked value reaches a set amount."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatReachedAchievement

A **class** in `Root.Township`, the global namespace.

Game achievement asset that completes for a player once a game action's tracked value reaches a set amount.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GameAchievement`](/mod/game-api/types/global-e-h/gameachievement)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatReachedAchievement()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-required" /><code>{"private int required"}</code> | <span className="api-desc">Value needed to complete.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" targetStat"}</code> | <span className="api-desc">Backing field for `TargetStat`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetstat-2" /><code><Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" TargetStat { get; }"}</code> | <span className="api-desc">The game action whose value is watched.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Subscribes to the target action's value updates, once.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" stat, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, float value)"}</code> | <span className="api-desc">Completes the achievement for the player when the value is at least `required`.</span> |

</details>
