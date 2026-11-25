---
title: "AuthPayloads.PingResponse"
description: "The auth port's answer to a ping: status pong, the server name, whether a password and the whitelist are on, the game, web and console ports, and the mods..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthPayloads.PingResponse

A **struct** in `TavernLib`, `TavernLib.Backend.Auth`.

The auth port's answer to a ping: status `pong`, the server name, whether a password and the whitelist are on, the game, web and console ports, and the mods hash and count.

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/tavernlib-api/types/backend-auth/authpayloads)
- **Documented in** [AuthPayloads.PingResponse](/tavernlib-api/types/backend-auth/authpayloads-pingresponse)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PingResponse(string serverName, bool passwordRequired, bool whitelistEnabled, int gamePort, int webPort, int consolePort, string modsHash, int? modsCount)"}</code> |

## Properties

<details>
<summary>9 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-consoleport" /><code>{"private int ConsolePort { get; set; }"}</code> |
| <Link id="m-gameport" /><code>{"private int GamePort { get; set; }"}</code> |
| <Link id="m-modscount" /><code>{"private int? ModsCount { get; set; }"}</code> |
| <Link id="m-modshash" /><code>{"private string ModsHash { get; set; }"}</code> |
| <Link id="m-passwordrequired" /><code>{"private bool PasswordRequired { get; set; }"}</code> |
| <Link id="m-pong" /><code>{"private string Pong { get; }"}</code> |
| <Link id="m-servername" /><code>{"private string ServerName { get; set; }"}</code> |
| <Link id="m-webport" /><code>{"private int WebPort { get; set; }"}</code> |
| <Link id="m-whitelistenabled" /><code>{"private bool WhitelistEnabled { get; set; }"}</code> |

</details>
