---
title: "AtmBalanceChangeData"
description: "Payload of the ConsoleEvents.AtmBalanceChanged console event, raised on the server when an ATM changes a player's bank balance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmBalanceChangeData

A **class** in `Root.Township`, `ATT.PlayerStates`.

Payload of the `ConsoleEvents.AtmBalanceChanged` console event, raised on the server when an ATM changes a player's bank balance.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AtmBalanceChangeData()"}</code> | Creates an `AtmBalanceChangeData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-change" /><code>{"int Change"}</code> | New balance minus the previous balance, so negative for a withdrawal. |
| <Link id="m-currentbalance" /><code>{"int CurrentBalance"}</code> | The player's balance after the change. |
| <Link id="m-user" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" User"}</code> | The player whose bank account changed. |

## Used in

Members of other types that take, return or hold a `AtmBalanceChangeData`:

[`ConsoleEvents.AtmBalanceChanged`](/game-api/types/alta-console/consoleevents#m-atmbalancechanged).
