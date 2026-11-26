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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PingResponse(string serverName, bool passwordRequired, bool whitelistEnabled, int gamePort, int webPort, int consolePort, string modsHash, int? modsCount)"}</code> | Sets every field of the ping response. |

## Properties

<details>
<summary>9 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-consoleport" /><code>{"private int ConsolePort { get; set; }"}</code> | The remote console port, which the launcher finds through this ping. |
| <Link id="m-gameport" /><code>{"private int GamePort { get; set; }"}</code> | The game port. |
| <Link id="m-modscount" /><code>{"private int? ModsCount { get; set; }"}</code> | Number of enabled server mods, or null if `Mods/` couldn't be read. |
| <Link id="m-modshash" /><code>{"private string ModsHash { get; set; }"}</code> | Hash of the server's mods, or null if `Mods/` couldn't be read. |
| <Link id="m-passwordrequired" /><code>{"private bool PasswordRequired { get; set; }"}</code> | Whether the server has a password. |
| <Link id="m-pong" /><code>{"private string Pong { get; }"}</code> | Always `pong`, sent as `status`. |
| <Link id="m-servername" /><code>{"private string ServerName { get; set; }"}</code> | The server's name. |
| <Link id="m-webport" /><code>{"private int WebPort { get; set; }"}</code> | The web port. |
| <Link id="m-whitelistenabled" /><code>{"private bool WhitelistEnabled { get; set; }"}</code> | Whether the whitelist is on. |

</details>
