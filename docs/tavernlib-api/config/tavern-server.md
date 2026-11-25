---
title: Ports
description: TavernServer and TavernServerConfig, for tavern_server.json.
sidebar_position: 5
---

# Ports

`TavernLib.Backend.Server.Configs.TavernServer` and `TavernServerConfig` in `TavernLib.dll`. Server only.

`tavern_server.json`: the server's ports. Read it through `TavernManager.TavernConfig`. For hosts, see [Ports](../../host/ports.md) and the [config reference](../../host/config-reference.md#tavern_serverjson).

## TavernServer

`public class TavernServer`

The raw values from the file:

| Property | JSON key | Default in the class |
| --- | --- | --- |
| `int ServerPort` | `server_port` | `0` |
| `int AuthPort` | `auth_port` | `1762` |
| `int WebPort` | `web_port` | `1761` |
| `int ConsolePort` | `console_port` | `1760` |

The ports to use. Each is the raw value if it's 1 to 65535, else the default:

| Property | Default | What it's for |
| --- | --- | --- |
| `int Game` | `1757` | The game itself (UDP). |
| `int Auth` | `1762` | TavernLib's login server (TCP). |
| `int Web` | `1761` | The game's web server. |
| `int Console` | `1760` | The websocket console. |

| Other member | |
| --- | --- |
| `const int DefaultGamePort = 1757` | |
| `const int DefaultConsolePort = 1760` | |
| `const int DefaultWebPort = 1761` | |
| `const int DefaultAuthPort = 1762` | |
| `static int Valid(int port, int fallback)` | `port` if it's 1 to 65535, else `fallback`. |

Use `Game`, `Auth`, `Web` and `Console`, not the raw ones. A file TavernLib made itself has `server_port: 0`, which means 1757.

Unknown keys are kept and written back.

## TavernServerConfig

`public class TavernServerConfig(string filePath) : ServerConfigFile<TavernServer>(filePath)`

Nothing beyond [`ServerConfigFile`](server-config-file.md). TavernLib reads it once at start, and never writes it after creating it. Ports don't change without a restart.

## What TavernLib does with them

- The login server listens on `Auth`. Its replies tell joining players the game and web ports, so players only need the auth port (or an [SRV record](../../host/srv-records.md)).
- `ServerPortPatches` moves the game's web server from 1761 to `Web` (a prefix on the `WebServerThread` constructor) and the websocket console from 1760 to `Console` (a transpiler on `WebSocketRemoteConsole.Start`).
- TavernLib doesn't change the port the game itself listens on. It tells joining players `Game`, so the file has to match the port the server really uses. The listing gets the raw `ServerPort`.
- In Docker, the container writes this file from `.env` on every start.

## See also

- [Ports](../../host/ports.md)
- [Join by name](../../host/srv-records.md)
