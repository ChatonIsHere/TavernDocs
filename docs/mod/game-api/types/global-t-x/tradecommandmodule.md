---
title: "TradeCommandModule"
description: "The trade console command module: emptying trade decks and sending spawned items to a player's post box."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeCommandModule

A **static class** in `Root.Township`, the global namespace.

The `trade` console command module: emptying trade decks and sending spawned items to a player's post box. The commands are server-only.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested types** [`ATMCommandModule`](/mod/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule)
- **Attributes** `PlayOnly`, `Module`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for the module.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptytradedecks" /><code>{"private static void EmptyTradeDecks()"}</code> | <span className="api-desc">Server: wipes every `TradeVendor`, respawns each one fresh in place, and finishes the post box wipe.</span> |
| <Link id="m-getcontent" /><code>{"private static async Task<"}<Link to="/mod/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{"> GetContent("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | <span className="api-desc">Looks up a player's post box storage, logging an error and returning null if the player or storage is not found.</span> |
| <Link id="m-postbox" /><code>{"private static async Task PostBox("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, params string[] arguments)"}</code> | <span className="api-desc">Server: spawns a prefab (count taken from the first numeric argument) and pushes it into the player's post box. Kinematic or rigidbody-less prefabs are refused.</span> |
| <Link id="m-postboxstring" /><code>{"private static Task PostBoxString("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | <span className="api-desc">Server: spawns an item from a saved-object string (or the clipboard if none given) and pushes it into the player's post box.</span> |
| <Link id="m-postboxstring-2" /><code>{"private static async Task PostBoxString("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, string value)"}</code> | <span className="api-desc">Server: spawns an item from a saved-object string (or the clipboard if none given) and pushes it into the player's post box.</span> |

</details>
