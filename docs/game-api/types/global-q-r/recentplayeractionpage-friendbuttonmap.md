---
title: "RecentPlayerActionPage.FriendButtonMap"
description: "Pairs a friendship state with the button object to show for it on the recent player page."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerActionPage.FriendButtonMap

A **struct** in `Root.Township`, no namespace.

Pairs a friendship state with the button object to show for it on the recent player page.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RecentPlayerActionPage`](/game-api/types/global-q-r/recentplayeractionpage)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"GameObject button"}</code> | Object shown only when the friendship matches `type`. |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" type"}</code> | Friendship state this button is for. |

## Used in

Members of other types that take, return or hold a `FriendButtonMap`:

[`RecentPlayerActionPage.friendButtons`](/game-api/types/global-q-r/recentplayeractionpage#m-friendbuttons).
