---
title: "ConsoleTokenPatches"
description: "A static class in TavernLib, TavernLib.Patches."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenPatches

A **static class** in `TavernLib`, `TavernLib.Patches`.

A **static class** in `TavernLib`, `TavernLib.Patches`.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Nested types** [`RefusedLoginFilter`](/tavernlib-api/types/patches/consoletokenpatches-refusedloginfilter)
- **Attributes** `HarmonyPatch`
- **Documented in** [ConsoleTokenPatches](/tavernlib-api/types/patches/consoletokenpatches)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-authorizing" /><code>{"private static "}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" _authorizing"}</code> |  |
| <Link id="m-verdict" /><code>{"private static bool? _verdict"}</code> |  |
| <Link id="m-connectionfield" /><code>{"private static readonly FieldInfo ConnectionField"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkconsolelogin" /><code>{"static bool CheckConsoleLogin(JwtSecurityToken token, ref Task<bool> __result)"}</code> |  |
| <Link id="m-gatenamedtokens" /><code>{"static void GateNamedTokens("}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" __instance, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context, ref bool __result)"}</code> |  |
| <Link id="m-keepconsoleverdict" /><code>{"static void KeepConsoleVerdict(ref Task<bool> __result)"}</code> |  |
| <Link id="m-logconsolecommand" /><code>{"static void LogConsoleCommand("}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" __instance, string command, bool wasSuccessful, ref string output)"}</code> |  |
| <Link id="m-markwebsocketlogin" /><code>{"static void MarkWebSocketLogin("}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" __instance)"}</code> |  |
| <Link id="m-quiettokenresults" /><code>{"static bool QuietTokenResults("}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" __instance)"}</code> |  |
| <Link id="m-unmarkwebsocketlogin" /><code>{"static void UnmarkWebSocketLogin()"}</code> |  |
| <Link id="m-addressof" /><code>{"private static string AddressOf("}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-close" /><code>{"private static int Close(Func<"}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{", bool> which, string whose)"}</code> |  |
| <Link id="m-closeownersessions" /><code>{"internal static int CloseOwnerSessions("}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" keep)"}</code> |  |
| <Link id="m-closesessions" /><code>{"internal static int CloseSessions(string id)"}</code> |  |
| <Link id="m-connectedhandlers" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"[] ConnectedHandlers()"}</code> |  |
| <Link id="m-countsessions" /><code>{"internal static int CountSessions(string id)"}</code> |  |
| <Link id="m-start" /><code>{"internal static void Start()"}</code> |  |
| <Link id="m-wouldmatchunrestricted" /><code>{"private static bool WouldMatchUnrestricted(string command, "}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user)"}</code> |  |
