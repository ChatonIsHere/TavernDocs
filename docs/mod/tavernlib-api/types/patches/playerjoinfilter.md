---
title: "PlayerJoinFilter"
description: "Replaces the server's join request handler (prefix on ServerPlayerConnectionHandlerOld.InitializeConnection) with TavernLib's checks: Fly mode, account..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerJoinFilter

A **static class** in `TavernLib`, `TavernLib.Patches`.

Replaces the server's join request handler (prefix on `ServerPlayerConnectionHandlerOld.InitializeConnection`) with TavernLib's checks: Fly mode, account token, blacklist and whitelist, mod parity, then the game's `CheckApproved`. Server.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-kcpinternalconnection" /><code>{"private static readonly FieldInfo KcpInternalConnection"}</code> | <span className="api-desc">Reflection handle on kcp2k's `internalConnection` field of `KcpServerConnection`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-flycamfilter" /><code>{"static bool FlyCamFilter("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Prefix that skips `InitializeConnection` and sets TavernLib's handler for `RequestJoin` on the connection instead.</span> |
| <Link id="m-logdisconnectattempts" /><code>{"static void LogDisconnectAttempts(bool isAllowed, string error)"}</code> | <span className="api-desc">Postfix on the `ConfirmJoinMessage` constructor that logs the reason for each refused join.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addressof" /><code>{"internal static string AddressOf("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Internal: a connection's IP address from kcp2k's own connection, since the game never sets `Connection.IpAddress` on a server. `null` if unknown.</span> |
| <Link id="m-filterflycam" /><code>{"private static async Task<bool> FilterFlyCam("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Denies fly, auto-cam or unassigned player modes unless the user is allowed to enter fly mode.</span> |
| <Link id="m-filterinvalidtokens" /><code>{"private static async Task<bool> FilterInvalidTokens("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Checks the join token's claims against `users.json`, then the blacklist and whitelist; denies the join and returns false on any failure.</span> |
| <Link id="m-filterjoinrequest" /><code>{"private static async void FilterJoinRequest("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server side: runs the flycam, token and mod parity checks in turn on a join request and then hands over to the game's own approval; denies the join on an error.</span> |
| <Link id="m-filtermodparity" /><code>{"private static async Task<bool> FilterModParity("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Compares the client's mod list with the server's required mods and denies the join on a mismatch; lets the join through if the check itself fails.</span> |
| <Link id="m-refusal" /><code>{"private static string Refusal("}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" manager, "}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, string username, "}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" user, string address)"}</code> | <span className="api-desc">Returns the reason a user can't join (blacklisted, not whitelisted, or settings unreadable), or null if allowed.</span> |

</details>
