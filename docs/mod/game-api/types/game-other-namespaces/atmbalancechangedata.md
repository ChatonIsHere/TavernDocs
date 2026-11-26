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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AtmBalanceChangeData()"}</code> | <span className="api-desc">Creates an `AtmBalanceChangeData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-change" /><code>{"int Change"}</code> | <span className="api-desc">New balance minus the previous balance, so negative for a withdrawal.</span> |
| <Link id="m-currentbalance" /><code>{"int CurrentBalance"}</code> | <span className="api-desc">The player's balance after the change.</span> |
| <Link id="m-user" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" User"}</code> | <span className="api-desc">The player whose bank account changed.</span> |

## Used in

Members of other types that take, return or hold a `AtmBalanceChangeData`:

<div className="api-used-in">

[`ConsoleEvents.AtmBalanceChanged`](/mod/game-api/types/alta-console/consoleevents#m-atmbalancechanged).

</div>
