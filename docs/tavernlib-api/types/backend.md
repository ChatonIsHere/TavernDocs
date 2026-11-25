---
title: TavernLib.Backend
description: Every type in the TavernLib.Backend namespace.
sidebar_position: 3
---

# TavernLib.Backend

Every type in `TavernLib.Backend`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`BackendUtils`](/tavernlib-api/types/backend/backendutils) | static class | 4 | Small helpers shared by TavernLib's backend: the listing URL, SHA-256 hashing and random URL-safe tokens. |
| [`EntranceMessageHandler`](/tavernlib-api/types/backend/entrancemessagehandler) | class | 2 | Receives the roles message on a client and keeps the local player's roles. Registered as a service on both sides, but only sets its handler when not a server. |
| [`NativeHttp`](/tavernlib-api/types/backend/nativehttp) | class | 4 | A blocking HTTP GET client on Windows' WinHTTP, for mod downloads during reconcile, before Unity's TLS is up. One instance is one session; don't use it on the main thread. |
| [`TavernMessages`](/tavernlib-api/types/backend/tavernmessages) | enum | 2 | TavernLib's own network message numbers, above the game's: `ReceiveRoles` (32, server to client) and `ReceiveSceneIndex` (33, reserved, unused). Cast to `MessageType` to use. |
| [`WindowsProxy`](/tavernlib-api/types/backend/windowsproxy) | static class | 1 | Reads the current user's Windows proxy settings from the registry. Used by `ServerListingController`'s HTTP client. |
