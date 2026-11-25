---
title: "ConsoleTokenPatches"
description: "Harmony patches on the game's websocket console (ServerConsoleManager, WebSocketCommandHandler, CommandPart, CommandResult) that put TavernLib's console..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenPatches

A **static class** in `TavernLib`, `TavernLib.Patches`.

Harmony patches on the game's websocket console (`ServerConsoleManager`, `WebSocketCommandHandler`, `CommandPart`, `CommandResult`) that put TavernLib's console tokens in charge of logins, named token limits and the token log. Server only.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Nested types** [`RefusedLoginFilter`](/tavernlib-api/types/patches/consoletokenpatches-refusedloginfilter)
- **Attributes** `HarmonyPatch`
- **Documented in** [ConsoleTokenPatches](/tavernlib-api/types/patches/consoletokenpatches)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-authorizing" /><code>{"private static "}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" _authorizing"}</code> |
| <Link id="m-verdict" /><code>{"private static bool? _verdict"}</code> |
| <Link id="m-connectionfield" /><code>{"private static readonly FieldInfo ConnectionField"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkconsolelogin" /><code>{"static bool CheckConsoleLogin(JwtSecurityToken token, ref Task<bool> __result)"}</code> | Prefix on `ServerConsoleManager.ValidateConsoleToken` that skips it and checks the token with `ConsoleAuth.Validate`, logging refusals without the token. |
| <Link id="m-gatenamedtokens" /><code>{"static void GateNamedTokens("}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" __instance, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context, ref bool __result)"}</code> | Postfix on `CommandPart.RequirementsAreMet` that turns it false for a command or module a named token wasn't given, so it can't run or see it. |
| <Link id="m-keepconsoleverdict" /><code>{"static void KeepConsoleVerdict(ref Task<bool> __result)"}</code> | Postfix on `ValidateConsoleToken` that puts TavernLib's verdict back, so another mod's prefix can't change it. |
| <Link id="m-logconsolecommand" /><code>{"static void LogConsoleCommand("}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" __instance, string command, bool wasSuccessful, ref string output)"}</code> | Prefix on `WebSocketCommandHandler.TryLogConsoleCommandExecutionWithEventStream`: redacts tokens from the output and writes the command to the token log. |
| <Link id="m-markwebsocketlogin" /><code>{"static void MarkWebSocketLogin("}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" __instance)"}</code> | Prefix on `WebSocketCommandHandler.ProcessAuthorization` that remembers, on this thread, which websocket handler is logging in. |
| <Link id="m-quiettokenresults" /><code>{"static bool QuietTokenResults("}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" __instance)"}</code> | Prefix on `CommandResult.Log` that skips it for commands in the `token` module, so token text stays out of the game's log. |
| <Link id="m-unmarkwebsocketlogin" /><code>{"static void UnmarkWebSocketLogin()"}</code> | Finalizer on `ProcessAuthorization` that clears the login remembered by `MarkWebSocketLogin`. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addressof" /><code>{"private static string AddressOf("}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-close" /><code>{"private static int Close(Func<"}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{", bool> which, string whose)"}</code> |  |
| <Link id="m-closeownersessions" /><code>{"internal static int CloseOwnerSessions("}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" keep)"}</code> | Internal: closes every websocket console session logged in with the owner token, except the one given. Returns how many it closed. |
| <Link id="m-closesessions" /><code>{"internal static int CloseSessions(string id)"}</code> | Internal: closes every websocket console session of the named token with that id. Returns how many. Used by `token revoke`. |
| <Link id="m-connectedhandlers" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"[] ConnectedHandlers()"}</code> |  |
| <Link id="m-countsessions" /><code>{"internal static int CountSessions(string id)"}</code> | Internal: how many connected console sessions are logged in with the named token with that id. |
| <Link id="m-start" /><code>{"internal static void Start()"}</code> | Internal, server: writes console connects and disconnects to the token log and adds `RefusedLoginFilter` to NLog once the app has started. |
| <Link id="m-wouldmatchunrestricted" /><code>{"private static bool WouldMatchUnrestricted(string command, "}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user)"}</code> |  |

</details>
