---
title: "ServerAchievementEvent"
description: "Fires a player event on the server when a given achievement is completed by a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerAchievementEvent

A **class** in `Root.Township`, no namespace.

Fires a player event on the server when a given achievement is completed by a player.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerAchievementEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncomplete" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" onComplete"}</code> | Event invoked with the player who completed it. |
| <Link id="m-targetachievement" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" targetAchievement"}</code> | The achievement to watch. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completedachievement" /><code>{"private void CompletedAchievement("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Server: invokes `onComplete` with the player. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the achievement. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the achievement's `CompletedByPlayer` event. |

</details>
