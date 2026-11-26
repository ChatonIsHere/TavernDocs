---
title: "TradeCommandModule"
description: "The trade console command module: emptying trade decks and sending spawned items to a player's post box."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeCommandModule

A **static class** in `Root.Township`, no namespace.

The `trade` console command module: emptying trade decks and sending spawned items to a player's post box. The commands are server-only.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested types** [`ATMCommandModule`](/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule)
- **Attributes** `PlayOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for the module. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptytradedecks" /><code>{"private static void EmptyTradeDecks()"}</code> | Server: wipes every `TradeVendor`, respawns each one fresh in place, and finishes the post box wipe. |
| <Link id="m-getcontent" /><code>{"private static async Task<"}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{"> GetContent("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | Looks up a player's post box storage, logging an error and returning null if the player or storage is not found. |
| <Link id="m-postbox" /><code>{"private static async Task PostBox("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, params string[] arguments)"}</code> | Server: spawns a prefab (count taken from the first numeric argument) and pushes it into the player's post box. Kinematic or rigidbody-less prefabs are refused. |
| <Link id="m-postboxstring" /><code>{"private static Task PostBoxString("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | Server: spawns an item from a saved-object string (or the clipboard if none given) and pushes it into the player's post box. |
| <Link id="m-postboxstring-2" /><code>{"private static async Task PostBoxString("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, string value)"}</code> | Server: spawns an item from a saved-object string (or the clipboard if none given) and pushes it into the player's post box. |

</details>
