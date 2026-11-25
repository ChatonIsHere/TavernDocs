---
title: TavernLib.Backend.RemoteConsole
description: Every type in the TavernLib.Backend.RemoteConsole namespace.
sidebar_position: 7
---

# TavernLib.Backend.RemoteConsole

Every type in `TavernLib.Backend.RemoteConsole`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`ConsoleAuth`](/tavernlib-api/types/backend-remoteconsole/consoleauth) | internal static class | 9 | Internal: console logins. Keeps `server_secret.key` and the owner token in `console_token.txt`, signs named tokens, and checks every console login. Server. |
| [`ConsoleAuth.LoginPath`](/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath) | enum | 2 | Which console a login came through: the websocket console, or another one. Named tokens only work on the websocket console. |
| [`ConsoleToken`](/tavernlib-api/types/backend-remoteconsole/consoletoken) | class | 13 | One named console token's row in `console_tokens.json`. Only its id and generation travel in the token, so an edit to its access applies at once. |
| [`ConsoleTokenFile`](/tavernlib-api/types/backend-remoteconsole/consoletokenfile) | class | 1 | The `ServerConfigFile` for `console_tokens.json`. Only `ConsoleTokenStore` reads and writes it. |
| [`ConsoleTokenList`](/tavernlib-api/types/backend-remoteconsole/consoletokenlist) | class | 3 | The contents of `console_tokens.json`: the named tokens and the owner token's generation. Unknown fields are kept. |
| [`ConsoleTokenLog`](/tavernlib-api/types/backend-remoteconsole/consoletokenlog) | internal static class | 3 | Internal: writes `console_token_log.jsonl`, one JSON line per console connect, disconnect, command and refused login. Never a token's text; rolls to `.1` past 5 MB. |
| [`ConsoleTokenStore`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore) | internal static class | 12 | Internal: `console_tokens.json` with an in-memory copy rebuilt after each write, so the check on every command never reads the disk. Server; only the server writes the file. |
| [`ConsoleTokenStore.Entry`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry) | private class | 4 | Private: one named token in the in-memory copy, with its granted paths worked out ahead for the per-command check. |
