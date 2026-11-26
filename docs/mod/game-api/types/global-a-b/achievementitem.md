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
| <Link id="m-ctor" /><code>{"AchievementItem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievement" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement"}</code> | The achievement this row shows. |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | Text that shows the description. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setachievement" /><code>{"void SetAchievement("}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Sets the achievement and shows its description. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Shows the assigned achievement's description, except on a headless server. |

</details>

## Used in

Members of other types that take, return or hold a `AchievementItem`:

[`AchievementBoard.itemPrefab`](/mod/game-api/types/global-a-b/achievementboard#m-itemprefab).
