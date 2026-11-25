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

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [PlayerJoinFilter](/tavernlib-api/types/patches/playerjoinfilter)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-kcpinternalconnection" /><code>{"private static readonly FieldInfo KcpInternalConnection"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-flycamfilter" /><code>{"static bool FlyCamFilter("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Prefix that skips `InitializeConnection` and sets TavernLib's handler for `RequestJoin` on the connection instead. |
| <Link id="m-logdisconnectattempts" /><code>{"static void LogDisconnectAttempts(bool isAllowed, string error)"}</code> | Postfix on the `ConfirmJoinMessage` constructor that logs the reason for each refused join. |
| <Link id="m-addressof" /><code>{"internal static string AddressOf("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Internal: a connection's IP address from kcp2k's own connection, since the game never sets `Connection.IpAddress` on a server. `null` if unknown. |
| <Link id="m-filterflycam" /><code>{"private static async Task<bool> FilterFlyCam("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-filterinvalidtokens" /><code>{"private static async Task<bool> FilterInvalidTokens("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-filterjoinrequest" /><code>{"private static async void FilterJoinRequest("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-filtermodparity" /><code>{"private static async Task<bool> FilterModParity("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-refusal" /><code>{"private static string Refusal("}<Link to="/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" manager, "}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, string username, "}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" user, string address)"}</code> |  |
