---
title: "TradeCommandModule.ATMCommandModule"
description: "The trade atm console commands for reading and changing a player's gold bank (ATM) balance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeCommandModule.ATMCommandModule

A **static class** in `Root.Township`, the global namespace.

The `trade atm` console commands for reading and changing a player's gold bank (ATM) balance.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TradeCommandModule`](/mod/game-api/types/global-t-x/tradecommandmodule)
- **Attributes** `Module`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addatm" /><code>{"static async Task<int> AddATM("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, int quantityToAdd)"}</code> | Adds to a player's ATM balance (never below zero), saves it if they are offline, and returns the new balance. |
| <Link id="m-getatm" /><code>{"static async Task<int> GetATM("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | Returns a player's ATM balance, or 0 if the player is not valid. |
| <Link id="m-setatm" /><code>{"static async Task SetATM("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, int quantity)"}</code> | Sets a player's ATM balance and saves it if they are offline. |
