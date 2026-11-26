---
title: "RecentPlayerPanelListElement"
description: "Row in the recent players list: username, server name and a rough time since you played together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerPanelListElement

A **class** in `Root.Township`, `Alta.Meta.UI`.

Row in the recent players list: username, server name and a rough time since you played together.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ListElementWithButtonAndExtraText`](/mod/game-api/types/alta-menus/listelementwithbuttonandextratext)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayerPanelListElement()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-thirdline" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" thirdLine"}</code> | Text for the status line. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupforrecentplayer" /><code>{"internal void SetupForRecentPlayer("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" recentPlayer)"}</code> | Fills the row from a recent player record. |

</details>

## Used in

Members of other types that take, return or hold a `RecentPlayerPanelListElement`:

[`RecentPlayersListPanel.listElement`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-listelement).
