---
title: TavernLib.Services
description: Every type in the TavernLib.Services namespace.
sidebar_position: 14
---

# TavernLib.Services

Every type in `TavernLib.Services`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`IService`](/mod/tavernlib-api/types/services/iservice) | interface | 0 | An empty marker interface for anything registered with `TavernServices`. It has nothing to implement. |
| [`TavernMessageHandler`](/mod/tavernlib-api/types/services/tavernmessagehandler) | class | 2 | Probably a leftover from before the service registry: TavernLib never creates or registers one. Creating one makes a second roles handler. |
| [`TavernServices`](/mod/tavernlib-api/types/services/tavernservices) | static class | 2 | A small registry holding one object per type, where TavernLib keeps `TavernManager` and `EntranceMessageHandler` and mods can add their own. A plain dictionary with no lock. |
