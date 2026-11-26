---
title: "RecentPlayerActionPage.FriendButtonMap"
description: "Pairs a friendship state with the button object to show for it on the recent player page."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerActionPage.FriendButtonMap

A **struct** in `Root.Township`, the global namespace.

Pairs a friendship state with the button object to show for it on the recent player page.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RecentPlayerActionPage`](/mod/game-api/types/global-q-r/recentplayeractionpage)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"GameObject button"}</code> | <span className="api-desc">Object shown only when the friendship matches `type`.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" type"}</code> | <span className="api-desc">Friendship state this button is for.</span> |

## Used in

Members of other types that take, return or hold a `FriendButtonMap`:

<div className="api-used-in">

[`RecentPlayerActionPage.friendButtons`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-friendbuttons).

</div>
