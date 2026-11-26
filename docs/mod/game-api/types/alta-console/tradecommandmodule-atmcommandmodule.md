---
title: "TradeCommandModule.ATMCommandModule"
description: "Console submodule trade atm: reads and changes a player's ATM (bank) gold balance, even when they are offline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeCommandModule.ATMCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console submodule `trade atm`: reads and changes a player's ATM (bank) gold balance, even when they are offline.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`TradeCommandModule`](/mod/game-api/types/alta-console/tradecommandmodule)
- **Attributes** `Module`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addatm" /><code>{"static async Task<int> AddATM("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, int quantityToAdd)"}</code> | <span className="api-desc">`trade atm add`: adds to the balance (never below 0), saves if the player is not on, and returns the new balance.</span> |
| <Link id="m-getatm" /><code>{"static async Task<int> GetATM("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | <span className="api-desc">`trade atm get`: returns the player's ATM balance, or 0.</span> |
| <Link id="m-setatm" /><code>{"static async Task SetATM("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, int quantity)"}</code> | <span className="api-desc">`trade atm set`: sets the player's ATM balance and saves if they are not on.</span> |
