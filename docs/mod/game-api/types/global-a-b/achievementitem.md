---
title: "AchievementItem"
description: "One row on an achievement board that shows a GameAchievement description as text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementItem

A **class** in `Root.Township`, the global namespace.

One row on an achievement board that shows a `GameAchievement` description as text. Filled by `AchievementBoard`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IAchievementItem`](/mod/game-api/types/global-i-l/iachievementitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AchievementItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievement" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement"}</code> | <span className="api-desc">The achievement this row shows.</span> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">Text that shows the description.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setachievement" /><code>{"void SetAchievement("}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Sets the achievement and shows its description.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Shows the assigned achievement's description, except on a headless server.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AchievementItem`:

<div className="api-used-in">

[`AchievementBoard.itemPrefab`](/mod/game-api/types/global-a-b/achievementboard#m-itemprefab).

</div>
