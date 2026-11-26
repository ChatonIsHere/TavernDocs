---
title: "AchievementBoard"
description: "Client: a board listing a set of achievements."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementBoard

A **class** in `Root.Township`, no namespace.

Client: a board listing a set of achievements. Hidden until there is a local player, and hidden again once all of them are done.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `SelectionBase`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AchievementBoard()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievements" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"[] achievements"}</code> | Achievements shown on the board. |
| <Link id="m-isspreading" /><code>{"private bool isSpreading"}</code> | Whether `spacing` is the total length to spread items over instead of the gap between them. |
| <Link id="m-itemprefab" /><code>{"private "}<Link to="/game-api/types/global-a-b/achievementitem">{"AchievementItem"}</Link>{" itemPrefab"}</code> | Prefab for one achievement row. |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | LOD group the item renderers are added to. |
| <Link id="m-parent" /><code>{"private Transform parent"}</code> | Transform the items sit under. |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | Gap between items, or the total length when spreading. |
| <Link id="m-title" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" title"}</code> | The board title text. |
| <Link id="m-tosetup" /><code>{"private "}<Link to="/game-api/types/global-t-x/taskcompletedevent">{"TaskCompletedEvent"}</Link>{"[] toSetup"}</code> | The task completed events on each row, one per achievement. |

</details>

## Methods

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkenabled" /><code>{"private void CheckEnabled()"}</code> | Hides the board if every achievement is locally completed. |
| <Link id="m-instantiateitems" /><code>{"private void InstantiateItems()"}</code> | Spawns an item per achievement down the board. Not called in this build. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the player, sync and achievement listeners. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws preview meshes for the item layout in the editor. |
| <Link id="m-receivedsync" /><code>{"private void ReceivedSync()"}</code> | Rechecks the board once after the first task sync. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Sets up for the current player, or hides the board and waits for the local player. |
| <Link id="m-updateachievement" /><code>{"private void UpdateAchievement("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Rechecks the board when an achievement is completed. |
| <Link id="m-updateplayer" /><code>{"private void UpdatePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Hides the board if all achievements are done; otherwise shows it, sets up the items and listens for completions. |

</details>
