---
title: "StatReachedAchievement"
description: "Game achievement asset that completes for a player once a game action's tracked value reaches a set amount."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatReachedAchievement

A **class** in `Root.Township`, no namespace.

Game achievement asset that completes for a player once a game action's tracked value reaches a set amount.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GameAchievement`](/game-api/types/global-e-h/gameachievement)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatReachedAchievement()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-required" /><code>{"private int required"}</code> | Value needed to complete. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" targetStat"}</code> | Backing field for `TargetStat`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetstat-2" /><code><Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" TargetStat { get; }"}</code> | The game action whose value is watched. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Subscribes to the target action's value updates, once. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue("}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" stat, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, float value)"}</code> | Completes the achievement for the player when the value is at least `required`. |

</details>
