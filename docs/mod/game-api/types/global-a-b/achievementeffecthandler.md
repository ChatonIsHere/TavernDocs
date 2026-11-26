---
title: "AchievementEffectHandler"
description: "Client: plays the quest-complete effect on the player's head for each unlocked achievement, one at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementEffectHandler

A **static class** in `Root.Township`, the global namespace.

Client: plays the quest-complete effect on the player's head for each unlocked achievement, one at a time.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectqueue" /><code>{"private static Queue<"}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> effectQueue"}</code> | <span className="api-desc">Achievements waiting to show their effect.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calleffect" /><code>{"static void CallEffect("}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Queues an achievement's effect and starts playing if the queue was empty.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-movequeue" /><code>{"private static void MoveQueue("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">When an effect is released, removes it from the queue and plays the next.</span> |
| <Link id="m-play" /><code>{"private static async void Play()"}</code> | <span className="api-desc">Waits the achievement's unlock delay, then spawns its effect with the description. Clears the queue if there's no local player.</span> |

</details>
