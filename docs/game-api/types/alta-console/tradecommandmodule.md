---
title: "TradeCommandModule"
description: "static class TradeCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`ATMCommandModule`](/game-api/types/alta-console/tradecommandmodule-atmcommandmodule)
- **Attributes** `PlayOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-emptytradedecks" /><code>{"private static void EmptyTradeDecks()"}</code> |
| <Link id="m-getcontent" /><code>{"private static async Task<"}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{"> GetContent("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> |
| <Link id="m-postbox" /><code>{"private static async Task PostBox("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, params string[] arguments)"}</code> |
| <Link id="m-postboxstring" /><code>{"private static Task PostBoxString("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> |
| <Link id="m-postboxstring-2" /><code>{"private static async Task PostBoxString("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, string value)"}</code> |

</details>
