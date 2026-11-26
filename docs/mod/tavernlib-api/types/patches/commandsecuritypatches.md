---
title: "CommandSecurityPatches"
description: "Harmony patches on the game's console and API checks: they turn off wrist-menu command routing and the TCP remote console, and skip the Alta permission and..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandSecurityPatches

A **class** in `TavernLib`, `TavernLib.Patches`.

Harmony patches on the game's console and API checks: they turn off wrist-menu command routing and the TCP remote console, and skip the Alta permission and identity checks. Mostly matters on a server.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [CommandSecurityPatches](/mod/tavernlib-api/types/patches/commandsecuritypatches)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandSecurityPatches()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancelroutecommand" /><code>{"static bool CancelRouteCommand()"}</code> | <span className="api-desc">Prefix on `CommandSync.RouteCommand` that skips it, so wrist-menu console commands are dropped. TavernLib's comment isn't sure it's needed.</span> |
| <Link id="m-instantcloseremoteconsole" /><code>{"static void InstantCloseRemoteConsole("}<Link to="/mod/game-api/types/global-s/serverconsolemanager">{"ServerConsoleManager"}</Link>{" __instance)"}</code> | <span className="api-desc">Postfix on `ServerConsoleManager.StartRemoteConsole` that closes the game's `remoteConsole` (the TCP console on 1758) straight away.</span> |
| <Link id="m-skipvalidateidentitytoken" /><code>{"static bool SkipValidateIdentityToken(ref Task<"}<Link to="/mod/game-api/types/assembly-api-models/booleanresponse">{"BooleanResponse"}</Link>{"> __result)"}</code> | <span className="api-desc">Prefix on `LowLevelApiClient.ValidateIdentityToken` that answers valid without calling anything, since there's no Alta to ask.</span> |
| <Link id="m-sortpermissions" /><code>{"static bool SortPermissions(ref Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> __result)"}</code> | <span className="api-desc">Prefix on `WebSocketCommandHandler.GetCurrentServerPermissionsForLoggedInUser` that gives every console login the `Console` permission only.</span> |
