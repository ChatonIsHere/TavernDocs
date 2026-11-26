---
title: "AchievementGroupAchievement"
description: "Achievement that completes once the player has completed every achievement in its group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementGroupAchievement

A **class** in `Root.Township`, the global namespace.

Achievement that completes once the player has completed every achievement in its group.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`GameAchievement`](/mod/game-api/types/global-e-h/gameachievement)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AchievementGroupAchievement()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-requiredachievements" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"[] requiredAchievements"}</code> | <span className="api-desc">Achievements the player needs.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Listens to completion of each required achievement.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkcompletion" /><code>{"private void CheckCompletion("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" newAchievement)"}</code> | <span className="api-desc">When one required achievement completes, completes this one (next frame) if the player has all the others.</span> |

</details>
