---
title: "ServerPortPatches"
description: "Moves the game's hard-coded web server (1761) and websocket console (1760) to web_port and console_port in tavern_server.json, so two servers can share an..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPortPatches

A **static class** in `TavernLib`, `TavernLib.Patches`.

Moves the game's hard-coded web server (1761) and websocket console (1760) to `web_port` and `console_port` in `tavern_server.json`, so two servers can share an address. Server.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [ServerPortPatches](/tavernlib-api/types/patches/serverportpatches)

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ports" /><code>{"private static "}<Link to="/tavernlib-api/types/backend-server-configs/tavernserver">{"TavernServer"}</Link>{" Ports { get; }"}</code> | The last-read `tavern_server.json` settings for the web and console ports, or null before `TavernManager` exists. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consoleport" /><code>{"static int ConsolePort()"}</code> | The console port from `tavern_server.json`, or 1760 without one. Called from the patched `WebSocketRemoteConsole.Start`. |
| <Link id="m-consoleporttranspiler" /><code>{"static IEnumerable<CodeInstruction> ConsolePortTranspiler(IEnumerable<CodeInstruction> instructions) (iterator)"}</code> | Transpiler on `WebSocketRemoteConsole.Start` that swaps the constant 1760 for a call to `ConsolePort`. Warns unless it found exactly one. |
| <Link id="m-webport" /><code>{"static void WebPort(ref int port)"}</code> | Prefix on the `WebServerThread` constructor that changes a port of 1761 to the configured web port. |
