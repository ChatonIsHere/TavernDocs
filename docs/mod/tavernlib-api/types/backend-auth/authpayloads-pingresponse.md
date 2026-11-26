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

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/mod/tavernlib-api/types/backend-auth/authpayloads)
- **Documented in** [AuthPayloads.PingResponse](/mod/tavernlib-api/types/backend-auth/authpayloads-pingresponse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PingResponse(string serverName, bool passwordRequired, bool whitelistEnabled, int gamePort, int webPort, int consolePort, string modsHash, int? modsCount)"}</code> | <span className="api-desc">Sets every field of the ping response.</span> |

## Properties

<details className="api-private">
<summary>9 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-consoleport" /><code>{"private int ConsolePort { get; set; }"}</code> | <span className="api-desc">The remote console port, which the launcher finds through this ping.</span> |
| <Link id="m-gameport" /><code>{"private int GamePort { get; set; }"}</code> | <span className="api-desc">The game port.</span> |
| <Link id="m-modscount" /><code>{"private int? ModsCount { get; set; }"}</code> | <span className="api-desc">Number of enabled server mods, or null if `Mods/` couldn't be read.</span> |
| <Link id="m-modshash" /><code>{"private string ModsHash { get; set; }"}</code> | <span className="api-desc">Hash of the server's mods, or null if `Mods/` couldn't be read.</span> |
| <Link id="m-passwordrequired" /><code>{"private bool PasswordRequired { get; set; }"}</code> | <span className="api-desc">Whether the server has a password.</span> |
| <Link id="m-pong" /><code>{"private string Pong { get; }"}</code> | <span className="api-desc">Always `pong`, sent as `status`.</span> |
| <Link id="m-servername" /><code>{"private string ServerName { get; set; }"}</code> | <span className="api-desc">The server's name.</span> |
| <Link id="m-webport" /><code>{"private int WebPort { get; set; }"}</code> | <span className="api-desc">The web port.</span> |
| <Link id="m-whitelistenabled" /><code>{"private bool WhitelistEnabled { get; set; }"}</code> | <span className="api-desc">Whether the whitelist is on.</span> |

</details>
