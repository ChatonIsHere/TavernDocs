---
title: "AchievementBoard"
description: "Client: a board listing a set of achievements."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementBoard

A **class** in `Root.Township`, the global namespace.

Client: a board listing a set of achievements. Hidden until there is a local player, and hidden again once all of them are done.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AchievementBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievements" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"[] achievements"}</code> | <span className="api-desc">Achievements shown on the board.</span> |
| <Link id="m-isspreading" /><code>{"private bool isSpreading"}</code> | <span className="api-desc">Whether `spacing` is the total length to spread items over instead of the gap between them.</span> |
| <Link id="m-itemprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/achievementitem">{"AchievementItem"}</Link>{" itemPrefab"}</code> | <span className="api-desc">Prefab for one achievement row.</span> |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | <span className="api-desc">LOD group the item renderers are added to.</span> |
| <Link id="m-parent" /><code>{"private Transform parent"}</code> | <span className="api-desc">Transform the items sit under.</span> |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | <span className="api-desc">Gap between items, or the total length when spreading.</span> |
| <Link id="m-title" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" title"}</code> | <span className="api-desc">The board title text.</span> |
| <Link id="m-tosetup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/taskcompletedevent">{"TaskCompletedEvent"}</Link>{"[] toSetup"}</code> | <span className="api-desc">The task completed events on each row, one per achievement.</span> |

</details>

## Methods

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkenabled" /><code>{"private void CheckEnabled()"}</code> | <span className="api-desc">Hides the board if every achievement is locally completed.</span> |
| <Link id="m-instantiateitems" /><code>{"private void InstantiateItems()"}</code> | <span className="api-desc">Spawns an item per achievement down the board. Not called in this build.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the player, sync and achievement listeners.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws preview meshes for the item layout in the editor.</span> |
| <Link id="m-receivedsync" /><code>{"private void ReceivedSync()"}</code> | <span className="api-desc">Rechecks the board once after the first task sync.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Sets up for the current player, or hides the board and waits for the local player.</span> |
| <Link id="m-updateachievement" /><code>{"private void UpdateAchievement("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Rechecks the board when an achievement is completed.</span> |
| <Link id="m-updateplayer" /><code>{"private void UpdatePlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Hides the board if all achievements are done; otherwise shows it, sets up the items and listens for completions.</span> |

</details>
