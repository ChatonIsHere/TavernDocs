---
title: "AchievementEffectHandler"
description: "Client: plays the quest-complete effect on the player's head for each unlocked achievement, one at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementEffectHandler

A **static class** in `Root.Township`, no namespace.

Client: plays the quest-complete effect on the player's head for each unlocked achievement, one at a time.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectqueue" /><code>{"private static Queue<"}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> effectQueue"}</code> | Achievements waiting to show their effect. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calleffect" /><code>{"static void CallEffect("}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Queues an achievement's effect and starts playing if the queue was empty. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-movequeue" /><code>{"private static void MoveQueue("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | When an effect is released, removes it from the queue and plays the next. |
| <Link id="m-play" /><code>{"private static async void Play()"}</code> | Waits the achievement's unlock delay, then spawns its effect with the description. Clears the queue if there's no local player. |

</details>
