---
title: "TradeCommandModule"
description: "Console module trade: empties trade decks and sends spawned items to a player's post box."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `trade`: empties trade decks and sends spawned items to a player's post box. Play mode only.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`ATMCommandModule`](/mod/game-api/types/alta-console/tradecommandmodule-atmcommandmodule)
- **Attributes** `PlayOnly`, `Module`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptytradedecks" /><code>{"private static void EmptyTradeDecks()"}</code> | <span className="api-desc">Server: `trade empty` wipes and respawns every `TradeVendor` and concludes the postbox wipe.</span> |
| <Link id="m-getcontent" /><code>{"private static async Task<"}<Link to="/mod/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{"> GetContent("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | <span className="api-desc">Loads a user's post box storage, logging an error if the user or content is missing.</span> |
| <Link id="m-postbox" /><code>{"private static async Task PostBox("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, params string[] arguments)"}</code> | <span className="api-desc">Server: `trade post` spawns a non-kinematic prefab (with an optional count) and pushes it into the user's post box.</span> |
| <Link id="m-postboxstring" /><code>{"private static Task PostBoxString("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | <span className="api-desc">Server: `trade post-string` spawns a saved-object string (or the clipboard) and pushes it into the user's post box if it is a loose pickup.</span> |
| <Link id="m-postboxstring-2" /><code>{"private static async Task PostBoxString("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, string value)"}</code> | <span className="api-desc">Server: `trade post-string` spawns a saved-object string (or the clipboard) and pushes it into the user's post box if it is a loose pickup.</span> |

</details>
