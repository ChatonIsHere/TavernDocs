---
title: "OculusShop"
description: "Online client that claims a player's Oculus store purchases into their Alta shop account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusShop

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client that claims a player's Oculus store purchases into their Alta shop account. Reached through `ShopClient.Oculus`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IOculusShop`](/game-api/types/assembly-api-client/ioculusshop)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OculusShop("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates an `OculusShop` from `clientManager`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientmanager" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager"}</code> | The client manager requests are sent through. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumealloculuspurchases" /><code>{"async Task<IEnumerable<string>> ConsumeAllOculusPurchases(string userToken)"}</code> | Consumes all the user's Oculus purchases and returns the items they claimed. |
